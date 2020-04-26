/* eslint-disable react/no-array-index-key */

import React, { SFC } from 'react';
import PropTypes from 'prop-types';

import StringHelper from '../../../shared/helper/string.helper';
import { TabSelectorPropsInterface } from './interface/component.interface';

/**
 * Tabs Pane Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.26
 */
const TabsPaneComponent: SFC<TabSelectorPropsInterface> = ({
    item,
    tabsID,
    onClick,
    selectedID
}) => {
    return (
        <div className="ui-molecules-tab__bar flex">
            {item.map((children, index) => (
                <div
                    key={`tabs-${tabsID}-${index}`}
                    className={StringHelper.objToString({
                        'ui-molecules-tab__pane': true,
                        'ui-molecules-tab__pane--active': selectedID === index
                    })}
                    role="presentation"
                    onClick={(): void => onClick(index)}
                >
                    {children}
                </div>
            ))}
        </div>
    );
};

TabsPaneComponent.propTypes = {
    onClick: PropTypes.func.isRequired,
    tabsID: PropTypes.string.isRequired,
    selectedID: PropTypes.number.isRequired,
    item: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
            .isRequired
    ).isRequired
};

export default TabsPaneComponent;
