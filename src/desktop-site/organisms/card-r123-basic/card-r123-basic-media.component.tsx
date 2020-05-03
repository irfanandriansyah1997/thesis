import React, { SFC } from 'react';
import PropTypes from 'prop-types';

import { SearchPageCardMediaInterface } from '../../../shared/interface/search-page/search-page-card.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';
import StringHelper from '../../../shared/helper/string.helper';
import LinkComponent from '../../../common/atomic/link/link.component';
import ImageComponent from '../../../common/atomic/image/image.component';

/**
 * Card Media Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @description card content which contains media such as image
 * @since 2020.04.27
 */
const CardMediaComponent: SFC<SearchPageCardMediaInterface> = ({
    images,
    alt,
    onClick
}) => {
    const name: ComponentClassnameDefaultInterface = {
        [`ui-organisms-card__media-wrapper`]: true,
        'flex-shrink-0': true
    };

    return (
        <div className={StringHelper.objToString(name)}>
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
                    width="100%"
                    height="100%"
                    objectFit="cover"
                />
            </LinkComponent>
        </div>
    );
};

CardMediaComponent.defaultProps = {
    onClick: undefined
};

CardMediaComponent.propTypes = {
    images: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

export default CardMediaComponent;
