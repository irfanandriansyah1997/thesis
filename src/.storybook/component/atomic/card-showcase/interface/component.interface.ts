import { ReactNode } from 'react';

/**
 * Card Showcase Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.03.31
 */
export interface CardShowcaseComponentPropsInterface {
    desc?: string;
    syntax: string;
    title: ReactNode;
    children: ReactNode;
}
