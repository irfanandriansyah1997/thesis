import React, { SFC, useContext, ReactNode } from 'react';

import StringHelper from '../../../shared/helper/string.helper';
import GridComponent from '../../../common/atomic/grid/grid.component';
import IconComponent from '../../../common/atomic/icon/icon.component';
import LinkComponent from '../../../common/atomic/link/link.component';
import CardR123FeaturedContext from './context/card-r123-featured.context';
import { ColorType } from '../../../shared/interface/common/color.interface';
import ButtonComponent from '../../../common/atomic/button/button.component';
import { CardR123FeaturedContextInterface } from './interface/component.interface';
import CardR123BasicGridComponent from '../card-r123-basic/card-r123-basic-grid.component';
import HollowLinkComponent from '../../../common/molecules/hollow-link/hollow-link.component';
import { CardR123BasicGridItemInterface } from '../card-r123-basic/interface/component.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';
import {
    ComponentStylingTypography,
    ComponentFontWeightTypography
} from '../../../shared/interface/component/component-typography.interface';

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
 * Featured / Premier Card Content Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @description featured / premier card content which contains text, button, etc
 * @since 2020.04.30
 */
const CardR123FeaturedContentComponent: SFC = () => {
    const { data, action } = useContext<CardR123FeaturedContextInterface>(
        CardR123FeaturedContext
    );
    const { onClickSave, onClickContact, onClickMortgageSimulation } = action;
    const { id, link, title, address, propertyType, attribute } = data;
    const PropertySizeAttribute: CardR123BasicGridItemInterface[] = [
        { key: 'landSize' },
        { key: 'buildingSize' }
    ];
    const PropertyInfoAttribute: CardR123BasicGridItemInterface[] = [
        { key: 'bathroom', icon: 'rui-icon-bath-small' },
        { key: 'bedroom', icon: 'rui-icon-bed-small' },
        { key: 'carport', icon: 'rui-icon-car-small' }
    ];

    /**
     * Wrapper Classname
     */
    const className: ComponentClassnameDefaultInterface = {
        'ui-organisms-card-r123-featured__content-section': true,
        flex: true,
        'flex-column': true,
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
                justify="between"
                align="start"
                className="ui-organisms-card-r123-featured__top-row"
                padding={{
                    horizontal: 0,
                    vertical: 0
                }}
            >
                <GridComponent.Column
                    className="ui-organisms-card-r123-featured__title-info truncate"
                    id="title-section"
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
                    className="ui-organisms-card-r123-featured__property-mortgage"
                    id="button-section"
                >
                    <HollowLinkComponent
                        icon="rui-icon-calculator"
                        onClick={onClickMortgageSimulation}
                    >
                        Simulasi KPR
                    </HollowLinkComponent>
                    <HollowLinkComponent
                        icon="rui-icon-save-hollow"
                        onClick={onClickSave}
                    >
                        Simpan
                    </HollowLinkComponent>
                </GridComponent.Column>
            </GridComponent.Row>
            <GridComponent.Row
                id="content-section"
                padding={{ vertical: 0, horizontal: 0 }}
                className="ui-organisms-card-r123-featured__middle-row"
            >
                <GridComponent.Column
                    defaultSize={12}
                    id="property-type-section"
                >
                    {generateLinkComponent(
                        propertyType,
                        'headingR123',
                        500,
                        'default',
                        'block'
                    )}
                </GridComponent.Column>
                <GridComponent.Column defaultSize={12} id="property-info-size">
                    <CardR123BasicGridComponent
                        id={id}
                        to={link}
                        type="text"
                        divider="line"
                        dividerColor="text"
                        styling="horizontal"
                        listItem={PropertySizeAttribute}
                        object={
                            (attribute as unknown) as Record<string, unknown>
                        }
                    />
                </GridComponent.Column>
            </GridComponent.Row>
            <GridComponent.Row
                id="bottom-section"
                padding={{ vertical: 0, horizontal: 0 }}
                align="end"
                justify="between"
                className="ui-organisms-card-r123-featured__bottom-row"
            >
                <GridComponent.Column id="bottom-section-left">
                    <CardR123BasicGridComponent
                        id={id}
                        to={link}
                        space={8}
                        styling="horizontal"
                        type="text-with-icon"
                        listItem={PropertyInfoAttribute}
                        object={
                            (attribute as unknown) as Record<string, unknown>
                        }
                    />
                </GridComponent.Column>
                <GridComponent.Column
                    id="bottom-section-right"
                    className="flex flex-justify-end"
                >
                    <LinkComponent
                        noUnderline
                        color="outline"
                        fontWeight={500}
                        icon={<PhoneIcon />}
                        onClick={onClickContact}
                    >
                        Kontak Agen
                    </LinkComponent>
                    <ButtonComponent
                        outline
                        size="default"
                        className="contact-detail-button"
                    >
                        Lihat Detail
                    </ButtonComponent>
                </GridComponent.Column>
            </GridComponent.Row>
        </section>
    );
};

CardR123FeaturedContentComponent.displayName =
    'CardR123FeaturedContentComponent';

export default CardR123FeaturedContentComponent;
