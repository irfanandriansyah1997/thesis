/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
    useRef,
    useState,
    ReactNode,
    ChangeEvent,
    FunctionComponent
} from 'react';

import DropdownComponent from '../dropdown/dropdown.component';
import StringHelper from '../../../shared/helper/string.helper';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import MultipleSelectionToggleComponent from './multiple-selection-toggle.component';
import {
    MultipleSelectionPropsInterface,
    MultipleSelectionItemPropsInterface,
    MultipleSelectionContentItemInterface,
    MultipleSelectionHeadingPropsInterface
} from './interface/component.interface';
import MultipleSelectionContentComponent from './multiple-selection-content.component';

export const ItemComponentName = 'MultipleSelectionItemComponent';
export const HeadingComponentName = 'MultipleSelectionHeadingComponent';

/**
 * Multiple Selection Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.27
 */
const MultipleSelectionComponent: FunctionComponent<MultipleSelectionPropsInterface> = ({
    value,
    onSearch,
    onChange,
    children,
    className,
    ...res
}) => {
    const node = useRef<HTMLDivElement>(null);
    const input = useRef<HTMLInputElement>(null);
    const [textValue, setTextValue] = useState<string>('');
    const [showDropdownContent, setShowDropdownContent] = useState<boolean>(
        false
    );
    const [isActive] = useState<boolean>(
        ValidatorHelper.verifiedIsNotEmpty(value)
    );
    const contentProps = React.Children.toArray(children)
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

                return {
                    type: HeadingComponentName,
                    content: props as MultipleSelectionItemPropsInterface
                };
            }
        );

    /**
     * On Change Edit Text
     * @param {ChangeEvent<HTMLInputElement>} target - target param edit text
     * @return {void}
     */
    const onChangeSearch = ({
        target
    }: ChangeEvent<HTMLInputElement>): void => {
        setShowDropdownContent(true);
        setTextValue(target.value);
        onSearch({
            query: target.value
        });

        onChange({
            query: target.value,
            object: value || []
        });
    };

    /**
     * On Change Edit Text
     * @param {ChangeEvent<HTMLInputElement>} target - target param edit text
     * @return {void}
     */
    const onEditTextFocus = (show: boolean): void => {
        if (node.current) {
            setShowDropdownContent(show);
        }
    };

    /**
     * Generate Toggle Component
     * @return {ReactNode}
     */
    const generateToogleComponent = (): ReactNode => {
        return (
            <MultipleSelectionToggleComponent
                ref={input}
                isActive={isActive}
                textValue={textValue}
                onChangeSearch={onChangeSearch}
                onEditTextFocus={onEditTextFocus}
                onChangePosition={(position): void => console.log(position)}
                {...res}
            />
        );
    };

    return (
        <DropdownComponent.WithRef
            scroll
            type="list"
            name="testing"
            trigger="click"
            show={showDropdownContent}
            label={generateToogleComponent()}
            className={StringHelper.objToString({
                'ui-molecules-multiple-selection': true,
                [`${className}`]: ValidatorHelper.verifiedIsNotEmpty(className)
            })}
            ref={node}
        >
            <MultipleSelectionContentComponent list={contentProps} />
        </DropdownComponent.WithRef>
    );
};

export default MultipleSelectionComponent;
