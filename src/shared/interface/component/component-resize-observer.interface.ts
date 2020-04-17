import { RefObject } from 'react';

/**
 * Component Resize Observer Output Inteface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.04.17
 */
export interface ComponentResizeObserverOutputInteface {
    width?: number;
    height?: number;
}

export type ComponentResizeObserverCallbackType = (
    size: ComponentResizeObserverOutputInteface
) => void;

/**
 * Component Resize Observer Callback Output Inteface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.04.17
 */
export type ComponentResizeObserverCallbackOutput<
    T
> = ComponentResizeObserverOutputInteface & {
    ref: RefObject<T>;
};
