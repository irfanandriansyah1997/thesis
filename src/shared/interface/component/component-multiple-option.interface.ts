import { HTMLAttributes, InputHTMLAttributes } from 'react';

/**
 * Component Multiple Option Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.03.31
 */
export type ComponentMultipleOptionInterface = Omit<
    HTMLAttributes<HTMLElement>,
    | 'dangerouslySetInnerHTML'
    | 'onClick'
    | 'onKeyDown'
    | 'onKeyDown'
    | 'onKeyPress'
    | 'onChange'
    | 'style'
>;

/**
 * Component Multiple Option With Multiple Output Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.15
 */
export type ComponentMultipleOptionMultipleOutput = ComponentMultipleOptionInterface &
    Omit<ContextMultipleOption, 'onChange' | 'value'> & {
        value: (string | number)[];
        onChange: (res: (string | number)[]) => void;
    };

/**
 * Component Multiple Option With Single Output Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.15
 */
export type ComponentMultipleOptionSingleOutput = ComponentMultipleOptionInterface &
    ContextMultipleOption;

/**
 * Component Multiple Option Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.04.15
 */
export type ComponentMultipleOptionItemInterface = Omit<
    InputHTMLAttributes<{}>,
    | 'id'
    | 'name'
    | 'type'
    | 'style'
    | 'onClick'
    | 'checked'
    | 'onChange'
    | 'children'
    | 'onKeyDown'
    | 'onKeyDown'
    | 'onKeyPress'
    | 'dangerouslySetInnerHTML'
> & {
    // must be unique
    id: string;
    label?: string;
    value: string | number;
};

/**
 * Context API Interface Multipe Option
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.04.15
 */
export interface ContextMultipleOption {
    name: string;
    value?: string | number;
    onChange: (res: string | number) => void;
}
