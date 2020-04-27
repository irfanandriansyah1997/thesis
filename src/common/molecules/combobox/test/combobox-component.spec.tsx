import React from 'react';
import { render, mount } from 'enzyme';

import ComboboxComponent from '../combobox.component';

describe('Testing checbok component in molecules component', () => {
    beforeEach(() => {
        global.console = {
            ...global.console,
            error: jest.fn(),
            debug: jest.fn()
        };
    });

    it('Should render combobox component correctly', () => {
        const combobox = render(
            <ComboboxComponent
                value={1}
                name="testing"
                onChange={jest.fn()}
                className="sample-classname"
            >
                <ComboboxComponent.Item
                    label="Combobox 1"
                    id="sample-id-1"
                    value={1}
                />
                <ComboboxComponent.Item
                    label="Combobox 2"
                    id="sample-id-2"
                    value={2}
                />
            </ComboboxComponent>
        );

        expect(combobox.hasClass('sample-classname')).toBe(true);
        expect(combobox.hasClass('ui-molecules-combobox')).toBe(true);
    });

    it('Should mount combobox component correctly', () => {
        const combobox = mount(
            <ComboboxComponent
                value={1}
                name="testing-2"
                onChange={jest.fn()}
                className="sample-classname"
            >
                <ComboboxComponent.Item
                    label="Combobox Sample 1"
                    id="sample2-id-1"
                    value={1}
                />
                <ComboboxComponent.Item
                    label="Combobox Sample 2"
                    id="sample2-id-2"
                    value={2}
                />
            </ComboboxComponent>
        );

        const content = combobox.find('.ui-molecules-combobox__content');

        expect(content.find('.ui-molecules-combobox__item').length).toBe(4);
        expect(
            content.find(
                '.ui-molecules-combobox__item.ui-molecules-combobox__item--active'
            ).length
        ).toBe(2);
        expect(
            content
                .find(
                    '.ui-molecules-combobox__item.ui-molecules-combobox__item--active'
                )
                .at(0)
                .text()
        ).toBe('Combobox Sample 1');
    });

    it('Invoke on click combobox item', () => {
        const callback = jest.fn((item) => item);
        const combobox = mount(
            <>
                <ComboboxComponent
                    value={1}
                    name="testing-2"
                    onChange={callback}
                    className="sample-classname"
                >
                    <ComboboxComponent.Item
                        label="Combobox Sample 1"
                        id="sample2-id-1"
                        value={1}
                    />
                    <ComboboxComponent.Item
                        label="Combobox Sample 2"
                        id="sample2-id-2"
                        value={2}
                    />
                </ComboboxComponent>
                <p className="example-link">example</p>
            </>
        );

        const content = combobox.find('.ui-molecules-combobox__content');

        content
            .find(
                '.ui-molecules-combobox__item:not(.ui-molecules-combobox__item--active)'
            )
            .at(0)
            .simulate('click');

        expect(callback).toHaveBeenCalledTimes(1);
        expect(callback.mock.results[0].value).toBe(2);
    });

    it('Invoke on click outer component', () => {
        const callback = jest.fn((item) => item);
        const combobox = mount(
            <>
                <ComboboxComponent
                    value={1}
                    name="testing-2"
                    onChange={callback}
                    className="sample-classname"
                >
                    <ComboboxComponent.Item
                        label="Combobox Sample 1"
                        id="sample2-id-1"
                        value={1}
                    />
                    <ComboboxComponent.Item
                        label="Combobox Sample 2"
                        id="sample2-id-2"
                        value={2}
                    />
                </ComboboxComponent>
                <p className="example-link">example</p>
            </>
        );

        expect(
            combobox
                .find('.ui-molecules-combobox')
                .at(0)
                .hasClass('ui-molecules-combobox--show')
        ).toBe(false);

        combobox
            .find('.ui-molecules-combobox__toggle')
            .at(0)
            .simulate('click');

        expect(
            combobox
                .find('.ui-molecules-combobox')
                .at(0)
                .hasClass('ui-molecules-combobox--show')
        ).toBe(true);
    });

    it('Set props children not instanceof ComboboxComponent.Item', () => {
        try {
            const callback = jest.fn((item) => item);
            mount(
                <ComboboxComponent
                    value={1}
                    name="testing-2"
                    onChange={callback}
                    className="sample-classname"
                >
                    <p>Hello</p>
                </ComboboxComponent>
            );
        } catch (e) {
            expect(e.message).toBe(
                '[Error] child component needs to have tab or child props'
            );
            expect(console.error).toHaveBeenCalledTimes(1);
        }
    });
});
