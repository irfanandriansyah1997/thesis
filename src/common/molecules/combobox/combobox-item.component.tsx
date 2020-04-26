import { SFC } from 'react';
import PropTypes from 'prop-types';

import { ComboboxItemPropsInterface } from './interface/combobox.interface';

/**
 * Combobox Item Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.04.26
 */
const ComboboxItemComponent: SFC<ComboboxItemPropsInterface> = () => null;

ComboboxItemComponent.propTypes = {
    subOption: PropTypes.bool,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

ComboboxItemComponent.defaultProps = {
    subOption: false
};

export default ComboboxItemComponent;
