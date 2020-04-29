import React, { SFC, createElement } from 'react';
import PropTypes from 'prop-types';

import LinkComponent from '../../atomic/link/link.component';

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
    images,
    alt,
    onClickViewDetail
}) => {
    const name: ComponentClassnameDefaultInterface = {
        [`ui-organisms-card__media-wrapper`]: true,
        'flex-shrink-0': true
    };

    const image = createElement('img', {
        src: images,
        alt,
        style: { width: '100%', height: '100%', objectFit: 'cover' }
    });

    return (
        <div className={StringHelper.objToString(name)}>
            <LinkComponent
                className="card--media-link"
                noUnderline
                fontWeight={500}
                color="heading"
                onClick={onClickViewDetail}
            >
                {image}
            </LinkComponent>
        </div>
    );
};

CardMediaComponent.defaultProps = {
    onClickViewDetail: undefined
};

CardMediaComponent.propTypes = {
    images: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onClickViewDetail: PropTypes.func
};

export default CardMediaComponent;
