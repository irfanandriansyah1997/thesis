/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { mount } from 'enzyme';

import DropdownComponent from '../../dropdown/dropdown.component';
import BadgesComponent from '../../../atomic/badges/badges.component';
import MultipleSelectionComponent from '../multiple-selection.component';
import MultiSelectionContext from '../context/multiple-selection.context';
import { FixtureMultipleSelectionContext } from './fixture-multiple-selection.spec';
import MultipleSelectionToggleComponent from '../multiple-selection-toggle.component';
import {
    MultipleSelectionContextInterface,
    MultipleSelectionItemPropsInterface,
    MultipleSelectionItemValueInterface
} from '../interface/component.interface';
import {
    ESC_KEY_CHARCODE,
    ENTER_KEY_CHARCODE,
    ARROW_UP_KEY_CHARCODE,
    BACKSPACE_KEY_CHARCODE,
    ARROW_DOWN_KEY_CHARCODE
} from '../../../../shared/constant/keyboard.constant';

const CLASSNAME_TOGGLE = '.ui-molecules-multiple-selection__toggle';

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

    it('testing click toggle and set focus input', () => {
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
        expect(component.find(CLASSNAME_TOGGLE).length).toBe(1);

        expect(
            component
                .find(DropdownComponent)
                .at(0)
                .props().show
        ).toBe(false);

        /**
         * Simulate Click
         */
        component
            .find(CLASSNAME_TOGGLE)
            .at(0)
            .simulate('click');

        component
            .find('input')
            .at(0)
            .simulate('focus');
    });

    it('simulation close badge', () => {
        const component = mount(
            <MultipleSelectionComponent
                onChange={jest.fn()}
                fontSize={14}
                onSearch={(param): void => console.error(param)}
                placeholder="Cari berdasarkan lokasi, area sekitar, nama property, nama project, atau nama developer"
                value={[
                    {
                        label: 'Cimahi Utara, Cimahi',
                        value: 'f33fc7510f0d5ebfecbe278642ee00e1',
                        others: {
                            id: '3'
                        }
                    }
                ]}
            >
                {MOCK_MULTIPLE_OPTION.map((item) => (
                    <MultipleSelectionComponent.Item key={item.id} {...item} />
                ))}
            </MultipleSelectionComponent>
        );

        expect(component.find(DropdownComponent.Item).length).toBe(3);
        expect(component.find(BadgesComponent).length).toBe(1);

        component
            .find(BadgesComponent)
            .at(0)
            .find('.ui-atomic-badges__close')
            .at(0)
            .simulate('click');
    });

    it('simulation close badge in toggle component', () => {
        const context: MultipleSelectionContextInterface = {
            ...FixtureMultipleSelectionContext,
            onCloseBadges: jest.fn((_: any, value: any) => value)
        };

        const component = mount(
            <MultiSelectionContext.Provider value={context}>
                <MultipleSelectionToggleComponent
                    fontSize={14}
                    placeholder="Cari berdasarkan lokasi, area sekitar, nama property, nama project, atau nama developer"
                />
            </MultiSelectionContext.Provider>
        );

        expect(component.find(BadgesComponent).length).toBe(1);

        component
            .find(BadgesComponent)
            .at(0)
            .find('.ui-atomic-badges__close')
            .at(0)
            .simulate('click');

        expect(context.onCloseBadges).toHaveBeenCalledTimes(1);
        expect((context.onCloseBadges as jest.Mock).mock.results[0].value).toBe(
            'f574128d9944326385f1aa7be08b8685'
        );
    });

    it('simulation focus and blur in toggle component', (done: () => void) => {
        const context: MultipleSelectionContextInterface = {
            ...FixtureMultipleSelectionContext,
            onEditTextFocus: jest.fn((focus: boolean) => focus)
        };
        const mockOnFocus = jest.fn();
        const mockOnBlur = jest.fn();

        const component = mount(
            <MultiSelectionContext.Provider value={context}>
                <MultipleSelectionToggleComponent
                    fontSize={14}
                    onBlur={mockOnBlur}
                    onFocus={mockOnFocus}
                    placeholder="Cari berdasarkan lokasi, area sekitar, nama property, nama project, atau nama developer"
                />
            </MultiSelectionContext.Provider>
        );

        expect(component.find('input').length).toBe(1);
        expect(mockOnBlur).toHaveBeenCalledTimes(0);
        expect(mockOnFocus).toHaveBeenCalledTimes(0);

        component
            .find('input')
            .at(0)
            .simulate('focus');

        expect(context.onEditTextFocus).toHaveBeenCalledTimes(1);
        expect(
            (context.onEditTextFocus as jest.Mock).mock.results[0].value
        ).toBe(true);
        expect(mockOnBlur).toHaveBeenCalledTimes(0);
        expect(mockOnFocus).toHaveBeenCalledTimes(1);

        component
            .find('input')
            .at(0)
            .simulate('blur');

        expect(context.onEditTextFocus).toHaveBeenCalledTimes(2);
        expect(
            (context.onEditTextFocus as jest.Mock).mock.results[1].value
        ).toBe(false);

        setTimeout(() => {
            expect(mockOnBlur).toHaveBeenCalledTimes(1);
            expect(mockOnFocus).toHaveBeenCalledTimes(1);
        }, 400);

        setTimeout(() => {
            component
                .find('input')
                .at(0)
                .simulate('focus');

            expect(context.onEditTextFocus).toHaveBeenCalledTimes(3);
            expect(
                (context.onEditTextFocus as jest.Mock).mock.results[2].value
            ).toBe(true);

            component
                .find('input')
                .at(0)
                .simulate('keyDown', { keyCode: ESC_KEY_CHARCODE });

            expect(context.onEditTextFocus).toHaveBeenCalledTimes(4);
            expect(
                (context.onEditTextFocus as jest.Mock).mock.results[3].value
            ).toBe(false);

            done();
        }, 500);
    });

    it('simulation user press up and down keyboard', () => {
        const context: MultipleSelectionContextInterface = {
            ...FixtureMultipleSelectionContext,
            onChangePositionDropdownContent: jest.fn(
                (focus: 'up' | 'down') => focus
            )
        };

        const component = mount(
            <MultiSelectionContext.Provider value={context}>
                <MultipleSelectionToggleComponent
                    fontSize={14}
                    placeholder="Cari berdasarkan lokasi, area sekitar, nama property, nama project, atau nama developer"
                />
            </MultiSelectionContext.Provider>
        );

        expect(component.find('input').length).toBe(1);

        component
            .find('input')
            .at(0)
            .simulate('keyDown', { keyCode: ARROW_UP_KEY_CHARCODE });

        expect(context.onChangePositionDropdownContent).toHaveBeenCalledTimes(
            1
        );
        expect(
            (context.onChangePositionDropdownContent as jest.Mock).mock
                .results[0].value
        ).toBe('up');

        component
            .find('input')
            .at(0)
            .simulate('keyDown', { keyCode: ARROW_DOWN_KEY_CHARCODE });

        expect(context.onChangePositionDropdownContent).toHaveBeenCalledTimes(
            2
        );
        expect(
            (context.onChangePositionDropdownContent as jest.Mock).mock
                .results[1].value
        ).toBe('down');
    });

    it('simulation user press backspace keyboard with text value is null', () => {
        const context: MultipleSelectionContextInterface = {
            ...FixtureMultipleSelectionContext,
            textValue: '',
            onEditTextBackSpaceKeyDown: jest.fn()
        };
        const mockOnFocus = jest.fn();
        const mockOnBlur = jest.fn();

        const component = mount(
            <MultiSelectionContext.Provider value={context}>
                <MultipleSelectionToggleComponent
                    fontSize={14}
                    onBlur={mockOnBlur}
                    onFocus={mockOnFocus}
                    placeholder="Cari berdasarkan lokasi, area sekitar, nama property, nama project, atau nama developer"
                />
            </MultiSelectionContext.Provider>
        );

        expect(component.find('input').length).toBe(1);
        expect(mockOnBlur).toHaveBeenCalledTimes(0);
        expect(mockOnFocus).toHaveBeenCalledTimes(0);

        component
            .find('input')
            .at(0)
            .simulate('keyDown', { keyCode: BACKSPACE_KEY_CHARCODE });

        expect(context.onEditTextBackSpaceKeyDown).toHaveBeenCalledTimes(1);
    });

    it('simulation user press backspace keyboard with text value is not null', () => {
        const context: MultipleSelectionContextInterface = {
            ...FixtureMultipleSelectionContext,
            textValue: 'sample value is not null',
            onEditTextBackSpaceKeyDown: jest.fn()
        };
        const mockOnKeyDown = jest.fn();

        const component = mount(
            <MultiSelectionContext.Provider value={context}>
                <MultipleSelectionToggleComponent
                    fontSize={14}
                    onKeyDown={mockOnKeyDown}
                    placeholder="Cari berdasarkan lokasi, area sekitar, nama property, nama project, atau nama developer"
                />
            </MultiSelectionContext.Provider>
        );

        expect(component.find('input').length).toBe(1);

        component
            .find('input')
            .at(0)
            .simulate('keyDown', { keyCode: BACKSPACE_KEY_CHARCODE });

        expect(context.onEditTextBackSpaceKeyDown).toHaveBeenCalledTimes(0);
        expect(mockOnKeyDown).toHaveBeenCalledTimes(1);
    });

    it('simulation user on change value text field', () => {
        const context: MultipleSelectionContextInterface = {
            ...FixtureMultipleSelectionContext,
            textValue: 'sample value is not null',
            onEditTextChange: jest.fn((text) => text)
        };

        const component = mount(
            <MultiSelectionContext.Provider value={context}>
                <MultipleSelectionToggleComponent
                    fontSize={14}
                    placeholder="Cari berdasarkan lokasi, area sekitar, nama property, nama project, atau nama developer"
                />
            </MultiSelectionContext.Provider>
        );

        expect(component.find('input').length).toBe(1);

        component
            .find('input')
            .at(0)
            .simulate('change', {
                targe: { value: 'sample value is not null' }
            });

        expect(context.onEditTextChange).toHaveBeenCalledTimes(1);
        expect(
            (context.onEditTextChange as jest.Mock).mock.results[0].value
        ).toBe('sample value is not null');
    });

    it('simulation user press enter in keyboard', () => {
        const context: MultipleSelectionContextInterface = {
            ...FixtureMultipleSelectionContext,
            textValue: '',
            optionListActive: {
                label: 'hai',
                position: 1,
                value: '121u2oi12'
            },
            onChangeSearch: jest.fn(
                (
                    valueEditText: string | undefined,
                    valueDropdownItem:
                        | MultipleSelectionItemValueInterface
                        | undefined
                ) => ({
                    valueEditText,
                    valueDropdownItem
                })
            )
        };

        const component = mount(
            <MultiSelectionContext.Provider value={context}>
                <MultipleSelectionToggleComponent
                    fontSize={14}
                    placeholder="Cari berdasarkan lokasi, area sekitar, nama property, nama project, atau nama developer"
                />
            </MultiSelectionContext.Provider>
        );

        expect(component.find('input').length).toBe(1);

        component
            .find('input')
            .at(0)
            .simulate('keyDown', { keyCode: ENTER_KEY_CHARCODE });

        expect(context.onChangeSearch).toHaveBeenCalledTimes(1);
        expect(
            (context.onChangeSearch as jest.Mock).mock.results[0].value
        ).toStrictEqual({
            valueEditText: undefined,
            valueDropdownItem: {
                label: 'hai',
                value: '121u2oi12',
                others: undefined
            }
        });
    });

    it('simulation user press enter in keyboard with optionListActive undefined', () => {
        const context: MultipleSelectionContextInterface = {
            ...FixtureMultipleSelectionContext,
            textValue: 'sample',
            optionListActive: undefined,
            onChangeSearch: jest.fn(
                (
                    valueEditText: string | undefined,
                    valueDropdownItem:
                        | MultipleSelectionItemValueInterface
                        | undefined
                ) => ({
                    valueEditText,
                    valueDropdownItem
                })
            )
        };

        const component = mount(
            <MultiSelectionContext.Provider value={context}>
                <MultipleSelectionToggleComponent
                    fontSize={14}
                    placeholder="Cari berdasarkan lokasi, area sekitar, nama property, nama project, atau nama developer"
                />
            </MultiSelectionContext.Provider>
        );

        expect(component.find('input').length).toBe(1);

        component
            .find('input')
            .at(0)
            .simulate('keyDown', { keyCode: ENTER_KEY_CHARCODE });

        expect(context.onChangeSearch).toHaveBeenCalledTimes(1);
        expect(
            (context.onChangeSearch as jest.Mock).mock.results[0].value
        ).toStrictEqual({
            valueEditText: 'sample',
            valueDropdownItem: undefined
        });
    });

    it('simulation with customize filter', () => {
        const component = mount(
            <MultipleSelectionComponent
                onChange={jest.fn()}
                fontSize={14}
                customizeFilter
                onSearch={(param): void => console.error(param)}
                placeholder="Cari berdasarkan lokasi, area sekitar, nama property, nama project, atau nama developer"
                value={[
                    {
                        label: 'Cimahi Utara, Cimahi',
                        value: 'f33fc7510f0d5ebfecbe278642ee00e1',
                        others: {
                            id: '3'
                        }
                    }
                ]}
            >
                <MultipleSelectionComponent.Heading id="label">
                    Hello
                </MultipleSelectionComponent.Heading>
                {MOCK_MULTIPLE_OPTION.map((item) => (
                    <MultipleSelectionComponent.Item key={item.id} {...item} />
                ))}
            </MultipleSelectionComponent>
        );

        expect(component.find(DropdownComponent.Item).length).toBe(5);
        expect(component.find(BadgesComponent).length).toBe(1);
    });
});
