import React from 'react';
import { mount } from 'enzyme';

import NavbarComponent from '../navbar.component';
import DropdownComponent from '../../dropdown/dropdown.component';

describe('Testing Navbar Dropdown Component', () => {
    it('Render navbar dropdown without children', () => {
        const nav = mount(
            <NavbarComponent>
                <NavbarComponent.Menu position="left" id="navbar-left">
                    <NavbarComponent.Dropdown text="Toogle Dropdown">
                        Hello
                    </NavbarComponent.Dropdown>
                </NavbarComponent.Menu>
            </NavbarComponent>
        );

        expect(nav.find(NavbarComponent.Item).length).toBe(1);
        expect(nav.find(DropdownComponent.Item).length).toBe(0);
    });

    it('Render navbar dropdown without correctly', () => {
        const nav = mount(
            <NavbarComponent>
                <NavbarComponent.Menu position="left" id="navbar-left">
                    <NavbarComponent.Dropdown text="Toogle Dropdown">
                        <NavbarComponent.Item to="/" text="Dropdown Item" />
                    </NavbarComponent.Dropdown>
                </NavbarComponent.Menu>
            </NavbarComponent>
        );

        expect(nav.find(NavbarComponent.Item).length).toBe(2);
        expect(nav.find(DropdownComponent.Item).length).toBe(1);
    });
});
