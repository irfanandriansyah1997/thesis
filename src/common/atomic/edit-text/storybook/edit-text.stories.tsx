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
                    <div>
                        <EditTextComponent
                            className="edit-text-class"
                            id="edit-text"
                            name="edit-text"
                        />
                    </div>
                </CodingViewerDocsComponent>
            </>
        )
        .execute();
})();
