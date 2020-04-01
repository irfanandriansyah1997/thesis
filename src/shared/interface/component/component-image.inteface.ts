import { ImgHTMLAttributes } from 'react';
import { ObjectFitProperty, Globals } from 'csstype';

/**
 * Component Image Default Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.03.31
 */
export type ComponentImageDefaultPropsInterface = Omit<
    ImgHTMLAttributes<HTMLImageElement>,
    'src' | 'alt' | 'style'
> & {
    src: string;
    alt: string;
    type?: ComponentImageType;
    objectFit?: ObjectFitProperty;
    overflow?: ComponentImageOverflowType;
};

/**
 * Generate Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.03.31
 */
export type ComponentImageOverflowType =
    | Globals
    | 'auto'
    | 'hidden'
    | 'scroll'
    | 'visible';

/**
 * Component Image Type
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.03.31
 */
export type ComponentImageType =
    | 'circle'
    | 'square'
    | 'rounded'
    | 'rounded-bottom'
    | 'rounded-left'
    | 'rounded-top'
    | 'rounded-right';
