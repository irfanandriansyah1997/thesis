import { SFC } from 'react';

import { ComponentRadioInterface } from '../../../../shared/interface/component/component-input.interface';
import { ComponentMultipleOptionItemInterface } from '../../../../shared/interface/component/compone-multiple-option.interface';

/**
 * Radio Button Default Export Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.04.15
 */
export type RadioButtonDefaultExportInterface = SFC<ComponentRadioInterface> & {
    Item: SFC<ComponentMultipleOptionItemInterface>;
};
