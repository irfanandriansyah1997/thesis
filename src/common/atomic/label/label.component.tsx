import React, { SFC, Validator } from 'react';
import * as PropTypes from 'prop-types';

import TextComponent from '../text/text.component';
import IconComponent from '../icon/icon.component';
import StringHelper from '../../../shared/helper/string.helper';
import { LabelPropsInterface } from './interface/component.interface';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import ColorDefaultConstant from '../../../shared/constant/color.constant';
import { ColorType } from '../../../shared/interface/common/color.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/componen-default.interface';

/**
 * Label Component
 * @author Cathrine <cathrine@99.co>
 * @since 2020.03.23
 */
const LabelComponent: SFC<LabelPropsInterface> = ({
    color,
    rounded,
    labelText,
    icon,
    ...res
}: LabelPropsInterface) => {
    /**
     * Classname Getter
     * @description generate className based on props text
     * @return {string}
     */
    const className: ComponentClassnameDefaultInterface = {
        'ui-atomic-label': true,
        [`ui-atomic-label--styling-${rounded}`]: true,
        [`ui-atomic-label--styling-${color}`]: true,
        [`${res.className}`]: ValidatorHelper.verifiedIsNotEmpty(res.className)
    };
    delete res.className;

    return (
        <div {...res} className={StringHelper.objToString(className)}>
            <TextComponent
                align="left"
                fontWeight={400}
                styling="default"
                fontFamily="primary"
                tag="span"
            >
                {labelText}
            </TextComponent>

            {icon ? (
                <IconComponent color="primary" size="small">
                    {icon}
                </IconComponent>
            ) : null}
        </div>
    );
};

LabelComponent.propTypes = {
    labelText: PropTypes.string.isRequired,
    rounded: PropTypes.bool,
    icon: PropTypes.string,
    className: PropTypes.string,
    color: PropTypes.oneOf(Object.keys(ColorDefaultConstant)) as Validator<
        ColorType
    >
};

LabelComponent.defaultProps = {
    color: 'primary',
    rounded: false,
    className: undefined,
    icon: undefined
};

export default LabelComponent;
