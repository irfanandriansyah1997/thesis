import React from 'react';

import SectionPrimaryStylingTextAreaComponent from './section/section-primary-styling.stories';
import SectionSecondaryStylingTextAreaComponent from './section/section-secondary-styling.stories';
import SectionDisabledTextAreaComponent from './section/section-disabled.stories';
import SectionOnChangeTextAreaComponent from './section/section-onchange.stories';

import TextDocsComponent from '../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../.storybook/component/atomic/heading/heading.component';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';

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

                <SectionPrimaryStylingTextAreaComponent />
                <SectionSecondaryStylingTextAreaComponent />
                <SectionDisabledTextAreaComponent />
                <SectionOnChangeTextAreaComponent />
            </>
        )
        .execute();
})();
