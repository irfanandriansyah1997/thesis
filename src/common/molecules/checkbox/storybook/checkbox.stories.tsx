import React from 'react';

import SectionTypeCheckboxComponent from './section/section-type.stories';
import SectionDefaultDialogComponent from './section/section-default.stories';
import SectionPositionCheckboxComponent from './section/section-position.stories';
import DividerDocsComponent from '../../../../.storybook/component/atomic/divider/divider.component';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';

import '../style/style.scss';

const CheckboxDocumentation = require('./markdown/checkbox.documentation.md');

((): void => {
    new StorybookDocumentationBuilder('Checkbox Component', 'molecules')
        .setSection('common')
        .setMarkdownFile(CheckboxDocumentation)
        .setDescriptionComponent(
            'Checkbox is used to create a new multiple choice input and we can multiple selection this option'
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
