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
            publishingDate: ''
        },
        action: {
            onClickSave: (): void => undefined,
            onClickButtonSave: (): void => undefined,
            onClickViewDetail: (): void => undefined,
            onClickContactAgent: (): void => undefined,
            onClickMortgageSimulation: (): void => undefined
        }
    }
);

export default CardR123FeaturedContext;
