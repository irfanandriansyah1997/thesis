/* eslint-disable @typescript-eslint/no-explicit-any */
import PropTypes from 'prop-types';
import React, { SFC, Validator } from 'react';

import StringHelper from '../../../shared/helper/string.helper';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import { NavbarMenuPropsInterface } from './interface/component.interface';
import { GridColumnPropsInterface } from '../../atomic/grid/interface/component.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';

/**
 * Navbar Menu Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.12
 */
const NavbarMenuComponent: SFC<NavbarMenuPropsInterface> = ({
    id,
    position,
    ...res
}: NavbarMenuPropsInterface): any => {
    const children = React.Children.toArray(res.children).filter(
        (o: any): boolean => {
            if (o.type) {
                return (
                    o.type.name === 'NavbarDropdownComponent' ||
                    o.type.name === 'NavbarMegaMenuComponent' ||
                    o.type.name === 'NavbarItemComponent'
                );
            }

            return false;
        }
    );
    delete res.children;

    const className: ComponentClassnameDefaultInterface = {
        [`${res.className}`]: ValidatorHelper.verifiedIsNotEmpty(res.className),
        'ui-molecules-navbar__menu': true,
        flex: true,
        [`float-${position}`]: ValidatorHelper.verifiedIsNotEmpty(position)
    };
    delete res.className;

    const response: GridColumnPropsInterface = {
        children,
        id: `navbar-menu-${id}`,
        className: StringHelper.objToString(className)
    };

    return response;
};

NavbarMenuComponent.displayName = 'NavbarMenuComponent - GridColumnComponent';

NavbarMenuComponent.propTypes = {
    className: PropTypes.string,
    position: PropTypes.oneOf(['left', 'right']) as Validator<'left' | 'right'>
};

NavbarMenuComponent.defaultProps = {
    className: undefined,
    position: 'left'
};

export default NavbarMenuComponent;
