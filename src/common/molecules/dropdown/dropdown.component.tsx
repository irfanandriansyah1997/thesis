/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import PropTypes from 'prop-types';
import React, {
    useRef,
    useState,
    useEffect,
    Validator,
    RefObject,
    forwardRef
} from 'react';

import { CSSTransition } from 'react-transition-group';
import IconComponent from '../../atomic/icon/icon.component';
import TextComponent from '../../atomic/text/text.component';
import DropdownItemComponent from './dropdown-item.component';
import StringHelper from '../../../shared/helper/string.helper';
import DropdownDividerComponent from './dropdown-divider.component';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';
import {
    DropdownDefaultExportInterface,
    DropdownPropsInterface
} from './interface/component.interface';

/**
 * Dropdown Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.27
 */
const DropdownComponent: DropdownDefaultExportInterface = ({
    show,
    type,
    icon,
    iconMargin,
    label,
    scroll,
    onClick,
    trigger,
    refForward,
    refContentForward,
    ...res
}) => {
    const node = refForward || useRef<HTMLDivElement>(null);
    const contentNode =
        refForward && refContentForward
            ? refContentForward
            : useRef<HTMLDivElement>(null);
    const [showContent, setShowContent] = useState<boolean>(
        show === undefined ? false : show
    );

    /**
     * Event Listener On Click
     * @description event listener for prevent user click outside container dropdown
     * @return {boolean | string}
     */
    const eventListenerOnClick = (e: unknown): void => {
        const element = node.current;
        const elementContent = contentNode.current;
        const evt = e as { target: HTMLInputElement };

        if (type === 'list' && trigger === 'click') {
            /* istanbul ignore next */
            if (!(element && element.contains(evt.target))) {
                setShowContent(false);

                if (onClick) {
                    onClick(false);
                }
            }
        } else if (
            !(
                element &&
                elementContent &&
                (element.contains(evt.target) ||
                    elementContent.contains(evt.target))
            )
        ) {
            setShowContent(false);

            if (onClick) {
                onClick(false);
            }
        }
    };

    /**
     * Watch Event
     * @description will invoke when component did mount and will unmount
     */
    useEffect(() => {
        if (show !== undefined) {
            setShowContent(show);
        }
    }, [show]);

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
        if (trigger === 'click' && show === undefined) {
            setShowContent(!showContent);

            if (onClick) {
                onClick(!showContent);
            }
        }
    };

    /**
     * On Mouse Over Toggle
     * @return {void}
     */
    const onMouseOverToggle = (): void => {
        if (trigger === 'hover' && showContent === false) {
            setShowContent(!showContent);

            if (onClick) {
                onClick(!showContent);
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
        'ui-molecules-dropdown--show': showContent
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
                    onFocus={(): void => {}}
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
                        <div className="ui-molecules-dropdown__toggle__children">
                            {label}
                        </div>
                    )}

                    {icon ? (
                        <IconComponent
                            color="text"
                            size={16}
                            marginLeft={
                                iconMargin ? iconMargin.left : undefined
                            }
                        >
                            {icon}
                        </IconComponent>
                    ) : null}
                </div>
            </div>
            <CSSTransition in={showContent} timeout={600} classNames="fade">
                <div
                    ref={contentNode}
                    className="ui-molecules-dropdown__wrapper absolute"
                >
                    <div className="ui-molecules-dropdown__content relative box-shadow-r123">
                        {React.Children.toArray(res.children).filter(
                            (o: any) => {
                                return (
                                    ValidatorHelper.verifiedIsNotEmpty(
                                        o.type.displayName
                                    ) &&
                                    (o.type.displayName ===
                                        'DropdownItemComponent' ||
                                        o.type.displayName.includes(
                                            'DropdownContentComponent'
                                        ) ||
                                        o.type.displayName ===
                                            'DropdownDividerComponent')
                                );
                            }
                        )}
                    </div>
                </div>
            </CSSTransition>
        </div>
    );
};

DropdownComponent.displayName = 'DropdownComponent';

DropdownComponent.propTypes = {
    show: PropTypes.bool,
    scroll: PropTypes.bool,
    icon: PropTypes.string,
    iconMargin: PropTypes.shape({
        top: PropTypes.number,
        right: PropTypes.number,
        bottom: PropTypes.number,
        left: PropTypes.number
    }),
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
    trigger: PropTypes.oneOf(['click', 'hover']) as Validator<
        'hover' | 'click'
    >,
    refForward: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({})
    ]) as Validator<RefObject<HTMLDivElement>>,
    refContentForward: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({})
    ]) as Validator<RefObject<HTMLDivElement>>
};

DropdownComponent.defaultProps = {
    show: undefined,
    type: 'list',
    scroll: false,
    icon: undefined,
    iconMargin: {
        top: undefined,
        right: undefined,
        bottom: undefined,
        left: undefined
    },
    trigger: 'click',
    onClick: undefined,
    refForward: undefined,
    refContentForward: undefined
};

DropdownComponent.Item = DropdownItemComponent;

DropdownComponent.Divider = DropdownDividerComponent;

DropdownComponent.WithRef = forwardRef<HTMLDivElement, DropdownPropsInterface>(
    (props, ref) => (
        <DropdownComponent
            {...props}
            refForward={ref as RefObject<HTMLDivElement>}
        />
    )
);

export default DropdownComponent;
