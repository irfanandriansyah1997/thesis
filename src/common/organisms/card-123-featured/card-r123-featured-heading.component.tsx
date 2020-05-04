import React, { SFC } from 'react';
import PropTypes from 'prop-types';

import TextComponent from '../../atomic/text/text.component';
import LinkComponent from '../../atomic/link/link.component';

import { CardR123FeaturedHeadingInterface } from './interface/component.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';
import StringHelper from '../../../shared/helper/string.helper';

/**
 * Featured / Premier Card Heading Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @description featured / premier card heading
 * @since 2020.05.04
 */
const CardHeadingComponent: SFC<CardR123FeaturedHeadingInterface> = ({
    agencyTitle,
    creationDate,
    link
}) => {
    const name: ComponentClassnameDefaultInterface = {
        [`ui-organisms-featured-card__heading-wrapper`]: true,
        relative: true,
        flex: true,
        'flex-align-baseline': true
    };

    return (
        <div className={StringHelper.objToString(name)}>
            <TextComponent
                tag="h2"
                className="info-title truncate"
                styling="heading-6"
            >
                <LinkComponent
                    className="attribute-config__landsize-info"
                    noUnderline
                    fontWeight={500}
                    color="heading"
                    styling="heading-6"
                    href={link}
                >
                    {agencyTitle}
                </LinkComponent>
            </TextComponent>
            <TextComponent
                tag="p"
                className="info-title truncate"
                styling="tiny"
                style={{ marginLeft: 8 }}
            >
                {creationDate}
            </TextComponent>
        </div>
    );
};

CardHeadingComponent.defaultProps = {
    link: ''
};

CardHeadingComponent.propTypes = {
    agencyTitle: PropTypes.string.isRequired,
    creationDate: PropTypes.string.isRequired,
    link: PropTypes.string
};

export default CardHeadingComponent;
