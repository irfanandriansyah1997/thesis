import PropTypes from 'prop-types';
import React, { SFC, useContext, CSSProperties } from 'react';

import CheckboxContext from './context/checkbox.context';
import TextComponent from '../../atomic/text/text.component';
import StringHelper from '../../../shared/helper/string.helper';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/componen-default.interface';
import { ComponentMultipleOptionItemInterface } from '../../../shared/interface/component/compone-multiple-option.interface';

const MarginValue = 5;

/**
 * Checkbox Item Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.15
 */
const CheckboxItemComponent: SFC<ComponentMultipleOptionItemInterface> = ({
    id,
    label,
    ...res
}: ComponentMultipleOptionItemInterface) => {
    const { value, name, onChange, styling } = useContext(CheckboxContext);

    // Getter ClassName
    const className: ComponentClassnameDefaultInterface = {
        [`${res.className}`]: ValidatorHelper.verifiedIsNotEmpty(res.className),
        flex: true,
        relative: true,
        'flex-row': true,
        'flex-align-center': true,
        'ui-molecules-checkbox__item': true
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
        <div
            style={style}
            tabIndex={res.tabIndex}
            className={StringHelper.objToString(className)}
        >
            <input
                id={id}
                name={name}
                type="checkbox"
                className="hidden"
                checked={value.includes(res.value)}
                onChange={(): void => onChange(res.value)}
                {...res}
            />
            <label
                className={StringHelper.objToString({
                    flex: true,
                    'flex-align-center': true,
                    'ui-molecules-checkbox__label': true
                })}
                htmlFor={id}
                tabIndex={res.tabIndex}
            >
                {label ? (
                    <TextComponent
                        tag="span"
                        align="left"
                        color="heading"
                        fontWeight={400}
                        styling="heading-6"
                        className={StringHelper.objToString({
                            block: true,
                            'ui-molecules-checkbox__label-text': true
                        })}
                    >
                        {label}
                    </TextComponent>
                ) : null}
            </label>
        </div>
    );
};

CheckboxItemComponent.propTypes = {
    label: PropTypes.string,
    id: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

CheckboxItemComponent.defaultProps = {
    label: undefined
};

export default CheckboxItemComponent;
