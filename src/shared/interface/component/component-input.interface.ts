import { PositionDirectionType } from '../common/position.interface';
import {
    ContextMultipleOption,
    ComponentMultipleOptionSingleOutput,
    ComponentMultipleOptionMultipleOutput
} from './compone-multiple-option.interface';

/**
 * Component Checkbox Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.04.15
 */
export type ComponentCheckboxInterface = ComponentMultipleOptionMultipleOutput & {
    styling?: PositionDirectionType;
};

/**
 * Component Radio Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.04.15
 */
export type ComponentRadioInterface = ComponentMultipleOptionSingleOutput & {
    styling?: PositionDirectionType;
};

/**
 * Context API Interface For Checkbox
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.04.15
 */
export type ComponentCheckboxContextInterface = ContextMultipleOption & {
    styling?: PositionDirectionType;
};

/**
 * Context API Interface For Radio
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.04.15
 */
export type ComponentRadiosContextInterface = ContextMultipleOption & {
    styling?: PositionDirectionType;
};
