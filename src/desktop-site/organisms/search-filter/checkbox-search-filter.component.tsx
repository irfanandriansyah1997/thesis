import React, { SFC } from 'react';
import PropTypes from 'prop-types';

import CheckboxComponent from '../../../common/molecules/checkbox/checkbox.component';

import { FilterCheckboxComponent } from './interface/component.interface';

/**
 * Checkbox Search Filter Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.05.11
 */
const CheckboxSearchFilter: SFC<FilterCheckboxComponent> = ({ onChange }) => {
    return (
        <div className="filters flex">
            <div>
                <CheckboxComponent
                    name="sample"
                    styling="horizontal"
                    type="checkbox"
                    onChange={onChange}
                    value={['value']}
                >
                    <CheckboxComponent.Item
                        id="checkbox"
                        value={1}
                        label="Label 1"
                    />
                </CheckboxComponent>
            </div>
        </div>
    );
};

CheckboxSearchFilter.propTypes = {
    onChange: PropTypes.func.isRequired
};

export default CheckboxSearchFilter;
