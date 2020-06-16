/**
 * R132 Listing Summary Data Interface
 * @author Dedik Budianto <irfan@99.co>
 * @since 2020.06.05
 */
export type R123ListingSummaryDataInterface = {
    address: string;
    priceTag: string;
    installment?: string;
    tier?: 'featured' | 'premier';
    attribute: R123ListingSummaryAttributeInterface;
};

/**
 * R123 Listing Summary Action Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.06.05
 */
export interface R123ListingSummaryActionInterface {
    saveAction: R123ListingSummaryActionItemInterface & {
        onClick: () => void;
    };
    previewAction: R123ListingSummaryActionItemInterface & {
        viewCount: string;
        headerContent: string;
        messageContent: string;
    };
    shareAction: R123ListingSummaryActionItemInterface & {
        shareLinks: R123ShareActionItemInterface[];
    };
}

/**
 * Listing Summary Action Item Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.06.03
 */
export type R123ListingSummaryActionItemInterface = {
    label: string;
};

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

/**
 * R123 Share Action Item Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.06.16
 */
export type R123ShareActionItemInterface = {
    icon: string;
    value: string;
    onClick: () => void;
};
