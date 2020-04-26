import { SFC } from 'react';

import { ComponentCheckboxInterface } from '../../../../shared/interface/component/component-input.interface';
import { ComponentMultipleOptionItemInterface } from '../../../../shared/interface/component/component-multiple-option.interface';

/**
 * Checkbox Default Export Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.04.15
 */
export type CheckboxDefaultExportInterface = SFC<ComponentCheckboxInterface> & {
    Item: SFC<ComponentMultipleOptionItemInterface>;
};
