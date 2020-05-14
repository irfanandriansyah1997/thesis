import PropTypes from 'prop-types';
import React, { SFC, Validator } from 'react';

import StringHelper from '../../../shared/helper/string.helper';
import TextComponent from '../../../common/atomic/text/text.component';
import AvatarComponent from '../../../common/atomic/avatar/avatar.component';
import { NavbarR123LanguageChooserPropsInterface } from './interface/component.interface';

/**
 * Navbar R123 Language Chooser Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.14
 */
const NavbarR123LanguageChooserComponent: SFC<NavbarR123LanguageChooserPropsInterface> = ({
    languange,
    onChangeLanguange
}) => (
    <div className="ui-organism-navbar-r123__language-chooser flex flex-align-center">
        <AvatarComponent
            alt=""
            size={20}
            src="https://public.urbanindo.com/style-guide/r123-globe.svg"
        />
        <>
            {languange.option.map((item) => (
                <TextComponent
                    tag="p"
                    fontWeight={500}
                    styling="default"
                    key={`languange-${item}`}
                    className={StringHelper.objToString({
                        'ui-organism-navbar-r123__language-item': true,
                        'ui-organism-navbar-r123__language-item--active':
                            item === languange.active
                    })}
                    onClick={(): void => onChangeLanguange(item)}
                >
                    {item}
                </TextComponent>
            ))}
        </>
    </div>
);

NavbarR123LanguageChooserComponent.propTypes = {
    languange: PropTypes.shape({
        option: PropTypes.arrayOf(PropTypes.string),
        activ: PropTypes.string
    }).isRequired as Validator<{ active: string; option: string[] }>,
    onChangeLanguange: PropTypes.func.isRequired
};

NavbarR123LanguageChooserComponent.defaultProps = {
    languange: {
        active: 'Id',
        option: ['Id', 'En']
    }
};

export default NavbarR123LanguageChooserComponent;
