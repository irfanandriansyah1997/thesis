import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

/**
 * Button Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.03.09
 */
export type ButtonPropsInterface = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    size: 'large' | 'small' | 'default';
};
