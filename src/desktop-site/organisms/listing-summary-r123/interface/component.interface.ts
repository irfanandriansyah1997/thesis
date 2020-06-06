import {
    R123ListingSummaryDataInterface as data,
    R123ListingSummaryActionInterface as action
} from '../../../../shared/interface/rumah-123/property-detail-page/listing-summary.interface';

/**
 * Listing Summary Props Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.06.05
 */
export type ListingSummaryR123PropsInterface = ListingSummaryDataPropsInterface &
    ListingSummaryActionPropsInterface & {
        flaggingBadge: string;
        mortgage?: ListingSummaryMortgagePropsInterface;
    };

/**
 * Listing Summary Props Data Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.06.05
 */
export type ListingSummaryDataPropsInterface = data;

/**
 * Listing Summary Action Props Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.06.05
 */
export type ListingSummaryActionPropsInterface = action;

/**
 * Listing Summary Context API Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.06.05
 */
export interface ListingSummaryContextInterface {
    action: ListingSummaryActionPropsInterface;
    data: ListingSummaryDataPropsInterface;
}

/**
 * Listing Summary Mortgage Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.06.05
 */
export type ListingSummaryMortgagePropsInterface = {
    label: string;
    installment: string;
    onClickMortgage: () => void;
};
