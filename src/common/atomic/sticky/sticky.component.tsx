import React, { SFC } from 'react';
import * as PropTypes from 'prop-types';

import StringHelper from '../../../shared/helper/string.helper';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import { StickyPropsInterface } from './interface/component.interface';

/**
 * Sticky Component
 * @author Cathrine <cathrine@99.co>
 * @since 2020.05.02
 */
const StickyComponent: SFC<StickyPropsInterface> = ({
    children,
    className,
    top,
    ...res
}: StickyPropsInterface) => {
    return (
        <div
            className={StringHelper.objToString({
                [`ui-atomic-sticky`]: true,
                [`${className}`]: ValidatorHelper.verifiedIsNotEmpty(className)
            })}
            style={{ top }}
            {...res}
        >
            {children}
        </div>
    );
};

StickyComponent.propTypes = {
    className: PropTypes.string,
    top: PropTypes.number
};

StickyComponent.defaultProps = {
    className: undefined,
    top: 0
};

export default StickyComponent;
