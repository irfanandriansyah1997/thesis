import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import ButtonComponent from '../../atomic/button/button.component';
import TextComponent from '../../atomic/text/text.component';
import ComboboxSplitSplitItemComponent from './combobox-split-item.component';
import DropdownComponent from '../dropdown/dropdown.component';
import StringHelper from '../../../shared/helper/string.helper';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import {
    ComboboxSplitMultipleOption,
    ComboboxSplitItemPropsInterface,
    ComboboxSplitDefaultExportInterface
} from './interface/component.interface';
import {
    ARROW_ON_HIDE,
    ARROW_ON_EXPAND
} from '../../../shared/constant/component.constant';

/**
 * ComboboxSplit Component
 */
const ComboboxSplitComponent: ComboboxSplitDefaultExportInterface = ({
    name,
    onChange,
    onClick,
    children,
    icon,
    ...res
}: ComboboxSplitMultipleOption) => {
    const [active, setActive] = useState<string>('');
    const [show, setShow] = useState<boolean>(false);
    const [comboboxItem, setComboboxSplitItem] = useState<
        ComboboxSplitItemPropsInterface[]
    >([]);
    const [firstItem, setFirstItem] = useState<ComboboxSplitItemPropsInterface>(
        { id: '', label: '', value: '' }
    );

    /**
     * Watch Event
     * @description will invoke this method if props value is change
     */
    useEffect(() => {
        const itemProps: ComboboxSplitItemPropsInterface[] = [];
        try {
            if (children) {
                React.Children.forEach(
                    children as [],
                    (
                        {
                            props
                        }: React.Component<ComboboxSplitItemPropsInterface>,
                        index: number
                    ) => {
                        const validationProps = [
                            'id',
                            'label',
                            'value'
                        ].filter((item) =>
                            ValidatorHelper.verifiedKeyIsExist(props, item)
                        ).length;

                        if (validationProps === 3) {
                            if (`${props.id}` === `${res.value}`) {
                                setActive(props.label);
                            }
                            if (index === 0) {
                                setFirstItem(props);
                            }
                            itemProps.push(props);
                        } else {
                            throw new Error(
                                '[Error] child component needs to have id, label and value props'
                            );
                        }
                    }
                );
            }
        } catch (e) {
            console.error(e);
        }

        setComboboxSplitItem(itemProps);
    }, [res.value]);

    /**
     * On Click Toggle
     * @return {void}
     */
    const onClickToggle = (isShowed: boolean): void => {
        setShow(isShowed);
    };

    return (
        <div
            className={StringHelper.objToString({
                [`${res.className}`]: ValidatorHelper.verifiedIsNotEmpty(
                    res.className
                ),
                'ui-molecules-combobox-split': true
            })}
        >
            <ButtonComponent
                size="big"
                theme="secondary"
                onClick={onClick}
                icon={icon}
                className={StringHelper.objToString({
                    'ui-molecules-combobox-split--button': true
                })}
            >
                {active || firstItem.label}
            </ButtonComponent>
            <DropdownComponent
                scroll
                type="list"
                name={name}
                trigger="click"
                onClick={onClickToggle}
                label=""
                icon={show ? ARROW_ON_EXPAND : ARROW_ON_HIDE}
                className={StringHelper.objToString({
                    'ui-molecules-combobox-split--dropdown': true
                })}
            >
                {comboboxItem.map(
                    ({ id, label, subOption, value, ...resItem }) => (
                        <DropdownComponent.Item
                            key={id}
                            subOption={subOption}
                            active={`${value}` === `${res.value}`}
                        >
                            <TextComponent
                                {...resItem}
                                tag="p"
                                align="left"
                                color="text"
                                fontWeight={500}
                                styling="default"
                                onClick={(): void => {
                                    onChange(value);
                                    onClickToggle(false);
                                }}
                                className={StringHelper.objToString({
                                    [`${resItem.className}`]: ValidatorHelper.verifiedIsNotEmpty(
                                        resItem.className
                                    ),
                                    flex: true,
                                    relative: true,
                                    'no-wrap': true,
                                    'ui-molecules-combobox-split__item': true
                                })}
                            >
                                {label}
                            </TextComponent>
                        </DropdownComponent.Item>
                    )
                )}
            </DropdownComponent>
        </div>
    );
};

ComboboxSplitComponent.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    onChange: PropTypes.func.isRequired
};

ComboboxSplitComponent.Item = ComboboxSplitSplitItemComponent;

export default ComboboxSplitComponent;
