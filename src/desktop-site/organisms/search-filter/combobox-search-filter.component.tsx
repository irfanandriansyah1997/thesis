import React, { SFC } from 'react';
import PropTypes from 'prop-types';

import ComboboxComponent from '../../../common/molecules/combobox/combobox.component';

import { FilterComboboxPropsInterface } from './interface/component.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import StringHelper from '../../../shared/helper/string.helper';

/**
 * Combobox Search Filter Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.05.11
 */
const ComboboxSearchFilter: SFC<FilterComboboxPropsInterface> = ({
    option,
    onChange,
    className,
    name,
    value
}) => {
    const filterItemClassName: ComponentClassnameDefaultInterface = {
        'filter-content': true,
        [`${className}`]: ValidatorHelper.verifiedIsNotEmpty(className)
    };

    return (
        <div
            className={StringHelper.objToString(filterItemClassName)}
            style={{ marginRight: 20 }}
        >
            <ComboboxComponent
                name={name}
                onChange={onChange}
                value={value}
                className={className}
            >
                {option.map((item) => (
                    <ComboboxComponent.Item
                        key={item.id}
                        id={item.id}
                        value={item.value}
                        label={item.label}
                        subOption={item.subOption}
                    />
                ))}
            </ComboboxComponent>
        </div>
    );
};

ComboboxSearchFilter.defaultProps = {
    className: undefined
};

ComboboxSearchFilter.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string,
    option: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default ComboboxSearchFilter;
