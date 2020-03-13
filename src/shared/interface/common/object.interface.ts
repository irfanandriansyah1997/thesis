/**
 * Generate React Component Strict Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.03.10
 */
export type GenericReactComponentStrictInterface<type> =
    | React.ComponentClass<type>
    | React.SFC<type>;

/**
 * Generate React Component Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.03.10
 */
export type GenericReactComponentInterface<type> =
    | GenericReactComponentStrictInterface<type>
    | undefined;

/**
 * Default Dynamic Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description Interfaces are used to define dynamic field with value is any type
 * @since 2020.03.13
 */
export interface DefaultDynamicObject {
    [key: string]: unknown;
}
