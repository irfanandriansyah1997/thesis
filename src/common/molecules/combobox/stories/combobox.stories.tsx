import React from 'react';

import SectionDefaultComboboxComponent from './section/section-default.stories';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';

import '../style/style.scss';

((): void => {
    new StorybookDocumentationBuilder('Combobox Component', 'molecules')
        .setSection('common')
        .setDescriptionComponent(
            'Combobox is used to create a new multiple choice input and we can choose one from this option'
        )
        .registerDocumentation(
            <>
                <SectionDefaultComboboxComponent />
            </>
        )
        .execute();
})();
