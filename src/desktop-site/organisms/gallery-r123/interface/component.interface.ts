import { CarouselItemInterface } from '../../../../common/molecules/carousel/interface/component.interface';
import { GalleryPropsInterface } from '../../../../common/organisms/gallery/interface/component.interface';
import { ExpandTextToggleButtonInterface } from '../../../../common/molecules/expand-text/interfaces/component.interface';

export type GaleryR123BadgesType = 'media' | 'video' | 'blueprint';

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
    onClickSave: () => void;
    onCloseDialog?: () => void;
    labelToggle: GalleryR123LabelInterface;
};

/**
 * Gallery R123 Badges Item Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.06.08
 */
export interface GalleryR123BadgesItemInterface {
    icon: string;
    count: number;
    label: string;
    type: GaleryR123BadgesType;
}

/**
 * Gallery R123 Context Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.06.08
 */
export type GalleryR123ContextInterface = Omit<
    GalleryR123PropsInterface,
    'isNewLaunch' | 'onCloseDialog' | 'labelToggle'
> & {
    showDialog: boolean;
    labelToggle: GalleryR123LabelInterface;
    badges: GalleryR123BadgesItemInterface[];
    setShowDialog: (show: boolean) => void;
};

/**
 * Generate Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.06.09
 */
export type GalleryR123LabelInterface = Partial<
    ExpandTextToggleButtonInterface
> & {
    videoBadges: string;
    mediaBadges: string;
    blueprintBadges: string;
};
