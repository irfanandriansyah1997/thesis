import React, { useContext, ReactNode, FunctionComponent } from 'react';

import GridComponent from '../../../common/atomic/grid/grid.component';
import IconComponent from '../../../common/atomic/icon/icon.component';
import LinkComponent from '../../../common/atomic/link/link.component';
import TextComponent from '../../../common/atomic/text/text.component';
import ImageComponent from '../../../common/atomic/image/image.component';
import ButtonComponent from '../../../common/atomic/button/button.component';
import HollowLinkComponent from '../../../common/molecules/hollow-link/hollow-link.component';

import StringHelper from '../../../shared/helper/string.helper';
import CardR123NewLaunchContext from './context/card-r123-newlaunch.context';
import { ColorType } from '../../../shared/interface/common/color.interface';
import { CardR123NewLaunchContextInterface } from './interface/component.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';
import {
    ComponentStylingTypography,
    ComponentFontWeightTypography
} from '../../../shared/interface/component/component-typography.interface';

/**
 * Create phone icon
 * @return {string}
 */
const PhoneIcon: FunctionComponent = () => (
    <IconComponent color="outline" size={18}>
        rui-icon-call
    </IconComponent>
);

/**
 * New Launch Card Content Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @description new launch card content which contains text, button, etc
 * @since 2020.06.09
 */
const CardR123NewLaunchContentComponent: FunctionComponent = () => {
    const { data, action } = useContext<CardR123NewLaunchContextInterface>(
        CardR123NewLaunchContext
    );
    const { saveAction, contactAction, viewDetailAction } = action;
    const {
        link,
        title,
        address,
        propertyType,
        unit,
        completionDate,
        developerLogo
    } = data;

    /**
     * Wrapper Classname
     */
    const className: ComponentClassnameDefaultInterface = {
        'ui-organisms-card-r123-newlaunch__content-section': true,
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
                padding={{
                    horizontal: 0,
                    vertical: 0
                }}
                className="ui-organisms-card-r123-newlaunch__top-row"
            >
                <GridComponent.Column
                    id="left-section"
                    className="ui-organisms-card-r123-newlaunch__left flex flex-column flex-align-start"
                >
                    <div className="ui-organisms-card-r123-newlaunch__title truncate">
                        <TextComponent
                            tag="h2"
                            color="text"
                            fontWeight={500}
                            styling="heading-6"
                        >
                            {generateLinkComponent(
                                title,
                                'headingR123',
                                500,
                                'heading-6',
                                'block truncate'
                            )}
                        </TextComponent>
                        {generateLinkComponent(address, 'headingR123', 500)}
                    </div>
                    <div className="ui-organisms-card-r123-newlaunch__middle-row">
                        <div className="ui-organisms-card-r123-newlaunch__property-type">
                            {generateLinkComponent(
                                propertyType,
                                'headingR123',
                                500,
                                'default',
                                'block'
                            )}
                        </div>
                        <div className="ui-organisms-card-r123-newlaunch__unit">
                            {generateLinkComponent(
                                unit,
                                'headingR123',
                                500,
                                'default',
                                'block'
                            )}
                        </div>
                        <div className="ui-organisms-card-r123-newlaunch__completion-date">
                            {generateLinkComponent(
                                completionDate,
                                'headingR123',
                                500,
                                'default',
                                'block'
                            )}
                        </div>
                    </div>
                </GridComponent.Column>
                <GridComponent.Column
                    id="right-section"
                    className="ui-organisms-card-r123-newlaunch__right flex flex-column flex-align-end"
                >
                    <div>
                        <HollowLinkComponent
                            icon="rui-icon-save-hollow"
                            onClick={saveAction.onClick}
                        >
                            {saveAction.label}
                        </HollowLinkComponent>
                    </div>
                    <div className="ui-organisms-card-r123-newlaunch__developer-logo flex">
                        <ImageComponent
                            width="100%"
                            src={developerLogo}
                            alt={title}
                            objectFit="cover"
                        />
                    </div>
                    <GridComponent.Row
                        id="bottom-section"
                        padding={{ vertical: 0, horizontal: 0 }}
                        align="end"
                        justify="between"
                    >
                        <GridComponent.Column
                            id="bottom-section-right"
                            className="ui-organisms-card-r123-newlaunch__button flex flex-justify-end"
                        >
                            <LinkComponent
                                noUnderline
                                color="outline"
                                fontWeight={500}
                                icon={<PhoneIcon />}
                                onClick={contactAction.onClick}
                            >
                                {contactAction.label}
                            </LinkComponent>
                            <ButtonComponent
                                outline
                                size="default"
                                className="contact-detail-button"
                                onClick={viewDetailAction.onClick}
                            >
                                {viewDetailAction.label}
                            </ButtonComponent>
                        </GridComponent.Column>
                    </GridComponent.Row>
                </GridComponent.Column>
            </GridComponent.Row>
        </section>
    );
};

CardR123NewLaunchContentComponent.displayName =
    'CardR123NewLaunchContentComponent';

export default CardR123NewLaunchContentComponent;
