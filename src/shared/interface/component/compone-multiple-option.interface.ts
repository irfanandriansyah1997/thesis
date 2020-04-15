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
    | 'children'
    | 'onClick'
    | 'onKeyDown'
    | 'onKeyDown'
    | 'onKeyPress'
    | 'onChange'
> & {
    name: string;
};

/**
 * Component Multiple Option With Multiple Output Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.15
 */
export type ComponentMultipleOptionMultipleOutput = ComponentMultipleOptionInterface & {
    value: (string | number)[];
    name: string;
    onChange: (res: (string | number)[]) => void;
};

/**
 * Component Multiple Option With Single Output Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.15
 */
export type ComponentMultipleOptionSingleOutput = ComponentMultipleOptionInterface & {
    value: (string | number)[];
    name: string;
    onChange: (res: string | number) => void;
};

/**
 * Component Multiple Option Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.03.31
 */
export type ComponentMultipleOptionItemInterface = Omit<
    InputHTMLAttributes<{}>,
    | 'dangerouslySetInnerHTML'
    | 'children'
    | 'onClick'
    | 'onKeyDown'
    | 'onKeyDown'
    | 'onKeyPress'
    | 'onChange'
> & {
    value: string | number;
};
