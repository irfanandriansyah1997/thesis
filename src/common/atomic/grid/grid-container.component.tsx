/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { SFC } from 'react';
import PropTypes from 'prop-types';

import StringHelper from '../../../shared/helper/string.helper';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import { GridContainerPropsInterface } from './interface/component.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';

/**
 * Grid Container Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.11
 */
const GridContainerComponent: SFC<GridContainerPropsInterface> = ({
    children,
    ...res
}) => {
    /**
     * Classname Getter
     * @description generate className based on props
     * @return {string}
     */
    const className: ComponentClassnameDefaultInterface = {
        'ui-container': true,
        [`${res.className}`]: ValidatorHelper.verifiedIsNotEmpty(res.className)
    };
    delete res.className;

    return (
        <div className={StringHelper.objToString(className)} {...res}>
            {React.Children.toArray(children).filter((o: any): boolean => {
                if (o.type) {
                    return o.type.name === 'GridRowComponent';
                }

                return false;
            })}
        </div>
    );
};

GridContainerComponent.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string
    ]).isRequired
};

GridContainerComponent.defaultProps = {
    className: undefined
};

export default GridContainerComponent;
