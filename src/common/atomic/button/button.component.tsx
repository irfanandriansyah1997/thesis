import React, { SFC } from 'react';

import { ButtonPropsInterface } from './interface/component.interface';

/**
 * Button Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.03.09
 */
const ButtonComponent: SFC<ButtonPropsInterface> = ({
    children,
    ...res
}: ButtonPropsInterface) => {
    return <button {...res}>{children}</button>;
};

export default ButtonComponent;
