import { ReactNode, HTMLAttributes } from 'react';
import { ColorInterface } from '../../../../shared/interface/common/color.interface';

/**
 * Expand Text Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.17
 */
export type ExpandTextPropsInterface = Omit<
    HTMLAttributes<HTMLElement>,
    | 'dangerouslySetInnerHTML'
    | 'onClick'
    | 'onKeyDown'
    | 'onKeyDown'
    | 'onKeyPress'
    | 'onChange'
    | 'style'
> &
    ColorInterface & {
        maxHeight: number;
        children: ReactNode;
        onToggleExpand?: (expand: true | false) => void;
        textToggleButton: ExpandTextToggleButtonInterface;
    };

/**
 * Expand Text Toggle Button Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.04.17
 */
export interface ExpandTextToggleButtonInterface {
    onExpand?: string;
    onCLose?: string;
}
