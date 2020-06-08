import React, { FunctionComponent } from 'react';

import StringHelper from '../../../shared/helper/string.helper';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import CardComponent from '../../../common/atomic/card/card.component';
import CardR123NewLaunchContext from './context/card-r123-newlaunch.context';
import CardR123NewLaunchHeadingComponent from './card-r123-newlaunch-heading.component';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';
import {
    CardR123NewLaunchPropsInterface,
    CardR123NewLaunchContextInterface
} from './interface/component.interface';

/**
 * R123 New Launch Card Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.06.08
 */
const CardR123Newlaunch: FunctionComponent<CardR123NewLaunchPropsInterface> = ({
    id,
    link,
    unit,
    title,
    media,
    action,
    address,
    priceTag,
    agencyName,
    mediaCount,
    propertyType,
    developerLogo,
    publishingDate,
    completionDate,
    ...res
}: CardR123NewLaunchPropsInterface) => {
    const className: ComponentClassnameDefaultInterface = {
        [`ui-organisms-card-r123-newlaunch`]: true,
        [`${res.className}`]: ValidatorHelper.verifiedIsNotEmpty(res.className)
    };
    delete res.className;

    const contextValue: CardR123NewLaunchContextInterface = {
        action,
        data: {
            id,
            link,
            unit,
            media,
            title,
            address,
            priceTag,
            mediaCount,
            agencyName,
            propertyType,
            developerLogo,
            publishingDate,
            completionDate
        }
    };

    return (
        <CardR123NewLaunchContext.Provider value={contextValue}>
            <CardComponent
                className={StringHelper.objToString(className)}
                {...res}
                boxShadow="r123"
            >
                <CardR123NewLaunchHeadingComponent />
            </CardComponent>
        </CardR123NewLaunchContext.Provider>
    );
};

export default CardR123Newlaunch;
