import { HTMLAttributes } from 'react';
import { ColorType } from '../../../../shared/interface/common/color.interface';
import { ComponentDefaultSize } from '../../../../shared/interface/component/component-size.interface';

/**
 * Badges Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.03
 */
export type BadgesPropsInterface = Omit<
    HTMLAttributes<HTMLDivElement>,
    'onClick' | 'onKeypress' | 'style'
> & {
    color?: ColorType;
    rounded?: boolean;
    textColor?: ColorType;
    transparent?: boolean;
    size?: ComponentDefaultSize;
    onCloseBadges?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};
