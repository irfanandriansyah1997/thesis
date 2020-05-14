import { AnchorHTMLAttributes, ReactNode } from 'react';

import { ColorInterface } from '../../../../shared/interface/common/color.interface';
import {
    ComponentStylingTypography,
    ComponentFontWeightTypography
} from '../../../../shared/interface/component/component-typography.interface';

/**
 * Link Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.04.7
 */
export type LinkPropsInterface = AnchorHTMLAttributes<HTMLAnchorElement> &
    ColorInterface & {
        icon?: ReactNode;
        noUnderline?: boolean;
        styling?: ComponentStylingTypography;
        fontWeight?: ComponentFontWeightTypography;
    };
