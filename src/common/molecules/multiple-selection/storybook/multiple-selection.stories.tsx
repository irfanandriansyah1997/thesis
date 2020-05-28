import React from 'react';

import SectionDefaultMultipleSelectionComponent from './section/section-default.stories';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';

import '../style/style.scss';

((): void => {
    new StorybookDocumentationBuilder('Multiple Selection', 'molecules')
        .setSection('common')
        .setDescriptionComponent('Multiple Selection')
        .registerDocumentation(
            <>
                <SectionDefaultMultipleSelectionComponent />
            </>
        )
        .execute();
})();
