import React from 'react';
import { render, shallow } from 'enzyme';

import StickyComponent from '../sticky.component';

describe('Testing sticky component', () => {
    it('Test render sticky component className', () => {
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

    it('Test check on sticky component props', () => {
        const sticky = shallow(
            <StickyComponent top={200}>
                This is a sticky component
            </StickyComponent>
        );

        expect(sticky.hasClass('ui-atomic-sticky')).toBe(true);
        expect(sticky.hasClass('sticky-test')).toBe(false);
        expect(sticky.prop('style')).toHaveProperty('top', 200);
    });
});
