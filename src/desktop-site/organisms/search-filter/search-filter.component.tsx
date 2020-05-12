import React, { SFC } from 'react';

import CardComponent from '../../../common/atomic/card/card.component';
import TextComponent from '../../../common/atomic/text/text.component';

import ComboboxSearchFilter from './combobox-search-filter.component';
import RangeSliderSearchFilter from './range-slider-filter.component';
import CheckboxSearchFilter from './checkbox-search-filter.component';
import SortingSearchFilter from './sorting-search-filter.component';

import {
    FilterNavbarComponent,
    FilterDropdownComponent,
    FilterRangeComponent,
    FilterCheckboxComponent
} from './interface/component.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';
import StringHelper from '../../../shared/helper/string.helper';

/**
 * Search Filter Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.05.11
 */
const SearchFilter: SFC<FilterNavbarComponent> = ({
    searchText,
    filterItem,
    sortingItem,
    ...res
}: FilterNavbarComponent) => {
    const name: ComponentClassnameDefaultInterface = {
        'ui-organisms-search-filter': true,
        flex: true
    };

    return (
        <div className={StringHelper.objToString(name)} {...res}>
            <CardComponent
                boxShadow="r123"
                style={{ width: '100%', padding: 16 }}
            >
                <TextComponent
                    tag="h1"
                    className="search-filter-heading"
                    styling="heading-6"
                    fontWeight={500}
                >
                    {searchText}
                </TextComponent>
                <div
                    className="search-filter-content flex flex-justify-between"
                    style={{ marginTop: 16 }}
                >
                    {filterItem.map((item) => {
                        if (item.type === 'combobox') {
                            return (
                                <ComboboxSearchFilter
                                    option={
                                        (item as FilterDropdownComponent).option
                                    }
                                    value={
                                        (item as FilterDropdownComponent).value
                                    }
                                    name={item.name}
                                    onChange={item.onChange}
                                    type={item.type}
                                    isChildrenToggle={item.isChildrenToggle}
                                />
                            );
                        }
                        if (item.type === 'range') {
                            return (
                                <RangeSliderSearchFilter
                                    min={(item as FilterRangeComponent).min}
                                    max={(item as FilterRangeComponent).max}
                                    value={(item as FilterRangeComponent).value}
                                    name={item.name}
                                    onChange={item.onChange}
                                    type={item.type}
                                    isChildrenToggle={item.isChildrenToggle}
                                />
                            );
                        }
                        if (item.type === 'checkbox') {
                            return (
                                <CheckboxSearchFilter
                                    isChecked={
                                        (item as FilterCheckboxComponent)
                                            .isChecked
                                    }
                                    name={item.name}
                                    onChange={item.onChange}
                                    type={item.type}
                                    isChildrenToggle={item.isChildrenToggle}
                                />
                            );
                        }
                        return null;
                    })}

                    <div className="sorting">
                        <SortingSearchFilter
                            value={sortingItem.value}
                            sortingText={sortingItem.sortingText}
                            option={sortingItem.option}
                        />
                    </div>
                </div>
            </CardComponent>
        </div>
    );
};

export default SearchFilter;
