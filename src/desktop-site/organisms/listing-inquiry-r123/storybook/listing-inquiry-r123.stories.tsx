import React from 'react';

import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';
import HeadingDocsComponent from '../../../../.storybook/component/atomic/heading/heading.component';
import TextDocsComponent from '../../../../.storybook/component/atomic/text/text.component';
import ListingInquiryR123SidebarComponent from '../listing-inquiry-r123-sidebar.component';
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
                    {...{
                        agent: {
                            agentName: 'John Doe',
                            agentPageUrl: 'http://google.com',
                            agentJoinInfo: 'Bergabung dari kemarin',
                            agentImageUrl:
                                'https://images.unsplash.com/photo-1562184552-b7a1069700fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
                        },
                        organization: {
                            organizationName: 'Jaya Baya Company',
                            organizationPageUrl: 'http://google.com',
                            organizationImageUrl:
                                'https://images.unsplash.com/photo-1562184552-b7a1069700fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
                        },
                        inquiryButton: {
                            buttonText: 'Kirim Pertanyaan',
                            onClickInquiryButton: (): void => undefined
                        },
                        contact: {
                            phoneNumbers: ['+621212....'],
                            onClickPhoneButton: (): void => undefined,
                            onClickWhatsAppButton: (): void => undefined
                        }
                    }}
                />
            </>
        )
        .execute();
})();
