/**
 * Listing Feature Data Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.06.03
 */
export type R123ListingFeatureDataInterface = {
    floor: {
        label: string;
        value: number;
    };
    listingId: {
        label: string;
        value: string;
    };
    furnishing: {
        label: string;
        value: string;
    };
    postedDate: {
        label: string;
        value: string;
    };
    certificate: {
        label: string;
        value: string;
    };
    electricity: {
        label: string;
        value: number;
    };
    propertyType: {
        label: string;
        value: string;
    };
    propertyCondition: {
        label: string;
        value: string;
    };
};
