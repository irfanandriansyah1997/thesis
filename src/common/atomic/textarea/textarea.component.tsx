import React from 'react';
import PropTypes from 'prop-types';

import {
    TextAreaDefaultExportInterface,
    TextAreaStyle
} from './interface/component.interface';
import StringHelper from '../../../shared/helper/string.helper';
import ValidatorHelper from '../../../shared/helper/validator.helper';

/**
 * TextArea Component
 */
const TextAreaComponent: TextAreaDefaultExportInterface = ({
    className,
    styling,
    ...res
}) => {
    return (
        <div
            className={StringHelper.objToString({
                [`ui-atomic-textarea`]: true,
                [`${className}`]: ValidatorHelper.verifiedIsNotEmpty(className)
            })}
        >
            <textarea
                className={StringHelper.objToString({
                    [`ui-atomic-textarea__input`]: true,
                    [`ui-atomic-textarea--styling-${styling}`]: true
                })}
                {...res}
            />
        </div>
    );
};

TextAreaComponent.defaultProps = {
    className: undefined,
    styling: 'primary'
};

TextAreaComponent.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    styling: PropTypes.oneOf<TextAreaStyle>(['primary', 'secondary'])
};

export default TextAreaComponent;
