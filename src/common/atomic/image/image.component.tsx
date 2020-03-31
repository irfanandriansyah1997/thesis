import React, { SFC, CSSProperties } from 'react';

import ValidatorHelper from '../../../shared/helper/validator.helper';
import ComponentHelper from '../../../shared/helper/component.helper';
import { ComponentImageDefaultPropsInterface } from '../../../shared/interface/component/component-image.inteface';
import StringHelper from '../../../shared/helper/string.helper';

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
        objectFit,
        overflow: overflow || 'initial',
        width: ComponentHelper.registerAttributeStyle(width),
        height: ComponentHelper.registerAttributeStyle(height)
    };

    return (
        <img
            alt={alt}
            style={style}
            className={StringHelper.objToString({
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

export default ImageComponent;
