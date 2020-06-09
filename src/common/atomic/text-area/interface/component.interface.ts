import { HTMLAttributes } from 'react';

import { ColorInterface } from '../../../../shared/interface/common/color.interface';
import { ComponentCustomSize } from '../../../../shared/interface/component/component-size.interface';

export type TextAreaPropsInterface = Omit<
    HTMLAttributes<HTMLElement>,
    'dangerouslySetInnerHTML' | 'children'
> &
    ColorInterface & {
        children: string;
        size: ComponentCustomSize;
    };
