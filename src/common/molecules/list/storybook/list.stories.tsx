import React from 'react';

import SectionDefaultListComponent from './section/section-default.stories';
import SectionPositionListComponent from './section/section-position.stories';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';
import DividerDocsComponent from '../../../../.storybook/component/atomic/divider/divider.component';

((): void => {
    new StorybookDocumentationBuilder('List Component', 'molecules')
        .setSection('common')
        .setDescriptionComponent(
            'A list can be used to display content related to a single subject'
        )
        .registerDocumentation(
            <>
                <SectionDefaultListComponent />
                <DividerDocsComponent />
                <SectionPositionListComponent />
            </>
        )
        .execute();
})();
