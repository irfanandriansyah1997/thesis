import { HTMLAttributes } from 'react';

/**
 * Sticky Component Interface
 * @author Cathrine <cathrine@99.co>
 * @since 2020.05.02
 */
export type StickyPropsInterface = Omit<
    HTMLAttributes<HTMLElement>,
    'dangerouslySetInnerHTML'
>;
