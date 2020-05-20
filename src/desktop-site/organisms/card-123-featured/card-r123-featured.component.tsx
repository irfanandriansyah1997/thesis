import React, { SFC } from 'react';

import StringHelper from '../../../shared/helper/string.helper';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import CardR123FeaturedMediaComponent from './card-r123-featured-media.component';
import CardComponent from '../../../common/atomic/card/card.component';
import CardR123FeaturedHeadingComponent from './card-r123-featured-heading.component';
import CardR123FeaturedContext from './context/card-r123-featured.context';
import CardR123FeaturedContentComponent from './card-r123-featured-content.component';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';
import {
    CardR123FeaturedPropsInterface,
    CardR123FeaturedContextInterface
} from './interface/component.interface';

/**
 * R123 Featured / Premier Card Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.04.30
 */
const CardR123Featured: SFC<CardR123FeaturedPropsInterface> = ({
    link,
    tier,
    title,
    media,
    action,
    address,
    priceTag,
    attribute,
    agentName,
    mediaCount,
    installment,
    propertyType,
    publishingDate,
    ...res
}: CardR123FeaturedPropsInterface) => {
    const className: ComponentClassnameDefaultInterface = {
        [`ui-organisms-card-r123-featured`]: true,
        [`${res.className}`]: ValidatorHelper.verifiedIsNotEmpty(res.className)
    };
    delete res.className;

    const contextValue: CardR123FeaturedContextInterface = {
        action,
        data: {
            link,
            tier,
            media,
            title,
            address,
            priceTag,
            agentName,
            attribute,
            mediaCount,
            installment,
            propertyType,
            publishingDate
        }
    };

    return (
        <CardR123FeaturedContext.Provider value={contextValue}>
            <CardComponent
                className={StringHelper.objToString(className)}
                style={{ width: 750 }}
                {...res}
                boxShadow="r123"
            >
                <CardR123FeaturedHeadingComponent />
                <CardR123FeaturedMediaComponent />
                <CardR123FeaturedContentComponent />
            </CardComponent>
        </CardR123FeaturedContext.Provider>
    );
};

export default CardR123Featured;
