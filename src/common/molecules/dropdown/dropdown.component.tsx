/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';

import { CSSTransition } from 'react-transition-group';
import IconComponent from '../../atomic/icon/icon.component';
import TextComponent from '../../atomic/text/text.component';
import DropdownItemComponent from './dropdown-item.component';
import StringHelper from '../../../shared/helper/string.helper';
import DropdownDividerComponent from './dropdown-divider.component';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import { DropdownDefaultExportInterface } from './interface/component.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';

/**
 * Dropdown Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.27
 */
const DropdownComponent: DropdownDefaultExportInterface = ({
    icon,
    label,
    ...res
}) => {
    const node = useRef<HTMLDivElement>(null);
    const [show, setShow] = useState<boolean>(false);

    /**
     * Event Listener On Click
     * @description event listener for prevent user click outside container dropdown
     * @return {boolean | string}
     */
    const eventListenerOnClick = (e: unknown): void => {
        const element = node.current;
        const evt = e as { target: HTMLInputElement };

        /* istanbul ignore next */
        if (!(element && element.contains(evt.target))) {
            setShow(false);
        }
    };

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

    const className: ComponentClassnameDefaultInterface = {
        [`${res.className}`]: ValidatorHelper.verifiedIsNotEmpty(res.className),
        relative: true,
        'inline-block': true,
        'ui-molecules-dropdown': true,
        'ui-molecules-dropdown--show': show
    };
    delete res.className;

    return (
        <div className={StringHelper.objToString(className)}>
            <div ref={node} className="flex flex-row flex-wrap">
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
                    {label}
                    {icon ? (
                        <IconComponent
                            color="text"
                            size={16}
                            style={{ marginLeft: 5 }}
                        >
                            {icon}
                        </IconComponent>
                    ) : null}
                </TextComponent>
            </div>
            <CSSTransition in={show} timeout={600} classNames="fade">
                <div className="ui-molecules-combobox__content box-shadow-r123">
                    {React.Children.toArray(res.children).filter((o: any) => {
                        return (
                            o.type.name === 'DropdownItemComponent' ||
                            o.type.name === 'DropdownDividerComponent'
                        );
                    })}
                </div>
            </CSSTransition>
        </div>
    );
};

DropdownComponent.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    icon: PropTypes.string
};

DropdownComponent.defaultProps = {
    icon: undefined
};

DropdownComponent.Item = DropdownItemComponent;

DropdownComponent.Divider = DropdownDividerComponent;

export default DropdownComponent;
