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
    id: string | number;
    alt: string;
    src: string;
}

export interface CarouselIndicatorInterface {
    previous: string;
    next: string;
}
