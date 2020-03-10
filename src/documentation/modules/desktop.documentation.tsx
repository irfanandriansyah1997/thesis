import * as React from 'react';
import { ReactNode } from 'react';
import DocumentationModuleAbstract from '../../shared/abstract/documentation/documentation-module.abstract';

/**
 * Desktop Module Documentation
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.03.10
 */
class DesktopModuleDocumentation extends DocumentationModuleAbstract {
    /**
     * generate path default in desktop module
     * @return {ReactNode}
     */
    get view(): ReactNode {
        const { name } = this.props;

        return <p>{`Hello World From ${name}`}</p>;
    }
}

export default DesktopModuleDocumentation;
