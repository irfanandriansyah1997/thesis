import PropTypes from 'prop-types';
import React, { SFC, ValidationMap, Validator } from 'react';

import { CSSTransition } from 'react-transition-group';
import TextComponent from '../../atomic/text/text.component';
import StringHelper from '../../../shared/helper/string.helper';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import {
    ComboboxItemPropsInterface,
    ComboboxContentPropsInterface
} from './interface/combobox.interface';

/**
 * Combobox Content Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.26
 */
const ComboboxContentComponent: SFC<ComboboxContentPropsInterface> = ({
    item,
    show,
    value,
    onChange
}) => (
    <CSSTransition in={show} timeout={600} classNames="fade">
        <div className="ui-molecules-combobox__content box-shadow-r123">
            {item.map(({ id, label, subOption, ...res }) => (
                <TextComponent
                    {...res}
                    key={id}
                    tag="p"
                    align="left"
                    color="text"
                    fontWeight={500}
                    styling="default"
                    onClick={(): void => onChange(id)}
                    className={StringHelper.objToString({
                        [`${res.className}`]: ValidatorHelper.verifiedIsNotEmpty(
                            res.className
                        ),
                        flex: true,
                        relative: true,
                        'no-wrap': true,
                        'flex-align-center': true,
                        'ui-molecules-combobox__item': true,
                        'ui-molecules-combobox__item--active':
                            `${res.value}` === `${value}`,
                        'ui-molecules-combobox__item--sub-option': ValidatorHelper.verifiedIsNotFalse(
                            subOption
                        )
                    })}
                >
                    {label}
                </TextComponent>
            ))}
        </div>
    </CSSTransition>
);

ComboboxContentComponent.propTypes = {
    item: PropTypes.arrayOf(
        PropTypes.shape<ValidationMap<ComboboxItemPropsInterface>>({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
                .isRequired
        })
    ).isRequired as Validator<ComboboxItemPropsInterface[]>,
    onChange: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
};

ComboboxContentComponent.defaultProps = {
    item: []
};

export default ComboboxContentComponent;
