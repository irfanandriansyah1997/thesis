import React, { SFC, useContext } from 'react';

import StringHelper from '../../../shared/helper/string.helper';
import TextComponent from '../../../common/atomic/text/text.component';
import LinkComponent from '../../../common/atomic/link/link.component';
import CardR123FeaturedContext from './context/card-r123-featured.context';
import { CardR123FeaturedContextInterface } from './interface/component.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';

/**
 * Featured / Premier Card Heading Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @description featured / premier card heading
 * @since 2020.05.04
 */
const CardR123FeaturedHeadingComponent: SFC = () => {
    const { data } = useContext<CardR123FeaturedContextInterface>(
        CardR123FeaturedContext
    );
    const { agentName, publishingDate, link } = data;

    const name: ComponentClassnameDefaultInterface = {
        [`ui-organisms-card-r123-featured__heading-section`]: true,
        flex: true,
        relative: true,
        'flex-align-baseline': true
    };

    return (
        <section className={StringHelper.objToString(name)}>
            <TextComponent
                tag="h2"
                color="text"
                styling="heading-6"
                className="info-title truncate"
            >
                <LinkComponent
                    noUnderline
                    href={link}
                    color="heading"
                    fontWeight={500}
                    styling="heading-6"
                    className="attribute-config__landsize-info"
                >
                    {agentName}
                </LinkComponent>
            </TextComponent>
            <TextComponent
                tag="p"
                color="text"
                styling="tiny"
                className="info-title truncate"
                style={{ marginLeft: 8 }}
            >
                {publishingDate}
            </TextComponent>
        </section>
    );
};

CardR123FeaturedHeadingComponent.displayName =
    'CardR123FeaturedHeadingComponent';

export default CardR123FeaturedHeadingComponent;
