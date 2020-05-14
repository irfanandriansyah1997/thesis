/**
 * Filter Navbar Props Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.05.13
 */
export interface FilterNavbarComponent {
    searchResultText?: string;
    filterItem: (
        | FilterCheckboxComponent
        | FilterRangeComponent
        | FilterComboboxComponent
    )[];
    sortingItem?: SortingFilterComponent;
    onChangeFilterField: (key: string, value: FilterFieldValue) => void;
    onChangeSortingField: (value: string | number) => void;
    hasChildrenToggle: boolean;
    hasSortingFilter: boolean;
}

/**
 * Sorting Filter Props Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.05.13
 */
export interface SortingFilterComponent {
    value: number;
    sortingText: string;
    option: ComboboxItemComponent[];
}

/**
 * Filter Component Props Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.05.13
 */
export interface FilterComponentItem {
    name: string;
    type: 'combobox' | 'range' | 'checkbox';
    isChildrenToggle: boolean;
}

/**
 * Filter Checkbox Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.05.13
 */
export interface FilterCheckboxComponent extends FilterComponentItem {
    isChecked: boolean;
    onChange: (res: (string | number)[]) => void;
    label: string;
    value: (string | number)[];
}

/**
 * Filter Range Slider Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.05.13
 */
export interface FilterRangeComponent extends FilterComponentItem {
    min: number;
    max: number;
    value: RangeSliderValueInterface;
    onChange: (start: number, end: number) => void;
    className?: string;
    label: string;
}

/**
 * Filter Combobox Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.05.13
 */
export interface FilterComboboxComponent extends FilterComponentItem {
    option: ComboboxItemComponent[];
    value: number | string;
    onChange: (val: string | number) => void;
    className?: string;
}

/**
 * Combobox Item Props Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.05.13
 */
export interface ComboboxItemComponent {
    id: string;
    label: string;
    subOption?: boolean;
    value: string | number;
}

/**
 * Range Slider Value Props Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.05.13
 */
export interface RangeSliderValueInterface {
    end: number;
    start: number;
}

/**
 * Filter Field Value
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.05.14
 */
export type FilterFieldValue = string | number | (string | number)[];
