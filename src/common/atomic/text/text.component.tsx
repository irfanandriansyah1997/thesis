import { SFC, createElement } from 'react';
import PropTypes, { Validator } from 'prop-types';

import StringHelper from '../../../shared/helper/string.helper';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import { TextPropsInterface } from './interface/component.interface';
import ColorDefaultConstant from '../../../shared/constant/color.constant';
import { ColorType } from '../../../shared/interface/common/color.interface';
import { ComponentTextTag } from '../../../shared/interface/component/component-tag.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/componen-default.interface';
import {
    ComponentStylingTypography,
    ComponentFontfaceTypography,
    ComponentFontWeightTypography
} from '../../../shared/interface/component/component-typography.interface';

/**
 * Text Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.04.7
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
        ...res,
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
        }
    });
};

TextComponent.defaultProps = {
    align: 'left',
    color: 'text',
    fontFamily: 'primary',
    fontWeight: 400,
    styling: 'default'
};

TextComponent.propTypes = {
    tag: PropTypes.oneOf<ComponentTextTag>([
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'p',
        'span'
    ]).isRequired as Validator<ComponentTextTag>,
    color: PropTypes.oneOf(Object.keys(ColorDefaultConstant)) as Validator<
        ColorType
    >,
    styling: PropTypes.oneOf<ComponentStylingTypography>([
        'heading-1',
        'heading-2',
        'heading-3',
        'heading-4',
        'heading-5',
        'heading-6',
        'default',
        'featured',
        'meta',
        'caption',
        'tiny'
    ]) as Validator<ComponentStylingTypography>,
    fontFamily: PropTypes.oneOf<ComponentFontfaceTypography>([
        'primary',
        'secondary'
    ]) as Validator<ComponentFontfaceTypography>,
    fontWeight: PropTypes.oneOf<ComponentFontWeightTypography>([
        300,
        400,
        500,
        600,
        700
    ]) as Validator<ComponentFontWeightTypography>
};

export default TextComponent;
