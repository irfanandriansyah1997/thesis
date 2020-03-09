import * as React from 'react';

import { NameInterface } from './interface/testing.interface';

import './style/style.scss';

/**
 * Function A
 * @returns {NameInterface}
 */
export function a(): NameInterface {
    return {
        a: ''
    };
}

/**
 * Generate Class
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.03.08
 */
class NameClass extends React.Component {
    /**
     * asasaa
     */
    static get sf(): NameInterface {
        return {
            a: 'asa'
        };
    }

    render(): React.ReactNode {
        return <div>a</div>;
    }
}

export default NameClass;
