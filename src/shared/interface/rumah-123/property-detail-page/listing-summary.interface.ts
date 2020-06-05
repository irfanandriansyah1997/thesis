/**
 * R132 Listing Summary Data Interface
 * @author Dedik Budianto <irfan@99.co>
 * @since 2020.06.05
 */
export type R123ListingSummaryDataInterface = {
    address: string;
    priceTag: string;
    installment?: string;
    attribute: R123ListingSummaryAttributeInterface;
};

/**
 * R123 Listing Summary Action Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.06.05
 */
export interface R123ListingSummaryActionInterface {
    onClickSave: () => void;
    onClickShare: () => void;
    onClickPreview: () => void;
}

/**
 * R123 Listing Summary Attribute Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.06.05
 */
export interface R123ListingSummaryAttributeInterface {
    bedroom?: string;
    carport?: string;
    bathroom?: string;
    landSize?: string;
    buildingSize?: string;
}
