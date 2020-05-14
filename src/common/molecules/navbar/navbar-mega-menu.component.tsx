/* eslint-disable @typescript-eslint/no-explicit-any */
import PropTypes from 'prop-types';
import React, { SFC, Validator } from 'react';

import NavbarItemComponent from './navbar-item.component';
import DropdownComponent from '../dropdown/dropdown.component';
import ColorDefaultConstant from '../../../shared/constant/color.constant';
import { ColorType } from '../../../shared/interface/common/color.interface';
import { NavbarMenuDropdownPropsInterface } from './interface/component.interface';

/**
 * Navbar Mega Menu Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.12
 */
const NavbarMegaMenuComponent: SFC<NavbarMenuDropdownPropsInterface> = ({
    children,
    ...res
}) => {
    return (
        <DropdownComponent
            name="navbar-item"
            trigger="hover"
            label={<NavbarItemComponent {...res} />}
        >
            <DropdownComponent.Item disableHover withoutPadding>
                {children}
            </DropdownComponent.Item>
        </DropdownComponent>
    );
};

NavbarMegaMenuComponent.propTypes = {
    to: PropTypes.string,
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string
    ]).isRequired,
    color: PropTypes.oneOf(Object.keys(ColorDefaultConstant)) as Validator<
        ColorType
    >
};

NavbarMegaMenuComponent.defaultProps = {
    to: undefined,
    color: 'heading',
    onClick: undefined
};

export default NavbarMegaMenuComponent;
