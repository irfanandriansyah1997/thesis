import { ButtonHTMLAttributes } from 'react';

export type ButtonElementType = 'button' | 'reset' | 'submit';

/**
 * Button Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.03.09
 */
export type ButtonPropsInterface = ButtonHTMLAttributes<HTMLButtonElement> & {
    size: 'large' | 'small' | 'default';
};
