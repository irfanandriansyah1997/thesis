import { createContext } from 'react';

import { ListingFeatureDetailContextInterface } from '../interface/component.interface';

/**
 * Listing Feature Context
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.06.03
 */
const ListingFeatureDetailContext = createContext<
    ListingFeatureDetailContextInterface
>({
    propertyDetail: {
        floor: {
            label: '',
            value: 0
        },
        listingId: {
            label: '',
            value: ''
        },
        furnishing: {
            label: '',
            value: ''
        },
        postedDate: {
            label: '',
            value: ''
        },
        certificate: {
            label: '',
            value: ''
        },
        electricity: {
            label: '',
            value: 0
        },
        propertyType: {
            label: '',
            value: ''
        },
        propertyCondition: {
            label: '',
            value: ''
        }
    }
});

export default ListingFeatureDetailContext;
