/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';

import { ListingSummaryContextInterface } from '../interface/component.interface';

/**
 * Listing Summary Context
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.06.05
 */
const ListingSummaryContext = createContext<ListingSummaryContextInterface>({
    data: {
        address: '',
        priceTag: '',
        installment: '',
        attribute: {
            carport: '',
            bedroom: '',
            bathroom: '',
            landSize: '',
            buildingSize: ''
        }
    },
    action: {
        saveAction: {
            label: '',
            onClick: (): void => {}
        },
        shareAction: {
            label: '',
            shareLinks: []
        },
        previewAction: {
            label: '',
            viewCount: '',
            headerContent: '',
            messageContent: ''
        }
    }
});

export default ListingSummaryContext;
