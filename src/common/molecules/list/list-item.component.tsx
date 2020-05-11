import { SFC } from 'react';
import PropTypes from 'prop-types';

import { ListItemPropsInterface } from './interface/component.interface';

/**
 * List Item Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.10
 */
const ListItemComponent: SFC<ListItemPropsInterface> = () => null;

ListItemComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default ListItemComponent;
