import React from 'react';
import { mount } from 'enzyme';

import NavbarComponent from '../navbar.component';
import ColorDefaultConstant from '../../../../shared/constant/color.constant';
import { ColorType } from '../../../../shared/interface/common/color.interface';

describe('Testing Navbar Divider Component', () => {
    it('Render navbar divider without navbar menu in parent', () => {
        const nav = mount(
            <NavbarComponent>
                <NavbarComponent.Divider color="primary" height={20} />
            </NavbarComponent>
        );

        expect(nav.text()).toBe('');
        expect(nav.find(NavbarComponent.Divider).length).toBe(0);
    });

    it('Render navbar divider with navbar menu in parent', () => {
        const nav = mount(
            <NavbarComponent>
                <NavbarComponent.Menu position="left" id="navbar-left">
                    <NavbarComponent.Divider color="primary" height={20} />
                </NavbarComponent.Menu>
            </NavbarComponent>
        );

        const divider = nav.find('.ui-molecules-navbar__divider').at(0);

        expect(nav.text()).toBe('');
        expect(nav.find(NavbarComponent.Divider).length).toBe(1);
        expect(divider.props().style).toStrictEqual({
            width: 1,
            height: 20,
            marginLeft: 16,
            marginRight: 16,
            backgroundColor: ColorDefaultConstant.primary
        });
    });

    it('Render navbar divider with wrong color', () => {
        const nav = mount(
            <NavbarComponent>
                <NavbarComponent.Menu position="left" id="navbar-left">
                    <NavbarComponent.Divider
                        color={'primary123' as ColorType}
                    />
                </NavbarComponent.Menu>
            </NavbarComponent>
        );

        const divider = nav.find('.ui-molecules-navbar__divider').at(0);

        expect(nav.text()).toBe('');
        expect(nav.find(NavbarComponent.Divider).length).toBe(1);
        expect(divider.props().style).toStrictEqual({
            width: 1,
            height: 30,
            marginLeft: 16,
            marginRight: 16,
            backgroundColor: undefined
        });
    });
});
