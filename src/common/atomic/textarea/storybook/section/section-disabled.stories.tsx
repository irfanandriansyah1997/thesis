/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ReactNode } from 'react';

import TextAreaComponent from '../../textarea.component';
import TextDocsComponent from '../../../../../.storybook/component/atomic/text/text.component';
import CodingViewerDocsComponent from '../../../../../.storybook/component/molecules/code-viewer/code-viewer.component';

/**
 * Section Disabled TextAreaComponent
 */
class SectionDisabledTextAreaComponent extends React.PureComponent<
    {},
    Record<string, unknown>
> {
    render(): ReactNode {
        return (
            <>
                <TextDocsComponent>
                    Example of TextArea component disabled behavior
                </TextDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={`${'<TextAreaComponent name="textarea" styling="primary" disabled/>'}`}
                >
                    <TextDocsComponent>
                        TextArea disabled state
                    </TextDocsComponent>
                    <div
                        style={{
                            width: '300px'
                        }}
                    >
                        <TextAreaComponent
                            className="textarea-class"
                            id="textarea"
                            name="textarea"
                            styling="primary"
                            disabled
                        />
                    </div>
                </CodingViewerDocsComponent>
            </>
        );
    }
}

export default SectionDisabledTextAreaComponent;
