import React from 'react';
import { mount, render } from 'enzyme';

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

    it('Test onchange textarea', () => {
        const mock = jest.fn((x) => x);
        const textarea = mount(
            <TextAreaComponent name="textarea" disabled onChange={mock} />
        );
        textarea
            .find('textarea')
            .at(0)
            .simulate('change', { target: { value: 'value' } });

        expect(mock).toHaveBeenCalledTimes(1);
        expect(mock.mock.results[0].value.target.value).toEqual('value');
    });
});
