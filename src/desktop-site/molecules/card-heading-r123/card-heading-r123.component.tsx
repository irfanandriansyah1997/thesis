import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import StringHelper from '../../../shared/helper/string.helper';
import TextComponent from '../../../common/atomic/text/text.component';
import { CardHeadingPropsInterface } from './interface/component.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';

/**
 * Card Heading Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @description card heading
 * @since 2020.05.04
 */
const CardR123HeadingComponent: FunctionComponent<CardHeadingPropsInterface> = ({
    agencyName,
    publishingDate
}: CardHeadingPropsInterface) => {
    const name: ComponentClassnameDefaultInterface = {
        [`ui-organisms-card-r123__heading`]: true,
        flex: true,
        relative: true,
        'flex-align-baseline': true
    };

    return (
        <div className={StringHelper.objToString(name)}>
            <TextComponent
                tag="h2"
                color="black"
                styling="heading-6"
                fontWeight={500}
                className="info-title truncate"
            >
                {agencyName}
            </TextComponent>
            <TextComponent
                tag="p"
                color="black"
                styling="tiny"
                className="info-title truncate"
                style={{ marginLeft: 8 }}
            >
                {publishingDate}
            </TextComponent>
        </div>
    );
};

CardR123HeadingComponent.displayName = 'CardR123HeadingComponent';

CardR123HeadingComponent.propTypes = {
    agencyName: PropTypes.string.isRequired,
    publishingDate: PropTypes.string.isRequired
};

export default CardR123HeadingComponent;
