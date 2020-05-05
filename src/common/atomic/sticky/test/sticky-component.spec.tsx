import React from 'react';
import { render } from 'enzyme';

import StickyComponent from '../sticky.component';

describe('Testing sticky component', () => {
    it('Test render sticky component', () => {
        const sticky = render(
            <StickyComponent className="sticky-test">
                This is a sticky component
            </StickyComponent>
        );

        expect(sticky.text()).toContain('This is a sticky component');
        expect(sticky.hasClass('ui-atomic-sticky')).toBe(true);
        expect(sticky.hasClass('sticky-test')).toBe(true);
        expect(sticky.hasClass('ui-atomic-sticky--direction-topRight')).toBe(
            false
        );
    });
});
