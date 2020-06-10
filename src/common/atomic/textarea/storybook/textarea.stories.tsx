import React from 'react';

import TextAreaComponent from '../textarea.component';
import TextDocsComponent from '../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../.storybook/component/atomic/heading/heading.component';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';
import CodingViewerDocsComponent from '../../../../.storybook/component/molecules/code-viewer/code-viewer.component';

import '../style/style.scss';

const TextAreaDocumentation = require('./markdown/textarea.documentation.md');

/**
 * TextArea Component
 */
((): void => {
    new StorybookDocumentationBuilder('TextArea Component', 'atomic')
        .setSection('common')
        .setDescriptionComponent(
            'TextArea component is used to create interactive controls for forms in order to accept data from the user, this component can be displayed in several ways, depending on the type attribute'
        )
        .setMarkdownFile(TextAreaDocumentation)
        .registerDocumentation(
            <>
                <HeadingDocsComponent>Usage</HeadingDocsComponent>
                <TextDocsComponent>
                    The usage of this particular component is as follow :
                </TextDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={`${'<TextAreaComponent className="textarea-class" id="textarea" name="textarea"/>'}`}
                >
                    <TextDocsComponent>
                        TextArea default / primary styling
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
                        />
                    </div>
                </CodingViewerDocsComponent>

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

                <CodingViewerDocsComponent
                    sourceCode={`${'<TextAreaComponent name="textarea" styling="primary" disabled/>'}`}
                >
                    <TextDocsComponent>
                        Example of disabled TextArea component
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
        )
        .execute();
})();
