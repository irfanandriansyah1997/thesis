import PropTypes from 'prop-types';
import React, { useState, Validator, FunctionComponent } from 'react';

import StringHelper from '../../../shared/helper/string.helper';
import IconComponent from '../../../common/atomic/icon/icon.component';
import SpinComponent from '../../../common/atomic/spin/spin.component';
import TextComponent from '../../../common/atomic/text/text.component';
import ImageComponent from '../../../common/atomic/image/image.component';
import MultipleSelectionComponent from '../../../common/molecules/multiple-selection/multiple-selection.component';
import {
    AutocompleteR123PropsInterface,
    AutocompleteR123ValueInterface,
    AutocompleteR123ResponseItemInterface
} from './interface/component.interface';
import {
    MultipleSelectionSearchParamType,
    MultipleSelectionActionResponseType
} from '../../../common/molecules/multiple-selection/interface/component.interface';
import ValidatorHelper from '../../../shared/helper/validator.helper';

/**
 * Generate Class
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.05.29
 */
const AutoCompleteR123Component: FunctionComponent<AutocompleteR123PropsInterface> = ({
    value,
    onChange,
    className,
    placeholder,
    asyncService
}) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [delay, setDelay] = useState<number | undefined>(undefined);
    const [optionList, setOptionList] = useState<
        AutocompleteR123ResponseItemInterface[]
    >([]);

    /**
     * Method Name
     * @description
     */
    const searchKeyword = ({
        query
    }: MultipleSelectionSearchParamType): void => {
        setLoading(true);
        if (delay !== undefined) {
            clearTimeout(delay);
        }

        setDelay(
            (setTimeout(() => {
                asyncService(query as string).then((item) => {
                    setOptionList(item || []);

                    setLoading(false);
                });
            }, 1500) as unknown) as number
        );
    };

    /**
     * Method Name
     * @description
     */
    const onChangeValue = ({
        query,
        object
    }: MultipleSelectionActionResponseType): void => {
        onChange({
            query,
            object: object as AutocompleteR123ValueInterface[]
        });
    };

    return (
        <section
            className={StringHelper.objToString({
                'ui-molecules-autocomplete-r123': true,
                flex: true,
                'flex-align-center': true,
                [`${className}`]: ValidatorHelper.verifiedIsNotEmpty(className)
            })}
        >
            <SpinComponent
                color="text"
                show={loading}
                withoutShadow
                className={StringHelper.objToString({
                    'ui-molecules-autocomplete-r123__loading-bar': true,
                    flex: true,
                    'flex-align-center': true,
                    'flex-justify-center': true
                })}
            >
                <IconComponent color="text" size={24}>
                    rui-icon-search-small
                </IconComponent>
            </SpinComponent>
            <MultipleSelectionComponent
                fontSize={18}
                value={value}
                customizeFilter
                onChange={onChangeValue}
                onSearch={searchKeyword}
                placeholder={placeholder}
            >
                {optionList.map((item) => {
                    const urlImage = `https://public.urbanindo.com/style-guide/r123-${item.type}-icon.svg`;

                    return (
                        <MultipleSelectionComponent.Item
                            others={item}
                            id={item.id}
                            key={item.id}
                            value={item.id}
                            label={item.title}
                        >
                            <div className="ui-molecules-autocomplete-r123__item flex flex-align-start">
                                <div className="ui-molecules-autocomplete-r123__images">
                                    <ImageComponent
                                        height={15}
                                        src={urlImage}
                                        alt=""
                                    />
                                </div>
                                <div className="ui-molecules-autocomplete-r123__text">
                                    <TextComponent
                                        tag="p"
                                        fontWeight={500}
                                        styling="default"
                                        color="headingR123"
                                    >
                                        {item.title}
                                    </TextComponent>
                                    <TextComponent
                                        tag="span"
                                        color="text"
                                        styling="caption"
                                    >
                                        {item.label}
                                    </TextComponent>
                                </div>
                            </div>
                        </MultipleSelectionComponent.Item>
                    );
                })}
            </MultipleSelectionComponent>
        </section>
    );
};

AutoCompleteR123Component.propTypes = {
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
    asyncService: PropTypes.func.isRequired
};

AutoCompleteR123Component.defaultProps = {
    value: []
};

export default AutoCompleteR123Component;
