import React, { SFC } from 'react';

import CardComponent from '../../../common/atomic/card/card.component';
import TabsComponent from '../../../common/molecules/tabs/tabs.component';
import TextComponent from '../../../common/atomic/text/text.component';
import { ListingFeatureR123PropsInterface } from './interface/component.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';

import StringHelper from '../../../shared/helper/string.helper';

const { Item } = TabsComponent;

/**
 * Listing Description R123 Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.06.03
 */
const ListingFeatureR123: SFC<ListingFeatureR123PropsInterface> = ({
    title
}: ListingFeatureR123PropsInterface) => {
    const name: ComponentClassnameDefaultInterface = {
        'ui-organisms-listing-feature-r123': true,
        relative: true
    };

    return (
        <CardComponent
            className={StringHelper.objToString(name)}
            boxShadow="r123"
            style={{ padding: '24px 26px' }}
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
                <Item tab="Detil property">
                    <TextComponent
                        tag="p"
                        style={{
                            lineHeight: 1.5
                        }}
                    >
                        Detil property
                    </TextComponent>
                </Item>
                <Item tab="Fasilitas">
                    <TextComponent
                        tag="p"
                        style={{
                            marginTop: 16,
                            lineHeight: 1.5
                        }}
                    >
                        Fasilitas
                    </TextComponent>
                </Item>
            </TabsComponent>
        </CardComponent>
    );
};

export default ListingFeatureR123;
