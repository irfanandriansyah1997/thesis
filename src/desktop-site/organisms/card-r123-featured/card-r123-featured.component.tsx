import React, { SFC } from 'react';

import CardComponent from '../../../common/atomic/card/card.component';
import CardR123FeaturedMediaComponent from './card-r123-featured-media.component';
import CardR123FeaturedContentComponent from './card-r123-featured-content.component';
import CardR123HeadingComponent from '../../molecules/card-heading-r123/card-heading-r123.component';

import StringHelper from '../../../shared/helper/string.helper';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import CardR123FeaturedContext from './context/card-r123-featured.context';
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
    id,
    link,
    tier,
    title,
    media,
    action,
    address,
    priceTag,
    attribute,
    mediaCount,
    agencyName,
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
            id,
            link,
            tier,
            media,
            title,
            address,
            priceTag,
            attribute,
            agencyName,
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
                {...res}
                boxShadow="r123"
            >
                <CardR123HeadingComponent
                    agencyName={agencyName}
                    publishingDate={publishingDate}
                />
                <CardR123FeaturedMediaComponent />
                <CardR123FeaturedContentComponent />
            </CardComponent>
        </CardR123FeaturedContext.Provider>
    );
};

export default CardR123Featured;
