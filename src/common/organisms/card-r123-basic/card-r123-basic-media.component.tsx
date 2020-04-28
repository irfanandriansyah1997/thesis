import React, { SFC } from 'react';
import PropTypes from 'prop-types';

import { CardMediaPropsInterface } from './interface/component.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import StringHelper from '../../../shared/helper/string.helper';

/**
 * Card Media Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @description card content which contains media such as image
 * @since 2020.04.27
 */
const CardMediaComponent: SFC<CardMediaPropsInterface> = ({
    className,
    children,
    width,
    height,
    ...res
}) => {
    const name: ComponentClassnameDefaultInterface = {
        flex: true,
        [`ui-organisms-card__media-wrapper`]: true,
        'flex-shrink-0': true,
        [`${className}`]: ValidatorHelper.verifiedIsNotEmpty(className)
    };

    return (
        <div
            className={StringHelper.objToString(name)}
            style={{
                width: ValidatorHelper.isNumber(width) ? `${width}px` : 'auto',
                height: ValidatorHelper.isNumber(height)
                    ? `${height}px`
                    : 'auto',
                ...res
            }}
        >
            {children}
        </div>
    );
};

CardMediaComponent.defaultProps = {
    width: 'auto',
    height: 'auto',
    className: ''
};

CardMediaComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    width: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf<'auto'>(['auto'])
    ]),
    height: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf<'auto'>(['auto'])
    ]),
    className: PropTypes.string
};

export default CardMediaComponent;
