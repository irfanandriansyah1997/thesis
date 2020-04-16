import React from 'react';

import SectionDefaultDialogComponent from './section/section-default.stories';
import SectionCustomDialogComponent from './section/section-custom.stories';
import SectionSizeDialogComponent from './section/section-size.stories';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';
import DividerDocsComponent from '../../../../.storybook/component/atomic/divider/divider.component';

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
            <>
                <SectionDefaultDialogComponent
                    show={false}
                    onCloseDialog={(): void => alert()}
                />
                <DividerDocsComponent />
                <SectionCustomDialogComponent
                    show={false}
                    onCloseDialog={(): void => alert()}
                />
                <DividerDocsComponent />
                <SectionSizeDialogComponent
                    show={false}
                    onCloseDialog={(): void => alert()}
                />
            </>
        )
        .execute();
})();
