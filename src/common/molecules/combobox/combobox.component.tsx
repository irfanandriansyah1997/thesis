import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import TextComponent from '../../atomic/text/text.component';
import ComboboxItemComponent from './combobox-item.component';
import DropdownComponent from '../dropdown/dropdown.component';
import StringHelper from '../../../shared/helper/string.helper';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import { ComponentMultipleOptionSingleOutput } from '../../../shared/interface/component/component-multiple-option.interface';
import {
    ComboboxItemPropsInterface,
    ComboboxDefaultExportInterface
} from './interface/combobox.interface';
import {
    ARROW_ON_HIDE,
    ARROW_ON_EXPAND
} from '../../../shared/constant/component.constant';

/**
 * Combobox Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.26
 */
const ComboboxComponent: ComboboxDefaultExportInterface = ({
    name,
    onChange,
    children,
    ...res
}: ComponentMultipleOptionSingleOutput) => {
    const [active, setActive] = useState<string>('');
    const [show, setShow] = useState<boolean>(false);
    const [comboboxItem, setComboboxItem] = useState<
        ComboboxItemPropsInterface[]
    >([]);

    /**
     * Watch Event
     * @description will invoke this method if props value is change
     */
    useEffect(() => {
        const itemProps: ComboboxItemPropsInterface[] = [];
        try {
            if (children) {
                React.Children.forEach(
                    children as [],
                    ({
                        props
                    }: React.Component<ComboboxItemPropsInterface>) => {
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

        setComboboxItem(itemProps);
    }, [res.value]);

    /**
     * On Click Toggle
     * @return {void}
     */
    const onClickToggle = (isShowed: boolean): void => {
        setShow(isShowed);
    };

    return (
        <DropdownComponent
            scroll
            type="list"
            name={name}
            trigger="click"
            onClick={onClickToggle}
            label={active || 'Not Selected'}
            icon={show ? ARROW_ON_EXPAND : ARROW_ON_HIDE}
            className={StringHelper.objToString({
                [`${res.className}`]: ValidatorHelper.verifiedIsNotEmpty(
                    res.className
                ),
                'ui-molecules-combobox': true
            })}
        >
            {comboboxItem.map(({ id, label, subOption, value, ...resItem }) => (
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
                            'ui-molecules-combobox__item': true
                        })}
                    >
                        {label}
                    </TextComponent>
                </DropdownComponent.Item>
            ))}
        </DropdownComponent>
    );
};

ComboboxComponent.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    onChange: PropTypes.func.isRequired
};

ComboboxComponent.Item = ComboboxItemComponent;

export default ComboboxComponent;
