import React, { SFC, Validator } from 'react';
import PropTypes from 'prop-types';

import TextComponent from '../text/text.component';
import StringHelper from '../../../shared/helper/string.helper';
import { LinkPropsInterface } from './interface/component.interface';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import ColorDefaultConstant from '../../../shared/constant/color.constant';
import { ColorType } from '../../../shared/interface/common/color.interface';
import {
    ComponentFontWeightTypography,
    ComponentStylingTypography
} from '../../../shared/interface/component/component-typography.interface';
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
    styling,
    ...res
}: LinkPropsInterface) => {
    const className: ComponentClassnameDefaultInterface = {
        'ui-atomic-link': true,
        'ui-atomic-link--styling-underline-none': ValidatorHelper.verifiedIsNotFalse(
            noUnderline
        ),
        [`${res.className}`]: ValidatorHelper.verifiedIsNotEmpty(res.className)
    };

    return (
        <a
            {...res}
            className={StringHelper.objToString(className)}
            style={{
                ...res.style,
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
                styling={styling}
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
    href: '',
    icon: undefined,
    fontWeight: 400,
    color: undefined,
    noUnderline: false,
    onClick: undefined,
    styling: 'default'
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
    ]) as Validator<ComponentFontWeightTypography>,
    styling: PropTypes.oneOf<ComponentStylingTypography>([
        'heading-1',
        'heading-2',
        'heading-3',
        'heading-4',
        'heading-5',
        'heading-6',
        'default',
        'featured',
        'meta',
        'caption',
        'tiny'
    ]) as Validator<ComponentStylingTypography>
};

export default LinkComponent;
