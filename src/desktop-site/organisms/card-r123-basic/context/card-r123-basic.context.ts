import { createContext } from 'react';

import { CardR123BasicContextInterface } from '../interface/component.interface';

/**
 * Card R123 Basic Context
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.20
 */
const CardR123BasicContext = createContext<CardR123BasicContextInterface>({
    data: {
        link: '',
        media: [],
        title: '',
        address: '',
        priceTag: '',
        installment: '',
        propertyType: '',
        attribute: {
            carport: '',
            bedroom: '',
            bathroom: '',
            landSize: '',
            buildingSize: ''
        }
    },
    action: {
        onClickSave: (): void => undefined,
        onClickMortgageSimulation: (): void => undefined
    }
});

export default CardR123BasicContext;
