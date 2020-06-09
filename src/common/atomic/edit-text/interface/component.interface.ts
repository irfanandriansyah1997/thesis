import {
    SFC,
    InputHTMLAttributes,
    TextareaHTMLAttributes,
    ReactNode
} from 'react';
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
    name: string;
    styling?: EditTextStyle;
};

/**
 * Edit TextArea Component Interface
 */
export type EditTextAreaPropsInterface = Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    'dangerouslySetInnerHTML' | 'children' | 'style'
> &
    Pick<EditTextPropsInterface, 'name' | 'styling'>;

/**
 * Edit Text add on Interface
 * @author Cathrine <cathrine@99.co>
 * @since 2020.05.28
 */
export type EditTextAddonInterface = EditTextPropsInterface &
    ColorInterface & {
        fontSize?: number;
        fontWeight?: number;
        children: ReactNode;
        position?: 'left' | 'right';
    };

/**
 * Edit TextArea add on Interface
 */
export type EditTextAreaAddonInterface = EditTextAreaPropsInterface &
    ColorInterface & {
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
