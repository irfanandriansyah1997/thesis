import React, { SFC } from 'react';

import CardComponent from '../../atomic/card/card.component';
import CardMediaComponent from './card-r123-featured-media.component';
import CardContentComponent from './card-r123-featured-content.component';
import CardHeadingComponent from './card-r123-featured-heading.component';

import { CardR123FeaturedPropsInterface } from './interface/component.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import StringHelper from '../../../shared/helper/string.helper';

/**
 * R123 Featured / Premier Card Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.04.30
 */
const CardR123Featured: SFC<CardR123FeaturedPropsInterface> = ({
    className,
    heading,
    content,
    media,
    action,
    link,
    ...res
}: CardR123FeaturedPropsInterface) => {
    const name: ComponentClassnameDefaultInterface = {
        [`ui-organisms-featured-card`]: true,
        [`${className}`]: ValidatorHelper.verifiedIsNotEmpty(className)
    };

    const { images, alt, caption, tier } = media;
    const {
        mortgageLinkText,
        title,
        address,
        landSize,
        buildingSize,
        propertyType,
        attribute
    } = content;
    const { onClickSave, onClickViewDetail } = action;
    const { agencyTitle, creationDate } = heading;
    return (
        <CardComponent
            className={StringHelper.objToString(name)}
            style={{
                width: 750,
                ...res
            }}
            boxShadow="r123"
        >
            <CardHeadingComponent
                agencyTitle={agencyTitle}
                creationDate={creationDate}
            />
            <CardMediaComponent
                images={images}
                alt={alt}
                onClick={onClickViewDetail}
                caption={caption}
                tier={tier}
            />
            <CardContentComponent
                mortgageLinkText={mortgageLinkText}
                title={title}
                address={address}
                landSize={landSize}
                buildingSize={buildingSize}
                propertyType={propertyType}
                attribute={attribute}
                onClickSave={onClickSave}
                link={link}
            />
        </CardComponent>
    );
};

export default CardR123Featured;
