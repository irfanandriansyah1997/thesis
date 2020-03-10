import React, { ReactNode } from 'react';
import DocumentationModuleAbstract from '../../shared/abstract/documentation/documentation-module.abstract';

/**
 * Mobile Module Documentation
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.03.10
 */
class MobileModuleDocumentation extends DocumentationModuleAbstract {
    /**
     * generate path default in mobile module
     * @return {ReactNode}
     */
    get view(): ReactNode {
        const { name } = this.props;

        return <p>{`Hello World From ${name}`}</p>;
    }
}

export default MobileModuleDocumentation;
