import React from 'react';

import EditTextComponent from '../edit-text.component';
import TextDocsComponent from '../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../.storybook/component/atomic/heading/heading.component';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';
import CodingViewerDocsComponent from '../../../../.storybook/component/molecules/code-viewer/code-viewer.component';

import '../style/style.scss';

const EditTextDocumentation = require('./markdown/edit-text.documentation.md');

/**
 * Edit Text Component
 * @author Cathrine <cathrine@99.co>
 * @since 2020.05.20
 */
((): void => {
    new StorybookDocumentationBuilder('Edit Text Component', 'atomic')
        .setSection('common')
        .setDescriptionComponent(
            'Edit text component is used to create interactive controls for forms in order to accept data from the user, this component can be displayed in several ways, depending on the type attribute'
        )
        .setMarkdownFile(EditTextDocumentation)
        .registerDocumentation(
            <>
                <HeadingDocsComponent>Usage</HeadingDocsComponent>
                <TextDocsComponent>
                    The usage of this particular component is as follow :
                </TextDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={`${'<EditTextComponent className="edit-text-class" id="edit-text" name="edit-text"/>'}`}
                >
                    <TextDocsComponent>
                        Edit Text default / primary styling
                    </TextDocsComponent>
                    <div
                        style={{
                            width: '300px'
                        }}
                    >
                        <EditTextComponent
                            className="edit-text-class"
                            id="edit-text"
                            name="edit-text"
                        />
                    </div>
                </CodingViewerDocsComponent>

                <CodingViewerDocsComponent
                    sourceCode={`${'<EditTextComponent className="edit-text-class" id="edit-text" name="edit-text" styling="secondary"/>'}`}
                >
                    <TextDocsComponent>
                        Edit Text secondary styling
                    </TextDocsComponent>
                    <div
                        style={{
                            width: '300px'
                        }}
                    >
                        <EditTextComponent
                            className="edit-text-class"
                            id="edit-text"
                            name="edit-text"
                            styling="secondary"
                        />
                    </div>
                </CodingViewerDocsComponent>

                <CodingViewerDocsComponent
                    sourceCode={`${`<EditTextComponent.Addon name="test">\n` +
                        `   Rp\n` +
                        `</EditTextComponent.Addon>\n` +
                        `<EditTextComponent.Addon\n` +
                        `       name="test"\n` +
                        `       position="right"\n` +
                        `       className="test"\n` +
                        `>\n` +
                        `   %\n` +
                        `</EditTextComponent.Addon>`}`}
                >
                    <TextDocsComponent>
                        Two type alignment of edit text with add on
                    </TextDocsComponent>
                    <div
                        style={{
                            display: 'flex'
                        }}
                    >
                        <div
                            style={{
                                width: '300px'
                            }}
                        >
                            <EditTextComponent.Addon name="test">
                                Rp
                            </EditTextComponent.Addon>
                        </div>

                        <div
                            style={{
                                width: '300px'
                            }}
                        >
                            <EditTextComponent.Addon
                                name="test"
                                position="right"
                                className="test"
                            >
                                %
                            </EditTextComponent.Addon>
                        </div>
                    </div>
                </CodingViewerDocsComponent>

                <CodingViewerDocsComponent
                    sourceCode={`${'<EditTextComponent name="edit-text" styling="primary" disabled/>'}`}
                >
                    <TextDocsComponent>
                        Example of disabled edit text component
                    </TextDocsComponent>
                    <div
                        style={{
                            width: '300px'
                        }}
                    >
                        <EditTextComponent
                            className="edit-text-class"
                            id="edit-text"
                            name="edit-text"
                            styling="primary"
                            disabled
                        />
                    </div>
                </CodingViewerDocsComponent>
            </>
        )
        .execute();
})();
