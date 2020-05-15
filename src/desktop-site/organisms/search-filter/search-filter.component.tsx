import React, { SFC, useState, useEffect, ReactNode } from 'react';

import CardComponent from '../../../common/atomic/card/card.component';
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
    ...res
}: FilterNavbarComponent) => {
    const [expand, setExpand] = useState(false);
    const [show, setShow] = useState(false);
    const { width, ref } = ComponentResizerHelper<HTMLDivElement>({});

    const name: ComponentClassnameDefaultInterface = {
        'ui-organisms-search-filter': true,
        flex: true,
        'flex-column': true
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
                        option={(item as FilterComboboxComponent).option}
                        value={(item as FilterComboboxComponent).value}
                        name={item.name}
                        onChange={(item as FilterComboboxComponent).onChange}
                        type={item.type}
                        isChildrenToggle={item.isChildrenToggle}
                        className={(item as FilterComboboxComponent).className}
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
                        min={(item as FilterRangeComponent).min}
                        max={(item as FilterRangeComponent).max}
                        value={(item as FilterRangeComponent).value}
                        name={item.name}
                        onChange={(item as FilterRangeComponent).onChange}
                        type={item.type}
                        isChildrenToggle={item.isChildrenToggle}
                        label={(item as FilterRangeComponent).label}
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
                        isChecked={(item as FilterCheckboxComponent).isChecked}
                        name={item.name}
                        onChange={(item as FilterCheckboxComponent).onChange}
                        type={item.type}
                        isChildrenToggle={item.isChildrenToggle}
                        label={(item as FilterCheckboxComponent).label}
                        value={(item as FilterCheckboxComponent).value}
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
        <div className={StringHelper.objToString(name)} {...res}>
            <CardComponent
                boxShadow="r123"
                style={{ width: '100%', padding: '16px 16px 0 16px' }}
            >
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
                    style={{ marginTop: searchResultText ? 16 : 0 }}
                >
                    <div
                        className="search-filter-content__left flex flex-justify-start"
                        style={{ paddingBottom: 16 }}
                    >
                        {getFilterItems(false)}
                        {hasChildrenToggle && (
                            <div
                                role="button"
                                tabIndex={0}
                                onKeyPress={undefined}
                                onClick={onClickToggle}
                                className="flex"
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
                                        value={
                                            sortingItem ? sortingItem.value : 0
                                        }
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
                        padding: show ? '16px 0' : 0,
                        height: show ? `100%` : 0,
                        overflow: show ? '' : 'hidden',
                        borderTop: show ? '1px solid rgba(0, 0, 0, 0.1)' : ''
                    }}
                    ref={ref}
                >
                    {getFilterItems(true)}
                </div>
            </CardComponent>
        </div>
    );
};

export default SearchFilter;
