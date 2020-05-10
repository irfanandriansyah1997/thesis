import React, { SFC } from 'react';

import StringHelper from '../../../shared/helper/string.helper';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import CardMediaComponent from './card-r123-featured-media.component';
import CardComponent from '../../../common/atomic/card/card.component';
import CardContentComponent from './card-r123-featured-content.component';
import CardHeadingComponent from './card-r123-featured-heading.component';
import { CardR123FeaturedPropsInterface } from './interface/component.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';

/**
 * R123 Featured / Premier Card Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.04.30
 */
const CardR123Featured: SFC<CardR123FeaturedPropsInterface> = ({
    link,
    action,
    content,
    heading,
    className,
    cardMedia,
    carouselIndicator,
    ...res
}: CardR123FeaturedPropsInterface) => {
    const name: ComponentClassnameDefaultInterface = {
        [`ui-organisms-featured-card`]: true,
        [`${className}`]: ValidatorHelper.verifiedIsNotEmpty(className)
    };

    const { caption, tier, media } = cardMedia;
    const {
        title,
        address,
        landSize,
        attribute,
        buildingSize,
        propertyType,
        mortgageLinkText
    } = content;
    const { onClickSave, onClickViewDetail } = action;
    const { agencyTitle, creationDate } = heading;
    return (
        <CardComponent
            className={StringHelper.objToString(name)}
            style={{ width: 750 }}
            {...res}
            boxShadow="r123"
        >
            <CardHeadingComponent
                agencyTitle={agencyTitle}
                creationDate={creationDate}
            />
            <CardMediaComponent
                tier={tier}
                media={media}
                caption={caption}
                onClick={onClickViewDetail}
                carouselIndicator={carouselIndicator}
            />
            <CardContentComponent
                link={link}
                title={title}
                address={address}
                landSize={landSize}
                attribute={attribute}
                onClickSave={onClickSave}
                buildingSize={buildingSize}
                propertyType={propertyType}
                mortgageLinkText={mortgageLinkText}
            />
        </CardComponent>
    );
};

export default CardR123Featured;
