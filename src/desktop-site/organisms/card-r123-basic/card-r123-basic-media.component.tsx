import React, { SFC, useContext } from 'react';

import StringHelper from '../../../shared/helper/string.helper';
import CardR123BasicContext from './context/card-r123-basic.context';
import LinkComponent from '../../../common/atomic/link/link.component';
import ImageComponent from '../../../common/atomic/image/image.component';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';
import { CardR123BasicContextInterface } from './interface/component.interface';

/**
 * Card Media Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @author Irfan Andriansyah <irfan@99.co>
 * @description card content which contains media such as image
 * @since 2020.04.27
 */
const CardMediaComponent: SFC = () => {
    const { data } = useContext<CardR123BasicContextInterface>(
        CardR123BasicContext
    );
    const { link, media } = data;

    const className: ComponentClassnameDefaultInterface = {
        'ui-organisms-card-r123-basic__media-section': true,
        'flex-shrink-0': true
    };

    return (
        <section className={StringHelper.objToString(className)}>
            <LinkComponent
                href={link}
                noUnderline
                color="heading"
                fontWeight={500}
                className="card--media-link"
            >
                <ImageComponent
                    width="100%"
                    height="100%"
                    key={media[0].id || ''}
                    src={media[0].src || ''}
                    alt={media[0].alt || ''}
                    objectFit="cover"
                />
            </LinkComponent>
        </section>
    );
};

export default CardMediaComponent;
