import {
    SFC,
    ReactNode,
    RefObject,
    RefAttributes,
    HTMLAttributes,
    PropsWithoutRef,
    ForwardRefExoticComponent
} from 'react';

/**
 * Dropdown Default Export Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.26
 */
export type DropdownDefaultExportInterface = SFC<DropdownPropsInterface> & {
    Item: SFC<DropdownItemPropsInterface>;
    Divider: SFC<DropdownDividerPropInterface>;
    WithRef: ForwardRefExoticComponent<
        PropsWithoutRef<DropdownPropsInterface> & RefAttributes<HTMLDivElement>
    >;
};

/**
 * Dropdown Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.27
 */
export type DropdownPropsInterface = Omit<
    HTMLAttributes<HTMLDivElement>,
    'onKeypress' | 'style' | 'onClick'
> & {
    name: string;
    label: string | React.ReactNode;
    icon?: string;
    show?: boolean;
    scroll?: boolean;
    type?: 'list' | 'content';
    trigger: 'hover' | 'click';
    onClick?: (show: boolean) => void;
    refForward?: RefObject<HTMLDivElement>;
    refContentForward?: RefObject<HTMLDivElement>;
};

export type DropdownChildren = {
    name: '';
};

/**
 * Dropdown Item Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.27
 */
export type DropdownItemPropsInterface = Omit<
    HTMLAttributes<HTMLDivElement>,
    | 'style'
    | 'onClick'
    | 'disabled'
    | 'children'
    | 'onKeypress'
    | 'dangerouslySetInnerHTML'
> & {
    active?: boolean;
    disabled?: boolean;
    subOption?: boolean;
    children: ReactNode;
    disableHover?: boolean;
    withoutPadding?: boolean;
};

/**
 * Dropdown Divider Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.27
 */
export type DropdownDividerPropInterface = {};
