import {
    AutocompleteR123PropsInterface,
    AutocompleteR123OnChangeValueType
} from '../../../molecules/autocomplete-r123/interface/component.interface';

export type SearchBarSRPR123PropertyType = 'sale' | 'rent';

/**
 * Searchbar SRP R123 Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.30
 */
export type SearchbarSRPR123PropsInterface = Omit<
    AutocompleteR123PropsInterface,
    'onChange'
> & {
    label: SearchbarSRPR123LabelInterface;
    propertyType: SearchBarSRPR123PropertyType;
    onChange: (param: SearchBarSRPR123OnChangeValueType) => void;
};

/**
 * Searchbar SRP R123 Onchange Value Type
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.30
 */
export type SearchBarSRPR123OnChangeValueType = AutocompleteR123OnChangeValueType & {
    propertyType: SearchBarSRPR123PropertyType;
};

/**
 * Searchbar SRP R123 Label Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.30
 */
export interface SearchbarSRPR123LabelInterface {
    saleLabel: string;
    rentLabel: string;
    searchLabel: string;
}

/**
 * Generate Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.05.30
 */
/**
 * Searchbar SRP R123 Button Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.30
 */
export type SearchbarSRPR123ButtonInterface = {
    label: string;
    onChange: () => void;
    type: SearchBarSRPR123PropertyType;
};
