import React, { SFC, CSSProperties, Validator } from 'react';
import PropTypes from 'prop-types';

import IconComponent from '../icon/icon.component';
import ColorHelper from '../../../shared/helper/color.helper';
import StringHelper from '../../../shared/helper/string.helper';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import { BadgesPropsInterface } from './interface/component.interface';
import ColorDefaultConstant from '../../../shared/constant/color.constant';
import { ColorType } from '../../../shared/interface/common/color.interface';
import { ComponentDefaultSize } from '../../../shared/interface/component/component-size.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';

/**
 * Badges Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.03
 */
const BadgesComponent: SFC<BadgesPropsInterface> = ({
    size,
    color,
    rounded,
    children,
    textColor,
    className,
    transparent,
    onCloseBadges,
    ...res
}: BadgesPropsInterface) => {
    const colorComponent = ColorHelper.generateColorComponent(
        color || 'heading',
        ValidatorHelper.verifiedIsNotFalse(transparent)
            ? (transparent as number | boolean)
            : false,
        'heading'
    );

    const style: CSSProperties = {
        borderRadius: rounded ? '20px' : 0,
        backgroundColor: colorComponent.background.hexColor,
        color:
            textColor &&
            ValidatorHelper.verifiedKeyIsExist(ColorDefaultConstant, textColor)
                ? ColorDefaultConstant[textColor]
                : colorComponent.text.hexColor
    };

    const name: ComponentClassnameDefaultInterface = {
        [`${className}`]: ValidatorHelper.verifiedIsNotEmpty(className),
        flex: true,
        relative: true,
        'ui-atomic-badges': true,
        'ui-atomic-badges--with-close': ValidatorHelper.verifiedIsNotEmpty(
            onCloseBadges
        ),
        [`ui-atomic-badges--size-${size}`]: ValidatorHelper.verifiedIsNotEmpty(
            size
        )
    };

    return (
        <div className={StringHelper.objToString(name)} style={style} {...res}>
            <div className="ui-atomic-badges__children relative">
                {children}
            </div>
            {onCloseBadges ? (
                <IconComponent
                    size={14}
                    onClick={onCloseBadges}
                    className="ui-atomic-badges__close absolute"
                    color={colorComponent.text.color}
                >
                    close
                </IconComponent>
            ) : null}
        </div>
    );
};

BadgesComponent.propTypes = {
    color: PropTypes.oneOf(Object.keys(ColorDefaultConstant)) as Validator<
        ColorType
    >,
    rounded: PropTypes.bool,
    transparent: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    onCloseBadges: PropTypes.func,
    size: PropTypes.oneOf<ComponentDefaultSize>(['big', 'default', 'small'])
};

BadgesComponent.defaultProps = {
    rounded: true,
    size: 'default',
    color: undefined,
    transparent: false,
    onCloseBadges: undefined
};

export default BadgesComponent;
