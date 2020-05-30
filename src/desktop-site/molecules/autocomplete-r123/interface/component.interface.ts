import {
    MultipleSelectionItemValueInterface,
    MultipleSelectionActionResponseType
} from '../../../../common/molecules/multiple-selection/interface/component.interface';
/**
 * Generate Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.05.29
 */
export interface AutocompleteR123PropsInterface {
    className?: string;
    placeholder: string;
    value: AutocompleteR123ValueInterface[];
    onChange: (param: AutocompleteR123OnChangeValueType) => void;
    asyncService: (
        keyword: string
    ) => Promise<AutocompleteR123ResponseItemInterface[]>;
}

/**
 * Generate Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.05.29
 */
export interface AutocompleteR123ResponseItemInterface {
    id: string;
    type: 'location' | 'listing' | 'history';
    title: string;
    label: string;
    subtitle: string;
    multilanguagePlace: {
        en: AutocompleteR123ResponseLocationInterface;
        id: AutocompleteR123ResponseLocationInterface;
    };
    additionalInfo?: Record<string, unknown> | null;
}

/**
 * Generate Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.05.29
 */
export interface AutocompleteR123ResponseLocationInterface {
    level1?: string | null;
    level2?: string | null;
    level3?: string | null;
    level4?: string | null;
    level5?: string | null;
}

/**
 * Generate Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.05.29
 */
export type AutocompleteR123ValueInterface = Omit<
    MultipleSelectionItemValueInterface,
    'others'
> & {
    others: AutocompleteR123ResponseItemInterface;
};

/**
 * Generate Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.05.29
 */
export type AutocompleteR123OnChangeValueType = Omit<
    MultipleSelectionActionResponseType,
    'object'
> & {
    object: AutocompleteR123ValueInterface[];
};
