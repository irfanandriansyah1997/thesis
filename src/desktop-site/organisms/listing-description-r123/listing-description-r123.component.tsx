import React, { SFC } from 'react';

import CardComponent from '../../../common/atomic/card/card.component';
import MapComponent from '../../../common/molecules/map/map.component';
import TextComponent from '../../../common/atomic/text/text.component';
import ExpandTextComponent from '../../../common/molecules/expand-text/expand-text.component';
import { ListingDescriptionR123PropsInterface } from './interface/component.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';

import StringHelper from '../../../shared/helper/string.helper';

/**
 * Listing Description R123 Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.06.03
 */
const ListingDescriptionR123: SFC<ListingDescriptionR123PropsInterface> = ({
    map,
    content,
    contentToggleSelector
}: ListingDescriptionR123PropsInterface) => {
    const name: ComponentClassnameDefaultInterface = {
        'ui-organisms-listing-description-r123': true,
        flex: true,
        'flex-column': true,
        relative: true
    };

    return (
        <CardComponent
            className={StringHelper.objToString(name)}
            boxShadow="r123"
        >
            <MapComponent
                id={map.id}
                location={map.location}
                width={map.width}
                height={map.height}
                mapKey={map.mapKey}
            />
            <div
                className="ui-organisms-listing-description-r123__detail"
                style={{ padding: 16 }}
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
                    {content.title}
                </TextComponent>
                <ExpandTextComponent
                    showArrow
                    color="primary"
                    collapsedHeight={158}
                    textToggleButton={{
                        onCLose: contentToggleSelector.onCLose,
                        onExpand: contentToggleSelector.onExpand
                    }}
                    gradient
                >
                    <TextComponent
                        color="text"
                        fontWeight={400}
                        align="justify"
                        tag="p"
                        style={{
                            whiteSpace: 'pre-line',
                            wordBreak: 'break-word'
                        }}
                    >
                        {content.description}
                    </TextComponent>
                </ExpandTextComponent>
            </div>
        </CardComponent>
    );
};

export default ListingDescriptionR123;
