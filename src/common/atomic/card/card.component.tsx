import React, { SFC } from 'react';
import PropTypes from 'prop-types';

import { CardPropsInterface } from './interface/component.interface';
import ShadowDefaultConstant from '../../../shared/constant/shadow.constant';
import StringHelper from '../../../shared/helper/string.helper';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';

/**
 * Default Card Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.04.2
 */
const CardComponent: SFC<CardPropsInterface> = ({
    className,
    boxShadow,
    children,
    size,
    ...res
}: CardPropsInterface) => {
    const name: ComponentClassnameDefaultInterface = {
        [`ui-atomic-card`]: true,
        [`box-shadow-${boxShadow}`]: ValidatorHelper.verifiedKeyIsExist(
            ShadowDefaultConstant,
            boxShadow
        ),
        [`${className}`]: ValidatorHelper.verifiedIsNotEmpty(className)
    };

    return (
        <div
            className={StringHelper.objToString(name)}
            style={{
                width: ValidatorHelper.isNumber(size) ? `${size}px` : 'auto',
                ...res.style
            }}
        >
            {children}
        </div>
    );
};

CardComponent.defaultProps = {
    className: '',
    size: 'auto'
};

CardComponent.propTypes = {
    className: PropTypes.string,
    size: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf<'auto'>(['auto'])
    ])
};

export default CardComponent;
