import React from 'react';
import { render } from 'enzyme';

import ButtonComponent from '../button.component';

describe('Testing button component in atomic component ', () => {
    it('Should render button material component', () => {
        const button = render(
            <ButtonComponent size="default" theme="primary">
                Primary
            </ButtonComponent>
        );

        expect(button.text()).toContain('Primary');
        expect(button.hasClass('ui-atomic-button')).toBe(true);
        expect(button.hasClass('ui-atomic-button--size-default')).toBe(true);
    });
});
