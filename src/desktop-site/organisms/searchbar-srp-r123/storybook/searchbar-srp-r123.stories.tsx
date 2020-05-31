import React from 'react';

import SectionDefaultAutocompleteR123Component from './section/section-default.stories';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';

import '../style/style.scss';

((): void => {
    new StorybookDocumentationBuilder('Searchbar SRP R123', 'organism')
        .setSection('desktop')
        .setDescriptionComponent('Search bar compnent in search page rumah123')
        .registerDocumentation(
            <>
                <SectionDefaultAutocompleteR123Component />
            </>
        )
        .execute();
})();
