/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    ReactNode,
    RefObject,
    RefAttributes,
    PropsWithoutRef,
    InputHTMLAttributes,
    ForwardRefExoticComponent,
    FunctionComponent
} from 'react';

/**
 * Multiple Selection Default Export Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.27
 */
export type MultipleSelectionDefaultExportInterface = FunctionComponent<
    MultipleSelectionPropsInterface
> & {
    Item: FunctionComponent<MultipleSelectionItemPropsInterface>;
    Heading: FunctionComponent<MultipleSelectionHeadingPropsInterface>;
};

/**
 * Multiple Selection Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.27
 */
export type MultipleSelectionPropsInterface = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'name' | 'value' | 'onChange' | 'dangerouslySetInnerHTML'
> & {
    fontSize?: number;
    className?: string;
    placeholder: string;
    customizeFilter?: boolean;
    value: MultipleSelectionItemValueInterface[];
    onSearch: (param: MultipleSelectionSearchParamType) => void;
    onChange: (param: MultipleSelectionActionResponseType) => void;
};

/**
 * Multiple Selection Context Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.28
 */
export interface MultipleSelectionContextInterface {
    fontSize: number;
    isActive: boolean;
    textValue: string;
    showDropdownContent: boolean;
    positionDropdownContent: number;
    onEditTextBackSpaceKeyDown: () => void;
    onEditTextFocus: (show: boolean) => void;
    onEditTextChange: (value: string) => void;
    value: MultipleSelectionItemValueInterface[];
    optionList: MultipleSelectionContextOptionInterface[];
    optionListActive?: MultipleSelectionContextOptionInterface;
    onChangePositionDropdownContent: (position: 'up' | 'down') => void;
    onCloseBadges: (
        e: React.MouseEvent<HTMLElement, MouseEvent>,
        valueId: string
    ) => void;
    onChangeSearch: (
        valueEditText: string | undefined,
        valueDropdownItem: MultipleSelectionItemValueInterface | undefined
    ) => void;
}

/**
 * Multiple Selection Context Option Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.28
 */
export type MultipleSelectionContextOptionInterface = MultipleSelectionItemValueInterface & {
    position: number;
};

/**
 * Multiple Selection Content Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.27
 */
export type MultipleSelectionContentInterface = {
    list: MultipleSelectionContentItemInterface[];
};

/**
 * Multiple Selection Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.27
 */
export type MultipleSelectionContentItemInterface = {
    type:
        | 'MultipleSelectionItemComponent'
        | 'MultipleSelectionHeadingComponent';
    content:
        | MultipleSelectionItemPropsInterface
        | MultipleSelectionHeadingPropsInterface;
};

/**
 * Multiple Selection Toggle Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.27
 */
export type MultipleSelectionTogglePropsInterface = Omit<
    MultipleSelectionPropsInterface,
    'value' | 'onSearch' | 'onChange'
> & {
    refForward?: RefObject<HTMLInputElement>;
};

/**
 * Multiple Selection Toggle Ref Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.27
 */
export type MultipleSelectionToggleRefPropsInterface = ForwardRefExoticComponent<
    PropsWithoutRef<MultipleSelectionTogglePropsInterface> &
        RefAttributes<HTMLInputElement>
>;

/**
 * Multiple Selection Item Value
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.27
 */
export type MultipleSelectionItemValueInterface = {
    value: string;
    label: string;
    others?: Record<string, any>;
};

/**
 * Multiple Selection Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.27
 */
export type MultipleSelectionItemPropsInterface = MultipleSelectionItemValueInterface & {
    id: string;
    position?: number;
    className?: string;
    children: ReactNode;
};

/**
 * Multiple Selection Heading Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.27
 */
export type MultipleSelectionHeadingPropsInterface = {
    id: string;
    children: ReactNode;
};

/**
 * Multiple Selection Action Response Type
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.27
 */
export type MultipleSelectionActionResponseType = MultipleSelectionSearchParamType & {
    object: MultipleSelectionItemValueInterface[];
};

/**
 * Multiple Selection Search Param Type
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.27
 */
export type MultipleSelectionSearchParamType = {
    query?: string;
};
