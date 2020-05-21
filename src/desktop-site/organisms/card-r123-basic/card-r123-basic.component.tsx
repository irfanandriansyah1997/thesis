import React, { SFC } from 'react';

import StringHelper from '../../../shared/helper/string.helper';
import CardMediaComponent from './card-r123-basic-media.component';
import CardR123BasicContext from './context/card-r123-basic.context';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import CardComponent from '../../../common/atomic/card/card.component';
import CardContentComponent from './card-r123-basic-content.component';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';
import {
    CardR123BasicPropsInterface,
    CardR123BasicContextInterface
} from './interface/component.interface';

/**
 * R123 Basic Card Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.04.27
 */
const CardR123Basic: SFC<CardR123BasicPropsInterface> = ({
    id,
    link,
    media,
    title,
    action,
    address,
    priceTag,
    attribute,
    installment,
    propertyType,
    ...res
}: CardR123BasicPropsInterface) => {
    const name: ComponentClassnameDefaultInterface = {
        'ui-organisms-card-r123-basic': true,
        flex: true,
        relative: true,
        'flex-row': true,
        'flex-align-start': true,
        [`${res.className}`]: ValidatorHelper.verifiedIsNotEmpty(res.className)
    };
    delete res.className;

    const contextValue: CardR123BasicContextInterface = {
        action,
        data: {
            id,
            link,
            media,
            title,
            address,
            priceTag,
            attribute,
            installment,
            propertyType
        }
    };

    return (
        <CardR123BasicContext.Provider value={contextValue}>
            <CardComponent
                className={StringHelper.objToString(name)}
                style={{
                    width: 750,
                    height: 282,
                    padding: 16
                }}
                {...res}
                boxShadow="r123"
            >
                <CardMediaComponent />
                <CardContentComponent />
            </CardComponent>
        </CardR123BasicContext.Provider>
    );
};

export default CardR123Basic;
