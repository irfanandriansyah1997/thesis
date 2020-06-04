/**
 * Listing Feature Data Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.06.03
 */
export type R123ListingFeatureDataInterface = {
    floor: R123ListingFeatureDataItemInterface<number>;
    listingId: R123ListingFeatureDataItemInterface<string>;
    furnishing: R123ListingFeatureDataItemInterface<string>;
    postedDate: R123ListingFeatureDataItemInterface<string>;
    certificate: R123ListingFeatureDataItemInterface<string>;
    electricity: R123ListingFeatureDataItemInterface<number>;
    propertyType: R123ListingFeatureDataItemInterface<string>;
    propertyCondition: R123ListingFeatureDataItemInterface<string>;
};

/**
 * Listing Feature Data Item Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.06.03
 */
export type R123ListingFeatureDataItemInterface<T> = {
    label: string;
    value?: T;
};
