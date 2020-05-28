/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, Children } from 'react';

import {
    ItemComponentName,
    HeadingComponentName
} from '../multiple-selection.component';
import {
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
        positon: number
    ): {
        contentProps: MultipleSelectionContentItemInterface[];
        optionList: MultipleSelectionContextOptionInterface[];
        optionListActive?: MultipleSelectionContextOptionInterface;
    } {
        let position = 0;
        const contentProps = Children.toArray(children)
            .filter((item: any) => {
                return (
                    item.type.displayName === HeadingComponentName ||
                    item.type.displayName === ItemComponentName
                );
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
                        position
                    };
                    position += 1;

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
}

export default MultipleSelectionHelper;
