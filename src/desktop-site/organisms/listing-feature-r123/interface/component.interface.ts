import { R123ListingFeatureDataInterface as data } from '../../../../shared/interface/rumah-123/property-detail-page/listing-feature.interface';
import { ExpandTextToggleButtonInterface } from '../../../../common/molecules/expand-text/interfaces/component.interface';

/**
 * Listing Feature Props Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.06.03
 */
export type ListingFeatureR123PropsInterface = {
    title: string;
    propertyFacility: string;
    tabItemLabel: ListingFeatureTabLabelPropsInterface;
    tabContentToggleSelector: ExpandTextToggleButtonInterface;
} & ListingFeatureDetailDataPropsInterface;

/**
 * Listing Feature Props Data Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.06.03
 */
export type ListingFeatureDetailDataPropsInterface = data;

/**
 * Listing Feature Detail Context API Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.06.03
 */
export interface ListingFeatureDetailContextInterface {
    propertyDetail: ListingFeatureDetailDataPropsInterface;
}

/**
 * Listing Feature Tab Label Props Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.06.04
 */
export type ListingFeatureTabLabelPropsInterface = {
    detailLabel: string;
    facilityLabel: string;
};
