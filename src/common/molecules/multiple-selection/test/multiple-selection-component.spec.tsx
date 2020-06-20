import React from 'react';
import { mount } from 'enzyme';

import DropdownComponent from '../../dropdown/dropdown.component';
import MultipleSelectionComponent from '../multiple-selection.component';
import {
    MultipleSelectionItemPropsInterface,
    MultipleSelectionActionResponseType
} from '../interface/component.interface';
import {
    ENTER_KEY_CHARCODE,
    ARROW_UP_KEY_CHARCODE,
    BACKSPACE_KEY_CHARCODE,
    ARROW_DOWN_KEY_CHARCODE
} from '../../../../shared/constant/keyboard.constant';

const MOCK_MULTIPLE_OPTION: MultipleSelectionItemPropsInterface[] = [
    {
        id: 'f574128d9944326385f1aa7be08b8685',
        label: 'Cimahi, Jawa Barat',
        value: 'f574128d9944326385f1aa7be08b8685',
        others: {
            id: '1'
        },
        children: 'Cimahi, Jawa Barat'
    },
    {
        id: '167411a051e8f85e5949b8712d5b59fa',
        label: 'Cimahi Selatan, Cimahi',
        value: '167411a051e8f85e5949b8712d5b59fa',
        others: {
            id: '2'
        },
        children: 'Cimahi Selatan, Cimahi'
    },
    {
        id: 'b9addc94e54625e8eb6b1ed933b89233',
        label: 'Cimahi Tengah, Cimahi',
        value: 'b9addc94e54625e8eb6b1ed933b89233',
        others: {
            id: '2'
        },
        children: 'Cimahi Tengah, Cimahi'
    },
    {
        id: 'f33fc7510f0d5ebfecbe278642ee00e1',
        label: 'Cimahi Utara, Cimahi',
        value: 'f33fc7510f0d5ebfecbe278642ee00e1',
        others: {
            id: '3'
        },
        children: 'Cimahi Utara, Cimahi'
    }
];

