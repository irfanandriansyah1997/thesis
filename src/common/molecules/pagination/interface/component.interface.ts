import { ComponentDefaultInterface } from '../../../../shared/interface/component/component-default.interface';

/**
 * Molecule Pagination Interface
 * @author Cathrine <cathrine@99.co>
 * @since 2019.05.03
 */
export type MoleculePaginationPropsInterface = Omit<
    ComponentDefaultInterface,
    'children'
> & {
    page: number;
    rowCount: number;
    totalPage?: number;
    className?: string;
    pageRange?: number;
    marginPageDisplay?: number;
    onPageChange: MoleculePaginationOnPageChange;
};

export type MoleculePaginationValueOnPageChange = { selected: number };

export type MoleculePaginationOnPageChange = (
    selectedItem: MoleculePaginationValueOnPageChange
) => void;
