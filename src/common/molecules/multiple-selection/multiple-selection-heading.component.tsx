import PropTypes from 'prop-types';
import { FunctionComponent } from 'react';

import { MultipleSelectionHeadingPropsInterface } from './interface/component.interface';

/**
 * Multiple Selesction Heading
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.27
 */
const MultipleSelectionHeadingComponent: FunctionComponent<MultipleSelectionHeadingPropsInterface> = () =>
    null;

MultipleSelectionHeadingComponent.displayName =
    'MultipleSelectionHeadingComponent';

MultipleSelectionHeadingComponent.propTypes = {
    key: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string
    ]).isRequired
};

export default MultipleSelectionHeadingComponent;
