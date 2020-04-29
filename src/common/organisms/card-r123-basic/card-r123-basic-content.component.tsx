import React, { SFC, ReactNode } from 'react';
import PropTypes from 'prop-types';

import TextComponent from '../../atomic/text/text.component';
import IconComponent from '../../atomic/icon/icon.component';
import LinkComponent from '../../atomic/link/link.component';

import { CardR123BasicContentInterface } from './interface/component.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';
import StringHelper from '../../../shared/helper/string.helper';

/**
 * Create save icon
 * @return {string}
 */
const SaveIcon: SFC = () => (
    <IconComponent color="basicCardHeadingR123" size={18}>
        rui-icon-save-hollow
    </IconComponent>
);

/**
 * Create save button
 * @return {string}
 */
const SaveButton: SFC<CardR123BasicContentInterface> = ({ onClickSave }) => (
    <LinkComponent
        icon={<SaveIcon />}
        color="basicCardHeadingR123"
        noUnderline
        fontWeight={500}
        onClick={onClickSave}
        style={{ marginLeft: 16 }}
    >
        Simpan
    </LinkComponent>
);

SaveButton.propTypes = {
    onClickSave: PropTypes.func.isRequired
};

/**
 * Create calculator icon
 * @return {string}
 */
const CalculatorIcon: SFC = () => (
    <IconComponent color="basicCardHeadingR123" size={18}>
        rui-icon-calculator
    </IconComponent>
);

/**
 * Create mortgage link button
 * @return {string}
 */
const MortgageButtonLink: SFC<CardR123BasicContentInterface> = ({
    headingText
}) => (
    <LinkComponent
        icon={<CalculatorIcon />}
        color="basicCardHeadingR123"
        noUnderline
        fontWeight={500}
    >
        {headingText}
    </LinkComponent>
);

MortgageButtonLink.defaultProps = {
    headingText: ''
};

MortgageButtonLink.propTypes = {
    headingText: PropTypes.string
};

/**
 * Card Media Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @description card content which contains text, button, etc
 * @since 2020.04.27
 */
const CardContentComponent: SFC<CardR123BasicContentInterface> = ({
    title,
    headingText,
    installment,
    address,
    priceTag,
    landSize,
    buildingSize,
    propertyType,
    attribute,
    onClickSave
}) => {
    const name: ComponentClassnameDefaultInterface = {
        [`ui-organisms-card__content-wrapper`]: true,
        relative: true
    };

    /**
     * Get attribute
     */
    const getAttribute = (): ReactNode => {
        return (
            <ul className="attribute__facility-wrapper inline-flex">
                {attribute &&
                    // eslint-disable-next-line react/prop-types
                    attribute.map((item, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <li key={index} className="attribute__facility-detail">
                            <LinkComponent
                                icon={item.icon}
                                noUnderline
                                fontWeight={500}
                                color="basicCardContentR123"
                            >
                                {item.value}
                            </LinkComponent>
                        </li>
                    ))}
            </ul>
        );
    };

    return (
        <div className={StringHelper.objToString(name)}>
            <div className="card-heading flex flex-justify-end">
                <MortgageButtonLink headingText={headingText} />
                <SaveButton onClickSave={onClickSave} />
            </div>
            <div className="card--content absolute">
                <div className="card--content__price">
                    <LinkComponent
                        className="card--content__price-info inline"
                        noUnderline
                        fontWeight={700}
                        color="basicCardContentR123"
                        styling="heading-4"
                    >
                        {priceTag}
                    </LinkComponent>
                    <TextComponent
                        tag="p"
                        className="card--content__info-installment"
                        color="basicCardContentR123"
                        style={{ marginTop: 4 }}
                    >
                        {installment}
                    </TextComponent>
                </div>
                <div className="card--content__info no-wrap">
                    <TextComponent
                        tag="h2"
                        className="card--content__info-title truncate"
                    >
                        <LinkComponent
                            className="card--content__info-title-link"
                            noUnderline
                            fontWeight={500}
                            color="basicCardContentR123"
                            styling="heading-6"
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
                            color="basicCardContentR123"
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
                        color="basicCardContentR123"
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
                        {getAttribute()}
                    </div>
                </div>
            </div>
        </div>
    );
};

CardContentComponent.defaultProps = {
    title: '',
    headingText: '',
    installment: '',
    address: '',
    priceTag: '',
    landSize: '',
    buildingSize: '',
    propertyType: ''
};

CardContentComponent.propTypes = {
    title: PropTypes.string,
    headingText: PropTypes.string,
    installment: PropTypes.string,
    address: PropTypes.string,
    priceTag: PropTypes.string,
    landSize: PropTypes.string,
    buildingSize: PropTypes.string,
    propertyType: PropTypes.string,
    onClickSave: PropTypes.func.isRequired,
    attribute: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.node.isRequired,
            alt: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
};

export default CardContentComponent;
