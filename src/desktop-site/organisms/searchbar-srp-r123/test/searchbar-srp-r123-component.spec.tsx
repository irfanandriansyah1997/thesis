import React from 'react';
import { mount } from 'enzyme';

import SearchBarSRPR123Component from '../searchbar-srp-r123.component';
import TextComponent from '../../../../common/atomic/text/text.component';
import ButtonComponent from '../../../../common/atomic/button/button.component';
import { ENTER_KEY_CHARCODE } from '../../../../shared/constant/keyboard.constant';
import MultipleSelectionComponent from '../../../../common/molecules/multiple-selection/multiple-selection.component';
import SectionDefaultAutocompleteR123Component from '../../../molecules/autocomplete-r123/storybook/section/section-default.stories';

describe('Testing Search Bar R123 Component', () => {
    it('render search bar working properly', () => {
        const mockOnChange = jest.fn();

        const component = mount(
            <SearchBarSRPR123Component
                label={{
                    rentLabel: 'Disewa',
                    saleLabel: 'Dijual',
                    searchLabel: 'Perbarui'
                }}
                propertyType="sale"
                onChange={mockOnChange}
                placeholder="Sample Placeholder"
                value={[]}
                asyncService={
                    SectionDefaultAutocompleteR123Component.onLoadData
                }
            />
        );

        const button = component
            .find('.ui-organism-search-srp-r123__button-group')
            .at(0)
            .find('button');

        expect(button.length).toBe(2);

        expect(
            (button.at(0).props().className as string).includes(
                'ui-organism-search-srp-r123__button--active'
            )
        ).toBe(true);
        expect(
            button
                .at(0)
                .find(TextComponent)
                .at(0)
                .props().children
        ).toBe('Dijual');

        expect(
            (button.at(1).props().className as string).includes(
                'ui-organism-search-srp-r123__button--active'
            )
        ).toBe(false);
        expect(
            button
                .at(1)
                .find(TextComponent)
                .at(0)
                .props().children
        ).toBe('Disewa');
    });

    it('simulation search data', (done: () => void) => {
        const mockOnChange = jest.fn();

        const component = mount(
            <SearchBarSRPR123Component
                label={{
                    rentLabel: 'Disewa',
                    saleLabel: 'Dijual',
                    searchLabel: 'Perbarui'
                }}
                propertyType="sale"
                onChange={mockOnChange}
                placeholder="Sample Placeholder"
                value={[]}
                asyncService={
                    SectionDefaultAutocompleteR123Component.onLoadData
                }
            />
        );

        expect(
            component
                .find(MultipleSelectionComponent)
                .at(0)
                .find('input').length
        ).toBe(1);

        component
            .find(MultipleSelectionComponent)
            .at(0)
            .find('input')
            .at(0)
            .simulate('focus');

        component
            .find(MultipleSelectionComponent)
            .at(0)
            .find('input')
            .at(0)
            .simulate('change', { target: { value: 'Cimahi' } });
        setTimeout(() => {
            component
                .find(MultipleSelectionComponent)
                .at(0)
                .find('input')
                .at(0)
                .simulate('change', { target: { value: 'Cimahi 2' } });

            setTimeout(() => {
                component.update();

                expect(
                    component.find(
                        '.ui-molecules-dropdown__wrapper .ui-molecules-dropdown__content .ui-molecules-multiple-selection__item.ui-molecules-dropdown__item'
                    ).length
                ).toBe(11);

                /**
                 * Simulate Keypress
                 */
                component
                    .find('input')
                    .at(0)
                    .simulate('keyDown', { keyCode: ENTER_KEY_CHARCODE });

                expect(mockOnChange).toHaveBeenCalledTimes(1);
                done();
            }, 4000);
        }, 500);
    });

    it('simulation change property type', () => {
        const mockOnChange = jest.fn();

        const component = mount(
            <SearchBarSRPR123Component
                label={{
                    rentLabel: 'Disewa',
                    saleLabel: 'Dijual',
                    searchLabel: 'Perbarui'
                }}
                propertyType="sale"
                onChange={mockOnChange}
                placeholder="Sample Placeholder"
                value={[]}
                asyncService={
                    SectionDefaultAutocompleteR123Component.onLoadData
                }
            />
        );

        const button = component
            .find('.ui-organism-search-srp-r123__button-group')
            .at(0)
            .find('button');

        button.at(1).simulate('click');
        expect(mockOnChange).toHaveBeenCalledTimes(1);

        button.at(0).simulate('click');
        expect(mockOnChange).toHaveBeenCalledTimes(2);
    });

    it('simulation click button search', () => {
        const mockOnChange = jest.fn();

        const component = mount(
            <SearchBarSRPR123Component
                label={{
                    rentLabel: 'Disewa',
                    saleLabel: 'Dijual',
                    searchLabel: 'Perbarui'
                }}
                propertyType="sale"
                onChange={mockOnChange}
                placeholder="Sample Placeholder"
                value={[]}
                asyncService={
                    SectionDefaultAutocompleteR123Component.onLoadData
                }
            />
        );

        const button = component.find(ButtonComponent);
        expect(button.length).toBe(1);

        button.at(0).simulate('click');

        expect(mockOnChange).toHaveBeenCalledTimes(1);
    });
});
