import React from 'react';
import PropTypes from 'prop-types';

import {
    EditTextDefaultExportInterface,
    EditTextStyle,
    EditTextType
} from './interface/component.interface';
import StringHelper from '../../../shared/helper/string.helper';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import EditTextAddonComponent from './edit-text-addon.component';

/**
 * Edit Text Component
 * @author Cathrine <Cathrine@99.co>
 * @since 2020.05.20
 */
const EditTextComponent: EditTextDefaultExportInterface = ({
    className,
    value,
    styling,
    ...res
}) => {
    return (
        <div
            className={StringHelper.objToString({
                [`ui-atomic-edit-text`]: true,
                [`${className}`]: ValidatorHelper.verifiedIsNotEmpty(className)
            })}
        >
            <input
                className={StringHelper.objToString({
                    [`ui-atomic-edit-text__input`]: true,
                    [`ui-atomic-edit-text--styling-${styling}`]: true
                })}
                value={value}
                {...res}
            />
        </div>
    );
};

EditTextComponent.defaultProps = {
    className: undefined,
    type: 'text',
    value: '',
    styling: 'primary'
};

EditTextComponent.propTypes = {
    className: PropTypes.string,
    type: PropTypes.oneOf<EditTextType>([
        'text',
        'number',
        'password',
        'email'
    ]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string.isRequired,
    styling: PropTypes.oneOf<EditTextStyle>(['primary', 'secondary'])
};

EditTextComponent.Addon = EditTextAddonComponent;

export default EditTextComponent;
