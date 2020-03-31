import React, { SFC } from 'react';

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
}: AvatarPropsInterface) => {
    return (
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
};

export default AvatarComponent;
