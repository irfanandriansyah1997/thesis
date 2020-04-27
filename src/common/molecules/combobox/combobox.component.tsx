import PropTypes from 'prop-types';
import React, { useState, useEffect, useRef } from 'react';

import IconComponent from '../../atomic/icon/icon.component';
import TextComponent from '../../atomic/text/text.component';
import ComboboxItemComponent from './combobox-item.component';
import StringHelper from '../../../shared/helper/string.helper';
import ComboboxContentComponent from './combobox-content.component';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';
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
    value,
    onChange,
    children,
    ...res
}: ComponentMultipleOptionSingleOutput) => {
    const node = useRef<HTMLDivElement>(null);
    const [show, setShow] = useState<boolean>(false);
    const [active, setActive] = useState<string>('');
    const [comboboxItem, setComboboxItem] = useState<
        ComboboxItemPropsInterface[]
    >([]);

    /**
     * Event Listener On Click
     * @description event listener for prevent user click outside container dropdown
     * @return {boolean | string}
     */
    const eventListenerOnClick = (e): void => {
        const element = node.current;

        /* istanbul ignore next */
        if (!(element && element.contains(e.target))) {
            setShow(false);
        }
    };

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
                            if (`${props.id}` === `${value}`) {
                                setActive(props.label);
                            }
                            itemProps.push(props);
                        } else {
                            throw new Error(
                                '[Error] child component needs to have tab or child props'
                            );
                        }
                    }
                );
            }
        } catch (e) {
            console.error(e);
        }

        setComboboxItem(itemProps);
    }, [value]);

    /**
     * Watch Event
     * @description will invoke when component did mount and will unmount
     */
    useEffect(() => {
        window.addEventListener('mousedown', eventListenerOnClick);

        return (): void => {
            window.removeEventListener('mousedown', eventListenerOnClick);
        };
    }, []);

    /**
     * On Click Toggle
     * @return {void}
     */
    const onClickToggle = (): void => {
        setShow(!show);
    };

    // Getter ClassName
    const className: ComponentClassnameDefaultInterface = {
        [`${res.className}`]: ValidatorHelper.verifiedIsNotEmpty(res.className),
        relative: true,
        'inline-block': true,
        'ui-molecules-combobox': true,
        'ui-molecules-combobox--show': show
    };

    return (
        <div ref={node} className={StringHelper.objToString(className)}>
            <div className="flex flex-row flex-wrap">
                <input
                    name={name}
                    value={value}
                    type="text"
                    className="hidden"
                />
                <TextComponent
                    tag="span"
                    align="left"
                    color="text"
                    fontWeight={500}
                    styling="default"
                    onClick={onClickToggle}
                    className={StringHelper.objToString({
                        flex: true,
                        relative: true,
                        'flex-justify-between': true,
                        'ui-molecules-combobox__toggle': true
                    })}
                >
                    {active || 'Not Selected'}
                    <IconComponent
                        color="text"
                        size={16}
                        style={{ marginLeft: 5 }}
                    >
                        {show ? ARROW_ON_EXPAND : ARROW_ON_HIDE}
                    </IconComponent>
                </TextComponent>
            </div>
            <ComboboxContentComponent
                show={show}
                value={value as string | number}
                item={comboboxItem}
                onChange={(output): void => {
                    onClickToggle();
                    onChange(output);
                }}
            />
        </div>
    );
};

ComboboxComponent.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    onChange: PropTypes.func.isRequired
};

ComboboxComponent.Item = ComboboxItemComponent;

export default ComboboxComponent;
