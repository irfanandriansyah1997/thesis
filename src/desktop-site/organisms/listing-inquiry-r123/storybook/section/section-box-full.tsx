/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ReactNode } from 'react';
import HeadingDocsComponent from '../../../../../.storybook/component/atomic/heading/heading.component';
import TextDocsComponent from '../../../../../.storybook/component/atomic/text/text.component';
import CodingViewerDocsComponent from '../../../../../.storybook/component/molecules/code-viewer/code-viewer.component';
import R123ListingInquiryBoxComponent from '../../r123-listing-inquiry-box.component';
import { DefaultPropsListingInquiryR123Box } from '../templates/template-listing-inquiry-r123-sidebar.stories';
import '../../style/style.scss';

/**
 * Generate Docs
 * @param {string} type - props
 * @return {string}
 */
const docs = (): string =>
    `<R123ListingInquiryBoxComponent \n` +
    ` {...{ \n` +
    `       agent: { \n` +
    `           agentName: 'John Doe', \n` +
    `           agentPageUrl: 'http://google.com', \n` +
    `           agentInfo: 'Bergabung dari kemarin', \n` +
    `           agentImageUrl: \n` +
    `               'https://images.unsplash.com/photo-1562184552-b7a1069700fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' \n` +
    `           }, \n` +
    `       contact: { \n` +
    `           phoneNumbers: ['+621212....'], \n` +
    `           hasWhatsapp: true, \n` +
    `           onClickPhoneButton: (): void => undefined, \n` +
    `           onClickWhatsAppButton: (): void => undefined \n` +
    `       }, \n` +
    `       buttonText: 'Kirim ke agen', \n` +
    `       onClickInquiryButton: (): void => undefined, \n` +
    `       agreement: \n` +
    `           'Dengan mengirimkan, Saya Setuju dengan <a class="ui-organism-listing-inquiry-r123__link-info" href="http://www.first-link.com">Persyaratan Penggunaan</a> ' + \n` +
    `           'dan <a class="ui-organism-listing-inquiry-r123__link-info" href="http://www.first-link.com">Kebijakan Privasi</a> PT Web Marketing Indonesia/Anda termasuk pengumpulan, ' + \n` +
    `           'penggunaan, pengungkapan, pemrosesan, penyimpanan dan penanganan informasi pribadi saya; dan komunikasi pemasaran langsung dari Anda dan / atau mitra Anda.', \n` +
    `       placeholder: { \n ` +
    `           name: 'nama', \n` +
    `           email: 'email', \n` +
    `           phone: 'nomor telepon', \n` +
    `           message: 'hai, \nsaya tertarik deh' \n` +
    `       }, \n ` +
    `       buyerName: 'nama buyer', \n` +
    `       buyerEmail: 'mail@mail.com', \n` +
    `       onChangeInquiryField: (): void => undefined \n` +
    `   }} \n` +
    `/> \n`;

/**
 * Section Box Full
 * @author Nafhul <nafhul.arsyad@99.co>
 * @since 2020.06.04
 */
class SectionBoxFullComponent extends React.PureComponent<
    {},
    Record<string, unknown>
> {
    render(): ReactNode {
        return (
            <>
                <HeadingDocsComponent>
                    Listing Inquiry Box Component
                </HeadingDocsComponent>
                <TextDocsComponent>Full props case</TextDocsComponent>
                <CodingViewerDocsComponent sourceCode={docs()}>
                    <R123ListingInquiryBoxComponent
                        {...DefaultPropsListingInquiryR123Box}
                    />
                </CodingViewerDocsComponent>
            </>
        );
    }
}

export default SectionBoxFullComponent;
