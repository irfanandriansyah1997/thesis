import React, { SFC } from 'react';
import * as PropTypes from 'prop-types';

import TextComponent from '../text/text.component';
import IconComponent from '../icon/icon.component';
import { LabelPropsInterface } from './interface/component.interface';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import ColorDefaultConstant from '../../../shared/constant/color.constant';
// import { ColorType } from '../../../shared/interface/common/color.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/componen-default.interface';

/**
 * Label Component
 * @author Cathrine <cathrine@99.co>
 * @since 2020.03.23
 */
const LabelComponent: SFC<LabelPropsInterface> = ({
    color,
    rounded,
    className,
    labelText,
    icon,
    iconText
}: LabelPropsInterface) => {
    /**
     * Classname Getter
     * @description generate className based on props text
     * @return {string}
     */
    const getClassName = (): ComponentClassnameDefaultInterface => ({
        'ui-atomic-label': true,
        [`ui-atomic-label--styling-${rounded}`]: true,
        [`ui-atomic-label--styling-${color}`]: true,
        [`${className}`]: ValidatorHelper.verifiedIsNotEmpty(className)
    });

    return (
        <div className={getClassName()}>
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
                    {iconText}
                </IconComponent>
            ) : null}
        </div>
    );
};

LabelComponent.propTypes = {
    labelText: PropTypes.string.isRequired,
    rounded: PropTypes.bool,
    icon: PropTypes.bool,
    className: PropTypes.string,
    iconText: PropTypes.string,
    color: PropTypes.oneOf(Object.keys(ColorDefaultConstant))
};

LabelComponent.defaultProps = {
    color: 'primary',
    rounded: false,
    className: undefined,
    icon: false,
    iconText: ''
};

export default LabelComponent;
