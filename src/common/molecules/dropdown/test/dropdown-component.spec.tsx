import React, { SFC } from 'react';
import { render, mount } from 'enzyme';

import DropdownComponent from '../dropdown.component';

describe('Testing dropdown component in molecules component', () => {
    beforeEach(() => {
        global.console = {
            ...global.console,
            error: jest.fn(),
            debug: jest.fn()
        };
    });

    it('Should render dropdown component correctly', () => {
        const dropdown = render(
            <DropdownComponent
                name="testing"
                trigger="click"
                label="Testing"
                onClick={jest.fn()}
                className="sample-classname"
            >
                <DropdownComponent.Item>Hello World</DropdownComponent.Item>
            </DropdownComponent>
        );

        expect(dropdown.hasClass('sample-classname')).toBe(true);
        expect(dropdown.hasClass('ui-molecules-dropdown')).toBe(true);
    });

    it('Should mount dropdown component correctly', () => {
        const dropdown = mount(
            <DropdownComponent
                name="testing"
                trigger="click"
                label="Testing"
                onClick={jest.fn()}
                className="sample-classname"
            >
                <DropdownComponent.Item>Testing 1</DropdownComponent.Item>
                <DropdownComponent.Item active>
                    Testing 2
                </DropdownComponent.Item>
            </DropdownComponent>
        );

        const content = dropdown.find('.ui-molecules-dropdown__content');

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
        ).toBe('Testing 2');
    });

    it('Invoke on click drodpown item', () => {
        const callback = jest.fn((item) => item);
        const dropdown = mount(
            <>
                <DropdownComponent
                    name="testing"
                    trigger="click"
                    label="Testing"
                    onClick={callback}
                    className="sample-classname"
                >
                    <DropdownComponent.Item>Testing 1</DropdownComponent.Item>
                    <DropdownComponent.Item active>
                        Testing 2
                    </DropdownComponent.Item>
                </DropdownComponent>
                <p className="example-link">example</p>
            </>
        );

        dropdown
            .find('.ui-molecules-dropdown__toggle')
            .at(0)
            .simulate('click');

        expect(callback).toHaveBeenCalledTimes(1);
        expect(callback.mock.results[0].value).toBe(true);
    });

    it('Set props children not instanceof DropdownComponent.Item', () => {
        const dropdown = mount(
            <DropdownComponent
                name="testing"
                trigger="click"
                label="Testing"
                className="sample-classname"
            >
                <p>Hello</p>
            </DropdownComponent>
        );

        expect(dropdown.find('.ui-molecules-dropdown__content').text()).toBe(
            ''
        );
    });

    it('Not set props children in DropdownComponent.Item', () => {
        try {
            const Component: SFC = (DropdownComponent.Item as unknown) as SFC;
            mount(<Component />);
        } catch (e) {
            expect(e.message).toBe('[Error] props children must defined');
            expect(console.error).toHaveBeenCalledTimes(1);
        }
    });

    it('Testing render divider', () => {
        const divider = mount(<DropdownComponent.Divider />);

        expect(divider.html()).toBe(
            '<hr class="ui-molecules-dropdown__divider">'
        );
    });
});
