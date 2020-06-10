import React from 'react';
import { render } from 'enzyme';

import TextAreaComponent from '../textarea.component';

describe('Testing textarea component', () => {
    it('Test render textarea className component', () => {
        const textarea = render(
            <TextAreaComponent name="textarea" className="component-test" />
        );

        expect(textarea.hasClass('ui-atomic-textarea')).toBe(true);
        expect(textarea.hasClass('ui-atomic-textarea__add-on-container')).toBe(
            false
        );
        expect(textarea.hasClass('component-test')).toBe(true);
    });

    it('Test render disabled for textarea component', () => {
        const textarea = render(<TextAreaComponent name="textarea" disabled />);

        expect(textarea.find('textarea').prop('disabled')).toBe(true);
    });
});
