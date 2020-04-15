import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import StringHelper from '../../../shared/helper/string.helper';
import {
    PropsInterface,
    StateInterface,
    DialogType
} from './interface/component.interface';

import './style/style.scss';

/**
 * Dialog Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.04.14
 */

// eslint-disable-next-line require-jsdoc-except/require-jsdoc
class DialogComponent extends React.PureComponent<
    PropsInterface,
    StateInterface
> {
    // eslint-disable-next-line react/static-property-placement
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node,
            PropTypes.string
        ]).isRequired,
        type: PropTypes.oneOf([DialogType.POPUP, DialogType.FULLSCREEN]),
        show: PropTypes.bool.isRequired,
        animation: PropTypes.string,
        onCloseDialog: PropTypes.func.isRequired,
        className: PropTypes.string
    };

    // eslint-disable-next-line react/static-property-placement
    static defaultProps = {
        type: DialogType.POPUP,
        animation: 'fade-scale-center',
        className: ''
    };

    static getDerivedStateFromProps(
        props: PropsInterface,
        state: StateInterface
    ): unknown {
        if (props.show !== state.show) {
            document.body.style.overflow = props.show ? 'hidden' : 'initial';

            return {
                show: props.show
            };
        }

        return null;
    }

    constructor(props: PropsInterface) {
        super(props);
        const { show } = props;

        this.state = {
            show
        };
        this.setCloseDialog = this.setCloseDialog.bind(this);
        this.renderDialog = this.renderDialog.bind(this);
    }

    /**
     * Get the className.
     */
    get className(): string {
        const { type, className } = this.props;
        const { show } = this.state;

        return StringHelper.objToString({
            [`${className}`]: true,
            'ui-atomic-dialog': true,
            'ui-atomic-dialog__show': show === true,
            'ui-atomic-dialog--type-popup': type === DialogType.POPUP,
            'ui-atomic-dialog--type-fullscreen': type === DialogType.FULLSCREEN
        });
    }

    /**
     * Action triggered when user close the dialog.
     */
    setCloseDialog(): void {
        const { onCloseDialog } = this.props;

        this.setState({ show: false }, () => {
            onCloseDialog();
        });
    }

    /**
     * Render Dialog
     * @return {React.ReactNode}
     */
    renderDialog(): React.ReactNode {
        const { show } = this.state;
        const { children, animation } = this.props;
        const { className } = this;

        return (
            <CSSTransition in={show} timeout={600} classNames="fade">
                <div className={className}>
                    <CSSTransition
                        in={show}
                        timeout={300}
                        classNames={animation}
                    >
                        <div className="ui-atomic-dialog__content absolute no-m">
                            {children}
                        </div>
                    </CSSTransition>
                    <div
                        className="ui-atomic-dialog__backdrop"
                        onClick={this.setCloseDialog}
                        onKeyDown={this.setCloseDialog}
                        role="button"
                        tabIndex={0}
                        key={`backdrop-${new Date().getTime()}`}
                        aria-label="backdrop"
                    />
                </div>
            </CSSTransition>
        );
    }

    render(): ReactNode {
        return this.renderDialog();
    }
}

export default DialogComponent;
