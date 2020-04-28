import React from 'react';

import CardComponent from '../../atomic/card/card.component';
import CardMediaComponent from './card-r123-basic-media.component';
import CardContentComponent from './card-r123-basic-content.component';

import {
    CardR123BasicDefaultExportInterface,
    CardR123BasicPropsInterface
} from './interface/component.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import StringHelper from '../../../shared/helper/string.helper';

/**
 * R123 Basic Card Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.04.27
 */
const CardR123Basic: CardR123BasicDefaultExportInterface = ({
    className,
    children,
    size,
    ...res
}: CardR123BasicPropsInterface) => {
    const name: ComponentClassnameDefaultInterface = {
        flex: true,
        [`ui-organisms-card`]: true,
        'flex-align-start': true,
        [`${className}`]: ValidatorHelper.verifiedIsNotEmpty(className)
    };

    return (
        <CardComponent
            className={StringHelper.objToString(name)}
            style={{
                width: ValidatorHelper.isNumber(size) ? `${size}px` : 750,
                padding: 16,
                ...res
            }}
            boxShadow="r123"
        >
            {children}
        </CardComponent>
    );
};

CardR123Basic.Media = CardMediaComponent;
CardR123Basic.Content = CardContentComponent;

export default CardR123Basic;
