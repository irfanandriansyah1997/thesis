import React, { SFC, useContext, ReactNode } from 'react';

import StringHelper from '../../../shared/helper/string.helper';
import LinkComponent from '../../../common/atomic/link/link.component';
import IconComponent from '../../../common/atomic/icon/icon.component';
import ImageComponent from '../../../common/atomic/image/image.component';
import CardR123FeaturedContext from './context/card-r123-featured.context';
import { CardR123FeaturedContextInterface } from './interface/component.interface';
import CarouselComponent from '../../../common/molecules/carousel/carousel.component';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';
import {
    HEIGHT_PREMIER,
    HEIGHT_NON_PREMIER
} from '../../../shared/constant/component.constant';
import BadgesComponent from '../../../common/atomic/badges/badges.component';
import {
    ComponentStylingTypography,
    ComponentFontWeightTypography
} from '../../../shared/interface/component/component-typography.interface';

/**
 * Featured / Premier Card Media Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @description featured / premier card content which contains media such as image
 * @since 2020.04.30
 */
const CardR123FeaturedMediaComponent: SFC = () => {
    const { data } = useContext<CardR123FeaturedContextInterface>(
        CardR123FeaturedContext
    );
    const { media, tier, link, priceTag, installment, mediaCount } = data;

    const name: ComponentClassnameDefaultInterface = {
        'ui-organisms-card-r123-featured__media-section': true,
        relative: true
    };

    /**
     * Get Flagging Badge attribute
     * @return {string}
     */
    const flaggingBadge = tier === 'premier' ? 'Premier' : 'Featured';

    /**
     * Get media caption className
     */
    const captionClassName: ComponentClassnameDefaultInterface = {
        'ui-organisms-card-r123-featured__media-section__caption': true,
        flex: true,
        absolute: true,
        'flex-align-end': true,
        'flex-justify-between': true
    };

    /**
     * Get price info className
     */
    const priceInfoClassName: ComponentClassnameDefaultInterface = {
        'ui-organisms-card-r123-featured__price-info': true,
        flex: true,
        'flex-align-baseline': true
    };

    /**
     * Get attribute info className
     */
    const attributeInfoClassName: ComponentClassnameDefaultInterface = {
        'ui-organisms-card-r123-featured__attribute-info': true,
        flex: true
    };

    /**
     *
     * @param text
     * @param className
     * @param fontWeight
     * @param styling
     */
    const generateTextComponent = (
        text: string,
        styling: ComponentStylingTypography,
        fontWeight: ComponentFontWeightTypography
    ): ReactNode => {
        return (
            <LinkComponent
                noUnderline
                color="white"
                styling={styling}
                fontWeight={fontWeight}
            >
                {text}
            </LinkComponent>
        );
    };

    return (
        <section className={StringHelper.objToString(name)}>
            <div className="featured-card--media">
                {tier === 'premier' && media.length > 1 ? (
                    <div id="card-carousel" style={{ height: HEIGHT_PREMIER }}>
                        <CarouselComponent
                            item={media}
                            scrollEffect
                            onChangeActive={(): void => undefined}
                        />
                    </div>
                ) : (
                    <LinkComponent noUnderline href={link}>
                        <ImageComponent
                            width={750}
                            src={media[0].src}
                            alt={media[0].alt}
                            objectFit="cover"
                            height={HEIGHT_NON_PREMIER}
                        />
                    </LinkComponent>
                )}
            </div>
            <div className={StringHelper.objToString(captionClassName)}>
                <div className={StringHelper.objToString(priceInfoClassName)}>
                    {generateTextComponent(priceTag, 'heading-4', 700)}
                    {generateTextComponent(installment, 'default', 400)}
                </div>
                <div
                    className={StringHelper.objToString(attributeInfoClassName)}
                >
                    <BadgesComponent
                        className="flex-justify-center"
                        color={
                            tier === 'premier' ? 'premiumR123' : 'featuredR123'
                        }
                        textColor={
                            tier === 'premier' ? 'headingDarkerR123' : 'white'
                        }
                    >
                        {flaggingBadge}
                    </BadgesComponent>
                    <BadgesComponent color="headingR123" textColor="white">
                        <IconComponent color="white" size={12}>
                            rui-icon-camera
                        </IconComponent>
                        {mediaCount}
                    </BadgesComponent>
                </div>
            </div>
        </section>
    );
};

CardR123FeaturedMediaComponent.displayName = 'CardR123FeaturedMediaComponent';

export default CardR123FeaturedMediaComponent;
