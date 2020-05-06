import { ReactNode } from 'react';

/**
 * Carousel Props Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @description
 * @since 2020.04.30
 */
export interface CarouselPropsInterface {
    className?: string;
    item: CarouselItemInterface[];
    indicator?: CarouselIndicatorInterface;
    onChangeActive: (position: number) => void;
    scrollEffect?: boolean;
}

export interface CarouselItemInterface {
    alt: string;
    src: string;
}

export interface CarouselIndicatorInterface {
    previous: ReactNode | string | Element;
    next: ReactNode | string | Element;
}
