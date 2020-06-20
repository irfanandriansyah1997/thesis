import React, { FunctionComponent, useContext, ReactNode } from 'react';

import LinkComponent from '../../../common/atomic/link/link.component';
import IconComponent from '../../../common/atomic/icon/icon.component';
import ImageComponent from '../../../common/atomic/image/image.component';

import StringHelper from '../../../shared/helper/string.helper';
import CardR123NewLaunchContext from './context/card-r123-newlaunch.context';
import { CardR123NewLaunchContextInterface } from './interface/component.interface';
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
 * New Launch Card Media Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @description new launch card content which contains media such as image/slides
 * @since 2020.06.09
 */
const CardR123NewLaunchMediaComponent: FunctionComponent = () => {
    const { data } = useContext<CardR123NewLaunchContextInterface>(
        CardR123NewLaunchContext
    );
    const { media, link, priceTag, mediaCount, videoCount } = data;

    const name: ComponentClassnameDefaultInterface = {
        'ui-organisms-card-r123-newlaunch__media-section': true,
        relative: true
    };

    /**
     * Get media caption className
     */
    const captionClassName: ComponentClassnameDefaultInterface = {
        'ui-organisms-card-r123-newlaunch__media-section__caption': true,
        flex: true,
        absolute: true,
        'flex-align-end': true,
        'flex-justify-between': true
    };

    /**
     * Get price info className
     */
    const priceInfoClassName: ComponentClassnameDefaultInterface = {
        'ui-organisms-card-r123-newlaunch__price-info': true,
        flex: true,
        'flex-align-baseline': true
    };

    /**
     * Get attribute info className
     */
    const attributeInfoClassName: ComponentClassnameDefaultInterface = {
        'ui-organisms-card-r123-newlaunch__attribute-info': true,
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
            <div className="newlaunch-card--media">
                {media.length > 1 ? (
                    <div id="card-carousel" style={{ height: HEIGHT_PREMIER }}>
                        <CarouselComponent
                            item={media}
                            scrollEffect
                            onChangeActive={(): void => undefined}
                            itemLink={link}
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
                </div>
                <div
                    className={StringHelper.objToString(attributeInfoClassName)}
                >
                    <BadgesComponent
                        className="flex-justify-center"
                        color="newPropertyBadgeR123"
                    >
                        New Launch
                    </BadgesComponent>
                    <BadgesComponent color="headingR123" textColor="white">
                        <IconComponent color="white" size={12}>
                            rui-icon-camera
                        </IconComponent>
                        {mediaCount}
                        {videoCount && videoCount >= 1 ? (
                            <IconComponent color="white" size={18}>
                                rui-icon-play
                            </IconComponent>
                        ) : null}
                    </BadgesComponent>
                </div>
            </div>
        </section>
    );
};

CardR123NewLaunchMediaComponent.displayName = 'CardR123NewLaunchMediaComponent';

export default CardR123NewLaunchMediaComponent;
