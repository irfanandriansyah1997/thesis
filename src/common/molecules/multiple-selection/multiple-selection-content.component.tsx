import PropTypes from 'prop-types';
import React, { FunctionComponent, Validator, useContext } from 'react';

import DropdownComponent from '../dropdown/dropdown.component';
import StringHelper from '../../../shared/helper/string.helper';
import MultiSelectionContext from './context/multiple-selection.context';
import MultipleSelectionHelper from './helper/multiple-selection.helper';
import MultipleSelectionHeadingComponent from './multiple-selection-heading.component';
import {
    MultipleSelectionContentInterface,
    MultipleSelectionContextInterface,
    MultipleSelectionItemPropsInterface,
    MultipleSelectionItemValueInterface,
    MultipleSelectionContentItemInterface,
    MultipleSelectionHeadingPropsInterface
} from './interface/component.interface';

/**
 * Generate Class
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.05.28
 */
const MultipleSelectionContentComponent: FunctionComponent<MultipleSelectionContentInterface> = ({
    list
}) => {
    const { onChangeSearch, positionDropdownContent, value } = useContext<
        MultipleSelectionContextInterface
    >(MultiSelectionContext);

    /**
     * On Click Option Item
     * @param {MultipleSelectionItemValueInterface} param - item option
     * @return {void}
     */
    const onClickItemOption = ({
        label,
        others,
        ...res
    }: MultipleSelectionItemValueInterface): void => {
        onChangeSearch(undefined, {
            label,
            others,
            value: res.value
        });
    };

    return (
        <>
            {list.map(({ content, type }) => {
                if (type === MultipleSelectionHeadingComponent.displayName) {
                    const {
                        id,
                        children,
                        ...res
                    } = content as MultipleSelectionHeadingPropsInterface;

                    return (
                        <DropdownComponent.Item
                            {...res}
                            key={id}
                            disableHover
                            withoutPadding
                            className="ui-molecules-multiple-selection__heading"
                        >
                            <div className="ui-molecules-multiple-selection__item-content">
                                {children}
                            </div>
                        </DropdownComponent.Item>
                    );
                }

                const isNotExistInValue = MultipleSelectionHelper.filterItemIsAvailableInActive(
                    content as MultipleSelectionItemPropsInterface,
                    value
                );

                if (isNotExistInValue) {
                    const {
                        id,
                        label,
                        others,
                        position,
                        children,
                        ...res
                    } = content as MultipleSelectionItemPropsInterface;
                    const isActive = positionDropdownContent === position;
                    const param = {
                        label,
                        others,
                        value: res.value
                    };

                    return (
                        <DropdownComponent.Item
                            className={StringHelper.objToString({
                                'ui-molecules-multiple-selection__item': true,
                                'ui-molecules-multiple-selection__item--active': isActive
                            })}
                            key={id}
                            disableHover
                            withoutPadding
                        >
                            <div
                                tabIndex={0}
                                role="button"
                                onKeyPress={undefined}
                                onClick={(): void => onClickItemOption(param)}
                                className="ui-molecules-multiple-selection__item-content"
                            >
                                {children}
                            </div>
                        </DropdownComponent.Item>
                    );
                }

                return isNotExistInValue;
            })}
        </>
    );
};

MultipleSelectionContentComponent.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.oneOf([
                'MultipleSelectionItemComponent',
                'MultipleSelectionHeadingComponent'
            ]),
            content: PropTypes.oneOfType([
                PropTypes.shape({
                    id: PropTypes.string.isRequired,
                    children: PropTypes.oneOfType([
                        PropTypes.arrayOf(PropTypes.node),
                        PropTypes.node,
                        PropTypes.string
                    ]).isRequired,
                    label: PropTypes.string.isRequired,
                    value: PropTypes.string.isRequired
                }),
                PropTypes.shape({
                    id: PropTypes.string.isRequired,
                    children: PropTypes.oneOfType([
                        PropTypes.arrayOf(PropTypes.node),
                        PropTypes.node,
                        PropTypes.string
                    ]).isRequired
                })
            ])
        })
    ).isRequired as Validator<MultipleSelectionContentItemInterface[]>
};

MultipleSelectionContentComponent.defaultProps = {
    list: []
};

MultipleSelectionContentComponent.displayName =
    'MultipleSelectionContentComponent - DropdownContentComponent';

export default MultipleSelectionContentComponent;
