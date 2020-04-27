import { HTMLAttributes, ReactNode } from 'react';
import { ShadowType } from '../../../../shared/interface/common/shadow.interface';

/**
 * Card Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.04.24
 */
export type CardPropsInterface = HTMLAttributes<HTMLDivElement> & {
    className?: string;
    boxShadow?: ShadowType;
    children: ReactNode;
    size?: number;
};
