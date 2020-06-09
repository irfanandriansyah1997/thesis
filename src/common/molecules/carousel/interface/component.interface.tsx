import { ObjectFitProperty } from 'csstype';

/**
 * Carousel Props Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @description
 * @since 2020.04.30
 */
export interface CarouselPropsInterface {
    value?: number;
    itemLink?: string;
    className?: string;
    scrollEffect?: boolean;
    item: CarouselItemInterface[];
    indicator?: CarouselIndicatorInterface;
    onChangeActive: (position: number) => void;
}

/**
 * Carousel Item Props Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @description
 * @since 2020.04.30
 */
export interface CarouselItemInterface {
    id: string | number;
    alt: string;
    src: string;
    type?: 'image' | 'youtube';
    objectFit?: ObjectFitProperty;
}

/**
 * Carousel Indicator Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.04.30
 */
export interface CarouselIndicatorInterface {
    previous: string;
    next: string;
    fontSizeIcon?: number;
}
