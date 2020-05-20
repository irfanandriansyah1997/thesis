import { HTMLAttributes } from 'react';

/**
 * Edit Text Component Interface
 * @author Cathrine <cathrine@99.co>
 * @since 2020.05.02
 */
export type EditTextPropsInterface = Omit<
    HTMLAttributes<HTMLElement>,
    | 'dangerouslySetInnerHTML'
    | 'onClick'
    | 'onKeyDown'
    | 'onKeyDown'
    | 'onKeyPress'
    | 'onChange'
    | 'style'
> & {
    className?: string;
    placeholder?: string;
    type?: EditTextType;
    disabled?: boolean;
    value?: string | number;
    name: string;
};

/**
 * Edit Text Type Interface
 * @author Cathrine <cathrine@99.co>
 * @since 2020.05.02
 */
export type EditTextType = 'text' | 'number' | 'password' | 'email';
