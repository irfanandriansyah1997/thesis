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
    id: string;
    isChecked: boolean;
    value: (string | number)[];
    itemValue: string | number;
    label: string;
    className?: string;
}

/**
 *  Filter Checkbox Props Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.05.13
 */
export interface FilterCheckboxPropsInterface extends FilterCheckboxComponent {
    onChange: (res: (string | number)[]) => void;
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
    label: string;
    className?: string;
}

/**
 * Filter Range Slider Props Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.05.13
 */
export interface FilterRangePropsInterface extends FilterRangeComponent {
    onChange: (start: number, end: number) => void;
}

/**
 * Filter Combobox Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.05.13
 */
export interface FilterComboboxComponent extends FilterComponentItem {
    option: ComboboxItemComponent[];
    value: number | string;
    className?: string;
}

/**
 * Filter Combobox Props Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.05.13
 */
export interface FilterComboboxPropsInterface extends FilterComboboxComponent {
    onChange: (val: string | number) => void;
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
