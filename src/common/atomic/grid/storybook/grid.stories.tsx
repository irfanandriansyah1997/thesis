import React from 'react';

import SectionDefaultGridComponent from './section/section-default.stories';
import SectionResponsiveGridComponent from './section/section-responsive.stories';
import DividerDocsComponent from '../../../../.storybook/component/atomic/divider/divider.component';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';

import '../style/style.scss';

((): void => {
    new StorybookDocumentationBuilder('Grid Component', 'atomic')
        .setSection('common')
        .setDescriptionComponent(
            'A card can be used to display content related to a single subject.'
        )
        .registerDocumentation(
            <>
                <SectionDefaultGridComponent />
                <DividerDocsComponent />
                <SectionResponsiveGridComponent />
            </>
        )
        .execute();
})();
