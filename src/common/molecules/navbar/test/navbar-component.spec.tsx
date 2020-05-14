import React from 'react';
import { render } from 'enzyme';

import NavbarComponent from '../navbar.component';
import ColorDefaultConstant from '../../../../shared/constant/color.constant';

describe('Testing Navbar Component', () => {
    it('Render navbar component', () => {
        const nav = render(
            <NavbarComponent>
                <NavbarComponent.Menu position="left" id="navbar-left">
                    <NavbarComponent.Item text="Hello" to="Yo Dawg" />
                </NavbarComponent.Menu>
            </NavbarComponent>
        );

        expect(nav.hasClass('ui-molecules-navbar')).toBe(true);
        expect(nav.hasClass('ui-molecules-navbar--with-shadow')).toBe(false);
        expect(nav.hasClass('ui-molecules-navbar--with-container')).toBe(false);

        expect(nav.prop('style')).toHaveProperty(
            'background-color',
            ColorDefaultConstant.milkwhite
        );
        expect(nav.text()).toBe('Hello');
    });

    it('Render navbar component with container and custom background color', () => {
        const nav = render(
            <NavbarComponent withContainer shadow backgroundColor="primary">
                Hello
            </NavbarComponent>
        );

        expect(nav.hasClass('ui-molecules-navbar')).toBe(true);
        expect(nav.hasClass('ui-molecules-navbar--with-shadow')).toBe(true);
        expect(nav.hasClass('ui-molecules-navbar--with-container')).toBe(true);

        expect(nav.prop('style')).toHaveProperty(
            'background-color',
            ColorDefaultConstant.primary
        );
        expect(nav.text()).toBe('');
    });
});
