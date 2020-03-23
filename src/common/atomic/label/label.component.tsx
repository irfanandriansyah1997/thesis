import { SFC, createElement } from 'react';

import StringHelper from '../../../shared/helper/string.helper';
import { LabelPropsInterface } from './interface/component.interface';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import ColorDefaultConstant from '../../../shared/constant/color.constant';
import { ColorType } from '../../../shared/interface/common/color.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/componen-default.interface';

/**
 * Label Component
 * @author Cathrine <cathrine@99.co>
 * @since 2020.03.23
 */
const LabelComponent: SFC<LabelPropsInterface> = ({
    color,
    children,
    rounded,
    className
}: LabelPropsInterface) => {
    const name: ComponentClassnameDefaultInterface = {
        'ui-atomic-label': true,
        [`ui-atomic-text--styling-${rounded}`]: true,
        [`${className}`]: ValidatorHelper.verifiedIsNotEmpty(className)
    };

    return createElement('div', {
        className: StringHelper.objToString(name),
        style: {
            rounded,
            color: ValidatorHelper.verifiedKeyIsExist(
                ColorDefaultConstant,
                color
            )
                ? ColorDefaultConstant[color as ColorType]
                : undefined
        },
        children
    });
};

export default LabelComponent;
