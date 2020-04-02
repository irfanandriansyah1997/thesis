import React, { SFC } from 'react';

import { ButtonPropsInterface } from './interface/component.interface';
import IconComponent from '../icon/icon.component';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import StringHelper from '../../../shared/helper/string.helper';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/componen-default.interface';
import './style/style.scss';

/**
 * Button Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.03.09
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
        [`ui-atomic-button--theme-${theme}`]: ValidatorHelper.isString(theme),
        [`ui-atomic-button--size-${size}`]: ValidatorHelper.isString(size),
        [`ui-atomic-button--outline`]: ValidatorHelper.isString(outline),
        [`${res.className}`]: ValidatorHelper.verifiedIsNotEmpty(res.className)
    };
    delete res.className;

    return (
        <button {...res} className={StringHelper.objToString(name)}>
            {icon !== undefined ? (
                <>
                    <IconComponent color="primary" size={18}>
                        close
                    </IconComponent>
                    {children}
                </>
            ) : (
                children
            )}
        </button>
    );
};

export default ButtonComponent;
