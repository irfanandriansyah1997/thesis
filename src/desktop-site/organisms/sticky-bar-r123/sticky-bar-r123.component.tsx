import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import TextComponent from '../../../common/atomic/text/text.component';
import GridComponent from '../../../common/atomic/grid/grid.component';
import LinkComponent from '../../../common/atomic/link/link.component';
import IconComponent from '../../../common/atomic/icon/icon.component';
import CardR123BasicGridComponent from '../card-r123-basic/card-r123-basic-grid.component';
import { CardR123BasicGridItemInterface } from '../card-r123-basic/interface/component.interface';

import StringHelper from '../../../shared/helper/string.helper';
import { StickyBarR123PropsInterface } from './interface/component.interface';
import { PREMIER, FEATURED } from '../../../shared/constant/component.constant';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';

/**
 * Create Save Icon
 * @return {string}
 */
const SaveIcon: FunctionComponent = () => (
    <IconComponent size={16}>rui-icon-save-hollow</IconComponent>
);

/**
 * Sticky Bar R123 Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.06.17
 */
const StickyBarR123: FunctionComponent<StickyBarR123PropsInterface> = ({
    tier,
    title,
    address,
    priceTag,
    attribute,
    saveAction
}) => {
    const name: ComponentClassnameDefaultInterface = {
        'ui-organisms-sticky-bar-r123': true
    };

    const wrapperName: ComponentClassnameDefaultInterface = {
        'ui-organisms-sticky-bar-r123__wrapper': true,
        flex: true,
        'flex-justify-between': true,
        'flex-align-start': true
    };

    const addressName: ComponentClassnameDefaultInterface = {
        'ui-organisms-sticky-bar-r123__address-info': true,
        truncate: true,
        'no-wrap': true
    };

    const stickyFeatureName: ComponentClassnameDefaultInterface = {
        'ui-organisms-sticky-bar-r123__right-container--feature': true,
        flex: true,
        'flex-column': true,
        'flex-align-end': true
    };

    const PropertyInfoAttribute: CardR123BasicGridItemInterface[] = [
        { key: 'bedroom', icon: 'rui-icon-bed-small' },
        { key: 'bathroom', icon: 'rui-icon-bath-small' },
        { key: 'carport', icon: 'rui-icon-car-small' }
    ];

    return (
        <div className={StringHelper.objToString(name)}>
            <div className={StringHelper.objToString(wrapperName)}>
                <div className="ui-organisms-sticky-bar-r123__left-container">
                    <TextComponent
                        tag="h2"
                        color="black"
                        fontWeight={500}
                        className="ui-organisms-sticky-bar-r123__title break-word"
                    >
                        {title}
                    </TextComponent>
                    <div className="ui-organisms-sticky-bar-r123__address-wrapper flex">
                        <TextComponent
                            tag="h3"
                            fontWeight={500}
                            className={StringHelper.objToString(addressName)}
                        >
                            {address}
                        </TextComponent>
                        {tier && (
                            <TextComponent
                                tag="span"
                                fontWeight={500}
                                className="ui-organisms-sticky-bar-r123__tier-badge"
                            >
                                {tier === 'premier' ? PREMIER : FEATURED}
                            </TextComponent>
                        )}
                    </div>
                </div>
                <div className="ui-organisms-sticky-bar-r123__right-container flex">
                    <div
                        className={StringHelper.objToString(stickyFeatureName)}
                    >
                        <TextComponent
                            tag="span"
                            fontWeight={500}
                            styling="heading-6"
                            className="ui-organisms-sticky-bar-r123__right-container--price"
                        >
                            {priceTag}
                        </TextComponent>
                        <div className="ui-organisms-sticky-bar-r123__right-container--attribute">
                            <GridComponent.Row
                                padding={{ horizontal: 0, vertical: 0 }}
                                justify="between"
                            >
                                <GridComponent.Column id="property-info-attribute flex">
                                    <CardR123BasicGridComponent
                                        id="1"
                                        space={8}
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
                                </GridComponent.Column>
                            </GridComponent.Row>
                        </div>
                    </div>
                    <div className="ui-organisms-sticky-bar-r123__right-container--action">
                        <LinkComponent
                            noUnderline
                            fontWeight={500}
                            styling="heading-6"
                            icon={<SaveIcon />}
                            onClick={saveAction.onClick}
                            className="ui-organisms-sticky-bar-r123__right-container--save-link"
                        >
                            {saveAction.label}
                        </LinkComponent>
                    </div>
                </div>
            </div>
        </div>
    );
};

StickyBarR123.defaultProps = {
    tier: undefined
};

StickyBarR123.propTypes = {
    title: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    priceTag: PropTypes.string.isRequired,
    tier: PropTypes.oneOf(['premier', 'featured']),
    attribute: PropTypes.shape({
        bedroom: PropTypes.string,
        carport: PropTypes.string,
        bathroom: PropTypes.string
    }).isRequired,
    saveAction: PropTypes.shape({
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired
    }).isRequired
};

export default StickyBarR123;
