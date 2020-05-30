import React, { FunctionComponent } from 'react';

import {
    SearchbarSRPR123PropsInterface,
    SearchbarSRPR123ButtonInterface
} from './interface/component.interface';
import StringHelper from '../../../shared/helper/string.helper';
import TextComponent from '../../../common/atomic/text/text.component';
import AutoCompleteR123Component from '../../molecules/autocomplete-r123/autocomplete-r123.component';
import { AutocompleteR123OnChangeValueType } from '../../molecules/autocomplete-r123/interface/component.interface';
import ButtonComponent from '../../../common/atomic/button/button.component';

/**
 * Search Bar SRP R123 Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.30
 */
const SearchbarSRPR123Component: FunctionComponent<SearchbarSRPR123PropsInterface> = ({
    label,
    value,
    onChange,
    placeholder,
    asyncService,
    propertyType
}) => {
    /**
     * On Change Value
     * @param {AutocompleteR123OnChangeValueType} param - onchange value autocomplete
     * @return {void}
     */
    const onChangeValue = ({
        query,
        object
    }: AutocompleteR123OnChangeValueType): void => {
        onChange({
            query,
            object,
            propertyType
        });
    };

    /**
     * On Click Search Button
     * @return {void}
     */
    const onClickSearchButton = (): void => {
        onChange({
            query: undefined,
            object: value,
            propertyType
        });
    };

    const buttonList: SearchbarSRPR123ButtonInterface[] = [
        {
            type: 'sale',
            label: label.saleLabel,
            onChange: (): void => {
                onChange({
                    query: undefined,
                    object: value,
                    propertyType: 'sale'
                });
            }
        },
        {
            type: 'rent',
            label: label.rentLabel,
            onChange: (): void => {
                onChange({
                    query: undefined,
                    object: value,
                    propertyType: 'rent'
                });
            }
        }
    ];

    return (
        <div
            className={StringHelper.objToString({
                'ui-organism-search-srp-r123': true,
                relative: true,
                flex: true,
                'box-shadow-r123': true
            })}
        >
            <AutoCompleteR123Component
                value={value}
                onChange={onChangeValue}
                placeholder={placeholder}
                asyncService={asyncService}
                className="ui-organism-search-srp-r123__autocomplete"
            />
            <ButtonComponent
                size="default"
                onClick={onClickSearchButton}
                className="ui-organism-search-srp-r123__search-button"
            >
                {label.searchLabel}
            </ButtonComponent>
            <div className="ui-organism-search-srp-r123__button-group flex">
                {buttonList.map((item) => (
                    <button
                        className={StringHelper.objToString({
                            'ui-organism-search-srp-r123__button': true,
                            'ui-organism-search-srp-r123__button--active':
                                item.type === propertyType,
                            flex: true,
                            'flex-align-center': true,
                            'flex-justify-center': true
                        })}
                        key={item.label}
                        onClick={item.onChange}
                    >
                        <TextComponent
                            tag="span"
                            fontWeight={500}
                            styling="default"
                        >
                            {item.label}
                        </TextComponent>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SearchbarSRPR123Component;
