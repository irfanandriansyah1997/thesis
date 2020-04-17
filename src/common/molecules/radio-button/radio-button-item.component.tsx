import PropTypes from 'prop-types';
import React, { SFC, useContext, CSSProperties } from 'react';

import RadioButtonContext from './context/radio.context';
import TextComponent from '../../atomic/text/text.component';
import StringHelper from '../../../shared/helper/string.helper';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/componen-default.interface';
import { ComponentMultipleOptionItemInterface } from '../../../shared/interface/component/compone-multiple-option.interface';

const MarginValue = 5;

/**
 * Radio Button Item Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.15
 */
const RadioButtonItemComponent: SFC<ComponentMultipleOptionItemInterface> = ({
    id,
    label,
    ...res
}: ComponentMultipleOptionItemInterface) => {
    const { value, name, onChange, type } = useContext(RadioButtonContext);

    // Getter ClassName
    const className: ComponentClassnameDefaultInterface = {
        [`${res.className}`]: ValidatorHelper.verifiedIsNotEmpty(res.className),
        flex: true,
        relative: true,
        'flex-row': true,
        'flex-align-center': true,
        'ui-molecules-radio__item': true,
        [`ui-multiple-option-${type}`]: ValidatorHelper.verifiedIsNotEmpty(type)
    };
    delete res.className;

    // Getter Style
    const style: CSSProperties = {
        margin: MarginValue
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
                type="radio"
                className="hidden"
                checked={value === res.value}
                onChange={(): void => {
                    onChange(res.value);
                }}
                {...res}
            />
            <label
                className={StringHelper.objToString({
                    flex: true,
                    relative: true,
                    'flex-align-center': true,
                    'ui-molecules-radio__label': true
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
                            'ui-molecules-radio__label-text': true
                        })}
                    >
                        {label}
                    </TextComponent>
                ) : null}
            </label>
        </div>
    );
};

RadioButtonItemComponent.propTypes = {
    label: PropTypes.string,
    id: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

RadioButtonItemComponent.defaultProps = {
    label: undefined
};

export default RadioButtonItemComponent;
