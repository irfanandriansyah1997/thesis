import { TogglePropsInterface } from '../../toggle/interfaces/component.interface';
import { ColorInterface } from '../../../../shared/interface/common/color.interface';

/**
 * Expand Text Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.17
 */
export type ExpandTextPropsInterface = Omit<
    TogglePropsInterface,
    | 'gradient'
    | 'childrenPosition'
    | 'selector'
    | 'onComponentResize'
    | 'collapsedHeight'
> &
    ColorInterface & {
        showArrow?: boolean;
        collapsedHeight: number;
        textToggleButton?: ExpandTextToggleButtonInterface;
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
