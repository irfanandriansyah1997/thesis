import PropTypes from 'prop-types';
import React, { SFC, Validator } from 'react';

import StringHelper from '../../../shared/helper/string.helper';
import NavbarR123LoginComponent from './navbar-r123-login.component';
import ImageComponent from '../../../common/atomic/image/image.component';
import NavbarR123DropdownComponent from './navbar-r123-dropdown.component';
import NavbarR123MegaMenuComponent from './navbar-r123-mega-menu.component';
import NavbarComponent from '../../../common/molecules/navbar/navbar.component';
import NavbarR123LanguageChooserComponent from './navbar-r123-language.component';
import {
    NavbarR123PropsInterface,
    NavbarR123DropdownInterface,
    NavbarR123MenuItemInterface
} from './interface/component.interface';
import './style/style.scss';

/**
 * Navbar R123 Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.14
 */
const NavbarR123Component: SFC<NavbarR123PropsInterface> = ({
    menu,
    showLogo,
    language,
    onChangeLanguage,
    onClickLoginButton
}) => {
    return (
        <div
            className={StringHelper.objToString({
                'ui-organism-navbar-r123': true,
                flex: true,
                'flex-column': true,
                'flex-align-start': true
            })}
        >
            {showLogo ? (
                <ImageComponent
                    alt="logo"
                    width={220}
                    className="ui-organism-navbar-r123__logo"
                    src="https://public.urbanindo.com/style-guide/r123-logo.svg"
                />
            ) : null}
            <NavbarComponent position="relative" backgroundColor="primary">
                <NavbarComponent.Menu position="left" id="rumah-123-menu">
                    {menu.map(
                        ({
                            to,
                            text,
                            type,
                            active,
                            dropdownItem,
                            megamenuItem
                        }: NavbarR123DropdownInterface) => {
                            if (type === 'link') {
                                return (
                                    <NavbarComponent.Item
                                        to={to}
                                        text={text}
                                        color="white"
                                        active={active}
                                        fontWeight={500}
                                        key={`${type}-${text}-${to}`}
                                    />
                                );
                            }

                            return (
                                <NavbarComponent.MegaMenu
                                    to={to}
                                    text={text}
                                    color="white"
                                    active={active}
                                    fontWeight={500}
                                    key={`${type}-${text}-${to}`}
                                >
                                    {dropdownItem ? (
                                        <NavbarR123DropdownComponent
                                            dropdownItem={dropdownItem}
                                        />
                                    ) : null}
                                    {megamenuItem ? (
                                        <NavbarR123MegaMenuComponent
                                            {...megamenuItem}
                                        />
                                    ) : null}
                                </NavbarComponent.MegaMenu>
                            );
                        }
                    )}
                </NavbarComponent.Menu>
                <NavbarComponent.Menu
                    position="right"
                    id="rumah-123-side-widget"
                >
                    <NavbarComponent.Section>
                        <NavbarR123LanguageChooserComponent
                            language={language}
                            onChangeLanguage={onChangeLanguage}
                        />
                        <NavbarComponent.Divider color="white" />
                        <NavbarR123LoginComponent
                            onClickLoginButton={onClickLoginButton}
                        />
                    </NavbarComponent.Section>
                </NavbarComponent.Menu>
            </NavbarComponent>
        </div>
    );
};

NavbarR123Component.propTypes = {
    menu: PropTypes.arrayOf(PropTypes.shape({})).isRequired as Validator<
        (NavbarR123MenuItemInterface | NavbarR123DropdownInterface)[]
    >,
    showLogo: PropTypes.bool,
    language: PropTypes.shape({
        active: PropTypes.string,
        option: PropTypes.arrayOf(PropTypes.string)
    }) as Validator<{ active: string; option: string[] }>,
    onChangeLanguage: PropTypes.func.isRequired,
    onClickLoginButton: PropTypes.func.isRequired
};

NavbarR123Component.defaultProps = {
    menu: [],
    showLogo: false,
    language: {
        active: 'Id',
        option: ['Id', 'En']
    }
};

export default NavbarR123Component;
