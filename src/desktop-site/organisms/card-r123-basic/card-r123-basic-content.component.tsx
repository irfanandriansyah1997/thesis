/* eslint-disable react/no-array-index-key */
import React, { SFC, useContext, ReactNode } from 'react';

import StringHelper from '../../../shared/helper/string.helper';
import CardR123BasicContext from './context/card-r123-basic.context';
import LinkComponent from '../../../common/atomic/link/link.component';
import GridComponent from '../../../common/atomic/grid/grid.component';
import CardR123BasicGridComponent from './card-r123-basic-grid.component';
import { ColorType } from '../../../shared/interface/common/color.interface';
import HollowLinkComponent from '../../../common/molecules/hollow-link/hollow-link.component';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';
import {
    CardR123BasicContextInterface,
    CardR123BasicGridItemInterface
} from './interface/component.interface';
import {
    ComponentStylingTypography,
    ComponentFontWeightTypography
} from '../../../shared/interface/component/component-typography.interface';

/**
 * Card Media Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @author Irfan Andriansyah <irfan@99.co>
 * @description card content which contains text, button, etc
 * @since 2020.04.27
 */
const CardContentComponent: SFC = () => {
    const { data, action } = useContext<CardR123BasicContextInterface>(
        CardR123BasicContext
    );
    const {
        id,
        link,
        title,
        address,
        priceTag,
        attribute,
        installment,
        propertyType
    } = data;
    const { saveAction, mortgageSimulationAction } = action;

    const PropertySizeAttribute: CardR123BasicGridItemInterface[] = [
        { key: 'landSize' },
        { key: 'buildingSize' }
    ];
    const PropertyInfoAttribute: CardR123BasicGridItemInterface[] = [
        { key: 'bathroom', icon: 'rui-icon-bath-small' },
        { key: 'bedroom', icon: 'rui-icon-bed-small' },
        { key: 'carport', icon: 'rui-icon-car-small' }
    ];

    const className: ComponentClassnameDefaultInterface = {
        [`ui-organisms-card-r123-basic__content-section`]: true,
        relative: true
    };

    /**
     * Generate Link Component
     * @param {string} text - children
     * @param {ColorType} color - color link
     * @param {string} classNameComponent - className link component
     * @param {ComponentStylingTypography} styling  - custom styling in link component
     * @param {ComponentFontWeightTypography} fontWeight - font weight text
     * @return {ReactNode}
     */
    const generateLinkComponent = (
        text: string,
        color: ColorType,
        fontWeight: ComponentFontWeightTypography,
        styling: ComponentStylingTypography = 'default',
        classNameComponent: string | undefined = undefined
    ): ReactNode => {
        return (
            <LinkComponent
                noUnderline
                href={link}
                color={color}
                styling={styling}
                fontWeight={fontWeight}
                className={classNameComponent}
            >
                {text}
            </LinkComponent>
        );
    };

    return (
        <section className={StringHelper.objToString(className)}>
            <GridComponent.Row
                className="ui-organisms-card-r123-basic__top-row"
                justify="end"
            >
                <GridComponent.Column
                    className="flex flex-justify-end"
                    id="button-section"
                >
                    <HollowLinkComponent
                        icon="rui-icon-calculator"
                        onClick={mortgageSimulationAction.onCLick}
                    >
                        {mortgageSimulationAction.label}
                    </HollowLinkComponent>
                    <HollowLinkComponent
                        onClick={saveAction.onCLick}
                        icon="rui-icon-save-hollow"
                    >
                        {saveAction.label}
                    </HollowLinkComponent>
                </GridComponent.Column>
            </GridComponent.Row>
            <div className="ui-organisms-card-r123-basic__bottom-row absolute">
                <GridComponent.Row
                    padding={{
                        horizontal: 0,
                        vertical: 0
                    }}
                >
                    <GridComponent.Column
                        id="price-section"
                        className="ui-organisms-card-r123-basic__price-section"
                    >
                        {generateLinkComponent(
                            priceTag,
                            'headingR123',
                            700,
                            'heading-4',
                            'block'
                        )}
                        {generateLinkComponent(installment, 'headingR123', 400)}
                    </GridComponent.Column>
                    <GridComponent.Column
                        id="title-section"
                        className="ui-organisms-card-r123-basic__title-section"
                    >
                        {generateLinkComponent(
                            title,
                            'headingR123',
                            500,
                            'heading-6',
                            'block truncate'
                        )}
                        {generateLinkComponent(address, 'headingR123', 400)}
                    </GridComponent.Column>
                    <GridComponent.Column
                        id="property-type-section"
                        className="ui-organisms-card-r123-basic__property-type-section"
                    >
                        {generateLinkComponent(
                            propertyType,
                            'headingR123',
                            500
                        )}
                    </GridComponent.Column>
                </GridComponent.Row>
                <GridComponent.Row
                    padding={{ horizontal: 0, vertical: 0 }}
                    align="end"
                    justify="between"
                >
                    <GridComponent.Column id="property-info-size">
                        <CardR123BasicGridComponent
                            id={id}
                            to={link}
                            space={2}
                            type="text"
                            styling="vertical"
                            listItem={PropertySizeAttribute}
                            object={
                                (attribute as unknown) as Record<
                                    string,
                                    unknown
                                >
                            }
                        />
                    </GridComponent.Column>
                    <GridComponent.Column id="property-info-attribute flex flex-jusify-end">
                        <CardR123BasicGridComponent
                            id={id}
                            to={link}
                            space={8}
                            styling="horizontal"
                            type="text-with-icon"
                            className="flex-justify-end"
                            listItem={PropertyInfoAttribute}
                            object={
                                (attribute as unknown) as Record<
                                    string,
                                    unknown
                                >
                            }
                        />
                    </GridComponent.Column>
                </GridComponent.Row>
            </div>
        </section>
    );
};

export default CardContentComponent;
