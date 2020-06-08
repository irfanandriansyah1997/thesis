import { CarouselItemInterface } from '../../../../common/molecules/carousel/interface/component.interface';
import { GalleryPropsInterface } from '../../../../common/organisms/gallery/interface/component.interface';
import { ExpandTextToggleButtonInterface } from '../../../../common/molecules/expand-text/interfaces/component.interface';

/**
 * Gallery R123 Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.06.08
 */
export type GalleryR123PropsInterface = Omit<
    GalleryPropsInterface,
    'item' | 'showNumbering' | 'labelToggle'
> & {
    title: string;
    address: string;
    isNewLaunch?: boolean;
    media: CarouselItemInterface[];
    video: CarouselItemInterface[];
    blueprint: CarouselItemInterface[];
    labelToggle?: ExpandTextToggleButtonInterface;
    onClickSave: () => void;
    onCloseDialog?: () => void;
};

/**
 * Gallery R123 Badges Item Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.06.08
 */
export interface GalleryR123BadgesItemInterface {
    icon: string;
    count: number;
    type: 'media' | 'video' | 'blueprint';
}

/**
 * Gallery R123 Context Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.06.08
 */
export type GalleryR123ContextInterface = Omit<
    GalleryR123PropsInterface,
    'isNewLaunch' | 'onCloseDialog'
> & {
    showDialog: boolean;
    badges: GalleryR123BadgesItemInterface[];
    setShowDialog: (show: boolean) => void;
};
