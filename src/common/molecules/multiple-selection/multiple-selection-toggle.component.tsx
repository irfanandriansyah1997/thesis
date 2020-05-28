import PropTypes from 'prop-types';
import React, {
    RefObject,
    Validator,
    forwardRef,
    FocusEvent,
    useContext,
    ChangeEvent,
    KeyboardEvent,
    FunctionComponent
} from 'react';

import TextComponent from '../../atomic/text/text.component';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import MultiSelectionContext from './context/multiple-selection.context';
import {
    MultipleSelectionContextInterface,
    MultipleSelectionTogglePropsInterface
} from './interface/component.interface';
import {
    ENTER_KEY_CHARCODE,
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
    onKeyDown,
    refForward,
    placeholder,
    ...res
}) => {
    const {
        isActive,
        textValue,
        onChangeSearch,
        onEditTextFocus,
        onEditTextChange,
        optionListActive,
        onChangePositionDropdownContent
    } = useContext<MultipleSelectionContextInterface>(MultiSelectionContext);
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
            setTimeout(() => {
                onBlur(event);
            }, 300);
        }
    };

    /**
     * On Change Value
     * @param {ChangeEvent<HTMLInputElement>} target - dom edit text
     * @return {void}
     */
    const onChangeValue = ({ target }: ChangeEvent<HTMLInputElement>): void => {
        onEditTextChange(target.value);
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
            onChangePositionDropdownContent('up');
        }

        if (event.keyCode === ARROW_DOWN_KEY_CHARCODE) {
            onChangePositionDropdownContent('down');
        }

        if (event.keyCode === ENTER_KEY_CHARCODE) {
            if (ValidatorHelper.verifiedIsNotEmpty(textValue)) {
                onChangeSearch(textValue, undefined);
            } else if (optionListActive) {
                onChangeSearch(undefined, {
                    label: optionListActive.label,
                    value: optionListActive.value,
                    others: optionListActive.others
                });
            }
        }

        if (onKeyDown) {
            onKeyDown(event);
        }
    };

    return (
        <div className="ui-molecules-multiple-selection__toggle flex">
            {!isActive && !ValidatorHelper.verifiedIsNotEmpty(textValue) && (
                <TextComponent color="text" styling="heading-5" tag="p">
                    {placeholder}
                </TextComponent>
            )}
            <div className="ui-molecules-multiple-selection__toggle-content">
                <input
                    {...res}
                    ref={refForward}
                    value={textValue}
                    onChange={onChangeValue}
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
    placeholder: PropTypes.string.isRequired,
    refForward: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    ]) as Validator<RefObject<HTMLInputElement>>
};

Component.defaultProps = {
    onBlur: undefined,
    onFocus: undefined,
    onKeyDown: undefined,
    refForward: undefined
};

const MultipleSelectionToggleComponent = forwardRef<
    HTMLInputElement,
    MultipleSelectionTogglePropsInterface
>((props, ref) => (
    <Component {...props} refForward={ref as RefObject<HTMLInputElement>} />
));

export default MultipleSelectionToggleComponent;
