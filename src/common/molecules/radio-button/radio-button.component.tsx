import React, { CSSProperties, Validator } from 'react';
import PropTypes from 'prop-types';

import RadioButtonContext from './context/radio.context';
import StringHelper from '../../../shared/helper/string.helper';
import CheckboxItemComponent from './radio-button-item.component';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import { RadioButtonDefaultExportInterface } from './interface/component.interface';
import { PositionDirectionType } from '../../../shared/interface/common/position.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';
import {
    ComponentRadioInterface,
    ComponentRadioContextInterface,
    ComponentInputMultipleOptionType
} from '../../../shared/interface/component/component-input.interface';

const MarginValue = -5;

/**
 * Checkbox Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.15
 */
const RadioButtonComponent: RadioButtonDefaultExportInterface = ({
    name,
    type,
    value,
    styling,
    onChange,
    ...res
}: ComponentRadioInterface) => {
    /**
     * On Change Value Item
     * @param {string | number} response - response item when onchange value
     * @return {void}
     */
    const onChangeItem = (response: string | number): void => {
        onChange(response as string | number);
    };

    const contextValue: ComponentRadioContextInterface = {
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
        'flex-wrap': true,
        'ui-molecules-radio': true,
        'flex-row': styling === 'horizontal',
        'flex-column': styling === 'vertical',
        'flex-align-start': styling === 'vertical',
        'flex-align-center': styling === 'horizontal'
    };
    delete res.className;

    // Getter Style
    const style: CSSProperties = {
        margin: MarginValue
    };

    return (
        <RadioButtonContext.Provider value={contextValue}>
            <section
                style={style}
                className={StringHelper.objToString(className)}
                {...res}
            />
        </RadioButtonContext.Provider>
    );
};

RadioButtonComponent.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    styling: PropTypes.oneOf<PositionDirectionType>(['horizontal', 'vertical']),
    type: PropTypes.oneOf<ComponentInputMultipleOptionType>([
        'checkbox',
        'radio'
    ]),
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]) as Validator<string | number>
};

RadioButtonComponent.defaultProps = {
    value: undefined,
    type: 'radio',
    styling: 'vertical'
};

RadioButtonComponent.Item = CheckboxItemComponent;

export default RadioButtonComponent;
