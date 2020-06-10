/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ReactNode, ChangeEvent } from 'react';

import TextAreaComponent from '../../textarea.component';
import TextDocsComponent from '../../../../../.storybook/component/atomic/text/text.component';
import CodingViewerDocsComponent from '../../../../../.storybook/component/molecules/code-viewer/code-viewer.component';

/**
 * Section onChange TextAreaComponent
 */
class SectionOnChangeTextAreaComponent extends React.PureComponent<
    {},
    Record<string, unknown>
> {
    constructor(props: {}) {
        super(props);
        this.state = {
            textAreaValue: ''
        };
    }

    render(): ReactNode {
        const { textAreaValue } = this.state;

        return (
            <>
                <TextDocsComponent>
                    Example of TextArea component onChange behavior
                </TextDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={`${'<TextAreaComponent name="textarea" styling="primary" />'}`}
                >
                    <TextDocsComponent>
                        TextArea onChange state
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
                            value={(textAreaValue as unknown) as string}
                            onChange={(
                                event: ChangeEvent<HTMLTextAreaElement>
                            ): void => {
                                this.setState(
                                    { textAreaValue: event.target.value },
                                    (): void => console.debug(this.state)
                                );
                            }}
                        />
                    </div>
                </CodingViewerDocsComponent>
            </>
        );
    }
}

export default SectionOnChangeTextAreaComponent;
