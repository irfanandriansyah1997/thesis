import React from 'react';
import { render, mount } from 'enzyme';

import ComboboxSplitComponent from '../combobox-split.component';

describe('Testing combobox split component in molecules component', () => {
    beforeEach(() => {
        global.console = {
            ...global.console,
            error: jest.fn(),
            debug: jest.fn()
        };
    });

    it('Should render combobox split component correctly', () => {
        const combobox = render(
            <ComboboxSplitComponent
                value={1}
                name="testing"
                onChange={jest.fn()}
                onClick={jest.fn()}
                className="sample-classname"
            >
                <ComboboxSplitComponent.Item
                    label="Combobox 1"
                    id="sample-id-1"
                    value={1}
                />
                <ComboboxSplitComponent.Item
                    label="Combobox 2"
                    id="sample-id-2"
                    value={2}
                />
            </ComboboxSplitComponent>
        );

        expect(combobox.hasClass('sample-classname')).toBe(true);
        expect(combobox.hasClass('ui-molecules-combobox-split')).toBe(true);
    });

    it('Should mount combobox split component correctly', () => {
        const combobox = mount(
            <ComboboxSplitComponent
                value={1}
                name="testing-2"
                onChange={jest.fn()}
                onClick={jest.fn()}
                className="sample-classname"
            >
                <ComboboxSplitComponent.Item
                    label="Combobox Sample 1"
                    id="sample2-id-1"
                    value={1}
                />
                <ComboboxSplitComponent.Item
                    label="Combobox Sample 2"
                    id="sample2-id-2"
                    value={2}
                />
            </ComboboxSplitComponent>
        );

        const content = combobox.find('.ui-molecules-dropdown__content');
        expect(content.find('.ui-molecules-dropdown__item').length).toBe(2);
        expect(
            content.find(
                '.ui-molecules-dropdown__item.ui-molecules-dropdown__item--active'
            ).length
        ).toBe(1);
        expect(
            content
                .find(
                    '.ui-molecules-dropdown__item.ui-molecules-dropdown__item--active'
                )
                .at(0)
                .text()
        ).toBe('Combobox Sample 1');
    });

    it('Invoke on click combobox split item', () => {
        const callback = jest.fn((item) => item);
        const combobox = mount(
            <>
                <ComboboxSplitComponent
                    value={1}
                    name="testing-2"
                    onChange={callback}
                    onClick={jest.fn()}
                    className="sample-classname"
                >
                    <ComboboxSplitComponent.Item
                        label="Combobox Sample 1"
                        id="sample2-id-1"
                        value={1}
                    />
                    <ComboboxSplitComponent.Item
                        label="Combobox Sample 2"
                        id="sample2-id-2"
                        value={2}
                    />
                </ComboboxSplitComponent>
                <p className="example-link">example</p>
            </>
        );

        const content = combobox.find('.ui-molecules-dropdown__content');

        content
            .find(
                '.ui-molecules-dropdown__item:not(.ui-molecules-dropdown__item--active)'
            )
            .at(0)
            .find('.ui-molecules-combobox-split__item')
            .at(0)
            .simulate('click');

        expect(callback).toHaveBeenCalledTimes(1);
        expect(callback.mock.results[0].value).toBe(2);
    });

    it('Invoke on click outer component', () => {
        const callback = jest.fn((item) => item);
        const combobox = mount(
            <>
                <ComboboxSplitComponent
                    value={1}
                    name="testing-2"
                    onChange={callback}
                    onClick={jest.fn()}
                    className="sample-classname"
                >
                    <ComboboxSplitComponent.Item
                        label="Combobox Sample 1"
                        id="sample2-id-1"
                        value={1}
                    />
                    <ComboboxSplitComponent.Item
                        label="Combobox Sample 2"
                        id="sample2-id-2"
                        value={2}
                    />
                </ComboboxSplitComponent>
                <p className="example-link">example</p>
            </>
        );

        expect(
            combobox
                .find('.ui-molecules-dropdown')
                .at(0)
                .hasClass('ui-molecules-dropdown--show')
        ).toBe(false);

        combobox
            .find('.ui-molecules-dropdown__toggle')
            .at(0)
            .simulate('click');

        expect(
            combobox
                .find('.ui-molecules-dropdown')
                .at(0)
                .hasClass('ui-molecules-dropdown--show')
        ).toBe(true);
    });

    it('Set props children not instance of ComboboxSplitComponent.Item', () => {
        try {
            const callback = jest.fn((item) => item);
            mount(
                <ComboboxSplitComponent
                    value={1}
                    name="testing-2"
                    onChange={callback}
                    onClick={jest.fn()}
                    className="sample-classname"
                >
                    <p>Hello</p>
                </ComboboxSplitComponent>
            );
        } catch (e) {
            expect(e.message).toBe(
                '[Error] child component needs to have tab or child props'
            );
            expect(console.error).toHaveBeenCalledTimes(1);
        }
    });
});
