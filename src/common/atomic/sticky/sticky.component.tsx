import React, { SFC } from 'react';
import * as PropTypes from 'prop-types';

import StringHelper from '../../../shared/helper/string.helper';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import { StickyPropsInterface } from './interface/component.interface';
import { ComponentStickyDirection } from '../../../shared/interface/component/component-sticky.interface';

/**
 * Sticky Component
 * @author Cathrine <cathrine@99.co>
 * @since 2020.05.02
 */
const StickyComponent: SFC<StickyPropsInterface> = ({
    direction,
    children,
    className,
    ...res
}: StickyPropsInterface) => {
    return (
        <div
            className={StringHelper.objToString({
                [`ui-atomic-sticky`]: true,
                [`ui-atomic-sticky--direction-${direction}`]: true,
                [`${className}`]: ValidatorHelper.verifiedIsNotEmpty(className)
            })}
            {...res}
        >
            {children}
        </div>
    );
};

StickyComponent.propTypes = {
    direction: PropTypes.oneOf<ComponentStickyDirection>([
        'topRight',
        'topLeft',
        'bottomRight',
        'bottomLeft'
    ]).isRequired,
    className: PropTypes.string
};

StickyComponent.defaultProps = {
    className: undefined
};

export default StickyComponent;
