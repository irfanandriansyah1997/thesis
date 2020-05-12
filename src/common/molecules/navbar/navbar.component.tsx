/* eslint-disable @typescript-eslint/no-explicit-any */
import PropTypes from 'prop-types';
import React, { Validator, CSSProperties } from 'react';

import NavbarItemComponent from './navbar-item.component';
import NavbarMenuComponent from './navbar-menu.component';
import GridComponent from '../../atomic/grid/grid.component';
import StringHelper from '../../../shared/helper/string.helper';
import NavbarDropdownComponent from './navbar-dropdown.component';
import NavbarMegaMenuComponent from './navbar-mega-menu.component';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import ColorDefaultConstant from '../../../shared/constant/color.constant';
import { ColorType } from '../../../shared/interface/common/color.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';
import {
    NavbarPositionType,
    NavbarDefaultExportInterface
} from './interface/component.interface';

/**
 * Navbar Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.12
 */
const NavbarComponent: NavbarDefaultExportInterface = ({
    shadow,
    position,
    withContainer,
    backgroundColor,
    ...res
}) => {
    const children = React.Children.toArray(res.children).filter(
        (o: any): boolean => {
            if (o.type) {
                return o.type.name === 'NavbarMenuComponent';
            }

            return false;
        }
    );
    delete res.children;

    const className: ComponentClassnameDefaultInterface = {
        [`${res.className}`]: ValidatorHelper.verifiedIsNotEmpty(res.className),
        'ui-molecules-navbar': true,
        'ui-molecules-navbar--with-shadow': ValidatorHelper.verifiedIsNotEmpty(
            shadow
        ),
        block: true,
        [`${position}`]: ValidatorHelper.verifiedIsNotEmpty(position)
    };
    delete res.className;

    const style: CSSProperties = {
        backgroundColor: ValidatorHelper.verifiedKeyIsExist(
            ColorDefaultConstant,
            backgroundColor
        )
            ? ColorDefaultConstant[backgroundColor as ColorType]
            : undefined
    };

    if (withContainer) {
        return (
            <div style={style} className={StringHelper.objToString(className)}>
                <GridComponent.Container>
                    <GridComponent.Row>{children}</GridComponent.Row>
                </GridComponent.Container>
            </div>
        );
    }

    return (
        <div style={style} className={StringHelper.objToString(className)}>
            <GridComponent.Row>{children}</GridComponent.Row>
        </div>
    );
};

NavbarComponent.propTypes = {
    shadow: PropTypes.bool,
    withContainer: PropTypes.bool,
    backgroundColor: PropTypes.oneOf(
        Object.keys(ColorDefaultConstant)
    ) as Validator<ColorType>,
    position: PropTypes.oneOf<NavbarPositionType>([
        'absolute',
        'fixed',
        'relative'
    ])
};

NavbarComponent.defaultProps = {
    shadow: false,
    position: 'relative',
    withContainer: false,
    backgroundColor: 'white'
};

NavbarComponent.Menu = NavbarMenuComponent;

NavbarComponent.Item = NavbarItemComponent;

NavbarComponent.MegaMenu = NavbarMegaMenuComponent;

NavbarComponent.Dropdown = NavbarDropdownComponent;

export default NavbarComponent;
