import React from 'react';

import SectionDefaultAutocompleteR123Component from './section/section-default.stories';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';

import '../style/style.scss';

((): void => {
    new StorybookDocumentationBuilder('Autocomplete R123', 'molecules')
        .setSection('desktop')
        .setDescriptionComponent(
            'Component that finishes what is being typed by comparing the current text with previously entered text'
        )
        .registerDocumentation(
            <>
                <SectionDefaultAutocompleteR123Component />
            </>
        )
        .execute();
})();
