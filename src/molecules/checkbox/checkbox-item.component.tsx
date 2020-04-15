import React, { SFC, useContext } from 'react';

import CheckboxContext from './context/checkbox.context';
import StringHelper from '../../shared/helper/string.helper';
import ValidatorHelper from '../../shared/helper/validator.helper';
import TextComponent from '../../common/atomic/text/text.component';
import { ComponentClassnameDefaultInterface } from '../../shared/interface/component/componen-default.interface';
import { ComponentMultipleOptionItemInterface } from '../../shared/interface/component/compone-multiple-option.interface';

/**
 * Checkbox Item Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.15
 */
const CheckboxComponent: SFC<ComponentMultipleOptionItemInterface> = ({
    id,
    label,
    ...res
}: ComponentMultipleOptionItemInterface) => {
    const { value, name, onChange } = useContext(CheckboxContext);
    const className: ComponentClassnameDefaultInterface = {
        [`${res.className}`]: ValidatorHelper.verifiedIsNotEmpty(res.className),
        flex: true,
        relative: true,
        'ui-molecules-checkbox': true
    };
    delete res.className;

    return (
        <div
            id={id}
            tabIndex={res.tabIndex}
            className={StringHelper.objToString(className)}
        >
            <input
                name={name}
                type="checkbox"
                checked={value.includes(res.value)}
                onChange={(): void => onChange(res.value)}
                {...res}
            />
            {label ? (
                <label htmlFor={id}>
                    <TextComponent
                        tag="span"
                        align="left"
                        color="heading"
                        fontWeight={400}
                        styling="heading-6"
                    >
                        {label}
                    </TextComponent>
                </label>
            ) : null}
        </div>
    );
};

export default CheckboxComponent;
