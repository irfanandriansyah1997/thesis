import { SFC, HTMLAttributes, ReactNode } from 'react';

import { ComponentMultipleOptionSingleOutput } from '../../../../shared/interface/component/component-multiple-option.interface';

/**
 * ComboboxSplit Default Export Interface
 * @description
 */
export type ComboboxSplitDefaultExportInterface = SFC<
    ComboboxSplitMultipleOption
> & {
    Item: SFC<ComboboxSplitItemPropsInterface>;
};

export type ComboboxSplitMultipleOption = ComponentMultipleOptionSingleOutput &
    ComboboxSplitContentPropsInterface;

/**
 * ComboboxSplit Content Props Interface
 * @description
 */
export interface ComboboxSplitContentPropsInterface {
    icon?: ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * ComboboxSplit Item Props Interface
 * @description
 */
export type ComboboxSplitItemPropsInterface = Omit<
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
