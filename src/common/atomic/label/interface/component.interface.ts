import { HTMLAttributes } from 'react';

import { ColorType } from '../../../../shared/interface/common/color.interface';

/**
 * Label Interface
 * @author Cathrine <cathrine@99.co>
 * @description Generate Label Interface
 * @since 2020.03.23
 */
export type LabelPropsInterface = HTMLAttributes<HTMLDivElement> & {
    color?: ColorType;
    rounded?: boolean;
    labelText: string;
    icon?: string;
};
