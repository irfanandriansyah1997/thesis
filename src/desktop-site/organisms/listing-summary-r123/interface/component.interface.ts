import {
    R123ListingSummaryActionInterface as action,
    R123ListingSummaryDataInterface as data
} from '../../../../shared/interface/rumah-123/property-detail-page/listing-summary.interface';

/**
 * Listing Summary Props Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.06.05
 */
export type ListingSummaryR123PropsInterface = ListingSummaryDataPropsInterface & {
    action: action;
    flaggingBadge: string;
    tierBadge?: 'featured' | 'premier';
    mortgage?: ListingSummaryMortgagePropsInterface;
    actionLabel: ListingSummaryActionLabelPropsInterface;
};

/**
 * Listing Summary Props Data Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.06.05
 */
export type ListingSummaryDataPropsInterface = data;

/**
 * Listing Summary Context API Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.06.05
 */
export interface ListingSummaryContextInterface {
    action: action;
    data: ListingSummaryDataPropsInterface;
}

/**
 * Listing Summary Action Label Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.06.05
 */
export type ListingSummaryActionLabelPropsInterface = {
    save: string;
    share: string;
    preview: string;
};

/**
 * Listing Summary Mortgage Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.06.05
 */
export type ListingSummaryMortgagePropsInterface = {
    link: string;
    label: string;
    installment: string;
    onClickMortgage: () => void;
};
