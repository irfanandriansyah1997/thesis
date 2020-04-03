import { SFC, createElement } from 'react';

import StringHelper from '../../../shared/helper/string.helper';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import { IconPropsInterface } from './interface/component.interface';
import ColorDefaultConstant from '../../../shared/constant/color.constant';
import { ColorType } from '../../../shared/interface/common/color.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/componen-default.interface';
import ComponentHelper from '../../../shared/helper/component.helper';

/**
 * Icon Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.03.13
 */
const IconComponent: SFC<IconPropsInterface> = ({
    size,
    color,
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
            ...res.style,
            color: ValidatorHelper.verifiedKeyIsExist(
                ColorDefaultConstant,
                color
            )
                ? ColorDefaultConstant[color as ColorType]
                : undefined,
            fontSize: ValidatorHelper.isNumber(size) ? `${size}px` : undefined
        },
        children: isVendorIcon ? undefined : children,
        ...res
    });
};

export default IconComponent;
