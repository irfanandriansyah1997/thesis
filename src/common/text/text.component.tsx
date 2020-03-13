import { SFC, createElement } from 'react';

import StringHelper from '../../shared/helper/string.helper';
import ValidatorHelper from '../../shared/helper/validator.helper';
import { TextPropsInterface } from './interface/component.interface';
import { ComponentClassnameDefaultInterface } from '../../shared/interface/component/componen-default.interface';

import './style/style.scss';

/**
 * Text Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.03.13
 */
const TextComponent: SFC<TextPropsInterface> = ({
    align,
    fontFamily,
    fontWeight,
    styling,
    tag,
    className,
    ...res
}: TextPropsInterface) => {
    const name: ComponentClassnameDefaultInterface = {
        [`${className}`]: ValidatorHelper.verifiedIsNotEmpty(className),
        [`ui-atomic-text--styling-${styling}`]: true,
        [`ui-atomic-text--typeface-${fontFamily}`]: true
    };

    return createElement(tag, {
        className: StringHelper.objToString(name),
        style: {
            ...res.style,
            fontWeight,
            textAlign: align
        },
        ...res
    });
};

export default TextComponent;
