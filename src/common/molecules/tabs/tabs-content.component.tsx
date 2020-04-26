import React, { SFC } from 'react';
import PropTypes from 'prop-types';

import { TabContentPropsInterface } from './interface/component.interface';
import StringHelper from '../../../shared/helper/string.helper';
import ValidatorHelper from '../../../shared/helper/validator.helper';

/**
 * Tabs Content Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @description Item for each tab
 * @since 2020.04.26
 */
const TabsContentComponent: SFC<TabContentPropsInterface> = ({
    className,
    ...props
}: TabContentPropsInterface) => (
    <div
        className={StringHelper.objToString({
            [`${className}`]: ValidatorHelper.verifiedIsNotEmpty(className),
            'ui-molecules-tabs__content': true
        })}
        {...props}
    />
);

TabsContentComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default TabsContentComponent;
