import { R123ListingFeatureDataInterface as data } from '../../../../shared/interface/rumah-123/property-detail-page/listing-feature.interface';

/**
 * Listing Feature Props Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.06.03
 */
export interface ListingFeatureR123PropsInterface {
    title: string;
    content: ListingFeaturePropsDataInterface;
}

/**
 * Listing Feature Props Data Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.06.03
 */
export type ListingFeaturePropsDataInterface = data;

/**
 * Listing Feature Context API Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.06.03
 */
export interface ListingFeatureContextInterface {
    propertyDetail: ListingFeaturePropsDataInterface;
    propertyFacility: string;
}
