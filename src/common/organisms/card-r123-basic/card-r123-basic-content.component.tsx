import React, { SFC } from 'react';
import PropTypes from 'prop-types';

import TextComponent from '../../atomic/text/text.component';
import IconComponent from '../../atomic/icon/icon.component';
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
    headingText,
    title,
    installment,
    address,
    priceTag,
    landSize,
    buildingSize,
    propertyType,
    // eslint-disable-next-line react/prop-types
    attribute,
    onClickSave
}) => {
    const name: ComponentClassnameDefaultInterface = {
        [`ui-organisms-card__content-wrapper`]: true
    };

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
    const SaveButton: SFC = () => (
        <LinkComponent
            icon={<SaveIcon />}
            color="basicCardHeadingR123"
            noUnderline
            onClick={onClickSave}
            style={{ marginLeft: 16 }}
        >
            Simpan
        </LinkComponent>
    );

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
    const MortgageButtonLink: SFC = () => (
        <LinkComponent
            icon={<CalculatorIcon />}
            color="basicCardHeadingR123"
            noUnderline
            onClick={(): void => undefined}
        >
            {headingText}
        </LinkComponent>
    );

    const [{ icon, value }] = attribute;

    return (
        <div className={StringHelper.objToString(name)}>
            <div className="card-heading flex flex-justify-end">
                <MortgageButtonLink />
                <SaveButton />
            </div>
            <div className="card--content">
                <div className="card--content__price">
                    <LinkComponent
                        className="card--content__price-info"
                        noUnderline
                        fontWeight={500}
                        color="basicCardContentR123"
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
                <div className="card--content__info">
                    <TextComponent
                        tag="h2"
                        className="card--content__info-title"
                    >
                        <LinkComponent
                            className="card--content__info-title-link"
                            noUnderline
                            fontWeight={500}
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
                        <ul className="attribute__facility-wrapper inline-flex">
                            <li className="attribute__facility-bedroom">
                                <LinkComponent
                                    icon={icon}
                                    noUnderline
                                    color="basicCardContentR123"
                                >
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
    title: '',
    installment: '',
    address: '',
    priceTag: '',
    landSize: '',
    buildingSize: '',
    propertyType: '',
    headingText: ''
};

CardContentComponent.propTypes = {
    title: PropTypes.string,
    installment: PropTypes.string,
    address: PropTypes.string,
    priceTag: PropTypes.string,
    landSize: PropTypes.string,
    buildingSize: PropTypes.string,
    propertyType: PropTypes.string,
    headingText: PropTypes.string,
    onClickSave: PropTypes.func.isRequired
};

export default CardContentComponent;
