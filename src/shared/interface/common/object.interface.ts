/**
 * Generate React Component Strict Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.03.10
 */
export type GenericReactComponentStrictInterface<type> = React.ComponentClass<type> | React.SFC<type>;

/**
 * Generate React Component Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.03.10
 */
export type GenericReactComponentInterface<type> = GenericReactComponentStrictInterface<type> | undefined;
