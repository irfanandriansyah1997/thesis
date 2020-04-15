import React from 'react';

import SectionDefaultDialogComponent from './section/section-default.stories';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';

import '../style/style.scss';

((): void => {
    new StorybookDocumentationBuilder('Checkbox Component', 'molecules')
        .setSection('common')
        .setDescriptionComponent(
            'Checkbox is used to create a new multiple choice input and we can multiple selection this option'
        )
        .registerDocumentation(
            <>
                <SectionDefaultDialogComponent />
            </>
        )
        .execute();
})();
