import ColorDefaultConstant from '../../constant/color.constant';

/**
 * Color Typings
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.03.13
 */
export type ColorType = keyof typeof ColorDefaultConstant;

/**
 * Color Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.03.13
 */
export interface ColorInterface {
    color?: ColorType;
}
