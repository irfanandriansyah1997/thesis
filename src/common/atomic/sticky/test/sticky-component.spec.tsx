import React from 'react';
import { render } from 'enzyme';

import StickyComponent from '../sticky.component';

describe('Testing sticky component', () => {
    it('Test render sticky component', () => {
        const sticky = render(
            <StickyComponent direction="topLeft">
                This is a sticky component
            </StickyComponent>
        );

        expect(sticky.text()).toContain('This is a sticky component');
        expect(sticky.hasClass('ui-atomic-sticky')).toBe(true);
        expect(sticky.hasClass('ui-atomic-sticky--direction-topLeft')).toBe(
            true
        );
        expect(sticky.hasClass('ui-atomic-sticky--direction-topRight')).toBe(
            false
        );
    });
});
