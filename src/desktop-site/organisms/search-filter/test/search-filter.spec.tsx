import React from 'react';
import { render } from 'enzyme';

import SearchFilter from '../search-filter.component';

describe('Testing <SearchFilter> in organisms component ', () => {
    it('Should render search filter component correctly', () => {
        const subChannel = [
            {
                id: '1',
                value: '1',
                label: 'Baru/seken'
            },
            {
                id: '2',
                value: '2',
                label: 'Properti baru'
            },
            {
                id: '3',
                value: '3',
                label: 'Property seken'
            }
        ];

        const component = render(
            <SearchFilter
                searchResultText="Rumah dijual di Jakarta"
                hasChildrenToggle
                hasSortingFilter
                filterItem={[]}
                sortingItem={{
                    value: 1,
                    sortingText: '',
                    option: subChannel,
                    onChange: jest.fn()
                }}
                onChangeFilterField={jest.fn()}
                onChangeSortingField={jest.fn()}
            />
        );

        expect(component.hasClass('ui-organisms-search-filter')).toBe(true);
    });
});
