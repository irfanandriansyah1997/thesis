import React from 'react';

import SectionDefaultComboboxSplitComponent from './section/section-default.stories';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';

import '../style/style.scss';

((): void => {
    new StorybookDocumentationBuilder('ComboboxSplit Component', 'molecules')
        .setSection('common')
        .setDescriptionComponent(
            'ComboboxSplit is used to create a new multiple choice input and we can choose one from this option'
        )
        .registerDocumentation(
            <>
                <SectionDefaultComboboxSplitComponent />
            </>
        )
        .execute();
})();
