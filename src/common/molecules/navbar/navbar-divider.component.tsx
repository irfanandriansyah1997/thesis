import PropTypes from 'prop-types';
import { SFC, createElement, Validator } from 'react';

import StringHelper from '../../../shared/helper/string.helper';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import ColorDefaultConstant from '../../../shared/constant/color.constant';
import { ColorType } from '../../../shared/interface/common/color.interface';
import { NavbarDividerPropsInterface } from './interface/component.interface';

/**
 * Navbar Divider Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.05.13
 */
const NavbarDividerComponent: SFC<NavbarDividerPropsInterface> = ({
    color
}) => {
    return createElement('div', {
        className: StringHelper.objToString({
            'ui-molecules-navbar__divider': true
        }),
        style: {
            backgroundColor: ValidatorHelper.verifiedKeyIsExist(
                ColorDefaultConstant,
                color
            )
                ? ColorDefaultConstant[color as ColorType]
                : undefined,
            width: 1,
            height: 30,
            marginLeft: 16,
            marginRight: 16
        }
    });
};

NavbarDividerComponent.propTypes = {
    color: PropTypes.oneOf(Object.keys(ColorDefaultConstant)) as Validator<
        ColorType
    >
};

NavbarDividerComponent.defaultProps = {
    color: 'heading'
};

export default NavbarDividerComponent;
