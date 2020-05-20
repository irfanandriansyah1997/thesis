import { HTMLAttributes } from 'react';

import { ColorInterface } from '../../../../shared/interface/common/color.interface';
import { ComponentCustomSize } from '../../../../shared/interface/component/component-size.interface';

/**
 * Icon Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.03.12
 */
export type IconPropsInterface = Omit<
    HTMLAttributes<HTMLElement>,
    'dangerouslySetInnerHTML' | 'children'
> &
    ColorInterface & {
        children: string;
        size: ComponentCustomSize;
    };
