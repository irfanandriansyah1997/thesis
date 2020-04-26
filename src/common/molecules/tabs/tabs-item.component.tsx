import { SFC } from 'react';
import PropTypes from 'prop-types';

import { TabPanePropsInterface } from './interface/component.interface';

/**
 * Tabs Item Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @description Item for each tab
 * @since 2020.04.26
 */
const TabsItemComponent: SFC<TabPanePropsInterface> = () => null;

TabsItemComponent.propTypes = {
    tab: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default TabsItemComponent;
