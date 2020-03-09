import * as React from 'react';
import { Component, ReactNode } from 'react';

import { ButtonPropsInterface } from './interface/testing.interface';

/**
 * Button Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.03.09
 */
class ButtonComponent extends Component<ButtonPropsInterface> {
    render(): ReactNode {
        return <button type="button">Hello</button>;
    }
}

export default ButtonComponent;
