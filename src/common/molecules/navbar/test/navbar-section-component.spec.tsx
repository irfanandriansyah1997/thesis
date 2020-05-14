import React from 'react';
import { mount } from 'enzyme';

import NavbarComponent from '../navbar.component';

describe('Testing Navbar Section Component', () => {
    it('Render navbar section without navbar menu in parent', () => {
        const nav = mount(
            <NavbarComponent>
                <NavbarComponent.Section>Hello</NavbarComponent.Section>
            </NavbarComponent>
        );

        expect(nav.text()).toBe('');
        expect(nav.find(NavbarComponent.Section).length).toBe(0);
    });

    it('Render navbar section with navbar menu in parent', () => {
        const nav = mount(
            <NavbarComponent>
                <NavbarComponent.Menu position="left" id="navbar-left">
                    <NavbarComponent.Section>
                        Sample Navbar Section
                    </NavbarComponent.Section>
                </NavbarComponent.Menu>
            </NavbarComponent>
        );

        const section = nav.find('.ui-molecules-navbar__section').at(0);

        expect(nav.find(NavbarComponent.Section).length).toBe(1);
        expect(section.text()).toBe('Sample Navbar Section');
    });
});
