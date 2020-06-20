import React, { FunctionComponent, useContext, ReactNode } from 'react';

import TextComponent from '../../../common/atomic/text/text.component';
import GridComponent from '../../../common/atomic/grid/grid.component';

import StringHelper from '../../../shared/helper/string.helper';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import ListingFeatureDetailContext from './context/listing-feature-r123.context';
import { ListingFeatureDetailContextInterface } from './interface/component.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';

/**
 * Property Detail Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.06.03
 */
const PropertyDetailComponent: FunctionComponent = () => {
    const name: ComponentClassnameDefaultInterface = {
        'ui-organisms-listing-feature-r123-detail': true,
        flex: true
    };

    const { propertyDetail } = useContext<ListingFeatureDetailContextInterface>(
        ListingFeatureDetailContext
    );

    const {
        floor,
        listingId,
        furnishing,
        postedDate,
        certificate,
        electricity,
        propertyType,
        propertyCondition
    } = propertyDetail;

    const propertyDetailData = [
        listingId,
        propertyType,
        certificate,
        furnishing,
        propertyCondition,
        floor,
        electricity,
        postedDate
    ];

    /**
     * Generate Listing Feature Detail
     * @param {string} label - children
     * @param {string | number} value - children
     * @return {ReactNode}
     */
    const generateListingFeatureDetail = (
        label: string,
        value: string | number
    ): ReactNode => {
        return (
            <>
                <TextComponent
                    tag="p"
                    fontWeight={500}
                    className="ui-organisms-listing-feature-r123-detail__attribute--label"
                >
                    {label}
                </TextComponent>
                <TextComponent
                    tag="p"
                    fontWeight={300}
                    className="ui-organisms-listing-feature-r123-detail__attribute--value"
                >
                    {value}
                </TextComponent>
            </>
        );
    };

    return (
        <div className={StringHelper.objToString(name)}>
            <GridComponent.Row>
                {propertyDetailData
                    .filter((item) =>
                        ValidatorHelper.verifiedIsNotEmpty(item.value)
                    )
                    .map((item) => {
                        return (
                            <GridComponent.Column
                                key={item.label}
                                id={item.label}
                                defaultSize={6}
                                className="ui-organisms-listing-feature-r123-detail__attribute"
                            >
                                {generateListingFeatureDetail(
                                    item.label,
                                    item.value ? item.value : ''
                                )}
                            </GridComponent.Column>
                        );
                    })}
            </GridComponent.Row>
        </div>
    );
};

export default PropertyDetailComponent;
