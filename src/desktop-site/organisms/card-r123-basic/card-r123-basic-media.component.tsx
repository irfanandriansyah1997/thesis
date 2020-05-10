import React, { SFC } from 'react';
import PropTypes from 'prop-types';

import StringHelper from '../../../shared/helper/string.helper';
import LinkComponent from '../../../common/atomic/link/link.component';
import ImageComponent from '../../../common/atomic/image/image.component';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';
import { R123SearchPageCardMediaInterface } from '../../../shared/interface/rumah-123/search-page/search-page-card.interface';

/**
 * Card Media Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @description card content which contains media such as image
 * @since 2020.04.27
 */
const CardMediaComponent: SFC<R123SearchPageCardMediaInterface> = ({
    media,
    onClick
}) => {
    const name: ComponentClassnameDefaultInterface = {
        'ui-organisms-card__media-wrapper': true,
        'flex-shrink-0': true
    };

    return (
        <div className={StringHelper.objToString(name)}>
            <LinkComponent
                className="card--media-link"
                noUnderline
                color="heading"
                fontWeight={500}
                onClick={onClick}
            >
                {media.map((item) => (
                    <ImageComponent
                        width="100%"
                        height="100%"
                        key={item.id}
                        src={item.src}
                        alt={item.alt}
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
