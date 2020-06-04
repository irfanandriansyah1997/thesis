import React, { SFC } from 'react';

import CardComponent from '../../../common/atomic/card/card.component';
import TextComponent from '../../../common/atomic/text/text.component';
import TabsComponent from '../../../common/molecules/tabs/tabs.component';
import PropertyDetailComponent from './listing-feature-r123-detail.component';
import ExpandTextComponent from '../../../common/molecules/expand-text/expand-text.component';

import StringHelper from '../../../shared/helper/string.helper';
import ListingFeatureDetailContext from './context/listing-feature-r123.context';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';
import {
    ListingFeatureR123PropsInterface,
    ListingFeatureDetailContextInterface
} from './interface/component.interface';

/**
 * Listing Feature R123 Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.06.03
 */
const ListingFeatureR123: SFC<ListingFeatureR123PropsInterface> = ({
    title,
    floor,
    listingId,
    furnishing,
    postedDate,
    certificate,
    electricity,
    propertyType,
    propertyFacility,
    propertyCondition,
    tabContentToggleSelector
}: ListingFeatureR123PropsInterface) => {
    const name: ComponentClassnameDefaultInterface = {
        'ui-organisms-listing-feature-r123': true,
        relative: true
    };

    const contextValue: ListingFeatureDetailContextInterface = {
        propertyDetail: {
            floor,
            listingId,
            furnishing,
            postedDate,
            certificate,
            electricity,
            propertyType,
            propertyCondition
        }
    };

    return (
        <ListingFeatureDetailContext.Provider value={contextValue}>
            <CardComponent
                className={StringHelper.objToString(name)}
                boxShadow="r123"
                style={{ padding: '24px 16px' }}
            >
                <TextComponent
                    tag="h2"
                    color="headingR123"
                    fontWeight={700}
                    style={{
                        marginBottom: 8,
                        fontSize: 18,
                        lineHeight: '22px'
                    }}
                >
                    {title}
                </TextComponent>
                <TabsComponent tabsID="tabs-1">
                    <TabsComponent.Item tab="Detil property">
                        <ExpandTextComponent
                            showArrow
                            color="primary"
                            collapsedHeight={260}
                            gradient
                            textToggleButton={{
                                onCLose: tabContentToggleSelector.onCLose,
                                onExpand: tabContentToggleSelector.onExpand
                            }}
                        >
                            <PropertyDetailComponent />
                        </ExpandTextComponent>
                    </TabsComponent.Item>
                    <TabsComponent.Item tab="Fasilitas">
                        <TextComponent
                            tag="p"
                            style={{
                                marginTop: 16,
                                lineHeight: 1.5
                            }}
                        >
                            {propertyFacility}
                        </TextComponent>
                    </TabsComponent.Item>
                </TabsComponent>
            </CardComponent>
        </ListingFeatureDetailContext.Provider>
    );
};

export default ListingFeatureR123;
