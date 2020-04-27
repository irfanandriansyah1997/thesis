import React, { SFC, Validator } from 'react';
import PropTypes from 'prop-types';

import { CardPropsInterface } from './interface/component.interface';
import ShadowDefaultConstant from '../../../shared/constant/shadow.constant';
import { ShadowType } from '../../../shared/interface/common/shadow.interface';
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
    size
}: CardPropsInterface) => {
    const name: ComponentClassnameDefaultInterface = {
        [`ui-atomic-card`]: true,
        [`ui-atomic-card--box-shadow`]: ValidatorHelper.verifiedKeyIsExist(
            ShadowDefaultConstant,
            boxShadow
        ),
        [`${className}`]: ValidatorHelper.verifiedIsNotEmpty(className)
    };

    return (
        <div
            className={StringHelper.objToString(name)}
            style={{
                width: ValidatorHelper.isNumber(size)
                    ? `${size}px`
                    : `${360}px`,
                boxShadow: ValidatorHelper.verifiedKeyIsExist(
                    ShadowDefaultConstant,
                    boxShadow
                )
                    ? ShadowDefaultConstant[boxShadow as ShadowType]
                    : undefined
            }}
        >
            {children}
        </div>
    );
};

CardComponent.defaultProps = {
    className: '',
    boxShadow: undefined
};

CardComponent.propTypes = {
    className: PropTypes.string,
    boxShadow: PropTypes.oneOf(Object.keys(ShadowDefaultConstant)) as Validator<
        ShadowType
    >
};

export default CardComponent;
