import { SFC } from 'react';
import PropTypes from 'prop-types';

import { ComboboxSplitItemPropsInterface } from './interface/component.interface';

/**
 * ComboboxSplit Item Component
 * @description
 */
const ComboboxSplitItemComponent: SFC<ComboboxSplitItemPropsInterface> = () =>
    null;

ComboboxSplitItemComponent.propTypes = {
    subOption: PropTypes.bool,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

ComboboxSplitItemComponent.defaultProps = {
    subOption: false
};

export default ComboboxSplitItemComponent;
