/* eslint-disable react/jsx-curly-newline */
import React, { SFC } from 'react';
import PropTypes from 'prop-types';

import ComboboxComponent from '../../../common/molecules/combobox/combobox.component';

import { FilterDropdownComponent } from './interface/component.interface';

/**
 * Combobox Search Filter Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.05.11
 */
const ComboboxSearchFilter: SFC<FilterDropdownComponent> = ({
    option,
    value,
    onChange
}) => {
    return (
        <div className="filters flex">
            <div className="sub-channel" style={{ marginRight: 20 }}>
                <ComboboxComponent name="id" onChange={onChange} value={value}>
                    {option.map((item) => (
                        <ComboboxComponent.Item
                            key={item.id}
                            id={item.id}
                            value={item.value}
                            label={item.label}
                        />
                    ))}
                </ComboboxComponent>
            </div>
        </div>
    );
};

ComboboxSearchFilter.propTypes = {
    option: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
};

export default ComboboxSearchFilter;
