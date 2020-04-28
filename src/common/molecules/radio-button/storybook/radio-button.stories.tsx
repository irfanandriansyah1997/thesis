import React from 'react';

import SectionTypeCheckboxComponent from './section/section-type.stories';
import SectionDefaultDialogComponent from './section/section-default.stories';
import SectionPositionCheckboxComponent from './section/section-position.stories';
import DividerDocsComponent from '../../../../.storybook/component/atomic/divider/divider.component';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';

import '../style/style.scss';

const RadioButtonDocumentation = require('./markdown/radio-button.documentation.md');

((): void => {
    new StorybookDocumentationBuilder('Radio Button Component', 'molecules')
        .setSection('common')
        .setMarkdownFile(RadioButtonDocumentation)
        .setDescriptionComponent(
            'Radio Button is used to create a new multiple choice input and we can choose one option'
        )
        .registerDocumentation(
            <>
                <SectionDefaultDialogComponent />
                <DividerDocsComponent />
                <SectionPositionCheckboxComponent />
                <DividerDocsComponent />
                <SectionTypeCheckboxComponent />
            </>
        )
        .execute();
})();
