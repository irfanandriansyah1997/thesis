import React from 'react';
import PropTypes from 'prop-types';
import { ResizeObserver, install } from 'resize-observer';
import { ResizeObserverEntry } from 'resize-observer/lib/ResizeObserverEntry';

import StringHelper from '../../../shared/helper/string.helper';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/componen-default.interface';
import {
    AccordionPropsInterface,
    AccordionStateInterface
} from './interface/component.interface';

import IconComponent from '../../atomic/icon/icon.component';

/**
 * Accordion Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.04.16
 */
class AccordionComponent extends React.PureComponent<
    AccordionPropsInterface,
    AccordionStateInterface
> {
    node = React.createRef<HTMLDivElement>();

    static propTypes = {
        selector: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node,
            PropTypes.string
        ]).isRequired,
        show: PropTypes.bool,
        onToggleSelector: PropTypes.func,
        collapsedHeight: PropTypes.string,
        gradient: PropTypes.bool,
        showArrow: PropTypes.bool
    };

    static defaultProps = {
        show: false,
        onToggleSelector: undefined,
        collapsedHeight: '0px',
        gradient: false,
        showArrow: false
    };

    constructor(props: AccordionPropsInterface) {
        super(props);

        this.state = {
            height: props.collapsedHeight,
            show: props.show || false
        };

        this.onClickToggle = this.onClickToggle.bind(this);
        this.updateSizeContent = this.updateSizeContent.bind(this);
    }

    componentDidMount(): void {
        const { show } = this.state;
        const { node, updateSizeContent } = this;

        if (show) {
            this.setState({
                height:
                    node.current != null
                        ? `${node.current.scrollHeight}px`
                        : '0px'
            });
        }

        if (node.current) {
            install();

            ((): void =>
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                new ResizeObserver((_: ResizeObserverEntry[]) => {
                    updateSizeContent();
                }).observe(node.current))();
        }
    }

    /**
     * On Click Toggle
     * @description event action if the user clicks accordion toggle
     * @return {void}
     */
    onClickToggle(): void {
        const { onToggleSelector, collapsedHeight } = this.props;
        const { show } = this.state;

        this.setState(
            {
                show: !show
            },
            () => {
                const { node } = this;

                if (onToggleSelector) {
                    onToggleSelector(!show);
                }

                this.setState({
                    height:
                        !show && node.current != null
                            ? `${node.current.scrollHeight}px`
                            : collapsedHeight
                });
            }
        );
    }

    /**
     * Get class name accordingly
     */
    get className(): string {
        const { className } = this.props;
        const { show } = this.state;

        return StringHelper.objToString({
            [`${className}`]: true,
            'ui-molecules-accordion': true,
            'ui-molecules-accordion--show': show
        });
    }

    /**
     * Get icon children accordingly
     */
    get iconChildren(): string {
        const { show } = this.state;

        return StringHelper.objToString({
            'rui-icon-arrow-up-small': show === true,
            'rui-icon-arrow-down-small': show === false
        });
    }

    /**
     * Event handler when updating size
     * @description these method will invoke when accordion resizes
     */
    public updateSizeContent(): void {
        const { show } = this.state;
        const { node } = this;

        if (show) {
            this.setState({
                height:
                    node.current != null
                        ? `${node.current.scrollHeight}px`
                        : '0px'
            });
        }
    }

    render(): React.ReactNode {
        const { className, onClickToggle, iconChildren } = this;
        const { selector, children, gradient, showArrow } = this.props;
        const { height, show } = this.state;
        const name: ComponentClassnameDefaultInterface = {
            'ui-molecules-accordion__selector': true,
            'ui-molecules-accordion__selector-gradient': ValidatorHelper.verifiedIsNotFalse(
                gradient && !show
            ),
            flex: true,
            relative: true
        };

        return (
            <div className={className}>
                <div
                    className="ui-molecules-accordion__content"
                    style={{ maxHeight: `${height}` }}
                >
                    <div ref={this.node}>{children}</div>
                </div>
                <div className={StringHelper.objToString(name)}>
                    <button
                        className="ui-molecules-accordion__selector-button"
                        type="submit"
                        tabIndex={-1}
                        onClick={onClickToggle}
                    >
                        {selector}
                    </button>
                    {showArrow ? (
                        <span className="ui-molecules-accordion__selector-icon">
                            <IconComponent color="primary" size={18}>
                                {iconChildren}
                            </IconComponent>
                        </span>
                    ) : null}
                </div>
            </div>
        );
    }
}

export default AccordionComponent;
