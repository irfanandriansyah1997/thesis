import { HTMLAttributes, SFC, ReactNode } from 'react';
/**
 * List Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.10
 */
export type ListPropsInterface = Omit<
    HTMLAttributes<HTMLDivElement>,
    'style' | 'dangerouslySetInnerHTML'
> & {
    space?: number;
    divider?: 'none' | 'line';
    direction?: 'column' | 'row';
};

/**
 * List Props Item Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.10
 */
export type ListItemPropsInterface = Omit<
    HTMLAttributes<HTMLDivElement>,
    'style' | 'dangerouslySetInnerHTML' | 'children'
> & {
    children: ReactNode;
};

/**
 * List Default Export Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.10
 */
export type ListDefaultExportInterface = SFC<ListPropsInterface> & {
    Item: SFC<ListItemPropsInterface>;
};
