import React, { SFC } from 'react';
import PropTypes from 'prop-types';

import TextComponent from '../../atomic/text/text.component';
import LinkComponent from '../../atomic/link/link.component';

import { CardR123BasicContentInterface } from './interface/component.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';
import StringHelper from '../../../shared/helper/string.helper';

/**
 * Card Media Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @description card content which contains text, button, etc
 * @since 2020.04.27
 */
const CardContentComponent: SFC<CardR123BasicContentInterface> = ({
    heading,
    title,
    address,
    priceTag,
    landSize,
    buildingSize,
    propertyType,
    // eslint-disable-next-line react/prop-types
    attribute
}) => {
    const name: ComponentClassnameDefaultInterface = {
        [`ui-organisms-card__content-wrapper`]: true
    };

    const [{ icon, value }] = attribute;

    return (
        <div className={StringHelper.objToString(name)}>
            <div className="card-heading flex flex-justify-end">{heading}</div>
            <div className="card--content">
                <div className="card--content__price">
                    <LinkComponent
                        className="card--content__price-info"
                        noUnderline
                        fontWeight={500}
                        color="heading"
                    >
                        {priceTag}
                    </LinkComponent>
                </div>
                <div className="card--content__info">
                    <TextComponent
                        tag="h2"
                        className="card--content__info-title"
                    >
                        <LinkComponent
                            className="card--content__info-title-link"
                            noUnderline
                            fontWeight={500}
                            color="heading"
                        >
                            {title}
                        </LinkComponent>
                    </TextComponent>
                    <TextComponent
                        tag="h3"
                        className="card--content__info-address"
                    >
                        <LinkComponent
                            className="card--content__info-address-link"
                            noUnderline
                            fontWeight={500}
                            color="heading"
                        >
                            {address}
                        </LinkComponent>
                    </TextComponent>
                </div>
                <div className="card--content__property-type">
                    <LinkComponent
                        className="card--content__property-type-info"
                        noUnderline
                        fontWeight={500}
                        color="heading"
                    >
                        {propertyType}
                    </LinkComponent>
                </div>
                <div className="card--content__property-attribute flex flex-row flex-justify-between flex-align-end">
                    <div className="card--content__property-attribute-config">
                        <div className="attribute__config-landsize">
                            <LinkComponent
                                className="attribute__config-landsize-info"
                                noUnderline
                                fontWeight={500}
                                color="heading"
                            >
                                {landSize}
                            </LinkComponent>
                        </div>
                        <div className="attribute__config-buildingsize">
                            <LinkComponent
                                className="attribute__config-buildingsize-info"
                                noUnderline
                                fontWeight={500}
                                color="heading"
                            >
                                {buildingSize}
                            </LinkComponent>
                        </div>
                    </div>
                    <div className="card--content__property-attribute-facility">
                        <ul className="attribute__facility-wrapper inline-flex">
                            <li className="attribute__facility-bedroom">
                                <LinkComponent icon={icon} noUnderline>
                                    {value}
                                </LinkComponent>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

CardContentComponent.defaultProps = {
    heading: undefined,
    title: '',
    address: '',
    priceTag: '',
    landSize: '',
    buildingSize: '',
    propertyType: ''
};

CardContentComponent.propTypes = {
    heading: PropTypes.node,
    title: PropTypes.string,
    address: PropTypes.string,
    priceTag: PropTypes.string,
    landSize: PropTypes.string,
    buildingSize: PropTypes.string,
    propertyType: PropTypes.string
};

export default CardContentComponent;
