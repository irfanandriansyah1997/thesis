import { HTMLAttributes } from 'react';

import { ColorType } from '../../../../shared/interface/common/color.interface';
import { ComponentDefaultInterface } from '../../../../shared/interface/component/componen-default.interface';

/**
 * Label Interface
 * @author Cathrine <cathrine@99.co>
 * @description Generate Label Interface
 * @since 2020.03.23
 */
export interface LabelPropsInterface extends HTMLAttributes<HTMLElement> {
    color?: ColorType;
    rounded?: boolean;
    className?: ComponentDefaultInterface;
    labelText: string;
    icon?: boolean;
    iconText?: string;
}
