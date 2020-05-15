/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types';
import React, { SFC, Validator } from 'react';

import StringHelper from '../../../shared/helper/string.helper';
import LinkComponent from '../../../common/atomic/link/link.component';
import TextComponent from '../../../common/atomic/text/text.component';
import ListComponent from '../../../common/molecules/list/list.component';
import {
    NavbarR123DropdownItemType,
    NavbarR123MegaMenuPropsInterface
} from './interface/component.interface';

/**
 * Navbar R123 Mega Menu Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.14
 */
const NavbarR123MegaMenuComponent: SFC<NavbarR123MegaMenuPropsInterface> = ({
    heading,
    item
}) => {
    return (
        <div className="ui-organism-navbar-r123__mega-menu">
            <TextComponent
                tag="p"
                color="heading"
                fontWeight={500}
                styling="default"
                className="ui-organism-navbar-r123__mega-menu__heading"
            >
                {heading}
            </TextComponent>
            <div
                className={StringHelper.objToString({
                    'ui-organism-navbar-r123__mega-menu__content': true,
                    flex: true,
                    'flex-align-start': true
                })}
            >
                {item.map((dropdownItem, index) => {
                    return (
                        <ListComponent
                            key={`navbar-r123-menu-${index}`}
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
                })}
            </div>
        </div>
    );
};

NavbarR123MegaMenuComponent.propTypes = {
    heading: PropTypes.string.isRequired,
    item: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.shape({
                to: PropTypes.string,
                text: PropTypes.string
            })
        )
    ).isRequired as Validator<NavbarR123DropdownItemType[][]>
};

NavbarR123MegaMenuComponent.defaultProps = {
    item: []
};

export default NavbarR123MegaMenuComponent;
