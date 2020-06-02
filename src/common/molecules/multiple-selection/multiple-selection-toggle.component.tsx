import PropTypes from 'prop-types';
import React, {
    RefObject,
    Validator,
    forwardRef,
    FocusEvent,
    useContext,
    ChangeEvent,
    KeyboardEvent,
    FunctionComponent,
    useEffect,
    useState
} from 'react';

import StringHelper from '../../../shared/helper/string.helper';
import BadgesComponent from '../../atomic/badges/badges.component';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import ComponentHelper from '../../../shared/helper/component.helper';
import MultiSelectionContext from './context/multiple-selection.context';
import {
    MultipleSelectionContextInterface,
    MultipleSelectionTogglePropsInterface
} from './interface/component.interface';
import {
    ESC_KEY_CHARCODE,
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
        value,
        fontSize,
        isActive,
        textValue,
        onCloseBadges,
        onChangeSearch,
        onEditTextFocus,
        onEditTextChange,
        optionListActive,
        showDropdownContent,
        onEditTextBackSpaceKeyDown,
        onChangePositionDropdownContent
    } = useContext<MultipleSelectionContextInterface>(MultiSelectionContext);
    const [width, setWidth] = useState<number | undefined>(undefined);
    const listValue = showDropdownContent ? value : value.slice(0, 3);
    const restOfValue = showDropdownContent ? 0 : value.length - 3;

    useEffect(() => {
        const sampleComponentWidth = ComponentHelper.getWidthFromText(
            textValue,
            `${fontSize}px 'Avenir Next'`
        );

        setWidth(sampleComponentWidth > 20 ? sampleComponentWidth : 20);
    }, [textValue]);

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
     * On Input Keydown
     * @param {FocusEvent<HTMLInputElement>} event - event dom
     * @return {void}
     */
    const onInputKeydown = (event: KeyboardEvent<HTMLInputElement>): void => {
        if (event.keyCode === BACKSPACE_KEY_CHARCODE && textValue === '') {
            onEditTextBackSpaceKeyDown();
        }

        if (event.keyCode === ARROW_UP_KEY_CHARCODE) {
            onChangePositionDropdownContent('up');
        }

        if (event.keyCode === ARROW_DOWN_KEY_CHARCODE) {
            onChangePositionDropdownContent('down');
        }

        if (event.keyCode === ESC_KEY_CHARCODE) {
            onEditTextFocus(false);
        }

        if (event.keyCode === ENTER_KEY_CHARCODE) {
            if (
                ValidatorHelper.verifiedIsNotEmpty(textValue) &&
                !ValidatorHelper.verifiedIsNotEmpty(optionListActive)
            ) {
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

    /**
     * On Toggle Section Click
     * @return {void}
     */
    const onToggleClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ): void => {
        const excludeClassName = ['ui-atomic-badges__close'];
        const className = (event.target as HTMLDivElement).classList.value;

        const notExist =
            excludeClassName.filter((item) => className.includes(item))
                .length === 0;

        if (refForward && refForward.current && notExist) {
            refForward.current.focus();
        }
    };

    return (
        <div
            className={StringHelper.objToString({
                'ui-molecules-multiple-selection__toggle': true,
                relative: true,
                flex: true,
                'flex-align-center': true
            })}
            tabIndex={0}
            role="button"
            onKeyPress={undefined}
            onClick={onToggleClick}
        >
            {!isActive && !ValidatorHelper.verifiedIsNotEmpty(textValue) && (
                <p
                    className={StringHelper.objToString({
                        'ui-molecules-multiple-selection__placeholder': true,
                        absolute: true,
                        truncate: true
                    })}
                    style={{ fontSize }}
                >
                    {placeholder}
                </p>
            )}
            <div className="ui-molecules-multiple-selection__toggle-content">
                <ul className="flex flex-wrap">
                    {listValue.map(({ label, ...resItem }) => {
                        /**
                         * On Close Badges
                         * @param {React.MouseEvent<HTMLElement, MouseEvent>} event - event dom
                         * @return {void}
                         */
                        const onClickIconCloseBadges = (
                            event: React.MouseEvent<HTMLElement, MouseEvent>
                        ): void => {
                            onCloseBadges(event, resItem.value);

                            if (refForward && refForward.current) {
                                refForward.current.blur();
                            }
                        };

                        return (
                            <li key={resItem.value}>
                                <BadgesComponent
                                    color="primaryR123"
                                    rounded
                                    size="default"
                                    transparent={0.1}
                                    onCloseBadges={onClickIconCloseBadges}
                                >
                                    {label}
                                </BadgesComponent>
                            </li>
                        );
                    })}
                    {restOfValue > 0 ? (
                        <li>
                            <BadgesComponent
                                color="primaryR123"
                                rounded
                                size="default"
                                transparent={0.1}
                            >
                                {`${restOfValue}+`}
                            </BadgesComponent>
                        </li>
                    ) : null}
                    <li>
                        <input
                            {...res}
                            maxLength={50}
                            ref={refForward}
                            value={textValue}
                            style={{ width, fontSize }}
                            onChange={onChangeValue}
                            onKeyDown={onInputKeydown}
                            onFocus={(e): void => onInputChangeFocus(e, true)}
                            onBlur={(e): void => onInputChangeFocus(e, false)}
                        />
                    </li>
                </ul>
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
        PropTypes.shape({})
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
