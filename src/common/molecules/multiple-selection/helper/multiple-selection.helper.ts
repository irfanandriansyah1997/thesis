/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, Children } from 'react';

import {
    ItemComponentName,
    HeadingComponentName
} from '../multiple-selection.component';
import {
    MultipleSelectionItemValueInterface,
    MultipleSelectionItemPropsInterface,
    MultipleSelectionContentItemInterface,
    MultipleSelectionHeadingPropsInterface,
    MultipleSelectionContextOptionInterface
} from '../interface/component.interface';

/**
 * Helper For Multiple Selection Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.28
 */
class MultipleSelectionHelper {
    /**
     * Translate Children Props
     * @param {ReactNode} children - children props Multiple Selection Component
     * @return {Object}
     */
    static translateChildrenProps(
        children: ReactNode,
        positon: number,
        value: MultipleSelectionItemValueInterface[],
        valueEditText: string,
        customizeFilter: boolean
    ): {
        contentProps: MultipleSelectionContentItemInterface[];
        optionList: MultipleSelectionContextOptionInterface[];
        optionListActive?: MultipleSelectionContextOptionInterface;
    } {
        let positionComponent = 0;
        const contentProps = Children.toArray(children)
            .filter((item: any) => {
                if (item.type.displayName === HeadingComponentName) {
                    return true;
                }

                if (item.type.displayName === ItemComponentName) {
                    const { props } = item;
                    const notExist = MultipleSelectionHelper.filterItemIsAvailableInActive(
                        props,
                        value
                    );

                    if (customizeFilter) {
                        return true;
                    }

                    if (notExist && !customizeFilter) {
                        return true;
                    }
                }

                return false;
            })
            .filter((item: any) => {
                if (item.type.displayName === HeadingComponentName) {
                    return true;
                }

                if (!customizeFilter) {
                    const { props } = item;
                    const {
                        label
                    } = props as MultipleSelectionItemPropsInterface;

                    if (label.toLowerCase().includes(valueEditText)) {
                        return true;
                    }
                } else {
                    return true;
                }

                return false;
            })
            .map(
                (item: any): MultipleSelectionContentItemInterface => {
                    if (item.type.displayName === HeadingComponentName) {
                        const { props } = item;

                        return {
                            type: HeadingComponentName,
                            content: props as MultipleSelectionHeadingPropsInterface
                        };
                    }

                    const { props } = item;
                    const content: MultipleSelectionItemPropsInterface = {
                        ...(props as MultipleSelectionItemPropsInterface),
                        position: positionComponent
                    };
                    positionComponent += 1;

                    return {
                        content,
                        type: ItemComponentName
                    };
                }
            );

        const optionList = MultipleSelectionHelper.generateOptionList(
            contentProps
        );

        const optionListActive = optionList.filter((item) => {
            return positon === item.position;
        });

        return {
            contentProps,
            optionList,
            optionListActive:
                optionListActive.length > 0 ? optionListActive[0] : undefined
        };
    }

    /**
     * Generate Option List Context
     * @param {MultipleSelectionContentItemInterface[]} list - list item
     * @return {MultipleSelectionContentItemInterface[]}
     */
    static generateOptionList(
        list: MultipleSelectionContentItemInterface[]
    ): MultipleSelectionContextOptionInterface[] {
        return list
            .filter(({ type }): boolean => type === ItemComponentName)
            .map(
                ({ content }): MultipleSelectionContextOptionInterface => {
                    const {
                        label,
                        ...resItem
                    } = content as MultipleSelectionItemPropsInterface;
                    return {
                        label,
                        value: resItem.value,
                        others: resItem.others,
                        position: resItem.position || 0
                    };
                }
            );
    }

    /**
     * Filter Item Is Available In Active
     * @param {MultipleSelectionItemPropsInterface} currentList - current list
     * @param {MultipleSelectionItemValueInterface[]} currentValue - value props multiple selection
     * @return {MultipleSelectionItemPropsInterface | undefined}
     */
    static filterItemIsAvailableInActive(
        currentList: MultipleSelectionItemPropsInterface,
        currentValue: MultipleSelectionItemValueInterface[]
    ): MultipleSelectionItemPropsInterface | null {
        const isExist =
            currentValue.filter(({ value }): boolean => {
                return currentList.value === value;
            }).length > 0;

        if (!isExist) {
            return currentList;
        }

        return null;
    }
}

export default MultipleSelectionHelper;
