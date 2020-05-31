/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';

import { CardR123FeaturedContextInterface } from '../interface/component.interface';

/**
 * Card R123 Featured Context
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.05.20
 */
const CardR123FeaturedContext = createContext<CardR123FeaturedContextInterface>(
    {
        data: {
            id: '',
            link: '',
            media: [],
            title: '',
            address: '',
            priceTag: '',
            mediaCount: 0,
            agentName: '',
            installment: '',
            propertyType: '',
            tier: 'featured',
            publishingDate: '',
            attribute: {
                carport: '',
                bedroom: '',
                bathroom: '',
                landSize: '',
                buildingSize: ''
            }
        },
        action: {
            onClickSave: (): void => {},
            onClickViewDetail: (): void => {},
            onClickContactAgent: (): void => {},
            onClickMortgageSimulation: (): void => {}
        }
    }
);

export default CardR123FeaturedContext;
