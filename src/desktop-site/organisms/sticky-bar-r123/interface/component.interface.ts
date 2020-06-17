import {
    R123ListingSummaryDataInterface as data,
    R123ListingSummaryActionInterface as action
} from '../../../../shared/interface/rumah-123/property-detail-page/listing-summary.interface';

/**
 * Sticky Bar Props Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.06.17
 */
export type StickyBarR123PropsInterface = StickyBarDataPropsInterface &
    StickyBarActionPropsInterface & {
        title: string;
    };

/**
 * Sticky Bar Props Data Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.06.17
 */
export type StickyBarDataPropsInterface = Omit<data, 'installment'>;

/**
 * Sticky Bar Action Props Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.06.17
 */
export type StickyBarActionPropsInterface = Omit<
    action,
    'shareAction' | 'previewAction'
>;
