import React, { Validator, CSSProperties } from 'react';
import PropTypes from 'prop-types';

import CheckboxContext from './context/checkbox.context';
import CheckboxItemComponent from './checkbox-item.component';
import StringHelper from '../../../shared/helper/string.helper';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import { CheckboxDefaultExportInterface } from './interface/component.interface';
import { PositionDirectionType } from '../../../shared/interface/common/position.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/componen-default.interface';
import {
    ComponentCheckboxInterface,
    ComponentCheckboxContextInterface,
    ComponentInputMultipleOptionType
} from '../../../shared/interface/component/component-input.interface';

const MarginValue = -5;

/**
 * Checkbox Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.15
 */
const CheckboxComponent: CheckboxDefaultExportInterface = ({
    name,
    type,
    value,
    styling,
    onChange,
    ...res
}: ComponentCheckboxInterface) => {
    /**
     * On Change Value Item
     * @param {string | number} response - response item when onchange value
     * @return {void}
     */
    const onChangeItem = (response: string | number): void => {
        if (value.includes(response)) {
            onChange(
                value.filter((item: string | number) => item !== response)
            );
        } else {
            onChange([...value, response]);
        }
    };

    const contextValue: ComponentCheckboxContextInterface = {
        name,
        type,
        value,
        styling,
        onChange: onChangeItem
    };

    // Getter ClassName
    const className: ComponentClassnameDefaultInterface = {
        [`${res.className}`]: ValidatorHelper.verifiedIsNotEmpty(res.className),
        flex: true,
        relative: true,
        'ui-molecules-checkbox': true,
        'flex-row': styling === 'horizontal',
        'flex-column': styling === 'vertical',
        'flex-align-start': styling === 'vertical',
        'flex-align-center': styling === 'horizontal'
    };
    delete res.className;

    // Getter Style
    const style: CSSProperties = {
        marginTop: styling === 'horizontal' ? 0 : MarginValue,
        marginLeft: styling === 'horizontal' ? MarginValue : 0,
        marginRight: styling === 'horizontal' ? MarginValue : 0,
        marginBottom: styling === 'horizontal' ? 0 : MarginValue
    };

    return (
        <CheckboxContext.Provider value={contextValue}>
            <section
                style={style}
                className={StringHelper.objToString(className)}
                {...res}
            />
        </CheckboxContext.Provider>
    );
};

CheckboxComponent.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    styling: PropTypes.oneOf<PositionDirectionType>(['horizontal', 'vertical']),
    type: PropTypes.oneOf<ComponentInputMultipleOptionType>([
        'checkbox',
        'radio'
    ]),
    value: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
    ) as Validator<(string | number)[]>
};

CheckboxComponent.defaultProps = {
    value: [],
    type: 'checkbox',
    styling: 'vertical'
};

CheckboxComponent.Item = CheckboxItemComponent;

export default CheckboxComponent;
