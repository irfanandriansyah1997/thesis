import React, { ReactNode } from 'react';

import DocumentationModuleAbstract from '../../../shared/abstract/documentation/documentation-module.abstract';
import { MappingModulesComponentInterface } from '../../../shared/interface/documentation/documentation-router.interface';

/**
 * Atomic Component
 */
import TextDocumentation from '../../../common/text/documentation/text.documentation';
import IconDocumentation from '../../../common/icon/documentation/icon.documentation';

/**
 * Common Module Documentation
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.03.10
 */
class CommonModuleDocumentation extends DocumentationModuleAbstract {
    /**
     * Register All Component
     */
    static get component(): MappingModulesComponentInterface {
        return {
            atomic: [
                {
                    ModuleItemComponent: TextDocumentation,
                    name: 'Text Component',
                    path: 'text'
                },
                {
                    ModuleItemComponent: IconDocumentation,
                    name: 'Icon Component',
                    path: 'icon'
                }
            ],
            molecules: [],
            organism: []
        };
    }

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
