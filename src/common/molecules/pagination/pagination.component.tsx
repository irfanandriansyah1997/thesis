import * as React from 'react';
import * as PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';

import IconComponent from '../../atomic/icon/icon.component';
import StringHelper from '../../../shared/helper/string.helper';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import { MoleculePaginationPropsInterface } from './interface/component.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';

/**
 * Pagination Component
 * @author Cathrine <cathrine@99.co>
 * @since 2019.05.03
 */
const PaginationComponent: React.SFC<MoleculePaginationPropsInterface> = ({
    className,
    page,
    totalPage,
    onPageChange,
    pageRange,
    marginPageDisplay
}: MoleculePaginationPropsInterface) => {
    const name: ComponentClassnameDefaultInterface = {
        relative: true,
        flex: true,
        [`${className}`]: ValidatorHelper.verifiedIsNotEmpty(className),
        'ui-molecule-paginate': true
    };

    /**
     * Create next icon
     * @return {string}
     */
    const PrevIcon = (): React.ReactNode => (
        <IconComponent color="text" size={18}>
            rui-icon-arrow-left
        </IconComponent>
    );

    /**
     * Create next icon
     * @return {string}
     */
    const NextIcon = (): React.ReactNode => (
        <IconComponent color="text" size={18}>
            rui-icon-arrow-right
        </IconComponent>
    );

    return (
        <div className="flex">
            <ReactPaginate
                previousLabel={PrevIcon()}
                nextLabel={NextIcon()}
                pageCount={totalPage || 0}
                initialPage={page - 1}
                forcePage={page - 1}
                marginPagesDisplayed={marginPageDisplay || 0}
                pageRangeDisplayed={pageRange || 5}
                containerClassName={StringHelper.objToString(name)}
                breakClassName="ui-molecule-paginate__break"
                activeLinkClassName="ui-molecule-paginate__link--active"
                pageClassName="ui-molecule-paginate__item flex"
                activeClassName="ui-molecule-paginate__item--active flex"
                previousClassName="ui-molecule-paginate__item--prev flex"
                nextClassName="ui-molecule-paginate__item--next flex"
                onPageChange={onPageChange}
            />
        </div>
    );
};

PaginationComponent.propTypes = {
    className: PropTypes.string,
    page: PropTypes.number.isRequired,
    totalPage: PropTypes.number,
    pageRange: PropTypes.number,
    marginPageDisplay: PropTypes.number,
    onPageChange: PropTypes.func.isRequired
};

PaginationComponent.defaultProps = {
    className: undefined,
    totalPage: 0,
    pageRange: 5,
    marginPageDisplay: 0
};

export default PaginationComponent;
