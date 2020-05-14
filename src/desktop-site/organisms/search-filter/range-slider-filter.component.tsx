import React, { SFC, ValidationMap } from 'react';
import PropTypes from 'prop-types';

import RangeSliderComponent from '../../../common/molecules/range-slider/range-slider.component';
import DropdownComponent from '../../../common/molecules/dropdown/dropdown.component';
import TextComponent from '../../../common/atomic/text/text.component';

import { FilterRangeComponent } from './interface/component.interface';
import { RangeSliderValueInterface } from '../../../common/molecules/range-slider/interface/component.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import StringHelper from '../../../shared/helper/string.helper';

/**
 * Range Slider Search Filter Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.05.11
 */
const RangeSliderSearchFilter: SFC<FilterRangeComponent> = ({
    min,
    max,
    value,
    onChange,
    className,
    label
}) => {
    const name: ComponentClassnameDefaultInterface = {
        'filter-content': true,
        [`${className}`]: ValidatorHelper.verifiedIsNotEmpty(className)
    };

    return (
        <div
            className={StringHelper.objToString(name)}
            style={{ marginRight: 20 }}
        >
            <DropdownComponent
                label={label}
                name="land-size"
                trigger="click"
                icon="rui-icon-arrow-down-small"
                type="content"
            >
                <DropdownComponent.Item disableHover>
                    <div style={{ padding: 16, width: 320 }}>
                        <div
                            className="range-slider-heading"
                            style={{
                                paddingBottom: 16,
                                borderBottom: '1px solid #e9e9e9'
                            }}
                        >
                            <TextComponent
                                tag="p"
                                color="text"
                                fontWeight={700}
                            >
                                {label}
                            </TextComponent>
                            <TextComponent
                                tag="p"
                                color="text"
                                styling="heading-5"
                            >
                                <span>{`${value.start} m2 `}</span>
                                <span>-</span>
                                <span>{` ${value.end} m2 +`}</span>
                            </TextComponent>
                        </div>
                        <RangeSliderComponent
                            max={max}
                            min={min}
                            onChange={onChange}
                            value={value}
                            style={{ marginTop: 16 }}
                        />
                    </div>
                </DropdownComponent.Item>
            </DropdownComponent>
        </div>
    );
};

RangeSliderSearchFilter.defaultProps = {
    className: undefined
};

RangeSliderSearchFilter.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    value: PropTypes.shape<ValidationMap<RangeSliderValueInterface>>({
        end: PropTypes.number.isRequired,
        start: PropTypes.number.isRequired
    }).isRequired,
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string,
    label: PropTypes.string.isRequired
};

export default RangeSliderSearchFilter;
