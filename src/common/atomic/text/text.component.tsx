import { SFC, createElement } from 'react';

import StringHelper from '../../../shared/helper/string.helper';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import { TextPropsInterface } from './interface/component.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/componen-default.interface';
import ColorDefaultConstant from '../../../shared/constant/color.constant';
import { ColorType } from '../../../shared/interface/common/color.interface';

/**
 * Text Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.03.13
 */
const TextComponent: SFC<TextPropsInterface> = ({
    tag,
    align,
    color,
    styling,
    className,
    fontFamily,
    fontWeight,
    ...res
}: TextPropsInterface) => {
    const name: ComponentClassnameDefaultInterface = {
        [`ui-atomic-text`]: true,
        [`ui-atomic-text--styling-${styling}`]: true,
        [`ui-atomic-text--typeface-${fontFamily}`]: true,
        [`${className}`]: ValidatorHelper.verifiedIsNotEmpty(className)
    };

    return createElement(tag, {
        className: StringHelper.objToString(name),
        style: {
            ...res.style,
            fontWeight,
            color: ValidatorHelper.verifiedKeyIsExist(
                ColorDefaultConstant,
                color
            )
                ? ColorDefaultConstant[color as ColorType]
                : undefined,
            textAlign: align
        },
        ...res
    });
};

export default TextComponent;
