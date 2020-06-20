import React from 'react';
import { mount, render } from 'enzyme';

import EditTextComponent from '../edit-text.component';
import ColorDefaultConstant from '../../../../shared/constant/color.constant';

describe('Testing edit text component', () => {
    it('Test render edit text with add on className component', () => {
        const editText = render(
            <EditTextComponent.Addon
                name="testing-addon"
                position="right"
                fontWeight={400}
                fontSize={13}
                color="addOnTextR123"
                className="component-test"
            >
                %
            </EditTextComponent.Addon>
        );

        expect(editText.hasClass('ui-atomic-edit-text__add-on-container')).toBe(
            true
        );
        expect(editText.hasClass('ui-atomic-edit-text')).toBe(false);
        expect(
            editText.hasClass('ui-atomic-edit-text__add-on-container--right')
        ).toBe(true);
    });

    it('Test if span element is render correctly and default prop check', () => {
        const editText = mount(
            <EditTextComponent.Addon
                name="testing-addon"
                className="component-test"
            >
                Rp
            </EditTextComponent.Addon>
        );
        const span = editText.find('span');
        expect(span.length).toBe(1);
        expect(span.hasClass('ui-atomic-edit-text__add-on')).toBe(true);
        expect(span.prop('style')).toHaveProperty('fontSize', 13);
        expect(span.prop('style')).toHaveProperty('fontWeight', 400);
        expect(span.prop('style')).toHaveProperty(
            'color',
            ColorDefaultConstant.addOnTextR123
        );
        expect(span.text()).toContain('Rp');
    });
});
