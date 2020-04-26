import { SFC, HTMLAttributes } from 'react';

import { ComponentMultipleOptionSingleOutput } from '../../../../shared/interface/component/component-multiple-option.interface';

/**
 * Combobox Default Export Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.04.26
 */
export type ComboboxDefaultExportInterface = SFC<
    ComponentMultipleOptionSingleOutput
> & {
    Item: SFC<ComboboxItemPropsInterface>;
};

/**
 * Combobox Content Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.04.26
 */
export interface ComboboxContentPropsInterface {
    show: boolean;
    value: string | number;
    item: ComboboxItemPropsInterface[];
    onChange: (val: string | number) => void;
}

/**
 * Combobox Item Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.04.26
 */
export type ComboboxItemPropsInterface = Omit<
    HTMLAttributes<HTMLDivElement>,
    | 'id'
    | 'name'
    | 'type'
    | 'color'
    | 'style'
    | 'onClick'
    | 'checked'
    | 'onChange'
    | 'children'
    | 'onKeyDown'
    | 'onKeyDown'
    | 'onKeyPress'
    | 'dangerouslySetInnerHTML'
> & {
    id: string;
    label: string;
    subOption?: boolean;
    value: string | number;
};
