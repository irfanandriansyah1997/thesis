import React, { SFC } from 'react';
import PropTypes from 'prop-types';

import StringHelper from '../../../shared/helper/string.helper';
import TextComponent from '../../../common/atomic/text/text.component';
import LinkComponent from '../../../common/atomic/link/link.component';
import { CardR123FeaturedHeadingInterface } from './interface/component.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';

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
        flex: true,
        relative: true,
        'flex-align-baseline': true
    };

    return (
        <div className={StringHelper.objToString(name)}>
            <TextComponent
                tag="h2"
                styling="heading-6"
                className="info-title truncate"
            >
                <LinkComponent
                    noUnderline
                    href={link}
                    color="heading"
                    fontWeight={500}
                    styling="heading-6"
                    className="attribute-config__landsize-info"
                >
                    {agencyTitle}
                </LinkComponent>
            </TextComponent>
            <TextComponent
                tag="p"
                styling="tiny"
                className="info-title truncate"
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
