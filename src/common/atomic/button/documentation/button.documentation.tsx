import * as React from 'react';
import { Component } from 'react';
import ButtonComponent from '../button.component';

import '../style/style.scss';

/**
 * Button Documentation
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.03.09
 */
class ButtonDocumentation extends Component {
    render(): React.ReactNode {
        return <ButtonComponent theme="info" size="default" />;
    }
}

export default ButtonDocumentation;
