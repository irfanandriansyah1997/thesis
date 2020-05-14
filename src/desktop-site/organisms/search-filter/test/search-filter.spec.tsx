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

        const sortingItem = [
            {
                id: '1',
                value: '1',
                label: 'Default (Featured)'
            },
            {
                id: '2',
                value: '2',
                label: 'Terbaru'
            },
            {
                id: '3',
                value: '3',
                label: 'Harga Tertinggi'
            },
            {
                id: '4',
                value: '4',
                label: 'Harga Terendah'
            }
        ];

        const component = render(
            <SearchFilter
                hasChildrenToggle
                hasSortingFilter
                filterItem={[
                    {
                        name: 'combobox',
                        onChange: jest.fn(),
                        type: 'combobox',
                        isChildrenToggle: false,
                        option: subChannel,
                        value: 1,
                        className: 'sub-channel'
                    },
                    {
                        name: 'land-size',
                        onChange: jest.fn(),
                        type: 'range',
                        isChildrenToggle: false,
                        min: 0,
                        max: 100,
                        value: {
                            start: 0,
                            end: 100
                        },
                        label: 'Luas Tanah (m2)'
                    },
                    {
                        name: 'sold-out-property',
                        onChange: jest.fn(),
                        type: 'checkbox',
                        isChildrenToggle: true,
                        className: 'sold-out-property',
                        label: 'Termasuk iklan terjual',
                        isChecked: false,
                        value: [1]
                    }
                ]}
                sortingItem={{
                    value: 1,
                    sortingText: '',
                    option: sortingItem
                }}
                onChangeFilterField={jest.fn()}
                onChangeSortingField={jest.fn()}
            />
        );

        expect(component.hasClass('ui-organisms-search-filter')).toBe(true);
    });
});
