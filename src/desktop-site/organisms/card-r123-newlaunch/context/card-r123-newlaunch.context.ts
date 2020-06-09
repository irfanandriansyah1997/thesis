/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';

import { CardR123NewLaunchContextInterface } from '../interface/component.interface';

/**
 * Card R123 New Launch Context
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @description
 * @since 2020.06.08
 */
const CardR123NewLaunchContext = createContext<
    CardR123NewLaunchContextInterface
>({
    data: {
        id: '',
        link: '',
        unit: '',
        media: [],
        title: '',
        address: '',
        priceTag: '',
        mediaCount: 0,
        videoCount: 0,
        agencyName: '',
        propertyType: '',
        developerLogo: '',
        completionDate: '',
        publishingDate: ''
    },
    action: {
        onClickSave: (): void => {},
        onClickViewDetail: (): void => {},
        onClickContact: (): void => {}
    }
});

export default CardR123NewLaunchContext;
