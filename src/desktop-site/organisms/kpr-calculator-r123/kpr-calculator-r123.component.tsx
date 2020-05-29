/* eslint-disable react/jsx-curly-newline */
import React, { SFC, ReactNode } from 'react';

import CardComponent from '../../../common/atomic/card/card.component';
import ImageComponent from '../../../common/atomic/image/image.component';
import GridComponent from '../../../common/atomic/grid/grid.component';
import TextComponent from '../../../common/atomic/text/text.component';
import ComboboxComponent from '../../../common/molecules/combobox/combobox.component';
import ToggleComponent from '../../../common/molecules/toggle/toggle.component';
import IconComponent from '../../../common/atomic/icon/icon.component';

import { KPRCalculatorComponentInterface } from './interface/component.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';

import StringHelper from '../../../shared/helper/string.helper';

/**
 * R123 KPR Calculator Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.04.27
 */
const KprCalculatorR123Component: SFC<KPRCalculatorComponentInterface> = ({
    heading,
    itemAmount,
    disclaimer,
    downPayment,
    propertyPrice,
    onChangeDropdownField,
    onChangePrice
}: KPRCalculatorComponentInterface) => {
    const name: ComponentClassnameDefaultInterface = {
        'ui-organisms-kpr-calculator-r123': true,
        flex: true,
        'flex-column': true
    };

    const headingClassName: ComponentClassnameDefaultInterface = {
        'ui-organisms-kpr-calculator-r123__heading': true,
        flex: true,
        'flex-justify-between': true
    };

    const calculatorDisclaimerClassName: ComponentClassnameDefaultInterface = {
        'ui-organisms-kpr-calculator-r123__disclaimer': true,
        'text-right': true
    };

    /**
     * Create Selector Component
     * @param {string} text - children
     * @return {ReactNode}
     */
    const createSelector = (text: string): ReactNode => {
        return (
            <>
                <TextComponent
                    tag="span"
                    color="text"
                    fontWeight={300}
                    style={{ marginBottom: 8, fontSize: 14 }}
                >
                    {text}
                </TextComponent>
                <IconComponent
                    color="headingR123"
                    size={10}
                    style={{ marginLeft: 5 }}
                    className="selector-icon"
                >
                    rui-icon-arrow-right-small
                </IconComponent>
            </>
        );
    };

    /**
     * Create Toggle Class Function
     */
    const toggleSelectorIconClass = (): void => {
        const node = document.querySelector('.selector-icon');
        if (node) {
            node.classList.toggle('selector-icon-active');
        }
    };

    return (
        <CardComponent
            className={StringHelper.objToString(name)}
            style={{ padding: 0 }}
            boxShadow="r123"
        >
            <div
                className={StringHelper.objToString(headingClassName)}
                style={{
                    width: '100%',
                    backgroundColor: '#333f48',
                    padding: 16
                }}
            >
                <TextComponent
                    tag="h2"
                    color="white"
                    fontWeight={700}
                    style={{ fontSize: 18 }}
                >
                    {heading ? heading.headingText : ''}
                </TextComponent>
                <div className="calculator-heading-logo">
                    <ImageComponent
                        alt="logo"
                        width={220}
                        src={heading ? heading.headingLogo : ''}
                    />
                </div>
            </div>
            <section className="ui-organisms-kpr-calculator-r123__detail">
                <GridComponent.Row
                    padding={{
                        horizontal: 0,
                        vertical: 0
                    }}
                >
                    <GridComponent.Column id="item-amount" defaultSize={5}>
                        <div style={{ display: 'flex' }}>
                            <TextComponent
                                tag="p"
                                color="headingDarkerR123"
                                fontWeight={700}
                                style={{ marginBottom: 8, fontSize: 24 }}
                            >
                                {itemAmount.loanAmount}
                            </TextComponent>
                            <TextComponent
                                tag="span"
                                color="headingDarkerR123"
                                fontWeight={700}
                                style={{ marginLeft: 4, fontSize: 12 }}
                            >
                                p/b
                            </TextComponent>
                        </div>
                        <div>
                            <TextComponent
                                tag="p"
                                color="headingR123"
                                fontWeight={700}
                                style={{ fontSize: 14 }}
                            >
                                {itemAmount.monthlyPayment}
                            </TextComponent>
                        </div>
                    </GridComponent.Column>
                    <GridComponent.Column id="property-price">
                        <div className="property-price">
                            <TextComponent
                                tag="p"
                                color="headingR123"
                                fontWeight={700}
                                style={{ marginBottom: 8, fontSize: 14 }}
                            >
                                {propertyPrice.priceLabel}
                            </TextComponent>
                            {propertyPrice.editablePriceValue ? (
                                <input
                                    type="text"
                                    id="priceValue"
                                    name="priceValue"
                                    value={propertyPrice.priceValue}
                                    className="property-price-input"
                                    onChange={onChangePrice && onChangePrice}
                                />
                            ) : (
                                <TextComponent
                                    tag="p"
                                    color="headingDarkerR123"
                                    style={{
                                        marginBottom: 8,
                                        fontSize: 14,
                                        lineHeight: '32px'
                                    }}
                                >
                                    {propertyPrice.priceValue}
                                </TextComponent>
                            )}
                        </div>
                        <div className="kpr-interest">
                            <TextComponent
                                tag="p"
                                color="headingR123"
                                fontWeight={700}
                                style={{ marginBottom: 8, fontSize: 14 }}
                            >
                                {propertyPrice.interestLabel}
                            </TextComponent>
                            <ComboboxComponent
                                name={propertyPrice.name}
                                value={propertyPrice.interest.value}
                                className="kpr-calculator-dropdown"
                                onChange={(val: string | number): void =>
                                    onChangeDropdownField('interest', val)
                                }
                            >
                                {propertyPrice.interest.option.map((item) => (
                                    <ComboboxComponent.Item
                                        key={item.id}
                                        id={item.id}
                                        value={item.value}
                                        label={item.label}
                                        className="kpr-calculator-dropdown__item"
                                    />
                                ))}
                            </ComboboxComponent>
                        </div>
                    </GridComponent.Column>
                    <GridComponent.Column id="down-payment">
                        <div className="downpayment">
                            <TextComponent
                                tag="p"
                                color="headingR123"
                                fontWeight={700}
                                style={{ marginBottom: 8, fontSize: 14 }}
                            >
                                {downPayment.downPaymentLabel}
                            </TextComponent>
                            <TextComponent
                                tag="p"
                                color="headingDarkerR123"
                                style={{
                                    marginBottom: 8,
                                    fontSize: 14,
                                    lineHeight: '32px'
                                }}
                            >
                                {downPayment.downPaymentValue}
                            </TextComponent>
                        </div>
                        <div className="kpr-downpayment">
                            <TextComponent
                                tag="p"
                                color="headingR123"
                                fontWeight={700}
                                style={{ marginBottom: 8, fontSize: 14 }}
                            >
                                {downPayment.periodLabel}
                            </TextComponent>
                            <ComboboxComponent
                                name={downPayment.name}
                                value={downPayment.period.value}
                                className="kpr-calculator-dropdown"
                                onChange={(val: string | number): void =>
                                    onChangeDropdownField('down-payment', val)
                                }
                            >
                                {downPayment.period.option.map((item) => (
                                    <ComboboxComponent.Item
                                        key={item.id}
                                        id={item.id}
                                        value={item.value}
                                        label={item.label}
                                        className="kpr-calculator-dropdown__item"
                                    />
                                ))}
                            </ComboboxComponent>
                        </div>
                    </GridComponent.Column>
                </GridComponent.Row>
            </section>
            <section
                className={StringHelper.objToString(
                    calculatorDisclaimerClassName
                )}
            >
                <ToggleComponent
                    selector={createSelector(
                        disclaimer ? disclaimer.disclaimerText : ''
                    )}
                    selectorPosition="top"
                    onToggleExpand={toggleSelectorIconClass}
                >
                    <TextComponent tag="p" className="disclaimer-toggle-text">
                        {disclaimer && disclaimer.disclaimerToggleText}
                    </TextComponent>
                </ToggleComponent>
            </section>
        </CardComponent>
    );
};

export default KprCalculatorR123Component;
