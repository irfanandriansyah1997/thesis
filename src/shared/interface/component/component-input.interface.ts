import { PositionDirectionType } from '../common/position.interface';
import {
    ContextMultipleOption,
    ComponentMultipleOptionSingleOutput,
    ComponentMultipleOptionMultipleOutput
} from './compone-multiple-option.interface';

export type ComponentInputMultipleOptionType = 'radio' | 'checkbox';

/**
 * Component Checkbox Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.04.15
 */
export type ComponentCheckboxInterface = ComponentMultipleOptionMultipleOutput & {
    styling?: PositionDirectionType;
    type?: ComponentInputMultipleOptionType;
};

/**
 * Component Radio Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.04.15
 */
export type ComponentRadioInterface = ComponentMultipleOptionSingleOutput & {
    styling?: PositionDirectionType;
    type?: ComponentInputMultipleOptionType;
};

/**
 * Context API Interface For Checkbox
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.04.15
 */
export type ComponentCheckboxContextInterface = Omit<
    ContextMultipleOption,
    'value'
> & {
    value: (string | number)[];
    styling?: PositionDirectionType;
    type?: ComponentInputMultipleOptionType;
};

/**
 * Context API Interface For Radio
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.04.15
 */
export type ComponentRadioContextInterface = ContextMultipleOption & {
    styling?: PositionDirectionType;
    type?: ComponentInputMultipleOptionType;
};
