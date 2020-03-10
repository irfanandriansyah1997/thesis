import ReactDOM from 'react-dom';
import React, { SFC, ReactElement, Suspense } from 'react';
import { HashRouter as Router, Switch } from 'react-router-dom';

import { GenericReactComponentInterface } from '../interface/common/object.interface';
import {
    DocumentRouterModuleType,
    DocumentRouterAppInterface,
    DocumentRouterModuleInterface,
    DocumentRouterModuleComponentInterface
} from '../interface/documentation/documentation-router.interface';

/**
 * Documentation Builder
 * @author Irfan Andriansyah <irfan@99.co>
 * @description builder for running react and react dom
 * @since 2020.03.10
 */
class DocumentationBuilder {
    private router: DocumentRouterAppInterface;

    private App: SFC | undefined;

    private module: DocumentRouterModuleComponentInterface = {
        common: undefined,
        desktop: undefined,
        mobile: undefined
    };

    constructor(router: DocumentRouterAppInterface) {
        this.router = router;
    }

    /**
     * Getter Module Documentation
     * @return {DocumentRouterModuleComponentInterface}
     */
    private get ModuleComponent(): DocumentRouterModuleComponentInterface {
        return this.module;
    }

    /**
     * Getter Module Documentation
     * @param {DocumentRouterModuleType} key - key module e.g common, desktop / mobile
     * @param {GenericReactComponentInterface<DocumentRouterModuleInterface>} component - module component
     * @return {DocumentationBuilder}
     */
    public setModuleComponent(
        key: DocumentRouterModuleType,
        component: GenericReactComponentInterface<DocumentRouterModuleInterface>
    ): this {
        this.module = {
            ...this.module,
            [key]: component
        };
        return this;
    }

    /**
     * generate app
     * @return {DocumentationBuilder}
     */
    public buildRouter(): this {
        const { router, ModuleComponent } = this;

        this.App = (): ReactElement => (
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        {Object.keys(ModuleComponent).map((item: string) => {
                            const ModuleItemComponent = ModuleComponent[item as DocumentRouterModuleType];
                            const ModuleProps: DocumentRouterModuleInterface = router[item as DocumentRouterModuleType];

                            if (ModuleItemComponent) {
                                return <ModuleItemComponent key={item} {...ModuleProps} />;
                            }

                            return null;
                        })}
                    </Switch>
                </Suspense>
            </Router>
        );
        return this;
    }

    /**
     * Generate app
     * @return {void}
     */
    public generate(): void {
        try {
            const { App } = this;

            if (App) {
                ReactDOM.render(<App />, document.getElementById('app'));
            } else {
                throw new Error('[ERROR]: method build router not called');
            }
        } catch ({ message }) {
            // eslint-disable-next-line no-console
            console.error(message);
        }
    }
}

export default DocumentationBuilder;
