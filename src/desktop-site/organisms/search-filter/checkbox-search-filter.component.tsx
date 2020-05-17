import React, { SFC, Validator } from 'react';
import PropTypes from 'prop-types';

import CheckboxComponent from '../../../common/molecules/checkbox/checkbox.component';

import { FilterCheckboxPropsInterface } from './interface/component.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import StringHelper from '../../../shared/helper/string.helper';

/**
 * Checkbox Search Filter Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.05.11
 */
const CheckboxSearchFilter: SFC<FilterCheckboxPropsInterface> = ({
    className,
    onChange,
    value,
    name,
    id,
    itemValue,
    label
}) => {
    const filterItemClassName: ComponentClassnameDefaultInterface = {
        'filter-content': true,
        [`${className}`]: ValidatorHelper.verifiedIsNotEmpty(className)
    };

    return (
        <div className={StringHelper.objToString(filterItemClassName)}>
            <CheckboxComponent
                name={name}
                styling="horizontal"
                type="checkbox"
                onChange={onChange}
                value={value}
                className={className}
            >
                <CheckboxComponent.Item
                    id={id}
                    value={itemValue}
                    label={label}
                />
            </CheckboxComponent>
        </div>
    );
};

CheckboxSearchFilter.defaultProps = {
    value: [],
    className: undefined
};

CheckboxSearchFilter.propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    label: PropTypes.string.isRequired,
    value: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
    ) as Validator<(string | number)[]>,
    itemValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired
};

export default CheckboxSearchFilter;
