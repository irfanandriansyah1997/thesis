import { createContext } from 'react';

import { ListingFeatureContextInterface } from '../interface/component.interface';

/**
 * Listing Feature Context
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.06.03
 */
const ListingFeatureContext = createContext<ListingFeatureContextInterface>({
    propertyDetail: {
        floor: '',
        listingId: '',
        furnishing: '',
        postedDate: '',
        certificate: '',
        electricity: '',
        propertyType: '',
        propertyCondition: ''
    },
    propertyFacility: ''
});

export default ListingFeatureContext;
