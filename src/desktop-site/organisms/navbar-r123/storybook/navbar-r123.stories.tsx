import React from 'react';

import SectionDefaultNavbarComponent from './section/section-default.stories';
import SectionNavbarWithLogoComponent from './section/section-with-logo.stories';
import DividerDocsComponent from '../../../../.storybook/component/atomic/divider/divider.component';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';

import '../style/style.scss';

((): void => {
    new StorybookDocumentationBuilder('Navbar R123 Component', 'organism')
        .setSection('desktop')
        .setDescriptionComponent(
            'Navbar R123 can be used to display menu in header section'
        )
        .registerDocumentation(
            <>
                <SectionDefaultNavbarComponent />
                <DividerDocsComponent />
                <SectionNavbarWithLogoComponent />
            </>
        )
        .execute();
})();
