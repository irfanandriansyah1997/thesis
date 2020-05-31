import PropTypes from 'prop-types';
import React, { FunctionComponent, useState, Validator } from 'react';

import StringHelper from '../../../shared/helper/string.helper';
import TextComponent from '../../../common/atomic/text/text.component';
import ButtonComponent from '../../../common/atomic/button/button.component';
import AutoCompleteR123Component from '../../molecules/autocomplete-r123/autocomplete-r123.component';
import {
    SearchBarSRPR123PropertyType,
    SearchbarSRPR123LabelInterface,
    SearchbarSRPR123PropsInterface,
    SearchbarSRPR123ButtonInterface
} from './interface/component.interface';
import {
    AutocompleteR123ValueInterface,
    AutocompleteR123OnChangeValueType,
    AutocompleteR123ResponseItemInterface
} from '../../molecules/autocomplete-r123/interface/component.interface';

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
    const [textValue, setTextValue] = useState<string>('');
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
            propertyType,
            object: value,
            query: value.length === 0 ? textValue : undefined
        });
    };

    /**
     * On Search Keyword
     * @param {string} keyword - keyword search bar
     * @return {Promise<AutocompleteR123ResponseItemInterface[]>}
     */
    const onSearchKeyword = (
        keyword: string
    ): Promise<AutocompleteR123ResponseItemInterface[]> => {
        setTextValue(keyword);
        return asyncService(keyword);
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
                asyncService={onSearchKeyword}
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

SearchbarSRPR123Component.propTypes = {
    value: PropTypes.arrayOf(
        PropTypes.shape({
            query: PropTypes.string,
            object: PropTypes.arrayOf(
                PropTypes.shape({
                    value: PropTypes.string,
                    label: PropTypes.string,
                    others: PropTypes.shape({
                        id: PropTypes.string,
                        type: PropTypes.oneOf([
                            'location',
                            'listing',
                            'history'
                        ]),
                        title: PropTypes.string,
                        label: PropTypes.string,
                        subtitle: PropTypes.string,
                        multilanguagePlace: PropTypes.shape({
                            en: PropTypes.shape({
                                level1: PropTypes.string,
                                level2: PropTypes.string,
                                level3: PropTypes.string,
                                level4: PropTypes.string,
                                level5: PropTypes.string
                            }),
                            id: PropTypes.shape({
                                level1: PropTypes.string,
                                level2: PropTypes.string,
                                level3: PropTypes.string,
                                level4: PropTypes.string,
                                level5: PropTypes.string
                            })
                        }),
                        additionalInfo: PropTypes.shape({})
                    })
                })
            )
        })
    ).isRequired as Validator<AutocompleteR123ValueInterface[]>,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    asyncService: PropTypes.func.isRequired,
    propertyType: PropTypes.oneOf(['sale', 'rent']).isRequired as Validator<
        SearchBarSRPR123PropertyType
    >,
    label: PropTypes.shape({
        saleLabel: PropTypes.string,
        rentLabel: PropTypes.string,
        searchLabel: PropTypes.string
    }).isRequired as Validator<SearchbarSRPR123LabelInterface>
};

SearchbarSRPR123Component.defaultProps = {
    value: [],
    propertyType: 'sale',
    label: {
        rentLabel: 'Disewa',
        saleLabel: 'Dijual',
        searchLabel: 'Perbarui'
    }
};

export default SearchbarSRPR123Component;
