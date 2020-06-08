import { CarouselItemInterface } from '../../../../common/molecules/carousel/interface/component.interface';

/**
 * Gallery R123 Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.06.08
 */
export interface GalleryR123PropsInterface {
    media: CarouselItemInterface[];
    blueprint: CarouselItemInterface[];
    video: GalleryR123VideoInterface[];
}

/**
 * Gallery R123 Video Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.06.08
 */
export interface GalleryR123VideoInterface {
    url: string;
    title?: string;
}
