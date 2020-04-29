/**
 * Search Page Card Action Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.28
 */
export interface SearchPageCardActionInterface {
    onClickSave?: () => void;
    onClickViewDetail?: () => void;
    onClickContactAgent?: () => void;
}

/**
 * Search Page Card Media Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.28
 */
export interface SearchPageCardMediaInterface {
    alt: string;
    images: string;
    onClick?: () => void;
}

/**
 * Search Page Card Carousel Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.28
 */
export interface SearchPageCardCarouselInterface {
    item: SearchPageCardMediaInterface[];
}
