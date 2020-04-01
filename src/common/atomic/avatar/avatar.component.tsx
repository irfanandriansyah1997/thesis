import PropTypes from 'prop-types';
import React, { SFC, Validator } from 'react';

import { ObjectFitProperty } from 'csstype';
import ImageComponent from '../image/image.component';
import StringHelper from '../../../shared/helper/string.helper';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import { AvatarPropsInterface } from './interface/component.interface';

/**
 * Avatar Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.03.31
 */
const AvatarComponent: SFC<AvatarPropsInterface> = ({
    size,
    className,
    ...res
}: AvatarPropsInterface) => (
    <ImageComponent
        className={StringHelper.objToString({
            [`ui-atomic-avatar`]: true,
            [`${className}`]: ValidatorHelper.verifiedIsNotEmpty(className)
        })}
        width={size}
        height={size}
        overflow="hidden"
        {...res}
    />
);

AvatarComponent.propTypes = {
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    objectFit: PropTypes.oneOf([
        '-moz-initial',
        'inherit',
        'initial',
        'revert',
        'unset',
        'contain',
        'cover',
        'fill',
        'none',
        'scale-down'
    ]) as Validator<ObjectFitProperty> | undefined,
    type: PropTypes.oneOf([
        'circle',
        'square',
        'rounded',
        'rounded-bottom',
        'rounded-left',
        'rounded-top',
        'rounded-right'
    ])
};

AvatarComponent.defaultProps = {
    type: 'square',
    objectFit: 'initial'
};

export default AvatarComponent;
