import React, { SFC } from 'react';


import CardMediaComponent from './card-r123-basic-media.component';
import CardContentComponent from './card-r123-basic-content.component';

import StringHelper from '../../../shared/helper/string.helper';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import CardComponent from '../../../common/atomic/card/card.component';
import { CardR123BasicPropsInterface } from './interface/component.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';

/**
 * R123 Basic Card Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.04.27
 */
const CardR123Basic: SFC<CardR123BasicPropsInterface> = ({
    className,
    media,
    content,
    action,
    link,
    ...res
}: CardR123BasicPropsInterface) => {
    const name: ComponentClassnameDefaultInterface = {
        flex: true,
        [`ui-organisms-card`]: true,
        'flex-align-start': true,
        'flex-row': true,
        [`${className}`]: ValidatorHelper.verifiedIsNotEmpty(className)
    };

    const { images, alt } = media;
    const {
        mortgageLinkText,
        title,
        installment,
        address,
        priceTag,
        landSize,
        buildingSize,
        propertyType,
        attribute
    } = content;
    const { onClickSave, onClickViewDetail } = action;
    return (
        <CardComponent
            className={StringHelper.objToString(name)}
            style={{
                width: 750,
                height: 282,
                padding: 16,
                ...res
            }}
            boxShadow="r123"
        >
            <CardMediaComponent
                images={images}
                alt={alt}
                onClick={onClickViewDetail}
            />
            <CardContentComponent
                mortgageLinkText={mortgageLinkText}
                title={title}
                installment={installment}
                address={address}
                priceTag={priceTag}
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

export default CardR123Basic;
