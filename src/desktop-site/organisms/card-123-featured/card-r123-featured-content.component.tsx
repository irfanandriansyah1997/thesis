import React, { SFC, useContext, ReactNode } from 'react';

import StringHelper from '../../../shared/helper/string.helper';
import IconComponent from '../../../common/atomic/icon/icon.component';
import LinkComponent from '../../../common/atomic/link/link.component';
import CardR123FeaturedContext from './context/card-r123-featured.context';
import { ColorType } from '../../../shared/interface/common/color.interface';
import ButtonComponent from '../../../common/atomic/button/button.component';
import { CardR123FeaturedContextInterface } from './interface/component.interface';
import HollowLinkComponent from '../../../common/molecules/hollow-link/hollow-link.component';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';
import {
    ComponentStylingTypography,
    ComponentFontWeightTypography
} from '../../../shared/interface/component/component-typography.interface';
import { CardR123BasicGridItemInterface } from '../card-r123-basic/interface/component.interface';
import CardR123BasicGridComponent from '../card-r123-basic/card-r123-basic-grid.component';

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
    const {
        onClickSave,
        onClickContactAgent,
        onClickMortgageSimulation
    } = action;
    const { link, title, address, propertyType, attribute } = data;
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
        [`ui-organisms-card-r123-featured__content-wrapper`]: true,
        flex: true,
        'flex-column': true,
        relative: true
    };

    /**
     * Get top row card content className
     */
    const topSectionClassName: ComponentClassnameDefaultInterface = {
        'featured-card--content__top-row': true,
        flex: true,
        'flex-justify-between': true,
        'flex-align-baseline': true
    };

    /**
     * Get bottom row card content className
     */
    const bottomSectionClassName: ComponentClassnameDefaultInterface = {
        'featured-card--content__bottom-row': true,
        flex: true,
        'flex-align-end': true,
        'flex-justify-between': true
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
        <div
            className={StringHelper.objToString(className)}
            style={{ minHeight: 147, padding: 16, paddingBottom: 24 }}
        >
            <div className="featured-card--content">
                <div className={StringHelper.objToString(topSectionClassName)}>
                    <div className="left-content no-wrap">
                        {generateLinkComponent(
                            title,
                            'headingR123',
                            500,
                            'heading-6',
                            'truncate'
                        )}
                        {generateLinkComponent(address, 'headingR123', 500)}
                    </div>
                    <div className="right-content no-wrap">
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
                    </div>
                </div>
                <div className="featured-card--content__middle-row">
                    <div className="property-type">
                        {generateLinkComponent(
                            propertyType,
                            'headingR123',
                            500
                        )}
                    </div>
                    <CardR123BasicGridComponent
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
                </div>
                <div
                    className={StringHelper.objToString(bottomSectionClassName)}
                >
                    <div className="left-content">
                        <CardR123BasicGridComponent
                            to={link}
                            divider="line"
                            styling="horizontal"
                            type="text-with-icon"
                            listItem={PropertyInfoAttribute}
                            object={
                                (attribute as unknown) as Record<
                                    string,
                                    unknown
                                >
                            }
                        />
                    </div>
                    <div className="right-content">
                        <LinkComponent
                            noUnderline
                            color="outline"
                            fontWeight={500}
                            icon={<PhoneIcon />}
                            onClick={onClickContactAgent}
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
                    </div>
                </div>
            </div>
        </div>
    );
};

CardR123FeaturedContentComponent.displayName =
    'CardR123FeaturedContentComponent';

export default CardR123FeaturedContentComponent;
