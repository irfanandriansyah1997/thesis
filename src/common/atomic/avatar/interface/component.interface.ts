import { ComponentImageDefaultPropsInterface } from '../../../../shared/interface/component/component-image.inteface';

/**
 * Avatar Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.03.31
 */
export type AvatarPropsInterface = Omit<
    ComponentImageDefaultPropsInterface,
    'overflow' | 'width' | 'height'
> & {
    size: string | number;
};
