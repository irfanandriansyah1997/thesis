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
    onPageChange: (selectedItem: { selected: number }) => void;
    pageRange?: number;
    marginPageDisplay?: number;
    className?: string;
    page: number;
    rowCount: number;
    totalPage?: number;
};
