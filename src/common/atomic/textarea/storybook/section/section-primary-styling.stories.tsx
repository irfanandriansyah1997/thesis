/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ReactNode } from 'react';

import TextAreaComponent from '../../textarea.component';
import TextDocsComponent from '../../../../../.storybook/component/atomic/text/text.component';
import CodingViewerDocsComponent from '../../../../../.storybook/component/molecules/code-viewer/code-viewer.component';

/**
 * Section Primary Styling TextAreaComponent
 */
class SectionPrimaryStylingTextAreaComponent extends React.PureComponent<
    {},
    Record<string, unknown>
> {
    render(): ReactNode {
        return (
            <>
                <TextDocsComponent>
                    Example of TextArea component primary styling behavior
                </TextDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={`${'<TextAreaComponent className="textarea-class" id="textarea" name="textarea" styling="primary"/>'}`}
                >
                    <TextDocsComponent>
                        TextArea primary styling
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
                        />
                    </div>
                </CodingViewerDocsComponent>
            </>
        );
    }
}

export default SectionPrimaryStylingTextAreaComponent;
