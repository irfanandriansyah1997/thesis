import { AnchorHTMLAttributes, ReactNode } from 'react';

import { ColorType } from '../../../../shared/interface/common/color.interface';
import {
    ComponentFontWeightTypography,
    ComponentStylingTypography
} from '../../../../shared/interface/component/component-typography.interface';

/**
 * Link Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.04.7
 */
export type LinkPropsInterface = AnchorHTMLAttributes<HTMLAnchorElement> & {
    color?: ColorType;
    noUnderline?: boolean;
    icon?: ReactNode;
    fontWeight?: ComponentFontWeightTypography;
    styling?: ComponentStylingTypography;
};
