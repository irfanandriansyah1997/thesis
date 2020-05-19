import React, { SFC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';

import IconComponent from '../../atomic/icon/icon.component';
import TextComponent from '../../atomic/text/text.component';
import { PaginationPropsInterface } from './interface/component.interface';

import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import StringHelper from '../../../shared/helper/string.helper';

import './style/style.scss';

/**
 * Create next icon
 * @return {string}
 */
const PrevIcon = (): ReactNode => (
    <IconComponent color="text" size={18}>
        rui-icon-arrow-left
    </IconComponent>
);
/**
 * Create next icon
 * @return {string}
 */
const NextIcon = (): ReactNode => (
    <IconComponent color="text" size={18}>
        rui-icon-arrow-right
    </IconComponent>
);

/**
 * Pagination Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.05.18
 */
const PaginationR123Component: SFC<PaginationPropsInterface> = ({
    className,
    page,
    totalPage,
    onPageChange,
    pageRange,
    marginPageDisplay,
    paginationSummary
}: PaginationPropsInterface) => {
    const name: ComponentClassnameDefaultInterface = {
        'ui-molecules-pagination': true,
        relative: true,
        flex: true,
        'flex-justify-between': true,
        [`${className}`]: ValidatorHelper.verifiedIsNotEmpty(className)
    };

    return (
        <div className={StringHelper.objToString(name)}>
            {paginationSummary && (
                <TextComponent tag="p" color="headingR123">
                    {paginationSummary}
                </TextComponent>
            )}
            <ReactPaginate
                previousLabel={PrevIcon()}
                nextLabel={NextIcon()}
                pageCount={totalPage ? totalPage - 1 : 0}
                initialPage={page - 1}
                forcePage={page - 1}
                marginPagesDisplayed={marginPageDisplay || 2}
                pageRangeDisplayed={pageRange || 5}
                breakLabel={null}
                containerClassName="flex"
                breakClassName="ui-molecules-pagination__break"
                activeLinkClassName="ui-molecules-pagination__link--active"
                pageClassName="ui-molecules-pagination__item"
                activeClassName="ui-molecules-pagination__item--active"
                previousClassName="ui-molecules-pagination__item--prev"
                nextClassName="ui-molecules-pagination__item--next"
                onPageChange={onPageChange}
            />
        </div>
    );
};

PaginationR123Component.defaultProps = {
    className: undefined,
    totalPage: 0,
    pageRange: undefined,
    marginPageDisplay: undefined,
    paginationSummary: undefined
};

PaginationR123Component.propTypes = {
    className: PropTypes.string,
    page: PropTypes.number.isRequired,
    totalPage: PropTypes.number,
    pageRange: PropTypes.number,
    marginPageDisplay: PropTypes.number,
    onPageChange: PropTypes.func.isRequired,
    paginationSummary: PropTypes.string
};

export default PaginationR123Component;
