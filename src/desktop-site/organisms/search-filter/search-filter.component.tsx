/* eslint-disable react/jsx-curly-newline */
import React, { SFC, useState, useEffect, ReactNode } from 'react';

import TextComponent from '../../../common/atomic/text/text.component';
import IconComponent from '../../../common/atomic/icon/icon.component';
import ComboboxComponent from '../../../common/molecules/combobox/combobox.component';
import ComboboxSearchFilter from './combobox-search-filter.component';
import RangeSliderSearchFilter from './range-slider-filter.component';
import CheckboxSearchFilter from './checkbox-search-filter.component';

import {
    FilterNavbarComponent,
    FilterComboboxComponent,
    FilterRangeComponent,
    FilterCheckboxComponent
} from './interface/component.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';
import StringHelper from '../../../shared/helper/string.helper';
import ComponentResizerHelper from '../../../shared/helper/component-resizer.helper';
import {
    ARROW_ON_HIDE,
    ARROW_ON_EXPAND
} from '../../../shared/constant/component.constant';

/**
 * Search Filter Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.05.11
 */
const SearchFilter: SFC<FilterNavbarComponent> = ({
    searchResultText,
    filterItem,
    sortingItem,
    hasChildrenToggle,
    hasSortingFilter,
    onChangeSortingField,
    onChangeFilterField
}: FilterNavbarComponent) => {
    const [expand, setExpand] = useState(false);
    const [show, setShow] = useState(false);
    const { width, ref } = ComponentResizerHelper<HTMLDivElement>({});

    const name: ComponentClassnameDefaultInterface = {
        'ui-organisms-search-filter': true,
        flex: true,
        'flex-column': true,
        'flex-align-start': true
    };

    const searchfilterItemClassName: ComponentClassnameDefaultInterface = {
        'search-filter-content__left': true,
        flex: true,
        'flex-justify-between': true
    };

    const filterContentClassName: ComponentClassnameDefaultInterface = {
        'search-filter-content': true,
        flex: true,
        'flex-row': true,
        'flex-justify-between': true,
        'flex-align-start': true
    };

    /**
     * Get filter items
     * @return {ReactNode}
     */
    const getFilterItems = (isChildrenToggle: boolean): ReactNode =>
        filterItem.map((item) => {
            if (
                item.type === 'combobox' &&
                item.isChildrenToggle === isChildrenToggle
            ) {
                return (
                    <ComboboxSearchFilter
                        key={item.name}
                        name={item.name}
                        type={item.type}
                        isChildrenToggle={item.isChildrenToggle}
                        option={(item as FilterComboboxComponent).option}
                        value={(item as FilterComboboxComponent).value}
                        className={(item as FilterComboboxComponent).className}
                        onChange={(val: string | number): void =>
                            onChangeFilterField(item.name, val)
                        }
                    />
                );
            }
            if (
                item.type === 'range' &&
                item.isChildrenToggle === isChildrenToggle
            ) {
                return (
                    <RangeSliderSearchFilter
                        key={item.name}
                        name={item.name}
                        type={item.type}
                        isChildrenToggle={item.isChildrenToggle}
                        min={(item as FilterRangeComponent).min}
                        max={(item as FilterRangeComponent).max}
                        value={(item as FilterRangeComponent).value}
                        label={(item as FilterRangeComponent).label}
                        className={(item as FilterRangeComponent).className}
                        onChange={(start: number, end: number): void =>
                            onChangeFilterField(item.name, [start, end])
                        }
                    />
                );
            }
            if (
                item.type === 'checkbox' &&
                item.isChildrenToggle === isChildrenToggle
            ) {
                return (
                    <CheckboxSearchFilter
                        key={item.name}
                        name={item.name}
                        type={item.type}
                        isChildrenToggle={item.isChildrenToggle}
                        id={(item as FilterCheckboxComponent).id}
                        itemValue={(item as FilterCheckboxComponent).itemValue}
                        isChecked={(item as FilterCheckboxComponent).isChecked}
                        value={(item as FilterCheckboxComponent).value}
                        label={(item as FilterCheckboxComponent).label}
                        className={(item as FilterCheckboxComponent).className}
                        onChange={(res: (string | number)[]): void =>
                            onChangeFilterField(item.name, res)
                        }
                    />
                );
            }
            return null;
        });

    /**
     * On Click Toggle
     */
    const onClickToggle = (): void => {
        if (ref.current) {
            setExpand(!expand);
            setShow(!show);
        }
    };

    /**
     * The Purpose method is watch if windows resize
     * @return {void}
     */
    const watchFn = (): void => {
        if (ref.current) {
            setExpand(!(ref.current.scrollHeight > 0));
        }
    };

    useEffect(watchFn, [width]);

    return (
        <div className={StringHelper.objToString(name)}>
            {searchResultText && (
                <TextComponent
                    tag="h1"
                    className="search-filter-heading"
                    styling="heading-6"
                    fontWeight={500}
                >
                    {searchResultText}
                </TextComponent>
            )}

            <div
                className={StringHelper.objToString(filterContentClassName)}
                style={{
                    marginTop: searchResultText ? 16 : 0,
                    paddingBottom: show ? 16 : 0,
                    width: '100%'
                }}
            >
                <div
                    className={StringHelper.objToString(
                        searchfilterItemClassName
                    )}
                >
                    {getFilterItems(false)}
                    {hasChildrenToggle && (
                        <div
                            role="button"
                            tabIndex={0}
                            onKeyPress={undefined}
                            onClick={onClickToggle}
                            className="flex filter-selector-btn"
                            style={{ cursor: 'pointer' }}
                        >
                            <span
                                style={{
                                    fontSize: 14,
                                    fontWeight: 500,
                                    color: 'rgba(105, 118, 132)'
                                }}
                            >
                                Filter
                            </span>
                            <IconComponent
                                color="text"
                                size={16}
                                style={{ marginLeft: 4 }}
                            >
                                {show ? ARROW_ON_EXPAND : ARROW_ON_HIDE}
                            </IconComponent>
                        </div>
                    )}
                </div>
                {hasSortingFilter && (
                    <div className="sorting">
                        <div className="filters flex">
                            <div className="sorting-filter">
                                <ComboboxComponent
                                    name="sort"
                                    onChange={onChangeSortingField}
                                    value={sortingItem ? sortingItem.value : 0}
                                >
                                    {sortingItem &&
                                        sortingItem.option.map((item) => (
                                            <ComboboxComponent.Item
                                                key={item.id}
                                                id={item.id}
                                                value={item.value}
                                                label={item.label}
                                            />
                                        ))}
                                </ComboboxComponent>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div
                className="flex flex-row flex-justify-start"
                style={{
                    width: '100%',
                    paddingTop: show ? 16 : 0,
                    height: show ? `100%` : 0,
                    overflow: show ? '' : 'hidden',
                    borderTop: show ? '1px solid rgba(0, 0, 0, 0.1)' : ''
                }}
                ref={ref}
            >
                {getFilterItems(true)}
            </div>
        </div>
    );
};

export default SearchFilter;
