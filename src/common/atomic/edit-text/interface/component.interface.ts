import { SFC, HTMLAttributes } from 'react';

/**
 * Edit Text Default Interface
 * @author Cathrine <cathrine@99.co>
 * @since 2020.05.28
 */
export type EditTextDefaultPropsInterface = EditTextPropsInterface & {
    Addon: SFC<EditTextAddonInterface>;
};

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
    styling?: EditTextStyle;
};

/**
 * Edit Text add on Interface
 * @author Cathrine <cathrine@99.co>
 * @since 2020.05.28
 */
export interface EditTextAddonInterface {
    addon?: string;
}

/**
 * Edit Text Type Interface
 * @author Cathrine <cathrine@99.co>
 * @since 2020.05.02
 */
export type EditTextType = 'text' | 'number' | 'password' | 'email';

/**
 * Edit Text Styling Interface
 * @author Cathrine <cathrine@99.co>
 * @since 2020.05.28
 */
export type EditTextStyle = 'primary' | 'secondary';
