import React, { SFC } from 'react';
import PropTypes from 'prop-types';

import LinkComponent from '../../atomic/link/link.component';
import ImageComponent from '../../atomic/image/image.component';

import { SearchPageCardMediaInterface } from '../../../shared/interface/search-page/search-page-card.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';
import StringHelper from '../../../shared/helper/string.helper';

/**
 * Card Media Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @description card content which contains media such as image
 * @since 2020.04.27
 */
const CardMediaComponent: SFC<SearchPageCardMediaInterface> = ({
    media,
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
                {media.map((item) => (
                    <ImageComponent
                        key={item.id}
                        src={item.src}
                        alt={item.alt}
                        width="100%"
                        height="100%"
                        objectFit="cover"
                    />
                ))}
            </LinkComponent>
        </div>
    );
};

CardMediaComponent.defaultProps = {
    onClick: undefined
};

CardMediaComponent.propTypes = {
    media: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            src: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onClick: PropTypes.func
};

export default CardMediaComponent;
