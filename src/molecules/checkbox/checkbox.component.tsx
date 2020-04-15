import React, { SFC } from 'react';

import CheckboxContext from './context/checkbox.context';
import StringHelper from '../../shared/helper/string.helper';
import ValidatorHelper from '../../shared/helper/validator.helper';
import { ComponentClassnameDefaultInterface } from '../../shared/interface/component/componen-default.interface';
import {
    ComponentCheckboxInterface,
    ComponentCheckboxContextInterface
} from '../../shared/interface/component/component-input.interface';

/**
 * Checkbox Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.15
 */
const CheckboxComponent: SFC<ComponentCheckboxInterface> = ({
    name,
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
        value,
        styling,
        onChange: onChangeItem
    };

    const className: ComponentClassnameDefaultInterface = {
        [`${res.className}`]: ValidatorHelper.verifiedIsNotEmpty(res.className),
        flex: true,
        relative: true,
        'ui-molecules-checkbox': true
    };
    delete res.className;

    return (
        <CheckboxContext.Provider value={contextValue}>
            <section className={StringHelper.objToString(className)} {...res} />
        </CheckboxContext.Provider>
    );
};

export default CheckboxComponent;
