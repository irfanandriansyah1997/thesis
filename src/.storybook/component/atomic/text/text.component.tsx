import React, { SFC } from 'react';
import PropTypes from 'prop-types';

import { TextComponentPropsInterface } from './interface/component.interface';

import './style/style.scss';

/**
 * Text Documentation Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.03.13
 */
const TextDocsComponent: SFC<TextComponentPropsInterface> = ({
    children
}: TextComponentPropsInterface) => <h1 className="ui-text">{children}</h1>;

TextDocsComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string
    ]).isRequired
};

export default TextDocsComponent;
