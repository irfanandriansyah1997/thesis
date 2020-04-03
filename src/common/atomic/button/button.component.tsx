import React, { SFC } from 'react';

import { ButtonPropsInterface } from './interface/component.interface';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import StringHelper from '../../../shared/helper/string.helper';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/componen-default.interface';
import './style/style.scss';

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
        [`ui-atomic-button--theme-${theme}`]: ValidatorHelper.isString(theme),
        [`ui-atomic-button--size-${size}`]: ValidatorHelper.isString(size),
        [`ui-atomic-button--outline`]: ValidatorHelper.isString(outline),
        [`${res.className}`]: ValidatorHelper.verifiedIsNotEmpty(res.className)
    };
    delete res.className;

    return (
        <button {...res} className={StringHelper.objToString(name)}>
            {icon ? (
                <>
                    {icon}
                    {children}
                </>
            ) : (
                children
            )}
        </button>
    );
};

export default ButtonComponent;
