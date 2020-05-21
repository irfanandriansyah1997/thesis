import React from 'react';
import { render, shallow, mount } from 'enzyme';

import PaginationR123Component from '../pagination-r123.component';
import TextComponent from '../../../atomic/text/text.component';

describe('Testing <PaginationR123Component> in molecules component ', () => {
    it('Should render pagination component correctly', () => {
        const component = render(
            <PaginationR123Component
                page={1}
                totalPage={10}
                pageRange={2}
                onPageChange={jest.fn()}
            />
        );

        expect(component.hasClass('ui-molecules-pagination')).toBe(true);
    });

    it('Should render pagination component with summary', () => {
        const wrapper = shallow(
            <PaginationR123Component
                page={1}
                totalPage={10}
                pageRange={2}
                onPageChange={jest.fn()}
                paginationSummary="Showing 10 result"
            />
        );

        expect(
            wrapper.contains(
                <TextComponent tag="p" color="headingR123">
                    Showing 10 result
                </TextComponent>
            )
        ).toBe(true);
    });

    it('Simulate click item pagination', () => {
        const callback = jest.fn();
        const wrapper = mount(
            <PaginationR123Component
                page={1}
                totalPage={10}
                pageRange={2}
                onPageChange={callback}
                paginationSummary="Showing 10 result"
            />
        );

        expect(wrapper.find('li').length).toBe(5);

        wrapper
            .find('li')
            .at(1)
            .find('button')
            .simulate('click');

        expect(callback).toHaveBeenCalledTimes(2);

        wrapper
            .find('li')
            .at(0)
            .find('div')
            .simulate('click');

        expect(callback).toHaveBeenCalledTimes(3);
    });
});
