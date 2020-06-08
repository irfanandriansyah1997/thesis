import { CarouselPropsInterface } from '../../../molecules/carousel/interface/component.interface';
import { ExpandTextToggleButtonInterface } from '../../../molecules/expand-text/interfaces/component.interface';

/**
 * Gallery Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.06.08
 */
export type GalleryPropsInterface = Pick<
    CarouselPropsInterface,
    'item' | 'onChangeActive'
> & {
    showNumbering?: boolean;
    labelToggle: ExpandTextToggleButtonInterface;
};
