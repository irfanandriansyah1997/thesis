import { ReactNode } from 'react';

/**
 * Component Default Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.03.12
 */
export interface ComponentDefaultInterface {
    className?: string;
    children?: ReactNode;
}

/**
 * Component Classname Default Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description Interfaces are used to define dynamic field with value is any type
 * @since 2019.09.15
 */
export interface ComponentClassnameDefaultInterface {
    [key: string]: boolean;
}

export type DialogType = 'popup' | 'fullscreen';
