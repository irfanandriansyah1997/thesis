import React, { SFC } from 'react';
import PropTypes from 'prop-types';

import StringHelper from '../../../shared/helper/string.helper';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import { DropdownItemPropsInterface } from './interface/component.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';

/**
 * Dropdown Item Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.27
 */
const DropdownItemComponent: SFC<DropdownItemPropsInterface> = ({
    disabled,
    ...res
}) => {
    // Getter ClassName
    const className: ComponentClassnameDefaultInterface = {
        [`${res.className}`]: ValidatorHelper.verifiedIsNotEmpty(res.className),
        flex: true,
        relative: true,
        'no-wrap': true,
        'flex-align-center': true,
        'ui-molecules-combobox__item': true,
        'ui-molecules-combobox__item--disabled': ValidatorHelper.verifiedIsNotFalse(
            disabled
        )
    };

    delete res.className;

    try {
        if (!ValidatorHelper.verifiedIsNotEmpty(res.children)) {
            throw new Error('[Error] props children must defined');
        }

        return <div className={StringHelper.objToString(className)} {...res} />;
    } catch (e) {
        console.error(e);
    }

    return null;
};

DropdownItemComponent.propTypes = {
    disabled: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string
    ]).isRequired
};

DropdownItemComponent.defaultProps = {
    disabled: false
};

export default DropdownItemComponent;
