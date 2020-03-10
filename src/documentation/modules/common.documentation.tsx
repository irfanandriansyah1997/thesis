import React, { ReactNode } from 'react';
import DocumentationModuleAbstract from '../../shared/abstract/documentation/documentation-module.abstract';

/**
 * Common Module Documentation
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.03.10
 */
class CommonModuleDocumentation extends DocumentationModuleAbstract {
    /**
     * generate path default in common module
     * @return {ReactNode}
     */
    get view(): ReactNode {
        const { name } = this.props;

        return <p>{`Hello World From ${name}`}</p>;
    }
}

export default CommonModuleDocumentation;
