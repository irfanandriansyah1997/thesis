import { AnchorHTMLAttributes } from 'react';

/**
 * Hollow Link Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.20
 */
export type HollowLinkPropsInterface = Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    'style' | 'dangerouslySetInnerHTML' | 'color'
> & {
    icon?: string;
    active?: boolean;
};
