import PropTypes from 'prop-types';
import { SFC, createElement, Validator } from 'react';

import StringHelper from '../../../shared/helper/string.helper';
import { IconPropsInterface } from './interface/component.interface';
import ComponentHelper from '../../../shared/helper/component.helper';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import ColorDefaultConstant from '../../../shared/constant/color.constant';
import { ColorType } from '../../../shared/interface/common/color.interface';
import { ComponentDefaultSize } from '../../../shared/interface/component/component-size.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';

/**
 * Icon Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.03.13
 */
const IconComponent: SFC<IconPropsInterface> = ({
    size,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    color,
    style,
    children,
    className,
    ...res
}: IconPropsInterface) => {
    const isUrbanindoIcon: boolean = ComponentHelper.isUrbanindoIcon(
        String(children)
    );
    const isRumah123Icon: boolean = ComponentHelper.isRumah123Icon(
        String(children)
    );
    const isVendorIcon: boolean = isUrbanindoIcon || isRumah123Icon;
    const name: ComponentClassnameDefaultInterface = {
        uif: isUrbanindoIcon,
        'rui-icon': isRumah123Icon,
        'ui-atomic-icon': true,
        [`${children}`]: isVendorIcon,
        'material-icons': !isVendorIcon,
        [`ui-atomic-icon--size-${size}`]: ValidatorHelper.isString(size),
        [`${className}`]: ValidatorHelper.verifiedIsNotEmpty(className)
    };

    return createElement('i', {
        className: StringHelper.objToString(name),
        style: {
            ...style,
            color: ValidatorHelper.verifiedKeyIsExist(
                ColorDefaultConstant,
                color
            )
                ? ColorDefaultConstant[color as ColorType]
                : undefined,
            height: ValidatorHelper.isNumber(size) ? `${size}px` : undefined,
            fontSize: ValidatorHelper.isNumber(size) ? `${size}px` : undefined,
            marginTop: ValidatorHelper.isNumber(marginTop)
                ? `${marginTop}px`
                : undefined,
            marginRight: ValidatorHelper.isNumber(marginRight)
                ? `${marginRight}px`
                : undefined,
            marginBottom: ValidatorHelper.isNumber(marginBottom)
                ? `${marginBottom}px`
                : undefined,
            marginLeft: ValidatorHelper.isNumber(marginLeft)
                ? `${marginLeft}px`
                : undefined,
            paddingTop: ValidatorHelper.isNumber(paddingTop)
                ? `${paddingTop}px`
                : undefined,
            paddingRight: ValidatorHelper.isNumber(paddingRight)
                ? `${paddingRight}px`
                : undefined,
            paddingBottom: ValidatorHelper.isNumber(paddingBottom)
                ? `${paddingBottom}px`
                : undefined,
            paddingLeft: ValidatorHelper.isNumber(paddingLeft)
                ? `${paddingLeft}px`
                : undefined
        },
        children: isVendorIcon ? undefined : children,
        ...res
    });
};

IconComponent.propTypes = {
    color: PropTypes.oneOf(Object.keys(ColorDefaultConstant)) as Validator<
        ColorType
    >,
    size: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf<ComponentDefaultSize>(['big', 'default', 'small'])
    ]).isRequired,
    marginTop: PropTypes.number,
    marginRight: PropTypes.number,
    marginBottom: PropTypes.number,
    marginLeft: PropTypes.number
};

IconComponent.defaultProps = {
    color: undefined
};

export default IconComponent;
