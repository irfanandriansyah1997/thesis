import { HTMLAttributes } from 'react';

/**
 * Card Heading Props Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.06.08
 */
export type CardHeadingPropsInterface = Omit<
    HTMLAttributes<HTMLElement>,
    | 'dangerouslySetInnerHTML'
    | 'onClick'
    | 'onKeyDown'
    | 'onKeyDown'
    | 'onKeyPress'
    | 'onChange'
> & {
    agencyName: string;
    publishingDate: string;
};
