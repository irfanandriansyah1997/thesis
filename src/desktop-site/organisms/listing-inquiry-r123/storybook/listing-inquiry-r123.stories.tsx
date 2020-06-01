import React from 'react';

import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';
import HeadingDocsComponent from '../../../../.storybook/component/atomic/heading/heading.component';
import TextDocsComponent from '../../../../.storybook/component/atomic/text/text.component';
import ListingInquiryR123SidebarComponent from '../listing-inquiry-r123-sidebar.component';
import { DefaultPropsListingInquiryR123Sidebar } from './templates/template-listing-inquiry-r123-sidebar.stories';
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
                <HeadingDocsComponent>Usage</HeadingDocsComponent>
                <TextDocsComponent>Listing Inquiry component</TextDocsComponent>

                <ListingInquiryR123SidebarComponent
                    {...DefaultPropsListingInquiryR123Sidebar}
                />
            </>
        )
        .execute();
})();
