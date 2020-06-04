import React, { SFC, useContext, ReactNode } from 'react';

import TextComponent from '../../../common/atomic/text/text.component';
import GridComponent from '../../../common/atomic/grid/grid.component';

import StringHelper from '../../../shared/helper/string.helper';
import ListingFeatureDetailContext from './context/listing-feature-r123.context';
import { ListingFeatureDetailContextInterface } from './interface/component.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';

/**
 * Property Detail Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.06.03
 */
const PropertyDetailComponent: SFC = () => {
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
                <GridComponent.Column
                    id="listingId"
                    defaultSize={6}
                    className="ui-organisms-listing-feature-r123-detail__attribute"
                >
                    {generateListingFeatureDetail(
                        listingId.label,
                        listingId.value
                    )}
                </GridComponent.Column>
                <GridComponent.Column
                    id="propertyType"
                    defaultSize={6}
                    className="ui-organisms-listing-feature-r123-detail__attribute"
                >
                    {generateListingFeatureDetail(
                        propertyType.label,
                        propertyType.value
                    )}
                </GridComponent.Column>
                <GridComponent.Column
                    id="certificate"
                    defaultSize={6}
                    className="ui-organisms-listing-feature-r123-detail__attribute"
                >
                    {generateListingFeatureDetail(
                        certificate.label,
                        certificate.value
                    )}
                </GridComponent.Column>
                <GridComponent.Column
                    id="furnishing"
                    defaultSize={6}
                    className="ui-organisms-listing-feature-r123-detail__attribute"
                >
                    {generateListingFeatureDetail(
                        furnishing.label,
                        furnishing.value
                    )}
                </GridComponent.Column>
                <GridComponent.Column
                    id="propertyCondition"
                    defaultSize={6}
                    className="ui-organisms-listing-feature-r123-detail__attribute"
                >
                    {generateListingFeatureDetail(
                        propertyCondition.label,
                        propertyCondition.value
                    )}
                </GridComponent.Column>
                <GridComponent.Column
                    id="floor"
                    defaultSize={6}
                    className="ui-organisms-listing-feature-r123-detail__attribute"
                >
                    {generateListingFeatureDetail(floor.label, floor.value)}
                </GridComponent.Column>
                <GridComponent.Column
                    id="electricity"
                    defaultSize={6}
                    className="ui-organisms-listing-feature-r123-detail__attribute"
                >
                    {generateListingFeatureDetail(
                        electricity.label,
                        electricity.value
                    )}
                </GridComponent.Column>
                <GridComponent.Column
                    id="postedDate"
                    defaultSize={6}
                    className="ui-organisms-listing-feature-r123-detail__attribute"
                >
                    {generateListingFeatureDetail(
                        postedDate.label,
                        postedDate.value
                    )}
                </GridComponent.Column>
            </GridComponent.Row>
        </div>
    );
};

export default PropertyDetailComponent;
