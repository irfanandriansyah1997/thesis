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
    active,
    disabled,
    subOption,
    disableHover,
    withoutPadding,
    ...res
}) => {
    const isDisableHover = ValidatorHelper.verifiedIsNotFalse(disableHover);
    const isWithoutPadding = ValidatorHelper.verifiedIsNotFalse(withoutPadding);

    // Getter ClassName
    const className: ComponentClassnameDefaultInterface = {
        [`${res.className}`]: ValidatorHelper.verifiedIsNotEmpty(res.className),
        flex: true,
        relative: true,
        'no-wrap': true,
        'ui-molecules-dropdown__item': true,
        'ui-molecules-dropdown__item--disable-hover': isDisableHover,
        'ui-molecules-dropdown__item--without-padding': isWithoutPadding,
        'ui-molecules-dropdown__item--active':
            ValidatorHelper.verifiedIsNotFalse(active) && !isDisableHover,
        'ui-molecules-dropdown__item--sub-option':
            ValidatorHelper.verifiedIsNotFalse(subOption) && !isWithoutPadding,
        'ui-molecules-dropdown__item--disabled': ValidatorHelper.verifiedIsNotFalse(
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

DropdownItemComponent.displayName = 'DropdownItemComponent';

DropdownItemComponent.propTypes = {
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    subOption: PropTypes.bool,
    disableHover: PropTypes.bool,
    withoutPadding: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string
    ]).isRequired
};

DropdownItemComponent.defaultProps = {
    active: false,
    disabled: false,
    subOption: false,
    disableHover: false,
    withoutPadding: false
};

export default DropdownItemComponent;
