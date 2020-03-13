import { HTMLAttributes } from 'react';
import { ComponentTextTagType } from '../../../shared/interface/component/component-tag.interface';

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
    tag: ComponentTextTagType;
    align: '';
    styling: '';
    fontWeight: '';
    fontFamily: '';
    renderDangerous?: boolean;
}

/**
 * Text Component Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.03.13
 */
export type TextPropsInterface = ParagraphElement | SpanElement | HeadingElement;
