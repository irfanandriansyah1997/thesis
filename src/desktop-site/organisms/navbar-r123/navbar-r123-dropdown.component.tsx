import PropTypes from 'prop-types';
import React, { SFC, Validator } from 'react';

import LinkComponent from '../../../common/atomic/link/link.component';
import ListComponent from '../../../common/molecules/list/list.component';
import {
    NavbarR123DropdownItemType,
    NavbarR123DropdownPropsInterface
} from './interface/component.interface';

/**
 * Navbar R123 Dropdown Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.14
 */
const NavbarR123DropdownComponent: SFC<NavbarR123DropdownPropsInterface> = ({
    dropdownItem
}) => {
    return (
        <ListComponent
            styling="vertical"
            className="ui-organism-navbar-r123__dropdown"
            space={0}
        >
            {dropdownItem.map(({ text, to }) => {
                return (
                    <ListComponent.Item key={`${text}-${to}`}>
                        <LinkComponent
                            href={to}
                            noUnderline
                            className="ui-organism-navbar-r123__item block"
                        >
                            {text}
                        </LinkComponent>
                    </ListComponent.Item>
                );
            })}
        </ListComponent>
    );
};

NavbarR123DropdownComponent.propTypes = {
    dropdownItem: PropTypes.arrayOf(
        PropTypes.shape({
            to: PropTypes.string,
            text: PropTypes.string
        })
    ).isRequired as Validator<NavbarR123DropdownItemType[]>
};

NavbarR123DropdownComponent.defaultProps = {
    dropdownItem: []
};

export default NavbarR123DropdownComponent;
