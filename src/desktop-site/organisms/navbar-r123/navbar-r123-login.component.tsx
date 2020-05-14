import PropTypes from 'prop-types';
import React, { SFC } from 'react';

import StringHelper from '../../../shared/helper/string.helper';
import TextComponent from '../../../common/atomic/text/text.component';
import AvatarComponent from '../../../common/atomic/avatar/avatar.component';
import { NavbarR123LoginButtonPropsInterface } from './interface/component.interface';

/**
 * Navbar R123 Login Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.14
 */
const NavbarR123LoginrComponent: SFC<NavbarR123LoginButtonPropsInterface> = ({
    onClickLoginButton
}) => (
    <div
        className={StringHelper.objToString({
            'ui-organism-navbar-r123__login flex-align-center': true,
            flex: true,
            'flex-align-center': true
        })}
    >
        <AvatarComponent
            alt=""
            size={20}
            src="https://public.urbanindo.com/style-guide/r123-group.svg"
        />
        <TextComponent
            tag="p"
            fontWeight={500}
            styling="default"
            onClick={(): void => onClickLoginButton()}
        >
            Akun
        </TextComponent>
    </div>
);

NavbarR123LoginrComponent.propTypes = {
    onClickLoginButton: PropTypes.func.isRequired
};

export default NavbarR123LoginrComponent;
