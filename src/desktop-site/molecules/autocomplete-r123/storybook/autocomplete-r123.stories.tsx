import React from 'react';

import SectionDefaultAutocompleteR123Component from './section/section-default.stories';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';

import '../style/style.scss';

((): void => {
    new StorybookDocumentationBuilder('Autocomplete R123', 'molecules')
        .setSection('desktop')
        .setDescriptionComponent(
            'Multiple selection component to select multiple value from options.'
        )
        .registerDocumentation(
            <>
                <SectionDefaultAutocompleteR123Component />
            </>
        )
        .execute();
})();
