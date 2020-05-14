import React from 'react';
import { mount } from 'enzyme';

import NavbarComponent from '../navbar.component';
import DropdownComponent from '../../dropdown/dropdown.component';

describe('Testing Navbar Dropdown Component', () => {
    it('Render navbar dropdown without children', () => {
        const nav = mount(
            <NavbarComponent>
                <NavbarComponent.Menu position="left" id="navbar-left">
                    <NavbarComponent.MegaMenu text="Toogle Dropdown">
                        Hello
                    </NavbarComponent.MegaMenu>
                </NavbarComponent.Menu>
            </NavbarComponent>
        );

        expect(nav.find(NavbarComponent.Item).length).toBe(1);
        expect(nav.find(DropdownComponent.Item).length).toBe(1);
    });
});
