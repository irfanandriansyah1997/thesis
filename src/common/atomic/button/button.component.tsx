import React, { SFC } from 'react';
import PropTypes, { Validator } from 'prop-types';

import { ButtonPropsInterface } from './interface/component.interface';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import StringHelper from '../../../shared/helper/string.helper';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/componen-default.interface';
import { ComponentDefaultSize } from '../../../shared/interface/component/component-size.interface';
import { ComponentDefaultTheme } from '../../../shared/interface/component/component-theme.interface';

/**
 * Button Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.04.2
 */
const ButtonComponent: SFC<ButtonPropsInterface> = ({
    children,
    size,
    theme,
    outline,
    icon,
    ...res
}: ButtonPropsInterface) => {
    const name: ComponentClassnameDefaultInterface = {
        'ui-atomic-button': true,
        'ui-atomic-button--outline': ValidatorHelper.verifiedIsNotFalse(
            outline
        ),
        [`ui-atomic-button--theme-${theme}`]: ValidatorHelper.isString(theme),
        [`ui-atomic-button--size-${size}`]: ValidatorHelper.isString(size),
        [`${res.className}`]: ValidatorHelper.verifiedIsNotEmpty(res.className)
    };
    delete res.className;

    return (
        <button {...res} className={StringHelper.objToString(name)}>
            {icon ? (
                <span className="ui-atomic-button__icon">{icon}</span>
            ) : null}
            <span className="ui-atomic-button--children">{children}</span>
        </button>
    );
};

ButtonComponent.defaultProps = {
    theme: 'primary',
    size: 'default',
    outline: false,
    icon: undefined
};

ButtonComponent.propTypes = {
    theme: PropTypes.oneOf<ComponentDefaultTheme>([
        'primary',
        'secondary',
        'success',
        'warning',
        'danger',
        'info'
    ]) as Validator<ComponentDefaultTheme>,
    size: PropTypes.oneOfType([
        PropTypes.oneOf<ComponentDefaultSize>(['big', 'default', 'small'])
    ]) as Validator<ComponentDefaultSize>,
    outline: PropTypes.bool,
    icon: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.element
    ])
};

export default ButtonComponent;
