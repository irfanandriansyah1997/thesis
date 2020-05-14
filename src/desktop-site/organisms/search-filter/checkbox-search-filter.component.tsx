import React, { SFC, Validator } from 'react';
import PropTypes from 'prop-types';

import CheckboxComponent from '../../../common/molecules/checkbox/checkbox.component';

import { FilterCheckboxComponent } from './interface/component.interface';

/**
 * Checkbox Search Filter Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.05.11
 */
const CheckboxSearchFilter: SFC<FilterCheckboxComponent> = ({
    onChange,
    label,
    value
}) => {
    return (
        <div className="filters flex">
            <CheckboxComponent
                name="sample"
                styling="horizontal"
                type="checkbox"
                onChange={onChange}
                value={value}
            >
                <CheckboxComponent.Item id="checkbox" value={1} label={label} />
            </CheckboxComponent>
        </div>
    );
};

CheckboxSearchFilter.defaultProps = {
    value: []
};

CheckboxSearchFilter.propTypes = {
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
    ) as Validator<(string | number)[]>
};

export default CheckboxSearchFilter;
