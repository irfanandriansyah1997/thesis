/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputHTMLAttributes, ReactNode } from 'react';

/**
 * Multiple Selection Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.27
 */
export type MultipleSelectionPropsInterface = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    | 'name'
    | 'value'
    | 'onBlur'
    | 'onChange'
    | 'children'
    | 'dangerouslySetInnerHTML'
> & {
    value?: string[];
    className?: string;
    placeholder: string;
    onSearch: (param: MultipleSelectionSearchParamType) => void;
    onChange: (param: MultipleSelectionActionResponseType) => void;
};

/**
 * Multiple Selection Item Value
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.27
 */
export type MultipleSelectionItemValueInterface = {
    value: string;
    label: string;
};

/**
 * Multiple Selection Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.27
 */
export type MultipleSelectionItemPropsInterface = MultipleSelectionItemValueInterface & {
    key: string;
    className?: string;
    children: ReactNode;
};

/**
 * Multiple Selection Heading Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.27
 */
export type MultipleSelectionHeadingPropsInterface = {
    key: string;
    children: ReactNode;
};

/**
 * Multiple Selection Action Response Type
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.27
 */
export type MultipleSelectionActionResponseType = MultipleSelectionSearchParamType & {
    object: string[];
};

/**
 * Multiple Selection Search Param Type
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.27
 */
export type MultipleSelectionSearchParamType = {
    query?: string;
};
