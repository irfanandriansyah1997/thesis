import { HTMLAttributes } from 'react';
import { TextAlignProperty } from 'csstype';

import { ComponentTextTag } from '../../../../shared/interface/component/component-tag.interface';
import {
    ComponentStylingTypography,
    ComponentFontfaceTypography,
    ComponentFontWeightTypography
} from '../../../../shared/interface/component/component-typography.interface';
import { ColorType } from '../../../../shared/interface/common/color.interface';

type ParagraphElement = HTMLAttributes<HTMLHeadingElement> & BasePropsInterface;

type SpanElement = HTMLAttributes<HTMLSpanElement> & BasePropsInterface;

type HeadingElement = HTMLAttributes<HTMLHeadingElement> & BasePropsInterface;

/**
 * Generate Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.03.13
 */
interface BasePropsInterface {
    color?: ColorType;
    tag: ComponentTextTag;
    align: TextAlignProperty;
    styling: ComponentStylingTypography;
    fontFamily: ComponentFontfaceTypography;
    fontWeight: ComponentFontWeightTypography;
}

/**
 * Text Component Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.03.13
 */
export type TextPropsInterface =
    | ParagraphElement
    | SpanElement
    | HeadingElement;
