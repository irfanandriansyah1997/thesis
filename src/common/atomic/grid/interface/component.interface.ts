import { HTMLAttributes } from 'react';

type baseImportInterface = Omit<
    HTMLAttributes<HTMLDivElement>,
    'style' | 'dangerouslySetInnerHTML'
>;

/**
 * Grid Column Size Type
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.11
 */
export type GridColumnSizeType =
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12;

/**
 * Grid Column Default Size Type
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.11
 */
export type GridColumnDefaultSizeType = GridColumnSizeType | 'default';

/**
 * Grid Row Align Item Type
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.11
 */
export type GridRowAlignItemType = 'start' | 'center' | 'end';

/**
 * Grid Row Justify Content Type
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.11
 */
export type GridRowJustifyContentType =
    | 'start'
    | 'end'
    | 'center'
    | 'around'
    | 'between';

/**
 * Grid Column Viewport Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.11
 */
export interface GridColumnViewportInterface {
    size: GridColumnDefaultSizeType;
}

/**
 * Grid Column Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.11
 */
export type GridColumnPropsInterface = baseImportInterface & {
    id: number | string;
    order?: number;
    // under 576px
    xs?: GridColumnViewportInterface;
    // between 576px and 768px
    sm?: GridColumnViewportInterface;
    // between 768px and 992px
    md?: GridColumnViewportInterface;
    // between 992px and 1200px
    lg?: GridColumnViewportInterface;
    // above 1200px
    xl?: GridColumnViewportInterface;
    // default size
    defaultSize?: GridColumnDefaultSizeType;
};

/**
 * Grid Column Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.11
 */
export type GridRowPropsInterface = baseImportInterface & {
    align?: GridRowAlignItemType;
    padding?: GridRowPaddingInterface;
    justify?: GridRowJustifyContentType;
};

/**
 * Generate Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.05.11
 */
export interface GridRowPaddingInterface {
    vertical: number;
    horizontal: number;
}

/**
 * Grid Container Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.11
 */
export type GridContainerPropsInterface = baseImportInterface;
