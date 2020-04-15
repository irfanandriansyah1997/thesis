import React from 'react';

import SectionDefaultDialogComponent from './section/section-default.stories';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';

import '../style/style.scss';

const DialogDocumentation = require('./markdown/dialog.documentation.md');

((): void => {
    new StorybookDocumentationBuilder('Dialog Component', 'atomic')
        .setSection('common')
        .setDescriptionComponent(
            'Dialog is used to create a new floating layer over the current page to display information'
        )
        .setMarkdownFile(DialogDocumentation)
        .registerDocumentation(
            <SectionDefaultDialogComponent
                show={false}
                onCloseDialog={(): void => alert()}
            />
        )
        .execute();
})();
