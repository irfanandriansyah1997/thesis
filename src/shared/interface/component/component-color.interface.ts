import { ColorType } from '../common/color.interface';

/**
 * Component Style Color Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.04.03
 */
export interface ComponentStyleColorInterface {
    text: ComponentColorInterface;
    background: ComponentColorInterface;
}

/**
 * Component Color Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.04.03
 */
export interface ComponentColorInterface {
    color: ColorType;
    hexColor: string;
}
