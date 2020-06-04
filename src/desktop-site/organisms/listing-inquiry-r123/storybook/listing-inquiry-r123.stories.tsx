import React from 'react';

import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';
import HeadingDocsComponent from '../../../../.storybook/component/atomic/heading/heading.component';
import TextDocsComponent from '../../../../.storybook/component/atomic/text/text.component';
import ListingInquiryR123SidebarComponent from '../listing-inquiry-r123-sidebar.component';
import { DefaultPropsListingInquiryR123Sidebar } from './templates/template-listing-inquiry-r123-sidebar.stories';
import '../style/style.scss';
import CodingViewerDocsComponent from '../../../../.storybook/component/molecules/code-viewer/code-viewer.component';
import DividerDocsComponent from '../../../../.storybook/component/atomic/divider/divider.component';
import ListingInquiryR123ContactSectionComponent from '../contact-section-component';
import ListingInquiryR123EmailSectionComponent from '../email-section-component';

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
    `           agentInfo: 'Bergabung dari kemarin', \n` +
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
                <DividerDocsComponent />
                <ListingInquiryR123ContactSectionComponent
                    {...{
                        agent: {
                            agentName: 'John Doe',
                            agentImageUrl:
                                'https://images.unsplash.com/photo-1562184552-b7a1069700fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                            agentPageUrl:
                                'https://www.rumah123.com/agen-properti/pakarindo-buana-property/ari-kurniawan-38984/',
                            agentInfo:
                                'Kontak <a class="ui-atomic-link ui-atomic-link--styling-underline-none ui-organism-listing-inquiry-r123__link-info"' +
                                'href="https://www.rumah123.com/agen-properti/pakarindo-buana-property/ari-kurniawan-38984">Ari Kurniawan</a>' +
                                ' dari Pakarindo Buana Property tentang properti ini'
                        },
                        contact: {
                            phoneNumbers: ['+621212....'],
                            onClickPhoneButton: (): void => undefined,
                            onClickWhatsAppButton: (): void => undefined
                        }
                    }}
                />
                <ListingInquiryR123EmailSectionComponent
                    {...{
                        buttonText: 'Kirim ke agen',
                        onClickInquiryButton: (): void => undefined,
                        agreement:
                            'Dengan mengirimkan, Saya Setuju dengan <a class="ui-organism-listing-inquiry-r123__link-info" href="http://www.first-link.com">Persyaratan Penggunaan</a> ' +
                            'dan <a class="ui-organism-listing-inquiry-r123__link-info" href="http://www.first-link.com">Kebijakan Privasi</a> PT Web Marketing Indonesia/Anda termasuk pengumpulan, ' +
                            'penggunaan, pengungkapan, pemrosesan, penyimpanan dan penanganan informasi pribadi saya; dan komunikasi pemasaran langsung dari Anda dan / atau mitra Anda.',
                        placeholder: {
                            name: 'nama',
                            email: 'email',
                            phone: 'nomor telepon',
                            message: 'hai, \nsaya tertarik deh'
                        },
                        // buyerName: 'nama buyer',
                        // buyerEmail: 'as@sa',
                        onChange: (): void => undefined
                    }}
                />
            </>
        )
        .execute();
})();
