/* eslint-disable @typescript-eslint/no-explicit-any */
import PropTypes from 'prop-types';
import React, {
    useRef,
    useState,
    useEffect,
    ReactNode,
    Validator
} from 'react';

import DropdownComponent from '../dropdown/dropdown.component';
import StringHelper from '../../../shared/helper/string.helper';
import ObjectHelper from '../../../shared/helper/object.helper';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import MultiSelectionContext from './context/multiple-selection.context';
import MultipleSelectionHelper from './helper/multiple-selection.helper';
import MultipleSelectionItemComponent from './multiple-selection-item.component';
import MultipleSelectionToggleComponent from './multiple-selection-toggle.component';
import MultipleSelectionHeadingComponent from './multiple-selection-heading.component';
import MultipleSelectionContentComponent from './multiple-selection-content.component';
import {
    MultipleSelectionContextInterface,
    MultipleSelectionItemValueInterface,
    MultipleSelectionDefaultExportInterface
} from './interface/component.interface';

export const ItemComponentName = 'MultipleSelectionItemComponent';
export const HeadingComponentName = 'MultipleSelectionHeadingComponent';

/**
 * Multiple Selection Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.27
 */
const MultipleSelectionComponent: MultipleSelectionDefaultExportInterface = ({
    value,
    onChange,
    children,
    fontSize,
    onSearch,
    className,
    customizeFilter,
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
    const [isActive, setIsActive] = useState<boolean>(value.length > 0);
    const [positionDropdownContent, setPositionDropdownContent] = useState<
        number
    >(-1);
    const {
        optionList,
        contentProps,
        optionListActive
    } = MultipleSelectionHelper.translateChildrenProps(
        children,
        positionDropdownContent,
        value,
        textValue,
        customizeFilter || false
    );

    useEffect(() => {
        setIsActive(value.length > 0);
    }, [value]);

    useEffect(() => {
        if (!showDropdownContent) {
            setPositionDropdownContent(-1);
        }
    }, [showDropdownContent]);

    useEffect(() => {
        if (ValidatorHelper.verifiedIsNotEmpty(textValue)) {
            onSearch({ query: textValue });
        }
    }, [textValue]);

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
            !ValidatorHelper.verifiedIsNotEmpty(valueDropdownItem) &&
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

        if (input.current) {
            input.current.focus();
        }
    };

    /**
     * On Change Edit Text
     * @param {ChangeEvent<HTMLInputElement>} target - target param edit text
     * @return {void}
     */
    const onEditTextFocus = (show: boolean): void => {
        if (!show && isActive) {
            setTextValue('');
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
            let scroll = 1;

            let currentPosition = positionDropdownContent;
            if (key === 'up' && positionDropdownContent > -1) {
                currentPosition = positionDropdownContent - 1;
                scroll = -1;
            } else if (key === 'down' && positionDropdownContent < length) {
                currentPosition = positionDropdownContent + 1;
                scroll = 1;
            } else if (key === 'down' && positionDropdownContent >= length) {
                currentPosition = 0;
                scroll = -1 * length;
            }

            if (
                dropdownContent.current &&
                dropdownContent.current.getElementsByClassName(
                    contentDropdownClassName
                ).length > 0 &&
                positionDropdownContent > 0
            ) {
                const component = dropdownContent.current.getElementsByClassName(
                    contentDropdownClassName
                )[0];
                let { scrollHeight } = component;

                if (scroll > length * -1) {
                    scrollHeight /= optionList.length;
                    scrollHeight *= scroll;
                } else {
                    scrollHeight *= -1;
                }

                dropdownContent.current
                    .getElementsByClassName(contentDropdownClassName)[0]
                    .scrollBy({
                        top: scrollHeight,
                        behavior: 'smooth'
                    });
            }

            setPositionDropdownContent(currentPosition);
        } else {
            setShowDropdownContent(true);
        }
    };

    /**
     * On Close Badges
     * @param {React.MouseEvent<HTMLElement, MouseEvent>} event - event dom
     * @return {void}
     */
    const onCloseBadges = (
        event: React.MouseEvent<HTMLElement, MouseEvent>,
        valueId: string
    ): void => {
        event.preventDefault();

        onChange({
            query: '',
            object: value.filter((item): boolean => {
                return item.value !== valueId;
            })
        });
    };

    const contextValue: MultipleSelectionContextInterface = {
        value,
        isActive,
        textValue,
        optionList,
        onCloseBadges,
        onChangeSearch,
        onEditTextFocus,
        optionListActive,
        showDropdownContent,
        positionDropdownContent,
        fontSize: fontSize || 18,
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
                ref={dropdownToggle}
                label={generateToogleComponent()}
                refContentForward={dropdownContent}
                show={optionList.length > 0 && showDropdownContent}
                className={StringHelper.objToString({
                    'ui-molecules-multiple-selection': true,
                    [`${className}`]: ValidatorHelper.verifiedIsNotEmpty(
                        className
                    )
                })}
            >
                {optionList.length > 0 && (
                    <MultipleSelectionContentComponent list={contentProps} />
                )}
            </DropdownComponent.WithRef>
        </MultiSelectionContext.Provider>
    );
};

MultipleSelectionComponent.propTypes = {
    fontSize: PropTypes.number,
    className: PropTypes.string,
    customizeFilter: PropTypes.bool,
    onSearch: PropTypes.func.isRequired,
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
    fontSize: 18,
    children: undefined,
    className: undefined,
    customizeFilter: false
};

MultipleSelectionComponent.Item = MultipleSelectionItemComponent;

MultipleSelectionComponent.Heading = MultipleSelectionHeadingComponent;

export default MultipleSelectionComponent;
