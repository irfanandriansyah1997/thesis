/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ReactNode } from 'react';

import TextAreaComponent from '../../textarea.component';
import TextDocsComponent from '../../../../../.storybook/component/atomic/text/text.component';
import CodingViewerDocsComponent from '../../../../../.storybook/component/molecules/code-viewer/code-viewer.component';

/**
 * Section Secondary Styling TextAreaComponent
 */
class SectionSecondaryStylingTextAreaComponent extends React.PureComponent<
    {},
    Record<string, unknown>
> {
    render(): ReactNode {
        return (
            <>
                <TextDocsComponent>
                    Example of TextArea component secondary styling behavior
                </TextDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={`${'<TextAreaComponent className="textarea-class" id="textarea" name="textarea" styling="secondary"/>'}`}
                >
                    <TextDocsComponent>
                        TextArea secondary styling
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
                            styling="secondary"
                        />
                    </div>
                </CodingViewerDocsComponent>
            </>
        );
    }
}

export default SectionSecondaryStylingTextAreaComponent;
