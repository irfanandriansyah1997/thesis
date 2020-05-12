/* eslint-disable @typescript-eslint/no-explicit-any */
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState, Validator } from 'react';

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
    type,
    icon,
    label,
    scroll,
    onClick,
    trigger,
    ...res
}) => {
    const node = useRef<HTMLDivElement>(null);
    const contentNode = useRef<HTMLDivElement>(null);
    const [show, setShow] = useState<boolean>(false);

    /**
     * Event Listener On Click
     * @description event listener for prevent user click outside container dropdown
     * @return {boolean | string}
     */
    const eventListenerOnClick = (e: unknown): void => {
        const element = node.current;
        const elementContent = contentNode.current;
        const evt = e as { target: HTMLInputElement };

        if (type === 'list') {
            /* istanbul ignore next */
            if (!(element && element.contains(evt.target))) {
                setShow(false);
            }
        }

        if (type === 'content') {
            /* istanbul ignore next */
            if (
                !(
                    element &&
                    elementContent &&
                    (element.contains(evt.target) ||
                        elementContent.contains(evt.target))
                )
            ) {
                setShow(false);
            }
        }
    };

    /**
     * Watch Event
     * @description will invoke when component did mount and will unmount
     */
    useEffect(() => {
        if (trigger === 'click') {
            window.addEventListener('mousedown', eventListenerOnClick);
        } else {
            window.addEventListener('mouseover', eventListenerOnClick);
        }

        return (): void => {
            if (trigger === 'click') {
                window.removeEventListener('mousedown', eventListenerOnClick);
            } else {
                window.removeEventListener('mouseover', eventListenerOnClick);
            }
        };
    }, []);

    /**
     * On Click Toggle
     * @return {void}
     */
    const onClickToggle = (): void => {
        if (trigger === 'click') {
            setShow(!show);

            if (onClick) {
                onClick(!show);
            }
        }
    };

    /**
     * On Mouse Over Toggle
     * @return {void}
     */
    const onMouseOverToggle = (): void => {
        if (trigger === 'hover') {
            setShow(!show);

            if (onClick) {
                onClick(!show);
            }
        }
    };

    const className: ComponentClassnameDefaultInterface = {
        [`${res.className}`]: ValidatorHelper.verifiedIsNotEmpty(res.className),
        relative: true,
        'inline-block': true,
        'ui-molecules-dropdown': true,
        'ui-molecules-dropdown--is-scrolled': ValidatorHelper.verifiedIsNotFalse(
            scroll
        ),
        'ui-molecules-dropdown--show': show
    };

    const classNameLabel: ComponentClassnameDefaultInterface = {
        flex: true,
        relative: true,
        'flex-justify-between': true,
        'ui-molecules-dropdown__toggle': true
    };
    delete res.className;

    return (
        <div className={StringHelper.objToString(className)}>
            <div ref={node} className="flex flex-row flex-wrap">
                <div
                    tabIndex={0}
                    role="button"
                    onKeyPress={undefined}
                    onClick={onClickToggle}
                    onFocus={(): void => undefined}
                    onMouseOver={(): void => onMouseOverToggle()}
                    className={StringHelper.objToString(classNameLabel)}
                >
                    {typeof label === 'string' ? (
                        <TextComponent
                            tag="span"
                            align="left"
                            color="text"
                            fontWeight={500}
                            styling="default"
                        >
                            {label}
                        </TextComponent>
                    ) : (
                        <div
                            tabIndex={0}
                            role="button"
                            onKeyPress={undefined}
                            onClick={onClickToggle}
                            className={StringHelper.objToString(classNameLabel)}
                        >
                            {label}
                        </div>
                    )}

                    {icon ? (
                        <IconComponent
                            color="text"
                            size={16}
                            style={{ marginLeft: 5 }}
                        >
                            {icon}
                        </IconComponent>
                    ) : null}
                </div>
            </div>
            <CSSTransition in={show} timeout={600} classNames="fade">
                <div
                    ref={contentNode}
                    className="ui-molecules-dropdown__wrapper absolute"
                >
                    <div className="ui-molecules-dropdown__content relative box-shadow-r123">
                        {React.Children.toArray(res.children).filter(
                            (o: any) => {
                                return (
                                    o.type.name === 'DropdownItemComponent' ||
                                    o.type.name === 'DropdownDividerComponent'
                                );
                            }
                        )}
                    </div>
                </div>
            </CSSTransition>
        </div>
    );
};

DropdownComponent.propTypes = {
    scroll: PropTypes.bool,
    icon: PropTypes.string,
    onClick: PropTypes.func,
    name: PropTypes.string.isRequired,
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node,
            PropTypes.string
        ])
    ]).isRequired,
    type: PropTypes.oneOf(['list', 'content']),
    trigger: PropTypes.oneOf(['click', 'hover']) as Validator<'hover' | 'click'>
};

DropdownComponent.defaultProps = {
    type: 'list',
    scroll: false,
    icon: undefined,
    onClick: undefined,
    trigger: 'click'
};

DropdownComponent.Item = DropdownItemComponent;

DropdownComponent.Divider = DropdownDividerComponent;

export default DropdownComponent;
