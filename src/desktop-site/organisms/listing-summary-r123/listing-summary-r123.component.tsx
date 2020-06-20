import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import TextComponent from '../../../common/atomic/text/text.component';
import LinkComponent from '../../../common/atomic/link/link.component';
import IconComponent from '../../../common/atomic/icon/icon.component';
import PropertySummaryComponent from './listing-summary-r123-detail.component';

import StringHelper from '../../../shared/helper/string.helper';
import ListingSummaryContext from './context/listing-summary-r123.context';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';
import {
    ListingSummaryContextInterface,
    ListingSummaryR123PropsInterface
} from './interface/component.interface';

/**
 * Create Calculator Icon
 * @return {string}
 */
const CalculatorIcon: FunctionComponent = () => (
    <IconComponent color="primary" size={16}>
        rui-icon-calculator
    </IconComponent>
);

/**
 * Listing Summary R123 Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.06.05
 */
const ListingSummaryR123: FunctionComponent<ListingSummaryR123PropsInterface> = ({
    tier,
    address,
    mortgage,
    priceTag,
    attribute,
    saveAction,
    shareAction,
    installment,
    flaggingBadge,
    previewAction
}) => {
    const name: ComponentClassnameDefaultInterface = {
        'ui-organisms-listing-summary-r123': true,
        relative: true
    };

    const contextValue: ListingSummaryContextInterface = {
        data: {
            tier,
            address,
            priceTag,
            attribute,
            installment
        },
        action: {
            saveAction,
            shareAction,
            previewAction
        }
    };

    return (
        <ListingSummaryContext.Provider value={contextValue}>
            <div className={StringHelper.objToString(name)}>
                <div className="ui-organisms-listing-summary-r123__flagging-badge absolute">
                    <TextComponent
                        tag="p"
                        color="white"
                        fontWeight={500}
                        className="ui-organisms-listing-summary-r123__flagging-badge--text"
                    >
                        {flaggingBadge}
                    </TextComponent>
                </div>
                <PropertySummaryComponent />
                <div className="ui-organisms-listing-summary-r123__mortgage">
                    <TextComponent
                        tag="p"
                        fontWeight={500}
                        className="ui-organisms-listing-summary-r123__mortgage--info"
                    >
                        {mortgage && mortgage.installment}
                    </TextComponent>
                    <LinkComponent
                        noUnderline
                        color="outline"
                        fontWeight={400}
                        icon={<CalculatorIcon />}
                        onClick={mortgage && mortgage.onClickMortgage}
                        className="ui-organisms-listing-summary-r123__mortgage--link"
                    >
                        {mortgage && mortgage.label}
                    </LinkComponent>
                </div>
            </div>
        </ListingSummaryContext.Provider>
    );
};

ListingSummaryR123.defaultProps = {
    tier: undefined,
    mortgage: undefined,
    installment: undefined
};

ListingSummaryR123.propTypes = {
    installment: PropTypes.string,
    address: PropTypes.string.isRequired,
    priceTag: PropTypes.string.isRequired,
    flaggingBadge: PropTypes.string.isRequired,
    tier: PropTypes.oneOf(['premier', 'featured']),
    attribute: PropTypes.shape({
        bedroom: PropTypes.string,
        carport: PropTypes.string,
        bathroom: PropTypes.string,
        landSize: PropTypes.string,
        buildingSize: PropTypes.string
    }).isRequired,
    saveAction: PropTypes.shape({
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired
    }).isRequired,
    shareAction: PropTypes.shape({
        label: PropTypes.string.isRequired,
        shareLinks: PropTypes.array.isRequired
    }).isRequired,
    previewAction: PropTypes.shape({
        label: PropTypes.string.isRequired,
        viewCount: PropTypes.string.isRequired,
        headerContent: PropTypes.string.isRequired,
        messageContent: PropTypes.string.isRequired
    }).isRequired,
    mortgage: PropTypes.shape({
        label: PropTypes.string.isRequired,
        installment: PropTypes.string.isRequired,
        onClickMortgage: PropTypes.func.isRequired
    })
};

export default ListingSummaryR123;
