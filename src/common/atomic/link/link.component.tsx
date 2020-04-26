import React, { SFC, Validator } from 'react';
import PropTypes from 'prop-types';

import TextComponent from '../text/text.component';
import StringHelper from '../../../shared/helper/string.helper';
import { LinkPropsInterface } from './interface/component.interface';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import ColorDefaultConstant from '../../../shared/constant/color.constant';
import { ColorType } from '../../../shared/interface/common/color.interface';
import { ComponentFontWeightTypography } from '../../../shared/interface/component/component-typography.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';

/**
 * Text Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.04.7
 */
const LinkComponent: SFC<LinkPropsInterface> = ({
    icon,
    color,
    children,
    fontWeight,
    noUnderline,
    ...res
}: LinkPropsInterface) => {
    const className: ComponentClassnameDefaultInterface = {
        'ui-atomic-link': true,
        'ui-atomic-link--styling-underline-none': ValidatorHelper.verifiedIsNotFalse(
            noUnderline
        ),
        [`ui-atomic-link--styling-${color}`]: true,
        [`${res.className}`]: ValidatorHelper.verifiedIsNotEmpty(res.className)
    };

    return (
        <a
            {...res}
            className={StringHelper.objToString(className)}
            style={{
                color: ValidatorHelper.verifiedKeyIsExist(
                    ColorDefaultConstant,
                    color
                )
                    ? ColorDefaultConstant[color as ColorType]
                    : undefined
            }}
        >
            {icon ? <span className="ui-atomic-link__icon">{icon}</span> : null}
            <TextComponent
                tag="span"
                color={color}
                styling="default"
                fontFamily="primary"
                fontWeight={fontWeight}
                className="ui-atomic-link--children"
            >
                {children}
            </TextComponent>
        </a>
    );
};

LinkComponent.defaultProps = {
    color: 'primary',
    href: '',
    noUnderline: false,
    icon: undefined,
    onClick: undefined,
    fontWeight: 400
};

LinkComponent.propTypes = {
    color: PropTypes.oneOf(Object.keys(ColorDefaultConstant)) as Validator<
        ColorType
    >,
    href: PropTypes.string,
    noUnderline: PropTypes.bool,
    icon: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.element
    ]),
    onClick: PropTypes.func,
    fontWeight: PropTypes.oneOf<ComponentFontWeightTypography>([
        300,
        400,
        500,
        600,
        700
    ]) as Validator<ComponentFontWeightTypography>
};

export default LinkComponent;
