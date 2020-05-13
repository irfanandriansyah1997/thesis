export interface FilterNavbarComponent {
    searchText: string;
    filterItem: (
        | FilterCheckboxComponent
        | FilterRangeComponent
        | FilterDropdownComponent
    )[];
    sortingItem: SortingFilterComponent;
}

export interface SortingFilterComponent {
    value: number;
    sortingText: string;
    option: ComboboxItemComponent[];
}

export interface FilterComponentItem {
    name: string;
    onChange: (value: unknown) => void;
    type: 'combobox' | 'range' | 'checkbox';
    isChildrenToggle: boolean;
}

export interface FilterCheckboxComponent extends FilterComponentItem {
    isChecked: boolean;
}

export interface FilterRangeComponent extends FilterComponentItem {
    min: number;
    max: number;
    value: number;
}

export interface FilterDropdownComponent extends FilterComponentItem {
    option: ComboboxItemComponent[];
    value: number;
}

export interface ComboboxItemComponent {
    id: string;
    label: string;
    subOption?: boolean;
    value: string | number;
}
