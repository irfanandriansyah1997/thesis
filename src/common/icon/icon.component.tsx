import { SFC, createElement } from 'react';

import StringHelper from '../../shared/helper/string.helper';
import ValidatorHelper from '../../shared/helper/validator.helper';
import { IconPropsInterface } from './interface/component.interface';
import ColorDefaultConstant from '../../shared/constant/color.constant';
import { ColorType } from '../../shared/interface/common/color.interface';
import { ComponentClassnameDefaultInterface } from '../../shared/interface/component/componen-default.interface';

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
    const isUrbanindoIcon: boolean = /^uif-/.test(String(children));

    const name: ComponentClassnameDefaultInterface = {
        uif: isUrbanindoIcon,
        'ui-atomic-icon': true,
        [`${children}`]: isUrbanindoIcon,
        'material-icons': !isUrbanindoIcon,
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
                : undefined
        },
        ...res
    });
};

export default IconComponent;
