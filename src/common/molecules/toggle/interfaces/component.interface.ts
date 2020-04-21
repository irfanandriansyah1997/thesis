import { ReactNode, HTMLAttributes } from 'react';

export type ToggleChildrenPositionType = 'bottom' | 'top';

/**
 * Toggle Props Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.16
 */
export type TogglePropsInterface = Omit<
    HTMLAttributes<HTMLElement>,
    | 'dangerouslySetInnerHTML'
    | 'onClick'
    | 'onKeyDown'
    | 'onKeyDown'
    | 'onKeyPress'
    | 'onChange'
    | 'style'
> & {
    show?: boolean;
    gradient?: boolean;
    selector: ReactNode;
    children: ReactNode;
    collapsedHeight?: number;
    onComponentResize?: (height: number) => void;
    childrenPosition?: ToggleChildrenPositionType;
    onToggleExpand?: (expand: true | false) => void;
};
