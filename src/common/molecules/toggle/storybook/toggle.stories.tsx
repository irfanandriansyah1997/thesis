import React from 'react';

import SectionCustomToggleComponent from './section/section.custom.stories';
import SectionDefaultToggleComponent from './section/section.default.stories';
import DividerDocsComponent from '../../../../.storybook/component/atomic/divider/divider.component';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';

import '../style/style.scss';

((): void => {
    new StorybookDocumentationBuilder('Togggle Component', 'molecules')
        .setSection('common')
        .setDescriptionComponent(
            'Toggle Component is a content area which can be collapsed and expanded, used to group or hide complex regions to keep the page clean.'
        )
        .registerDocumentation(
            <>
                <SectionDefaultToggleComponent />
                <DividerDocsComponent />
                <SectionCustomToggleComponent />
            </>
        )
        .execute();
})();
