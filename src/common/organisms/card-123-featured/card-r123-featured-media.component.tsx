import React, { SFC } from 'react';
import PropTypes from 'prop-types';

import LinkComponent from '../../atomic/link/link.component';
import ImageComponent from '../../atomic/image/image.component';
import TextComponent from '../../atomic/text/text.component';
import IconComponent from '../../atomic/icon/icon.component';

import {
    SearchPageCardMediaInterface,
    ListingCardTier
} from '../../../shared/interface/search-page/search-page-card.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';

import StringHelper from '../../../shared/helper/string.helper';

/**
 * Featured / Premier Card Media Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @description featured / premier card content which contains media such as image
 * @since 2020.04.30
 */
const CardMediaComponent: SFC<SearchPageCardMediaInterface> = ({
    images,
    alt,
    onClick,
    caption,
    tier
}) => {
    const name: ComponentClassnameDefaultInterface = {
        [`ui-organisms-featured-card__media-wrapper`]: true,
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

    return (
        <div className={StringHelper.objToString(name)}>
            <div className="featured-card--media">
                <LinkComponent
                    className="card--media-link"
                    noUnderline
                    fontWeight={500}
                    color="heading"
                    onClick={onClick}
                >
                    <ImageComponent
                        src={images}
                        alt={alt}
                        width={750}
                        height={tier === 'premier' ? 420 : 320}
                        objectFit="cover"
                    />
                </LinkComponent>
            </div>
            <div className="featured-card--media-caption flex flex-row flex-align-end flex-justify-between absolute">
                <div className="price-info flex flex-row flex-align-baseline">
                    <LinkComponent
                        className="price-info__price inline"
                        noUnderline
                        fontWeight={700}
                        color="white"
                        styling="heading-4"
                    >
                        {caption && caption.priceTag}
                    </LinkComponent>
                    <LinkComponent
                        className="price-info__installment inline"
                        noUnderline
                        fontWeight={700}
                        styling="heading-4"
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
                        className="poster-attribute__flaggin-badge inline-flex flex-align-center flex-justify-center no-wrap"
                        color={tier === 'premier' ? 'hoverOutline' : 'white'}
                        styling="caption"
                        style={{
                            backgroundColor:
                                tier === 'premier' ? '#ffb200' : '#00beb3'
                        }}
                    >
                        {getFlaggingBadge()}
                    </TextComponent>
                    <div className="poster-attribute__medias-badge inline-flex flex-align-center flex-justify-center no-wrap">
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
    tier: undefined
};

CardMediaComponent.propTypes = {
    images: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
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
