import React, { FunctionComponent, useContext } from 'react';

import TextComponent from '../../../common/atomic/text/text.component';
import LinkComponent from '../../../common/atomic/link/link.component';
import GridComponent from '../../../common/atomic/grid/grid.component';
import IconComponent from '../../../common/atomic/icon/icon.component';

import StringHelper from '../../../shared/helper/string.helper';
import ListingSummaryContext from './context/listing-summary-r123.context';
import { ListingSummaryContextInterface } from './interface/component.interface';
import CardR123BasicGridComponent from '../card-r123-basic/card-r123-basic-grid.component';
import { CardR123BasicGridItemInterface } from '../card-r123-basic/interface/component.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';

/**
 * Create Save Icon
 * @return {string}
 */
const SaveIcon: FunctionComponent = () => (
    <IconComponent size={16}>rui-icon-save-hollow</IconComponent>
);

/**
 * Create Share Icon
 * @return {string}
 */
const ShareIcon: FunctionComponent = () => (
    <IconComponent size={16}>rui-icon-share</IconComponent>
);

/**
 * ListingSummary Detail Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.06.05
 */
const PropertySummaryComponent: FunctionComponent = () => {
    const basicActionLinkClassName: ComponentClassnameDefaultInterface = {
        'ui-organisms-listing-summary-r123__detail--action-link': true
    };

    const { action, data } = useContext<ListingSummaryContextInterface>(
        ListingSummaryContext
    );

    const { saveAction, shareAction, previewAction } = action;

    const { address, priceTag, installment, attribute, tier } = data;

    const PropertySizeAttribute: CardR123BasicGridItemInterface[] = [
        { key: 'buildingSize' },
        { key: 'landSize' }
    ];
    const PropertyInfoAttribute: CardR123BasicGridItemInterface[] = [
        { key: 'bedroom', icon: 'rui-icon-bed-small' },
        { key: 'bathroom', icon: 'rui-icon-bath-small' },
        { key: 'carport', icon: 'rui-icon-car-small' }
    ];

    return (
        <div
            className={StringHelper.objToString({
                'ui-organisms-listing-summary-r123__detail': true,
                relative: true
            })}
        >
            <div
                className={StringHelper.objToString({
                    'ui-organisms-listing-summary-r123__detail--price': true,
                    'no-wrap': true
                })}
            >
                <TextComponent tag="span" fontWeight={700} styling="heading-4">
                    {priceTag}
                </TextComponent>
                {installment ? (
                    <TextComponent tag="span" fontWeight={500}>
                        {installment}
                    </TextComponent>
                ) : null}
            </div>
            <div
                className={StringHelper.objToString({
                    'ui-organisms-listing-summary-r123__detail--address': true,
                    flex: true
                })}
            >
                <TextComponent
                    tag="h1"
                    fontWeight={500}
                    className="ui-organisms-listing-summary-r123__detail--address__info"
                >
                    {address}
                </TextComponent>
                {tier && (
                    <TextComponent
                        tag="span"
                        fontWeight={500}
                        className="ui-organisms-listing-summary-r123__detail--address__tier-badge"
                    >
                        {tier === 'premier' ? 'Premier' : 'Featured'}
                    </TextComponent>
                )}
            </div>
            <div
                className={StringHelper.objToString({
                    'ui-organisms-listing-summary-r123__detail--area-info': true
                })}
            >
                <GridComponent.Row
                    padding={{ horizontal: 0, vertical: 0 }}
                    align="end"
                    justify="between"
                >
                    <GridComponent.Column id="listing-summary-info-size">
                        <CardR123BasicGridComponent
                            id="1"
                            space={20}
                            type="text"
                            divider="line"
                            dividerColor="text"
                            styling="horizontal"
                            listItem={PropertySizeAttribute}
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
            <div
                className={StringHelper.objToString({
                    'ui-organisms-listing-summary-r123__detail--attribute': true
                })}
            >
                <GridComponent.Row
                    padding={{ horizontal: 0, vertical: 0 }}
                    justify="between"
                >
                    <GridComponent.Column id="property-info-attribute flex">
                        <CardR123BasicGridComponent
                            id="2"
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
            <div
                className={StringHelper.objToString({
                    'ui-organisms-listing-summary-r123__detail--action-panel': true,
                    flex: true,
                    absolute: true
                })}
            >
                <LinkComponent
                    noUnderline
                    fontWeight={500}
                    styling="heading-6"
                    onClick={previewAction.onClick}
                    className={StringHelper.objToString({
                        ...basicActionLinkClassName,
                        absolute: true,
                        'preview-link': true
                    })}
                >
                    {previewAction.label}
                </LinkComponent>
                <LinkComponent
                    noUnderline
                    fontWeight={500}
                    styling="heading-6"
                    icon={<ShareIcon />}
                    onClick={shareAction.onClick}
                    className={StringHelper.objToString({
                        ...basicActionLinkClassName,
                        'share-link': true
                    })}
                >
                    {shareAction.label}
                </LinkComponent>
                <LinkComponent
                    noUnderline
                    fontWeight={500}
                    styling="heading-6"
                    icon={<SaveIcon />}
                    onClick={saveAction.onClick}
                    className={StringHelper.objToString({
                        ...basicActionLinkClassName,
                        'save-link': true
                    })}
                >
                    {saveAction.label}
                </LinkComponent>
            </div>
        </div>
    );
};

export default PropertySummaryComponent;
