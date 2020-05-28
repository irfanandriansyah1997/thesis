import PropTypes from 'prop-types';
import React, {
    RefObject,
    forwardRef,
    FocusEvent,
    KeyboardEvent,
    FunctionComponent
} from 'react';

import TextComponent from '../../atomic/text/text.component';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import { MultipleSelectionTogglePropsInterface } from './interface/component.interface';
import {
    ARROW_UP_KEY_CHARCODE,
    BACKSPACE_KEY_CHARCODE,
    ARROW_DOWN_KEY_CHARCODE
} from '../../../shared/constant/keyboard.constant';

/**
 * Multiple Selection Toggle Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.28
 */
const Component: FunctionComponent<MultipleSelectionTogglePropsInterface> = ({
    onBlur,
    onFocus,
    isActive,
    onKeyDown,
    textValue,
    placeholder,
    onChangeSearch,
    onEditTextFocus,
    onChangePosition,
    ...res
}) => {
    /**
     * On Input Focus
     * @param {FocusEvent<HTMLInputElement>} event - event dom
     * @param {boolean} isFocused - event if input focused
     * @return {void}
     */
    const onInputChangeFocus = (
        event: FocusEvent<HTMLInputElement>,
        isFocused: boolean
    ): void => {
        onEditTextFocus(isFocused);

        if (onFocus && isFocused) {
            onFocus(event);
        }

        if (onBlur && !isFocused) {
            onBlur(event);
        }
    };

    /**
     * On Input Focus
     * @param {FocusEvent<HTMLInputElement>} event - event dom
     * @param {boolean} isFocused - event if input focused
     * @return {void}
     */
    const onInputKeydown = (event: KeyboardEvent<HTMLInputElement>): void => {
        if (event.keyCode === BACKSPACE_KEY_CHARCODE) {
            onEditTextFocus(true);
        }

        if (event.keyCode === ARROW_UP_KEY_CHARCODE) {
            onChangePosition('up');
        }

        if (event.keyCode === ARROW_DOWN_KEY_CHARCODE) {
            onChangePosition('down');
        }

        if (onKeyDown) {
            onKeyDown(event);
        }
    };

    return (
        <div className="ui-molecules-multiple-selection__toggle flex">
            {isActive && !ValidatorHelper.verifiedIsNotEmpty(textValue) && (
                <TextComponent color="text" styling="heading-5" tag="p">
                    {placeholder}
                </TextComponent>
            )}
            <div className="ui-molecules-multiple-selection__toggle-content">
                <input
                    {...res}
                    value={textValue}
                    onChange={onChangeSearch}
                    onKeyDown={onInputKeydown}
                    onFocus={(e): void => onInputChangeFocus(e, true)}
                    onBlur={(e): void => onInputChangeFocus(e, false)}
                />
            </div>
        </div>
    );
};

Component.propTypes = {
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    isActive: PropTypes.bool.isRequired,
    textValue: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChangeSearch: PropTypes.func.isRequired,
    onEditTextFocus: PropTypes.func.isRequired,
    onChangePosition: PropTypes.func.isRequired
};

Component.defaultProps = {
    onBlur: undefined,
    onFocus: undefined,
    onKeyDown: undefined
};

const MultipleSelectionToggleComponent = forwardRef<
    HTMLInputElement,
    MultipleSelectionTogglePropsInterface
>((props, ref) => (
    <Component {...props} refForward={ref as RefObject<HTMLInputElement>} />
));

export default MultipleSelectionToggleComponent;
