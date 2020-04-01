import PropTypes from 'prop-types';
import { ObjectFitProperty } from 'csstype';
import React, { SFC, CSSProperties, Validator } from 'react';

import StringHelper from '../../../shared/helper/string.helper';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import ComponentHelper from '../../../shared/helper/component.helper';
import { ComponentImageDefaultPropsInterface } from '../../../shared/interface/component/component-image.inteface';

/**
 * Image Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.03.31
 */
const ImageComponent: SFC<ComponentImageDefaultPropsInterface> = ({
    alt,
    type,
    width,
    height,
    overflow,
    objectFit,
    className,
    ...res
}: ComponentImageDefaultPropsInterface) => {
    const style: CSSProperties = {
        overflow,
        objectFit,
        width: ComponentHelper.registerAttributeStyle(width),
        height: ComponentHelper.registerAttributeStyle(height)
    };

    return (
        <img
            alt={alt}
            style={style}
            className={StringHelper.objToString({
                relative: true,
                [`ui-atomic-image`]: true,
                [`ui-atomic-image--type-${type}`]: ValidatorHelper.verifiedIsNotEmpty(
                    type
                ),
                [`${className}`]: ValidatorHelper.verifiedIsNotEmpty(className)
            })}
            {...res}
        />
    );
};

ImageComponent.propTypes = {
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    overflow: PropTypes.oneOf([
        '-moz-initial',
        'inherit',
        'initial',
        'revert',
        'unset',
        'auto',
        'hidden',
        'scroll',
        'visible'
    ]),
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

ImageComponent.defaultProps = {
    type: 'square',
    width: undefined,
    height: undefined,
    overflow: 'initial',
    objectFit: 'initial'
};

export default ImageComponent;
