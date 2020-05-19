import React, { SFC } from 'react';

import { DropdownDividerPropInterface } from './interface/component.interface';

/**
 * Dropdown Divider Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.04.27
 */
const DropdownDividerComponent: SFC<DropdownDividerPropInterface> = () => (
    <hr className="ui-molecules-dropdown__divider" />
);

DropdownDividerComponent.displayName = 'DropdownDividerComponent';

export default DropdownDividerComponent;
