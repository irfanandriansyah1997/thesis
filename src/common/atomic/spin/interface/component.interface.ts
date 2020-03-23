import { HTMLAttributes } from 'react';
import { ColorType } from '../../../../shared/interface/common/color.interface';

/**
 * Spin Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.03.12
 */
export type SpinPropsInterface = Omit<
    HTMLAttributes<HTMLElement>,
    'dangerouslySetInnerHTML'
> & {
    color: ColorType;
    show: boolean;
};
