/* eslint-disable @typescript-eslint/no-explicit-any */
import PropTypes from 'prop-types';
import React, { SFC, Validator } from 'react';

import NavbarItemComponent from './navbar-item.component';
import DropdownComponent from '../dropdown/dropdown.component';
import ColorDefaultConstant from '../../../shared/constant/color.constant';
import { ColorType } from '../../../shared/interface/common/color.interface';
import {
    NavbarMenuItemPropsInterface,
    NavbarMenuDropdownPropsInterface
} from './interface/component.interface';

/**
 * Navbar Dropdown Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.12
 */
const NavbarDropdownComponent: SFC<NavbarMenuDropdownPropsInterface> = ({
    children,
    ...res
}) => {
    const dropdownItem: NavbarMenuItemPropsInterface[] = React.Children.toArray(
        children
    )
        .filter((o: any): boolean => {
            if (o.type) {
                return o.type.name === 'NavbarItemComponent';
            }

            return false;
        })
        .map((o: any): NavbarMenuItemPropsInterface => o.props);

    return (
        <DropdownComponent
            name="navbar-item"
            trigger="hover"
            label={<NavbarItemComponent {...res} />}
        >
            {dropdownItem.map((item) => (
                <DropdownComponent.Item
                    key={`${item.text as string}-${res.text}`}
                    disableHover
                    withoutPadding
                >
                    <NavbarItemComponent {...res} />
                </DropdownComponent.Item>
            ))}
        </DropdownComponent>
    );
};

NavbarDropdownComponent.propTypes = {
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

NavbarDropdownComponent.defaultProps = {
    to: undefined,
    color: 'heading',
    onClick: undefined
};

export default NavbarDropdownComponent;
