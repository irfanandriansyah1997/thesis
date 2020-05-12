import PropTypes from 'prop-types';
import React, { SFC, Validator } from 'react';

import LinkComponent from '../../atomic/link/link.component';
import StringHelper from '../../../shared/helper/string.helper';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import ColorDefaultConstant from '../../../shared/constant/color.constant';
import { ColorType } from '../../../shared/interface/common/color.interface';
import { NavbarMenuItemPropsInterface } from './interface/component.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';

/**
 * Navbar Item Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.12
 */
const NavbarItemComponent: SFC<NavbarMenuItemPropsInterface> = ({
    to,
    text,
    color,
    onClick,
    backgroundColor,
    ...res
}) => {
    const className: ComponentClassnameDefaultInterface = {
        [`${res.className}`]: ValidatorHelper.verifiedIsNotEmpty(res.className),
        'ui-molecules-navbar__item': true
    };

    return (
        <LinkComponent
            href={to}
            color={color}
            onClick={onClick}
            className={StringHelper.objToString(className)}
            style={{
                backgroundColor: ValidatorHelper.verifiedKeyIsExist(
                    ColorDefaultConstant,
                    backgroundColor
                )
                    ? ColorDefaultConstant[backgroundColor as ColorType]
                    : undefined
            }}
        >
            {text}
        </LinkComponent>
    );
};

NavbarItemComponent.propTypes = {
    to: PropTypes.string,
    text: PropTypes.string.isRequired,
    color: PropTypes.oneOf(Object.keys(ColorDefaultConstant)) as Validator<
        ColorType
    >,
    backgroundColor: PropTypes.oneOf(
        Object.keys(ColorDefaultConstant)
    ) as Validator<ColorType>,
    onClick: PropTypes.func
};

NavbarItemComponent.defaultProps = {
    to: undefined,
    color: 'heading',
    onClick: undefined,
    backgroundColor: undefined
};

export default NavbarItemComponent;
