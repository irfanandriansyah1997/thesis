import React, { SFC } from 'react';
import PropTypes from 'prop-types';
import Highlight from 'react-highlight';
import CopyToClipboard from 'react-copy-to-clipboard';

import { CodingViewerComponentPropsInterface } from './interface/component.interface';

import './style/style.scss';

/**
 * Coding Viewer Documentation Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.03.13
 */
const CodingViewerDocsComponent: SFC<CodingViewerComponentPropsInterface> = ({
    children,
    sourceCode
}: CodingViewerComponentPropsInterface) => {
    return (
        <div className="ui-default__code">
            <div className="ui-default__code__result">{children}</div>
            <div className="ui-default__code__source-code">
                <div className="ui-default__code__source-code__bar">
                    <p>Source Code</p>
                    <CopyToClipboard text={sourceCode}>
                        <button
                            type="button"
                            className="ui-default__code__copy"
                        >
                            <i className="material-icons">file_copy</i>
                            &nbsp;Copy
                        </button>
                    </CopyToClipboard>
                </div>
                <Highlight className="hello">{sourceCode}</Highlight>
            </div>
        </div>
    );
};

CodingViewerDocsComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string
    ]).isRequired,
    sourceCode: PropTypes.string.isRequired
};

export default CodingViewerDocsComponent;
