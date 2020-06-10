import { SFC, TextareaHTMLAttributes } from 'react';

/**
 * TextArea Default Interface
 */
export type TextAreaDefaultExportInterface = SFC<TextAreaPropsInterface> & {
    // Addon: SFC<TextAreaAddonInterface>;
};

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
 * TextArea add on Interface
 */
// export type TextAreaAddonInterface = TextAreaPropsInterface &
//     ColorInterface & {
//         fontSize?: number;
//         fontWeight?: number;
//         children: ReactNode;
//         position?: 'left' | 'right';
//     };

/**
 * Text Styling Interface
 */
export type TextAreaStyle = 'primary' | 'secondary';
