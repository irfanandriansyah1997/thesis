export interface FilterNavbarComponent {
    searchText: string;
    filterItem: (
        | FilterCheckboxComponent
        | FilterRangeComponent
        | FilterDropdownComponent
    )[];
    sortingItem: SortingFilterComponent;
    onChangeFilterField: (key: string, value: string | number) => void;
    onChangeSortingField: (value: string | number) => void;
}

export interface SortingFilterComponent {
    value: number;
    sortingText: string;
    option: ComboboxItemComponent[];
}

export interface FilterComponentItem {
    name: string;
    type: 'combobox' | 'range' | 'checkbox';
    isChildrenToggle: boolean;
}

export interface FilterCheckboxComponent extends FilterComponentItem {
    isChecked: boolean;
    onChange: (res: (string | number)[]) => void;
}

export interface FilterRangeComponent extends FilterComponentItem {
    min: number;
    max: number;
    value: RangeSliderValueInterface;
    onChange: (start: number, end: number) => void;
    className?: string;
}

export interface FilterDropdownComponent extends FilterComponentItem {
    option: ComboboxItemComponent[];
    value: number | string;
    onChange: (val: string | number) => void;
    className?: string;
}

export interface ComboboxItemComponent {
    id: string;
    label: string;
    subOption?: boolean;
    value: string | number;
}

export interface RangeSliderValueInterface {
    end: number;
    start: number;
}
