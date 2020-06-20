/* eslint-disable react/no-array-index-key */
import React, {
    FunctionComponent,
    useContext,
    ReactElement,
    useState
} from 'react';

import TextComponent from '../../../common/atomic/text/text.component';
import LinkComponent from '../../../common/atomic/link/link.component';
import GridComponent from '../../../common/atomic/grid/grid.component';
import IconComponent from '../../../common/atomic/icon/icon.component';
import DialogComponent from '../../../common/atomic/dialog/dialog.component';
import ButtonComponent from '../../../common/atomic/button/button.component';
import DropdownComponent from '../../../common/molecules/dropdown/dropdown.component';

import StringHelper from '../../../shared/helper/string.helper';
import ListingSummaryContext from './context/listing-summary-r123.context';
import { ListingSummaryContextInterface } from './interface/component.interface';
import CardR123BasicGridComponent from '../card-r123-basic/card-r123-basic-grid.component';
import { CardR123BasicGridItemInterface } from '../card-r123-basic/interface/component.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';

/**
 * Create Listing Summary Action Label Icon
 */
const generateIcon = (icon: string, marginRight?: number): ReactElement => (
    <IconComponent size={16} marginRight={marginRight}>
        {icon}
    </IconComponent>
);

/**
 * Create Share Action Label Icon
 */
const shareActionLabel = (label: string): ReactElement => {
    return (
        <>
            {generateIcon('rui-icon-share')}
            <TextComponent tag="span" fontWeight={500} styling="heading-6">
                {label}
            </TextComponent>
        </>
    );
};

/**
 * ListingSummary Detail Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.06.05
 */
const PropertySummaryComponent: FunctionComponent = () => {
    const [show, setShow] = useState<boolean>(false);

    /**
     * Action triggered to open the dialog.
     */
    const showDialog = (): void => {
        setShow(true);
    };

    /**
     * Action triggered to close the dialog.
     */
    const closeDialog = (): void => {
        setShow(false);
    };

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
                <div
                    className={StringHelper.objToString({
                        ...basicActionLinkClassName,
                        absolute: true,
                        'preview-link': true
                    })}
                >
                    <ButtonComponent
                        size="default"
                        outline
                        onClick={showDialog}
                        style={{ padding: 0 }}
                        icon={generateIcon('rui-icon-bell')}
                    >
                        {previewAction.label}
                    </ButtonComponent>
                    <DialogComponent
                        show={show}
                        onCloseDialog={closeDialog}
                        className="preview-link-dialog"
                    >
                        <IconComponent
                            color="text"
                            size={16}
                            onClick={closeDialog}
                            style={{
                                position: 'absolute',
                                right: 16,
                                top: 16,
                                cursor: 'pointer'
                            }}
                        >
                            close
                        </IconComponent>
                        <div>
                            <TextComponent
                                tag="p"
                                align="center"
                                fontWeight={500}
                                style={{
                                    fontSize: 18,
                                    padding: '40px 0',
                                    lineHeight: '26px'
                                }}
                            >
                                {previewAction.viewCount}
                            </TextComponent>
                            <TextComponent
                                tag="p"
                                align="center"
                                fontWeight={500}
                                styling="heading-6"
                                style={{ marginBottom: 16 }}
                            >
                                {previewAction.headerContent}
                            </TextComponent>
                            <TextComponent
                                tag="p"
                                align="center"
                                fontWeight={300}
                                style={{
                                    fontSize: 14,
                                    paddingBottom: 40,
                                    lineHeight: '24px'
                                }}
                            >
                                {previewAction.messageContent}
                            </TextComponent>
                        </div>
                    </DialogComponent>
                </div>

                <DropdownComponent
                    label={shareActionLabel(shareAction.label)}
                    name="share"
                    trigger="click"
                    className={StringHelper.objToString({
                        ...basicActionLinkClassName,
                        'share-link': true
                    })}
                >
                    {shareAction.shareLinks &&
                        shareAction.shareLinks.map((item, index) => (
                            <DropdownComponent.Item
                                key={index}
                                className="share-item"
                            >
                                <LinkComponent
                                    noUnderline
                                    color="text"
                                    fontWeight={500}
                                    onClick={item.onClick}
                                    style={{ fontSize: 14 }}
                                    icon={generateIcon(item.icon, 8)}
                                >
                                    {item.value}
                                    {generateIcon('rui-icon-arrow-right')}
                                </LinkComponent>
                            </DropdownComponent.Item>
                        ))}
                </DropdownComponent>
                <LinkComponent
                    noUnderline
                    fontWeight={500}
                    styling="heading-6"
                    icon={generateIcon('rui-icon-save-hollow')}
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
