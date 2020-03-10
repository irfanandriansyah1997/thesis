import { GenericReactComponentInterface, GenericReactComponentStrictInterface } from '../common/object.interface';

export type DocumentRouterModuleType = 'common' | 'desktop' | 'mobile';

/**
 * Document Router App Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.03.10
 */
export type DocumentRouterAppInterface = {
    [key in DocumentRouterModuleType]: DocumentRouterModuleInterface;
};

/**
 * Document Router App Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.03.10
 */
export type DocumentRouterModuleComponentInterface = {
    [key in DocumentRouterModuleType]: GenericReactComponentInterface<DocumentRouterModuleInterface>;
};

/**
 * Document Router Module Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.03.10
 */
export type DocumentRouterModuleInterface = DocumentRouterBaseInterface & {
    menu: DocumentRouterItemInterface[];
};

/**
 * Document Router item Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.03.10
 */
export type DocumentRouterItemInterface = DocumentRouterBaseInterface & {
    ModuleItemComponent: GenericReactComponentStrictInterface<DocumentRouterItemComponentInterface>;
};

/**
 * Document Router item component Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.03.10
 */
export interface DocumentRouterItemComponentInterface {
    name: string;
}

/**
 * Document Router Base Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.03.10
 */
export interface DocumentRouterBaseInterface {
    path: string;
    name: string;
}
