import { Route } from 'react-router-dom';
import React, { Component, ReactNode } from 'react';

import {
    DocumentRouterItemInterface,
    DocumentRouterModuleInterface
} from '../../interface/documentation/documentation-router.interface';

/**
 * Documentation Module Abstract
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.03.10
 */
abstract class DocumentationModuleAbstract extends Component<
    DocumentRouterModuleInterface
> {
    /**
     * Getter router in documentation module component
     * @return {ReactNode}
     */
    get router(): ReactNode {
        const { menu, path } = this.props;
        return (
            <>
                {menu.map(
                    ({
                        ModuleItemComponent,
                        ...res
                    }: DocumentRouterItemInterface) => (
                        <Route
                            path={`${path}/${res.path}`}
                            key={`${res.path}-${path}`}
                        >
                            <ModuleItemComponent name={res.name} />
                        </Route>
                    )
                )}
            </>
        );
    }

    abstract get view(): ReactNode;

    render(): ReactNode {
        const { router, view } = this;
        const { path } = this.props;
        return (
            <>
                {router}
                <Route exact path={path}>
                    {view}
                </Route>
            </>
        );
    }
}

export default DocumentationModuleAbstract;
