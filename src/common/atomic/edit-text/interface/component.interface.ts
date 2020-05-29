import { SFC, InputHTMLAttributes, ReactNode } from 'react';
import { ColorInterface } from '../../../../shared/interface/common/color.interface';

/**
 * Edit Text Default Interface
 * @author Cathrine <cathrine@99.co>
 * @since 2020.05.28
 */
export type EditTextDefaultExportInterface = SFC<EditTextPropsInterface> & {
    Addon: SFC<EditTextAddonInterface>;
};

/**
 * Edit Text Component Interface
 * @author Cathrine <cathrine@99.co>
 * @since 2020.05.02
 */
export type EditTextPropsInterface = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'dangerouslySetInnerHTML' | 'children' | 'style' | 'type'
> & {
    type?: EditTextType;
    value?: string | number;
    name: string;
    styling?: EditTextStyle;
};

/**
 * Edit Text add on Interface
 * @author Cathrine <cathrine@99.co>
 * @since 2020.05.28
 */
export type EditTextAddonInterface = EditTextPropsInterface &
    ColorInterface & {
        addon?: string;
        fontSize?: number;
        fontWeight?: number;
        children: ReactNode;
        position?: 'left' | 'right';
    };

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
