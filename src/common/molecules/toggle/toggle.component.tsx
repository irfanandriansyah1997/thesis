import React, { SFC, useState, useEffect, ReactNode } from 'react';
import PropTypes from 'prop-types';

import StringHelper from '../../../shared/helper/string.helper';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import ComponentResizerHelper from '../../../shared/helper/component-resizer.helper';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/componen-default.interface';
import {
    TogglePropsInterface,
    ToggleChildrenPositionType
} from './interfaces/component.interface';

/**
 * Toggle Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.21
 */
const ToggleComponent: SFC<TogglePropsInterface> = ({
    show,
    selector,
    gradient,
    children,
    onToggleExpand,
    collapsedHeight,
    childrenPosition,
    onComponentResize,
    ...res
}: TogglePropsInterface) => {
    const [expand, setExpand] = useState<boolean>(show || false);
    const [componentHeight, setComponentHeight] = useState<number>(
        collapsedHeight || 0
    );
    const { width, ref } = ComponentResizerHelper<HTMLDivElement>({});

    /**
     * Get class name toggle component
     * @return {ComponentClassnameDefaultInterface}
     */
    const className: ComponentClassnameDefaultInterface = {
        [`${res.className}`]: ValidatorHelper.verifiedIsNotEmpty(res.className),
        block: true,
        relative: true,
        'ui-molecules-toggle': true,
        'ui-molecules-toggle--expand': expand,
        'ui-molecules-toggle--gradient':
            ValidatorHelper.verifiedIsNotFalse(gradient) &&
            childrenPosition === 'bottom'
    };
    delete res.className;

    /**
     * On Click Toggle
     * @return {void}
     */
    const onClickToggle = (): void => {
        if (ref.current) {
            setExpand(!expand);
            setComponentHeight(
                !expand ? ref.current.scrollHeight : collapsedHeight || 0
            );
        }

        if (onToggleExpand) {
            onToggleExpand(!expand);
        }
    };

    /**
     * The Purpose method is watch if windows resize
     * @return {void}
     */
    const watchFn = (): void => {
        if (ref.current) {
            setExpand(!(ref.current.scrollHeight > (collapsedHeight || 0)));
        }

        if (onComponentResize && ref.current) {
            onComponentResize(ref.current.scrollHeight);
        }
    };

    useEffect(watchFn, [width]);

    /**
     * Selector Toggle
     * @description create div element for toggle selector
     * @return {ReactNode}
     */
    const selectorToggle = (
        position: ToggleChildrenPositionType
    ): ReactNode => (
        <div
            role="button"
            tabIndex={0}
            onKeyPress={undefined}
            onClick={onClickToggle}
            className={StringHelper.objToString({
                relative: true,
                'ui-molecules-toggle__selector': true,
                [`ui-molecules-toggle__selector--${position}`]: true
            })}
        >
            {selector}
        </div>
    );

    return (
        <div className={StringHelper.objToString(className)} {...res}>
            {childrenPosition === 'top' ? selectorToggle('top') : null}
            <div
                ref={ref}
                style={{ maxHeight: `${componentHeight}px` }}
                className="ui-molecules-toggle__content relative"
            >
                {children}
            </div>
            {childrenPosition === 'bottom' ? selectorToggle('bottom') : null}
        </div>
    );
};

ToggleComponent.propTypes = {
    show: PropTypes.bool,
    gradient: PropTypes.bool,
    selector: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    collapsedHeight: PropTypes.number,
    childrenPosition: PropTypes.oneOf<ToggleChildrenPositionType>([
        'bottom',
        'top'
    ]),
    onToggleExpand: PropTypes.func,
    onComponentResize: PropTypes.func
};

ToggleComponent.defaultProps = {
    show: false,
    gradient: false,
    collapsedHeight: 0,
    childrenPosition: 'bottom',
    onToggleExpand: undefined,
    onComponentResize: undefined
};

export default ToggleComponent;
