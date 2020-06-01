import React from 'react';

import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';
import HeadingDocsComponent from '../../../../.storybook/component/atomic/heading/heading.component';
import TextDocsComponent from '../../../../.storybook/component/atomic/text/text.component';
import ListingInquiryR123SidebarComponent from '../listing-inquiry-r123-sidebar.component';
import { DefaultPropsListingInquiryR123Sidebar } from './templates/template-listing-inquiry-r123-sidebar.stories';
import '../style/style.scss';
import CodingViewerDocsComponent from '../../../../.storybook/component/molecules/code-viewer/code-viewer.component';

/**
 * Generate Docs
 * @param {string} type - type props image
 * @return {string}
 */
const docs = (): string =>
    `<ListingInquiryR123SidebarComponent \n` +
    ` {...{ \n` +
    `       agent: { \n` +
    `           agentName: 'John Doe', \n` +
    `           agentPageUrl: 'http://google.com', \n` +
    `           agentJoinInfo: 'Bergabung dari kemarin', \n` +
    `           agentImageUrl: \n` +
    `               'https://images.unsplash.com/photo-1562184552-b7a1069700fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' \n` +
    `           }, \n` +
    `       organization: { \n` +
    `           organizationName: 'Jaya Baya Company', \n` +
    `           organizationPageUrl: 'http://google.com', \n` +
    `           organizationImageUrl: \n` +
    `               'https://images.unsplash.com/photo-1562184552-b7a1069700fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' \n` +
    `       }, \n` +
    `       inquiryButton: { \n` +
    `           buttonText: 'Kirim Pertanyaan', \n` +
    `           onClickInquiryButton: (): void => undefined \n` +
    `       }, \n` +
    `       contact: { \n` +
    `           phoneNumbers: ['+621212....'], \n` +
    `           onClickPhoneButton: (): void => undefined, \n` +
    `           onClickWhatsAppButton: (): void => undefined \n` +
    `       }  \n` +
    `   }} \n` +
    `/> \n`;

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
                <CodingViewerDocsComponent sourceCode={docs()}>
                    <ListingInquiryR123SidebarComponent
                        {...DefaultPropsListingInquiryR123Sidebar}
                    />
                </CodingViewerDocsComponent>
            </>
        )
        .execute();
})();
