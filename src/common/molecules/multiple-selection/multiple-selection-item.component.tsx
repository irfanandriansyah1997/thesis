import PropTypes from 'prop-types';
import { FunctionComponent } from 'react';

import { MultipleSelectionItemPropsInterface } from './interface/component.interface';

/**
 * Multiple Selesction Item
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.27
 */
const MultipleSelectionItemComponent: FunctionComponent<MultipleSelectionItemPropsInterface> = () =>
    null;

MultipleSelectionItemComponent.displayName = 'MultipleSelectionItemComponent';

MultipleSelectionItemComponent.propTypes = {
    key: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string
    ]).isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
};

export default MultipleSelectionItemComponent;
