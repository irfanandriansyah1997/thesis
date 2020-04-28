import React, { SFC, HTMLAttributes } from 'react';

/**
 * Card Media Props Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.04.27
 */
export type CardContentPropsInterface = HTMLAttributes<HTMLDivElement> & {
    children: CardChildrenType;
};

/**
 * Card Media Props Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.04.27
 */
export type CardMediaPropsInterface = HTMLAttributes<HTMLDivElement> & {
    children: CardChildrenType;
    width?: number | 'auto';
    height?: number | 'auto';
};

/**
 * Card Media Children Type
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.04.27
 */
export type CardChildrenType = React.ReactNode | string | Element;

/**
 * Basic Card R123 Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.04.27
 */
export type CardR123BasicPropsInterface = Omit<
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
    size?: number | 'auto';
};

/**
 * Basic Card R123 Default Props Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.04.21
 */
export type CardR123BasicDefaultExportInterface = SFC<
    CardR123BasicPropsInterface
> & {
    Media: SFC<CardMediaPropsInterface>;
    Content: SFC<CardContentPropsInterface>;
};
