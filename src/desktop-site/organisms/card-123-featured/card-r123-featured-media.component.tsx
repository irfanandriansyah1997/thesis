import React, { SFC } from 'react';
import PropTypes from 'prop-types';

import StringHelper from '../../../shared/helper/string.helper';
import LinkComponent from '../../../common/atomic/link/link.component';
import TextComponent from '../../../common/atomic/text/text.component';
import IconComponent from '../../../common/atomic/icon/icon.component';
import ImageComponent from '../../../common/atomic/image/image.component';
import CarouselComponent from '../../../common/molecules/carousel/carousel.component';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';
import {
    HEIGHT_PREMIER,
    HEIGHT_NON_PREMIER
} from '../../../shared/constant/component.constant';
import {
    ListingCardTier,
    R123SearchPageCardMediaInterface
} from '../../../shared/interface/rumah-123/search-page/search-page-card.interface';

/**
 * Featured / Premier Card Media Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @description featured / premier card content which contains media such as image
 * @since 2020.04.30
 */
const CardMediaComponent: SFC<R123SearchPageCardMediaInterface> = ({
    media,
    tier,
    onClick,
    caption,
    carouselIndicator
}) => {
    const name: ComponentClassnameDefaultInterface = {
        'ui-organisms-featured-card__media-wrapper': true,
        relative: true
    };

    /**
     * Get Flagging Badge attribute
     */
    const getFlaggingBadge = (): string => {
        let badge = '';

        if (caption) {
            if (tier === 'premier') {
                badge = 'Premier';
            } else if (tier === 'featured') {
                badge = 'Featured';
            }
        }
        return badge;
    };

    /**
     * Get media caption className
     */
    const captionClassName: ComponentClassnameDefaultInterface = {
        'featured-card--media-caption': true,
        flex: true,
        'flex-row': true,
        'flex-align-end': true,
        'flex-justify-between': true,
        absolute: true
    };

    /**
     * Get price info className
     */
    const priceInfoClassName: ComponentClassnameDefaultInterface = {
        'price-info': true,
        flex: true,
        'flex-row': true,
        'flex-align-baseline': true
    };

    const basicClassName: ComponentClassnameDefaultInterface = {
        'inline-flex': true,
        'flex-align-center': true,
        'flex-justify-center': true,
        'no-wrap': true
    };

    /**
     * Get flagging badge className
     */
    const flaggingBadgeClassName: ComponentClassnameDefaultInterface = {
        ...basicClassName,
        'poster-attribute__flaggin-badge': true
    };

    /**
     * Get media badge className
     */
    const mediaBadgeClassName: ComponentClassnameDefaultInterface = {
        ...basicClassName,
        'poster-attribute__medias-badge': true
    };

    return (
        <div className={StringHelper.objToString(name)}>
            <div className="featured-card--media">
                {tier === 'premier' && media.length > 1 ? (
                    <div id="card-carousel" style={{ height: HEIGHT_PREMIER }}>
                        <CarouselComponent
                            item={media}
                            scrollEffect
                            onChangeActive={(): void => undefined}
                            indicator={carouselIndicator || undefined}
                        />
                    </div>
                ) : (
                    <LinkComponent
                        noUnderline
                        color="heading"
                        fontWeight={500}
                        onClick={onClick}
                        className="card--media-link"
                    >
                        {media.map((item) => (
                            <ImageComponent
                                width={750}
                                key={item.id}
                                src={item.src}
                                alt={item.alt}
                                objectFit="cover"
                                height={HEIGHT_NON_PREMIER}
                            />
                        ))}
                    </LinkComponent>
                )}
            </div>
            <div className={StringHelper.objToString(captionClassName)}>
                <div className={StringHelper.objToString(priceInfoClassName)}>
                    <LinkComponent
                        noUnderline
                        color="white"
                        fontWeight={700}
                        styling="heading-4"
                        className="price-info__price inline"
                    >
                        {caption && caption.priceTag}
                    </LinkComponent>
                    <LinkComponent
                        noUnderline
                        fontWeight={700}
                        styling="heading-4"
                        className="price-info__installment inline"
                    >
                        <TextComponent
                            tag="p"
                            color="white"
                            style={{ marginLeft: 8 }}
                        >
                            {caption && caption.installment}
                        </TextComponent>
                    </LinkComponent>
                </div>
                <div className="poster-attribute flex flex-row">
                    <TextComponent
                        tag="p"
                        styling="caption"
                        color={tier === 'premier' ? 'hoverOutline' : 'white'}
                        className={StringHelper.objToString(
                            flaggingBadgeClassName
                        )}
                        style={{
                            backgroundColor:
                                tier === 'premier' ? '#ffb200' : '#00beb3'
                        }}
                    >
                        {getFlaggingBadge()}
                    </TextComponent>
                    <div
                        className={StringHelper.objToString(
                            mediaBadgeClassName
                        )}
                    >
                        <IconComponent color="basicCardHeadingR123" size={12}>
                            rui-icon-camera
                        </IconComponent>
                        <TextComponent
                            tag="p"
                            color="white"
                            styling="caption"
                            style={{ marginLeft: 4 }}
                        >
                            {caption && caption.numMedias}
                        </TextComponent>
                    </div>
                </div>
            </div>
        </div>
    );
};

CardMediaComponent.defaultProps = {
    onClick: undefined,
    tier: undefined,
    carouselIndicator: undefined
};

CardMediaComponent.propTypes = {
    media: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            src: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    carouselIndicator: PropTypes.shape({
        previous: PropTypes.string.isRequired,
        next: PropTypes.string.isRequired
    }),
    onClick: PropTypes.func,
    caption: PropTypes.shape({
        priceTag: PropTypes.string,
        installment: PropTypes.string,
        badge: PropTypes.string,
        numMedias: PropTypes.number
    }).isRequired,
    tier: PropTypes.oneOf<ListingCardTier>(['featured', 'premier'])
};

export default CardMediaComponent;
