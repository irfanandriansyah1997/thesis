/* eslint-disable react/no-array-index-key */

import React, { SFC, ReactNode } from 'react';
import PropTypes from 'prop-types';

import StringHelper from '../../../shared/helper/string.helper';
import TextComponent from '../../../common/atomic/text/text.component';
import IconComponent from '../../../common/atomic/icon/icon.component';
import LinkComponent from '../../../common/atomic/link/link.component';
import ButtonComponent from '../../../common/atomic/button/button.component';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';
import {
    R123SearchPageMortgageType as MortgageType,
    R123SearchPageOnClickSaveType as OnClickType,
    R123SearchPageCardContentInterface as content
} from '../../../shared/interface/rumah-123/search-page/search-page-card.interface';

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
const SaveButton: SFC<OnClickType> = ({ onClickSave }) => (
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
const MortgageButtonLink: SFC<MortgageType> = ({ mortgageLinkText }) => (
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
 * Create phone icon
 * @return {string}
 */
const PhoneIcon: SFC = () => (
    <IconComponent color="outline" size={18}>
        rui-icon-call
    </IconComponent>
);

/**
 * Create contact agent button
 * @return {string}
 */
const ContactAgentButton: SFC = () => (
    <LinkComponent
        icon={<PhoneIcon />}
        color="outline"
        noUnderline
        fontWeight={500}
    >
        Kontak Agen
    </LinkComponent>
);

/**
 * Featured / Premier Card Content Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @description featured / premier card content which contains text, button, etc
 * @since 2020.04.30
 */
const CardContentComponent: SFC<content> = ({
    title,
    mortgageLinkText,
    address,
    landSize,
    buildingSize,
    propertyType,
    attribute,
    onClickSave,
    link,
    ...res
}) => {
    const name: ComponentClassnameDefaultInterface = {
        [`ui-organisms-featured-card__content-wrapper`]: true,
        flex: true,
        'flex-column': true,
        relative: true
    };

    /**
     * Get attribute
     */
    const getAttribute = (): ReactNode => {
        return (
            <ul className="featured-card-attribute inline-flex">
                {attribute &&
                    attribute.map((item, index) => (
                        <li
                            key={index}
                            className="featured-card-attribute__facility"
                        >
                            <LinkComponent
                                icon={item.icon}
                                noUnderline
                                fontWeight={500}
                                color="headingR123"
                                href={link}
                            >
                                {item.value}
                            </LinkComponent>
                        </li>
                    ))}
            </ul>
        );
    };

    /**
     * Get top row card content className
     */
    const topRowContentClassName: ComponentClassnameDefaultInterface = {
        'featured-card--content__top-row': true,
        flex: true,
        'flex-justify-between': true,
        'flex-align-baseline': true
    };

    /**
     * Get bottom row card content className
     */
    const topBottomContentClassName: ComponentClassnameDefaultInterface = {
        'featured-card--content__bottom-row': true,
        flex: true,
        'flex-align-end': true,
        'flex-justify-between': true
    };

    return (
        <div
            className={StringHelper.objToString(name)}
            style={{ ...res, minHeight: 147, padding: 16, paddingBottom: 24 }}
        >
            <div className="featured-card--content">
                <div
                    className={StringHelper.objToString(topRowContentClassName)}
                >
                    <div className="left-content no-wrap">
                        <TextComponent
                            tag="h2"
                            color="text"
                            className="info-title truncate"
                        >
                            <LinkComponent
                                href={link}
                                noUnderline
                                fontWeight={500}
                                styling="heading-6"
                                color="headingR123"
                                className="card--content__info-title-link"
                            >
                                {title}
                            </LinkComponent>
                        </TextComponent>
                        <TextComponent
                            tag="h3"
                            color="text"
                            className="info-address"
                        >
                            <LinkComponent
                                noUnderline
                                href={link}
                                fontWeight={500}
                                color="headingR123"
                                className="card--content__info-address-link"
                            >
                                {address}
                            </LinkComponent>
                        </TextComponent>
                    </div>
                    <div className="right-content no-wrap">
                        <MortgageButtonLink
                            mortgageLinkText={mortgageLinkText}
                        />
                        <SaveButton onClickSave={onClickSave} />
                    </div>
                </div>
                <div className="featured-card--content__middle-row">
                    <div className="property-type">
                        <LinkComponent
                            noUnderline
                            href={link}
                            fontWeight={500}
                            color="headingR123"
                            className="card--content__property-type-info"
                        >
                            {propertyType}
                        </LinkComponent>
                    </div>
                    <div className="attribute-config flex">
                        <div className="attribute-config__buildingsize">
                            <LinkComponent
                                href={link}
                                noUnderline
                                color="heading"
                                fontWeight={500}
                                className="attribute-config__buildingsize-info"
                            >
                                {buildingSize}
                            </LinkComponent>
                        </div>
                        <div className="attribute-config__landsize">
                            <LinkComponent
                                href={link}
                                noUnderline
                                color="heading"
                                fontWeight={500}
                                className="attribute-config__landsize-info"
                            >
                                {landSize}
                            </LinkComponent>
                        </div>
                    </div>
                </div>
                <div
                    className={StringHelper.objToString(
                        topBottomContentClassName
                    )}
                >
                    <div className="left-content">{getAttribute()}</div>
                    <div className="right-content">
                        <ContactAgentButton />
                        <ButtonComponent
                            outline
                            size="default"
                            className="contact-detail-button"
                        >
                            Lihat Detail
                        </ButtonComponent>
                    </div>
                </div>
            </div>
        </div>
    );
};

CardContentComponent.defaultProps = {
    title: '',
    address: '',
    landSize: '',
    buildingSize: '',
    propertyType: '',
    mortgageLinkText: ''
};

CardContentComponent.propTypes = {
    title: PropTypes.string,
    address: PropTypes.string,
    landSize: PropTypes.string,
    buildingSize: PropTypes.string,
    propertyType: PropTypes.string,
    mortgageLinkText: PropTypes.string,
    onClickSave: PropTypes.func.isRequired,
    attribute: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.node.isRequired,
            alt: PropTypes.string,
            value: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    link: PropTypes.string.isRequired
};

export default CardContentComponent;
