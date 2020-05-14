import React from 'react';
import { mount } from 'enzyme';

import NavbarComponent from '../navbar.component';
import ColorDefaultConstant from '../../../../shared/constant/color.constant';

describe('Testing Navbar Item Component', () => {
    it('Render navbar divider without navbar menu in parent', () => {
        const nav = mount(
            <NavbarComponent>
                <NavbarComponent.Item color="primary" text="Menu" />
            </NavbarComponent>
        );

        expect(nav.text()).toBe('');
        expect(nav.find(NavbarComponent.Item).length).toBe(0);
    });

    it('Render navbar item heading default', () => {
        const nav = mount(
            <NavbarComponent>
                <NavbarComponent.Menu position="left" id="navbar-left">
                    <NavbarComponent.Item
                        isHeading
                        text="Menu"
                        color="primary"
                    />
                </NavbarComponent.Menu>
            </NavbarComponent>
        );

        const item = nav.find('.ui-molecules-navbar__item').at(0);

        expect(nav.find(NavbarComponent.Item).length).toBe(1);
        expect(
            (item.props().className as string).includes(
                'ui-molecules-navbar__item'
            )
        ).toBe(true);
        expect(
            (item.props().className as string).includes(
                'ui-molecules-navbar__item--is-heading'
            )
        ).toBe(true);
        expect(item.props().style).toStrictEqual({
            backgroundColor: undefined,
            marginLeft: 4,
            marginRight: 4
        });
    });

    it('Render navbar item active and set background color primary', () => {
        const nav = mount(
            <NavbarComponent>
                <NavbarComponent.Menu position="left" id="navbar-left">
                    <NavbarComponent.Item
                        active
                        text="Menu"
                        color="white"
                        backgroundColor="primary"
                    />
                </NavbarComponent.Menu>
            </NavbarComponent>
        );

        const item = nav.find('.ui-molecules-navbar__item').at(0);

        expect(nav.find(NavbarComponent.Item).length).toBe(1);
        expect(
            (item.props().className as string).includes(
                'ui-molecules-navbar__item'
            )
        ).toBe(true);
        expect(
            (item.props().className as string).includes(
                'ui-molecules-navbar__item--is-heading'
            )
        ).toBe(true);
        expect(item.props().style).toStrictEqual({
            backgroundColor: ColorDefaultConstant.primary,
            marginLeft: 4,
            marginRight: 4
        });
    });
});
