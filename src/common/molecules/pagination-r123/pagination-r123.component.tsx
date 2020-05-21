import PropTypes from 'prop-types';
import React, { SFC, ReactNode, useState, useEffect } from 'react';

import IconComponent from '../../atomic/icon/icon.component';
import TextComponent from '../../atomic/text/text.component';
import StringHelper from '../../../shared/helper/string.helper';
import { PaginationPropsInterface } from './interface/component.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';

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
    page,
    totalPage,
    pageRange,
    onPageChange,
    paginationSummary
}: PaginationPropsInterface) => {
    const [currentPage, setCurrentPage] = useState(page || 1);
    const [upperPageBound, setUpperPageBound] = useState(4);
    const [lowerPageBound, setLowerPageBound] = useState(0);
    const [isPrevBtnActive, setIsPrevBtnActive] = useState('disabled');
    const [isNextBtnActive, setIsNextBtnActive] = useState('');

    const name: ComponentClassnameDefaultInterface = {
        'ui-molecules-pagination': true,
        relative: true,
        flex: true,
        'flex-justify-between': true
    };

    useEffect(() => {
        const activePage = document.querySelector('.active');
        if (activePage) {
            activePage.classList.remove('active');
        }
        const element = document.getElementById(`${currentPage}`);
        if (element) {
            element.classList.add('active');
        }

        onPageChange({
            selected: currentPage
        });
    }, [currentPage]);

    /**
     * Set class for prev & next button
     * @author Dedik Budianto <dedik.budianto@99.co>
     * @since 2020.05.18
     */
    const setPrevAndNextBtnClass = (listid: number): void => {
        const totalPages = Math.ceil(totalPage);
        setIsPrevBtnActive('disabled');
        setIsNextBtnActive('disabled');
        if (totalPage === listid && totalPages > 1) {
            setIsPrevBtnActive('');
        } else if (listid === 1 && totalPages > 1) {
            setIsNextBtnActive('');
        } else if (totalPages > 1) {
            setIsPrevBtnActive('');
            setIsNextBtnActive('');
        }
    };

    /**
     * Set click handler function
     * @author Dedik Budianto <dedik.budianto@99.co>
     * @since 2020.05.18
     */
    const handleClick = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ): void => {
        if (event.target instanceof Element) {
            const listid = Number(parseInt(event.target.id, 10));
            setCurrentPage(listid);
            const activePage = document.querySelector('.active');
            if (activePage) {
                activePage.classList.remove('active');
            }

            const element = document.getElementById(`${listid}`);
            if (element) {
                element.classList.add('active');
            }

            setPrevAndNextBtnClass(listid);
        }
    };

    /**
     * Function when clicking on prev button
     * @author Dedik Budianto <dedik.budianto@99.co>
     * @since 2020.05.18
     */
    const btnPrevClick = (): void => {
        if ((currentPage - 1) % pageRange === 0) {
            setUpperPageBound(upperPageBound - pageRange);
            setLowerPageBound(lowerPageBound - pageRange);
        }
        const listid = currentPage - 1;
        setCurrentPage(listid);
        setPrevAndNextBtnClass(listid);
    };

    /**
     * Function when clicking on next button
     * @author Dedik Budianto <dedik.budianto@99.co>
     * @since 2020.05.18
     */
    const btnNextClick = (): void => {
        if (currentPage + 1 > upperPageBound) {
            setUpperPageBound(upperPageBound + pageRange);
            setLowerPageBound(lowerPageBound + pageRange);
        }
        const listid = currentPage + 1;

        setCurrentPage(listid);
        setPrevAndNextBtnClass(listid);
    };

    // Logic for displaying page numbers
    const pageNumbers: Array<number> = [];
    for (let i = 1; i <= Math.ceil(totalPage); i += 1) {
        pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map((number) => {
        if (number < upperPageBound + 1 && number > lowerPageBound) {
            return (
                <li
                    key={number}
                    id={number.toString()}
                    className={
                        number === 1 && currentPage === 1
                            ? 'pagination-item active'
                            : 'pagination-item'
                    }
                >
                    <button onClick={handleClick} id={number.toString()}>
                        {number}
                    </button>
                </li>
            );
        }
        return null;
    });

    return (
        <div className={StringHelper.objToString(name)}>
            {paginationSummary && (
                <TextComponent tag="p" color="headingR123">
                    {paginationSummary}
                </TextComponent>
            )}
            <ul className="pagination flex">
                {isPrevBtnActive !== 'disabled' && (
                    <li className={isPrevBtnActive}>
                        <div
                            role="button"
                            tabIndex={0}
                            onKeyPress={undefined}
                            id="btnPrev"
                            onClick={btnPrevClick}
                        >
                            {PrevIcon()}
                        </div>
                    </li>
                )}
                {renderPageNumbers}
                {isNextBtnActive !== 'disabled' && (
                    <li className={isNextBtnActive}>
                        <div
                            role="button"
                            tabIndex={0}
                            onKeyPress={undefined}
                            id="btnNext"
                            onClick={btnNextClick}
                        >
                            {NextIcon()}
                        </div>
                    </li>
                )}
            </ul>
        </div>
    );
};

PaginationR123Component.defaultProps = {
    paginationSummary: undefined
};

PaginationR123Component.propTypes = {
    page: PropTypes.number.isRequired,
    pageRange: PropTypes.number.isRequired,
    paginationSummary: PropTypes.string
};

export default PaginationR123Component;
