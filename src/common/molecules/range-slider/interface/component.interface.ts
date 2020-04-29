import { HTMLAttributes } from 'react';

/**
 * Range Slider Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.29
 */
export type RangeSliderPropsInterface = Omit<
    HTMLAttributes<HTMLDivElement>,
    | 'onClick'
    | 'children'
    | 'onChange'
    | 'onKeypress'
    | 'dangerouslySetInnerHTML'
> & {
    max: number;
    min: number;
    step?: number;
    value: RangeSliderValueInterface;
    label?: RangeSliderLabelInterface;
    onChange: (start: number, end: number) => void;
};

/**
 * Range Slider Value Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.29
 */
export interface RangeSliderValueInterface {
    end: number;
    start: number;
}

/**
 * Range Slider Label Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.29
 */
export interface RangeSliderLabelInterface {
    minLabel: string;
    maxLabel: string;
}

/**
 * Range Slider Event Handler Output Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.04.29
 */
export interface RangeSliderEventHandler {
    range: number;
    endPosition: number;
    startPosition: number;
    value: RangeSliderValueInterface;
}
