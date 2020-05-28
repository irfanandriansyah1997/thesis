/* eslint-disable @typescript-eslint/no-explicit-any */
import PropTypes from 'prop-types';
import React, {
    useRef,
    useState,
    ReactNode,
    Validator,
    FunctionComponent
} from 'react';

import DropdownComponent from '../dropdown/dropdown.component';
import StringHelper from '../../../shared/helper/string.helper';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import MultiSelectionContext from './context/multiple-selection.context';
import MultipleSelectionHelper from './helper/multiple-selection.helper';
import MultipleSelectionToggleComponent from './multiple-selection-toggle.component';
import MultipleSelectionContentComponent from './multiple-selection-content.component';
import {
    MultipleSelectionPropsInterface,
    MultipleSelectionContextInterface,
    MultipleSelectionItemValueInterface
} from './interface/component.interface';
import ObjectHelper from '../../../shared/helper/object.helper';

export const ItemComponentName = 'MultipleSelectionItemComponent';
export const HeadingComponentName = 'MultipleSelectionHeadingComponent';

/**
 * Multiple Selection Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.27
 */
const MultipleSelectionComponent: FunctionComponent<MultipleSelectionPropsInterface> = ({
    value,
    onChange,
    children,
    className,
    ...res
}) => {
    const contentDropdownClassName = 'ui-molecules-dropdown__content';
    const input = useRef<HTMLInputElement>(null);
    const dropdownToggle = useRef<HTMLDivElement>(null);
    const dropdownContent = useRef<HTMLDivElement>(null);

    const [textValue, setTextValue] = useState<string>('');
    const [showDropdownContent, setShowDropdownContent] = useState<boolean>(
        false
    );
    const [isActive] = useState<boolean>(value.length > 0);
    const [positionDropdownContent, setPositionDropdownContent] = useState<
        number
    >(-1);

    const {
        optionList,
        contentProps,
        optionListActive
    } = MultipleSelectionHelper.translateChildrenProps(
        children,
        positionDropdownContent
    );

    /**
     * On Change Edit Text
     * @param {string} value - value edit text
     * @return {void}
     */
    const onChangeSearch = (
        valueEditText: string | undefined = undefined,
        valueDropdownItem:
            | MultipleSelectionItemValueInterface
            | undefined = undefined
    ): void => {
        if (
            ValidatorHelper.verifiedIsNotEmpty(valueEditText) &&
            value.length === 0
        ) {
            onChange({
                query: valueEditText,
                object: []
            });
        } else if (valueDropdownItem) {
            onChange({
                query: '',
                object: ObjectHelper.removeDulicateArray(
                    value,
                    valueDropdownItem,
                    'value'
                ) as MultipleSelectionItemValueInterface[]
            });
        }

        setTextValue('');
        setShowDropdownContent(false);
    };

    /**
     * On Change Edit Text
     * @param {ChangeEvent<HTMLInputElement>} target - target param edit text
     * @return {void}
     */
    const onEditTextFocus = (show: boolean): void => {
        if (!show) {
            setPositionDropdownContent(-1);
        }

        if (dropdownToggle.current) {
            setShowDropdownContent(show);
        }
    };

    /**
     * On Change Position Dropdown Content
     * @param {'up' | 'down'} key - keydown event
     * @return {void}
     */
    const onChangePositionDropdownContent = (key: 'up' | 'down'): void => {
        if (showDropdownContent) {
            const length = optionList.length - 1;
            let currentPosition = positionDropdownContent;
            if (key === 'up' && positionDropdownContent > -1) {
                currentPosition = positionDropdownContent - 1;
            } else if (key === 'down' && positionDropdownContent < length) {
                currentPosition = positionDropdownContent + 1;
            } else if (key === 'down' && positionDropdownContent >= length) {
                currentPosition = 0;
            }

            if (
                dropdownContent.current &&
                dropdownContent.current.getElementsByClassName(
                    contentDropdownClassName
                ).length > 0
            ) {
                dropdownContent.current
                    .getElementsByClassName(contentDropdownClassName)[0]
                    .scrollBy({
                        top: 100 * (currentPosition - 1),
                        behavior: 'smooth'
                    });
            }

            setPositionDropdownContent(currentPosition);
        } else {
            setShowDropdownContent(true);
        }
    };

    const contextValue: MultipleSelectionContextInterface = {
        isActive,
        textValue,
        optionList,
        onChangeSearch,
        onEditTextFocus,
        optionListActive,
        positionDropdownContent,
        onChangePositionDropdownContent,
        onEditTextChange: (param): void => {
            setTextValue(param);
            setShowDropdownContent(true);
        }
    };

    /**
     * Generate Toggle Component
     * @return {ReactNode}
     */
    const generateToogleComponent = (): ReactNode => {
        return <MultipleSelectionToggleComponent ref={input} {...res} />;
    };

    return (
        <MultiSelectionContext.Provider value={contextValue}>
            <DropdownComponent.WithRef
                scroll
                type="list"
                name="testing"
                trigger="click"
                show={showDropdownContent}
                label={generateToogleComponent()}
                className={StringHelper.objToString({
                    'ui-molecules-multiple-selection': true,
                    [`${className}`]: ValidatorHelper.verifiedIsNotEmpty(
                        className
                    )
                })}
                ref={dropdownToggle}
                refContentForward={dropdownContent}
            >
                <MultipleSelectionContentComponent list={contentProps} />
            </DropdownComponent.WithRef>
        </MultiSelectionContext.Provider>
    );
};

MultipleSelectionComponent.propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string
    ]),
    value: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string,
            label: PropTypes.string
        })
    ) as Validator<MultipleSelectionItemValueInterface[]>
};

MultipleSelectionComponent.defaultProps = {
    value: [],
    children: undefined,
    className: undefined
};

export default MultipleSelectionComponent;
