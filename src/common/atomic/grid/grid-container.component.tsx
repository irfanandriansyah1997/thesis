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
    ...res
}) => {
    /**
     * Classname Getter
     * @description generate className based on props
     * @return {string}
     */
    const className: ComponentClassnameDefaultInterface = {
        'ui-atomic-container': true,
        [`${res.className}`]: ValidatorHelper.verifiedIsNotEmpty(res.className)
    };
    delete res.className;

    return <div className={StringHelper.objToString(className)} {...res} />;
};

GridContainerComponent.propTypes = {
    className: PropTypes.string
};

GridContainerComponent.defaultProps = {
    className: undefined
};

export default GridContainerComponent;
