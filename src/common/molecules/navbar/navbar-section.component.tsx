import PropTypes from 'prop-types';
import React, { SFC } from 'react';

import StringHelper from '../../../shared/helper/string.helper';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import { NavbarSectionPropsInterface } from './interface/component.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';

/**
 * Navbar Section Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.13
 */
const NavbarSectionComponent: SFC<NavbarSectionPropsInterface> = ({
    children,
    ...res
}) => {
    const className: ComponentClassnameDefaultInterface = {
        [`${res.className}`]: ValidatorHelper.verifiedIsNotEmpty(res.className),
        'ui-molecules-navbar__section': true,
        flex: true,
        relative: true,
        'flex-row': true,
        'flex-align-center': true
    };

    return (
        <div className={StringHelper.objToString(className)}>{children}</div>
    );
};

NavbarSectionComponent.displayName = 'NavbarSectionComponent';

NavbarSectionComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string
    ]).isRequired,
    className: PropTypes.string
};

NavbarSectionComponent.defaultProps = {
    className: undefined
};

export default NavbarSectionComponent;
