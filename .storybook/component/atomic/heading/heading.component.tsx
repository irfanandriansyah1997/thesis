import React, { SFC } from 'react';
import PropTypes from 'prop-types';

import StringHelper from '../../../../src/shared/helper/string.helper';
import { HeadingComponentPropsInterface } from './interface/component.interface';
import { ComponentClassnameDefaultInterface } from '../../../../src/shared/interface/component/componen-default.interface';

import './style/style.scss';

/**
 * Heading Documentation Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.03.13
 */
const HeadingDocsComponent: SFC<HeadingComponentPropsInterface> = ({
    children,
    parent
}: HeadingComponentPropsInterface) => {
    const name: ComponentClassnameDefaultInterface = {
        'ui-heading': true,
        'ui-heading--parent': parent
    };

    return <h1 className={StringHelper.objToString(name)}>{children}</h1>;
};

HeadingDocsComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string
    ]).isRequired,
    parent: PropTypes.bool
};

HeadingDocsComponent.defaultProps = {
    parent: false
};

export default HeadingDocsComponent;
