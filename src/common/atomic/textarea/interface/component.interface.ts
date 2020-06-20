import { SFC, TextareaHTMLAttributes } from 'react';

/**
 * TextArea Default Interface
 */
export type TextAreaDefaultExportInterface = SFC<TextAreaPropsInterface>;

/**
 * TextArea Component Interface
 */
export type TextAreaPropsInterface = Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    'dangerouslySetInnerHTML' | 'children' | 'style'
> & {
    name: string;
    styling?: TextAreaStyle;
};

/**
 * Text Styling Interface
 */
export type TextAreaStyle = 'primary' | 'secondary';
