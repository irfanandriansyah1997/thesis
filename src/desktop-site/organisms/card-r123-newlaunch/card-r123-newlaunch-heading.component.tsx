import React, { useContext, FunctionComponent } from 'react';

import StringHelper from '../../../shared/helper/string.helper';
import TextComponent from '../../../common/atomic/text/text.component';
import LinkComponent from '../../../common/atomic/link/link.component';
import CardR123NewLaunchContext from './context/card-r123-newlaunch.context';
import { CardR123NewLaunchContextInterface } from './interface/component.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';

/**
 * New Launch Card Heading Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @description
 * @since 2020.06.08
 */
const CardR123NewLaunchHeadingComponent: FunctionComponent = () => {
    const { data } = useContext<CardR123NewLaunchContextInterface>(
        CardR123NewLaunchContext
    );
    const { agencyName, publishingDate, link } = data;

    const name: ComponentClassnameDefaultInterface = {
        [`ui-organisms-card-r123-newlaunch__heading-section`]: true,
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
                >
                    {agencyName}
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

export default CardR123NewLaunchHeadingComponent;
