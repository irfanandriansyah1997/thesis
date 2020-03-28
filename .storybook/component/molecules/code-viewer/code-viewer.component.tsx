import React, { SFC } from 'react';
import PropTypes from 'prop-types';
import Highlight from 'react-highlight';

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
    /**
     * Copy To Clip Board
     * @return {void}
     */
    const copyToClipboard: () => void = () => {
        const el: HTMLTextAreaElement = document.createElement('textarea');

        el.value = sourceCode;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        el.style.display = 'none';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    };

    return (
        <div className="ui-default__code">
            <div className="ui-default__code__result">{children}</div>
            <div className="ui-default__code__source-code">
                <div className="ui-default__code__source-code__bar">
                    <p>Source Code</p>
                    <button
                        type="button"
                        onClick={copyToClipboard}
                        className="ui-default__code__copy"
                    >
                        <i className="material-icons">file_copy</i>
                        &nbsp;Copy
                    </button>
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
