import React, { SFC } from 'react';
import PropTypes from 'prop-types';

import StringHelper from '../../../shared/helper/string.helper';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import { EditTextPropsInterface } from './interface/component.interface';

/**
 * Edit Text Component
 * @author Cathrine <Cathrine@99.co>
 * @since 2020.05.20
 */
const EditTextComponent: SFC<EditTextPropsInterface> = ({
    className,
    value,
    ...res
}: EditTextPropsInterface) => {
    return (
        <input
            className={StringHelper.objToString({
                [`ui-atomic-editText`]: true,
                [`${className}`]: ValidatorHelper.verifiedIsNotEmpty(className)
            })}
            value={value}
            {...res}
        />
    );
};

EditTextComponent.defaultProps = {
    className: undefined,
    type: 'text',
    placeholder: undefined,
    disabled: false
};

EditTextComponent.propTypes = {
    className: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.oneOf(['text', 'number', 'password', 'email']),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    disabled: PropTypes.bool
};

export default EditTextComponent;
