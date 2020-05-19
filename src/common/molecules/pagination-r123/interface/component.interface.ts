import { ReactNode } from 'react';
import { ComponentDefaultInterface } from '../../../../shared/interface/component/component-default.interface';

/**
 * Pagination Props Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.05.18
 */
export type PaginationPropsInterface = Omit<
    ComponentDefaultInterface,
    'children'
> &
    PaginationInterface & {
        onPageChange: (selectedItem: SelectedPageInterface) => void;
        pageRange: number;
        marginPageDisplay?: number;
        paginationSummary?: ReactNode;
    };

/**
 * Pagination Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @description
 * @since 2020.05.18
 */
export interface PaginationInterface {
    page: number;
    totalPage: number;
    totalRecord?: number;
}

/**
 * Pagination Selected Page Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.05.19
 */
export type SelectedPageInterface = {
    selected: number;
};
