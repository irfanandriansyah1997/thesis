import React from 'react';
import { mount } from 'enzyme';

import AutoCompleteR123Component from '../autocomplete-r123.component';
import { ENTER_KEY_CHARCODE } from '../../../../shared/constant/keyboard.constant';
import SectionDefaultAutocompleteR123Component from '../storybook/section/section-default.stories';
import MultipleSelectionComponent from '../../../../common/molecules/multiple-selection/multiple-selection.component';

describe('Testing Autocomplete R123 Component', () => {
    it('render autocomplete working properly', () => {
        const mockOnChange = jest.fn();

        mount(
            <AutoCompleteR123Component
                onChange={mockOnChange}
                placeholder="Sample Placeholder"
                value={[]}
                asyncService={
                    SectionDefaultAutocompleteR123Component.onLoadData
                }
            />
        );
    });

    it('simulation search data', (done: () => void) => {
        const mockOnChange = jest.fn();

        const component = mount(
            <AutoCompleteR123Component
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
});
