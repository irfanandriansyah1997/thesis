import * as React from 'react';
import { shallow, mount } from 'enzyme';
import ReactPaginate from 'react-paginate';

import PaginationComponent from '../pagination.component';
import { MoleculePaginationPropsInterface } from '../interface/component.interface';

describe('Testing pagination view component in molecules component', () => {
    it('Testing render pagination', () => {
        const props: MoleculePaginationPropsInterface = {
            className: 'paginationTest',
            onPageChange: jest.fn(),
            page: 7,
            rowCount: 10,
            totalPage: 10,
            marginPageDisplay: 2,
            pageRange: 4
        };

        const pagination = mount(<PaginationComponent {...props} />);

        expect(pagination.props().rowCount).toBe(10);
        expect(pagination.props().totalPage).toBe(10);
        expect(pagination.props().page).toBe(7);
        expect(pagination.props().pageRange).toBe(4);
    });

    it('Testing render pagination lib value', () => {
        const props: MoleculePaginationPropsInterface = {
            className: 'paginationTest',
            onPageChange: jest.fn(),
            page: 7,
            rowCount: 10,
            totalPage: 10,
            marginPageDisplay: 2,
            pageRange: 4
        };

        const pagination = shallow(<PaginationComponent {...props} />);
        const paginationThirdParty = pagination.find(ReactPaginate);

        expect(paginationThirdParty.props().containerClassName).toBe(
            'relative flex paginationTest ui-molecule-paginate'
        );
        expect(paginationThirdParty.props().marginPagesDisplayed).toBe(2);
        expect(paginationThirdParty.props().forcePage).toBe(6);
        expect(paginationThirdParty.props().pageRangeDisplayed).toBe(4);
    });

    it('Testing render pagination default value', () => {
        const props: MoleculePaginationPropsInterface = {
            onPageChange: jest.fn(),
            page: 1,
            rowCount: 10
        };

        const pagination = shallow(<PaginationComponent {...props} />);
        const paginationThirdParty = pagination.find(ReactPaginate);

        expect(paginationThirdParty.props().marginPagesDisplayed).toBe(0);
        expect(paginationThirdParty.props().pageRangeDisplayed).toBe(5);
        expect(paginationThirdParty.props().pageCount).toBe(0);
    });
});
