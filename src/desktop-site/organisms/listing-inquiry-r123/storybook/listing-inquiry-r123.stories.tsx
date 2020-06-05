import React from 'react';

import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';
import DividerDocsComponent from '../../../../.storybook/component/atomic/divider/divider.component';
import SectionSidebarFullComponent from './section/section-sidebar-full.stories';
import SectionSidebarNoOrgComponent from './section/section-sidebar-no-org.stories';
import SectionSidebarNoWhatsAppComponent from './section/section-sidebar-no-whatsapp.stories';
import SectionBoxFullComponent from './section/section-box-full.stories';
import '../style/style.scss';

((): void => {
    new StorybookDocumentationBuilder(
        'Listing Inquiry R123 Component',
        'organism'
    )
        .setSection('desktop')
        .setDescriptionComponent('Listing Inquiry R123 Component')
        .registerDocumentation(
            <>
                <SectionSidebarFullComponent />
                <DividerDocsComponent />
                <SectionSidebarNoOrgComponent />
                <DividerDocsComponent />
                <SectionSidebarNoWhatsAppComponent />
                <DividerDocsComponent />
                <SectionBoxFullComponent />
            </>
        )
        .execute();
})();