describe('Testing Multiple Selection Component', () => {
    beforeEach(() => {
        jest.restoreAllMocks();
        jest.resetAllMocks();
    });

    it('Render multiple selection', () => {
        jest.spyOn(React, 'useRef').mockReturnValueOnce({
            current: { focus: jest.fn() }
        });
        const component = mount(
            <MultipleSelectionComponent
                onChange={jest.fn()}
                fontSize={14}
                onSearch={(param): void => console.error(param)}
                placeholder="Cari berdasarkan lokasi, area sekitar, nama property, nama project, atau nama developer"
                value={[]}
            >
                {MOCK_MULTIPLE_OPTION.map((item) => (
                    <MultipleSelectionComponent.Item key={item.id} {...item} />
                ))}
            </MultipleSelectionComponent>
        );

        expect(component.find('input').length).toBe(1);
        expect(component.find(DropdownComponent.Item).length).toBe(4);
    });

    it('Simulation user search item', () => {
        jest.spyOn(React, 'useRef').mockReturnValueOnce({
            current: { focus: jest.fn() }
        });
        const mockOnSearch = jest.fn((text) => text);
        const mockOnChange = jest.fn(
            (param: MultipleSelectionActionResponseType) => param
        );
        const component = mount(
            <MultipleSelectionComponent
                value={[]}
                fontSize={14}
                onChange={mockOnChange}
                onSearch={mockOnSearch}
                placeholder="Cari berdasarkan lokasi, area sekitar, nama property, nama project, atau nama developer"
            >
                {MOCK_MULTIPLE_OPTION.map((item) => (
                    <MultipleSelectionComponent.Item key={item.id} {...item} />
                ))}
            </MultipleSelectionComponent>
        );

        /**
         * Simulate Focus
         */
        component
            .find('input')
            .at(0)
            .simulate('focus');

        /**
         * Simulate Onchage
         */
        component
            .find('input')
            .at(0)
            .simulate('change', { target: { value: 'utara' } });

        expect(mockOnSearch).toHaveBeenCalledTimes(1);
        expect(mockOnSearch.mock.results[0].value).toStrictEqual({
            query: 'utara'
        });
        expect(component.find(DropdownComponent.Item).length).toBe(1);

        component
            .find(DropdownComponent.Item)
            .at(0)
            .find('.ui-molecules-multiple-selection__item-content')
            .at(0)
            .simulate('click');

        expect(mockOnChange).toHaveBeenCalledTimes(1);
    });

    it('Simulation backspace', () => {
        jest.spyOn(React, 'useRef').mockReturnValueOnce({
            current: { focus: jest.fn() }
        });
        const mockOnSearch = jest.fn((text) => text);
        const mockOnChange = jest.fn(
            (param: MultipleSelectionActionResponseType) => param
        );
        const component = mount(
            <MultipleSelectionComponent
                value={[
                    {
                        label: 'Cimahi, Jawa Barat',
                        others: { id: '1' },
                        value: 'f574128d9944326385f1aa7be08b8685'
                    }
                ]}
                fontSize={14}
                onChange={mockOnChange}
                onSearch={mockOnSearch}
                placeholder="Cari berdasarkan lokasi, area sekitar, nama property, nama project, atau nama developer"
            >
                {MOCK_MULTIPLE_OPTION.map((item) => (
                    <MultipleSelectionComponent.Item key={item.id} {...item} />
                ))}
            </MultipleSelectionComponent>
        );

        /**
         * Simulate Focus
         */
        component
            .find('input')
            .at(0)
            .simulate('focus');

        /**
         * Simulate Keypress
         */
        component
            .find('input')
            .at(0)
            .simulate('keyDown', { keyCode: BACKSPACE_KEY_CHARCODE });

        expect(mockOnChange).toHaveBeenCalledTimes(1);
    });

    it('Simulation user search', () => {
        jest.spyOn(React, 'useRef').mockReturnValueOnce({
            current: { focus: jest.fn() }
        });
        const mockOnSearch = jest.fn((text) => text);
        const mockOnChange = jest.fn(
            (param: MultipleSelectionActionResponseType) => param
        );
        const component = mount(
            <MultipleSelectionComponent
                value={[]}
                fontSize={14}
                onChange={mockOnChange}
                onSearch={mockOnSearch}
                placeholder="Cari berdasarkan lokasi, area sekitar, nama property, nama project, atau nama developer"
            >
                {MOCK_MULTIPLE_OPTION.map((item) => (
                    <MultipleSelectionComponent.Item key={item.id} {...item} />
                ))}
            </MultipleSelectionComponent>
        );

        /**
         * Simulate Focus
         */
        component
            .find('input')
            .at(0)
            .simulate('change', { target: { value: 'hello' } });

        /**
         * Simulate Keypress
         */
        component
            .find('input')
            .at(0)
            .simulate('keyDown', { keyCode: ENTER_KEY_CHARCODE });

        expect(mockOnChange).toHaveBeenCalledTimes(1);
    });

    it('Simulation key up down', () => {
        jest.spyOn(React, 'useRef').mockReturnValueOnce({
            current: { focus: jest.fn() }
        });
        const mockOnSearch = jest.fn((text) => text);
        const mockOnChange = jest.fn(
            (param: MultipleSelectionActionResponseType) => param
        );
        const component = mount(
            <MultipleSelectionComponent
                value={[]}
                fontSize={14}
                onChange={mockOnChange}
                onSearch={mockOnSearch}
                placeholder="Cari berdasarkan lokasi, area sekitar, nama property, nama project, atau nama developer"
            >
                {MOCK_MULTIPLE_OPTION.map((item) => (
                    <MultipleSelectionComponent.Item key={item.id} {...item} />
                ))}
            </MultipleSelectionComponent>
        );

        expect(component.find(DropdownComponent.Item).length).toBe(4);

        /**
         * Simulate Focus
         */
        component
            .find('input')
            .at(0)
            .simulate('focus');

        /**
         * Simulate Keypress
         */
        component
            .find('input')
            .at(0)
            .simulate('keyDown', { keyCode: ARROW_DOWN_KEY_CHARCODE });

        component
            .find('input')
            .at(0)
            .simulate('keyDown', { keyCode: ARROW_DOWN_KEY_CHARCODE });

        expect(
            component
                .find(DropdownComponent.Item)
                .at(0)
                .find('.ui-molecules-multiple-selection__item--active').length
        ).toBe(2);

        component
            .find('input')
            .at(0)
            .simulate('keyDown', { keyCode: ARROW_DOWN_KEY_CHARCODE });

        expect(
            component
                .find(DropdownComponent.Item)
                .at(1)
                .find('.ui-molecules-multiple-selection__item--active').length
        ).toBe(2);

        component
            .find('input')
            .at(0)
            .simulate('keyDown', { keyCode: ARROW_DOWN_KEY_CHARCODE });

        expect(
            component
                .find(DropdownComponent.Item)
                .at(2)
                .find('.ui-molecules-multiple-selection__item--active').length
        ).toBe(2);

        component
            .find('input')
            .at(0)
            .simulate('keyDown', { keyCode: ARROW_DOWN_KEY_CHARCODE });

        expect(
            component
                .find(DropdownComponent.Item)
                .at(3)
                .find('.ui-molecules-multiple-selection__item--active').length
        ).toBe(2);

        component
            .find('input')
            .at(0)
            .simulate('keyDown', { keyCode: ARROW_DOWN_KEY_CHARCODE });

        expect(
            component
                .find(DropdownComponent.Item)
                .at(0)
                .find('.ui-molecules-multiple-selection__item--active').length
        ).toBe(2);

        component
            .find('input')
            .at(0)
            .simulate('keyDown', { keyCode: ARROW_UP_KEY_CHARCODE });

        expect(
            component
                .find(DropdownComponent.Item)
                .at(0)
                .find('.ui-molecules-multiple-selection__item--active').length
        ).toBe(0);
    });
});
