/* eslint-disable react/no-array-index-key */
import React, { SFC, ReactNode } from 'react';
import PropTypes from 'prop-types';

import StringHelper from '../../../shared/helper/string.helper';
import TextComponent from '../../../common/atomic/text/text.component';
import IconComponent from '../../../common/atomic/icon/icon.component';
import LinkComponent from '../../../common/atomic/link/link.component';
import { CardR123BasicContentInterface } from './interface/component.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';

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
        noUnderline
        fontWeight={500}
        icon={<SaveIcon />}
        onClick={onClickSave}
        color="basicCardHeadingR123"
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
    mortgageLinkText
}) => (
    <LinkComponent
        noUnderline
        fontWeight={500}
        icon={<CalculatorIcon />}
        color="basicCardHeadingR123"
    >
        {mortgageLinkText}
    </LinkComponent>
);

MortgageButtonLink.defaultProps = {
    mortgageLinkText: ''
};

MortgageButtonLink.propTypes = {
    mortgageLinkText: PropTypes.string
};

/**
 * Card Media Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @description card content which contains text, button, etc
 * @since 2020.04.27
 */
const CardContentComponent: SFC<CardR123BasicContentInterface> = ({
    link,
    title,
    address,
    priceTag,
    landSize,
    attribute,
    installment,
    onClickSave,
    propertyType,
    buildingSize,
    mortgageLinkText
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
                    attribute.map((item, index) => (
                        <li
                            className="attribute__facility-detail"
                            key={`card-key-attribute-index-${title}-${index}`}
                        >
                            <LinkComponent
                                noUnderline
                                href={link}
                                icon={item.icon}
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
                <MortgageButtonLink mortgageLinkText={mortgageLinkText} />
                <SaveButton onClickSave={onClickSave} />
            </div>
            <div className="card--content absolute">
                <div className="card--content__price">
                    <LinkComponent
                        href={link}
                        noUnderline
                        fontWeight={700}
                        styling="heading-4"
                        color="basicCardContentR123"
                        className="card--content__price-info inline"
                    >
                        {priceTag}
                    </LinkComponent>
                    <TextComponent
                        tag="p"
                        color="basicCardContentR123"
                        className="card--content__info-installment"
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
                            href={link}
                            noUnderline
                            fontWeight={500}
                            styling="heading-6"
                            color="basicCardContentR123"
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
                            href={link}
                        >
                            {address}
                        </LinkComponent>
                    </TextComponent>
                </div>
                <div className="card--content__property-type">
                    <LinkComponent
                        className="card--content__property-type-info"
                        href={link}
                        noUnderline
                        fontWeight={500}
                        color="basicCardContentR123"
                    >
                        {propertyType}
                    </LinkComponent>
                </div>
                <div
                    className={StringHelper.objToString({
                        'card--content__property-attribute': true,
                        flex: true,
                        'flex-row': true,
                        'flex-align-end': true,
                        'flex-justify-between': true
                    })}
                >
                    <div className="card--content__property-attribute-config">
                        <div className="attribute__config-landsize">
                            <LinkComponent
                                className="attribute__config-landsize-info"
                                href={link}
                                noUnderline
                                color="heading"
                                fontWeight={500}
                            >
                                {landSize}
                            </LinkComponent>
                        </div>
                        <div className="attribute__config-buildingsize">
                            <LinkComponent
                                className="attribute__config-buildingsize-info"
                                noUnderline
                                href={link}
                                color="heading"
                                fontWeight={500}
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
    address: '',
    priceTag: '',
    landSize: '',
    installment: '',
    buildingSize: '',
    propertyType: '',
    mortgageLinkText: ''
};

CardContentComponent.propTypes = {
    title: PropTypes.string,
    address: PropTypes.string,
    priceTag: PropTypes.string,
    landSize: PropTypes.string,
    installment: PropTypes.string,
    buildingSize: PropTypes.string,
    propertyType: PropTypes.string,
    link: PropTypes.string.isRequired,
    mortgageLinkText: PropTypes.string,
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
