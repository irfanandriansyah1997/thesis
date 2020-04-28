import React, { SFC } from 'react';
import PropTypes from 'prop-types';

import { CardContentPropsInterface } from './interface/component.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import StringHelper from '../../../shared/helper/string.helper';

/**
 * Card Media Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @description card content which contains text, button, etc
 * @since 2020.04.27
 */
const CardContentComponent: SFC<CardContentPropsInterface> = ({
    className,
    children,
    ...res
}) => {
    const name: ComponentClassnameDefaultInterface = {
        flex: true,
        [`ui-organisms-card__content-wrapper`]: true,
        'flex-column': true,
        [`${className}`]: ValidatorHelper.verifiedIsNotEmpty(className)
    };

    return (
        <div
            className={StringHelper.objToString(name)}
            style={{ ...res.style }}
        >
            {children}
        </div>
    );
};

CardContentComponent.defaultProps = {
    className: ''
};

CardContentComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    className: PropTypes.string
};

export default CardContentComponent;
