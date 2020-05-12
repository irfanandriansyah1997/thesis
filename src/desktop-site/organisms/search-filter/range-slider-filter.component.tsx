import React, { SFC } from 'react';
import PropTypes from 'prop-types';

import RangeSliderComponent from '../../../common/molecules/range-slider/range-slider.component';

import { FilterRangeComponent } from './interface/component.interface';

/**
 * Range Slider Search Filter Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.05.11
 */
const RangeSliderSearchFilter: SFC<FilterRangeComponent> = ({
    min,
    max,
    value,
    onChange
}) => {
    return (
        <div className="filters flex">
            <div className="land-size" style={{ marginRight: 20 }}>
                <RangeSliderComponent
                    max={min}
                    min={max}
                    step={1}
                    onChange={onChange}
                    value={{
                        start: value as number,
                        end: value as number
                    }}
                />
            </div>
        </div>
    );
};

RangeSliderSearchFilter.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
};

export default RangeSliderSearchFilter;
