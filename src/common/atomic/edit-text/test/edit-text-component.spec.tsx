import React from 'react';
import { render } from 'enzyme';

import EditTextComponent from '../edit-text.component';

describe('Testing edit text component', () => {
    it('Test render edit text className component', () => {
        const editText = render(
            <EditTextComponent name="edit-text" className="component-test" />
        );

        expect(editText.hasClass('ui-atomic-edit-text')).toBe(true);
        expect(editText.hasClass('ui-atomic-edit-text__addOnContainer')).toBe(
            false
        );
        expect(editText.hasClass('component-test')).toBe(true);
    });

    it('Test render disabled for edit text component', () => {
        const editText = render(
            <EditTextComponent name="edit-text" disabled />
        );

        expect(editText.find('input').prop('disabled')).toBe(true);
    });
});
