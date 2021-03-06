import React, { ReactNode } from 'react';
import HeadingDocsComponent from '../../../../../.storybook/component/atomic/heading/heading.component';
import TextDocsComponent from '../../../../../.storybook/component/atomic/text/text.component';
import R123ListingInquirySidebarComponent from '../../r123-listing-inquiry-sidebar.component';
import { MultiplePhoneNumbersPropsListingInquiryR123Sidebar } from '../templates/template-listing-inquiry-r123-sidebar.stories';
import CodingViewerDocsComponent from '../../../../../.storybook/component/molecules/code-viewer/code-viewer.component';
import '../../style/style.scss';

/**
 * Generate Docs
 * @param {string} type - type props image
 * @return {string}
 */
const docs = (): string =>
    `<R123ListingInquirySidebarComponent \n` +
    ` {...{ \n` +
    `       agent: { \n` +
    `           agentName: 'John Doe', \n` +
    `           agentPageUrl: 'http://google.com', \n` +
    `           agentInfo: 'Bergabung dari kemarin', \n` +
    `           agentImageUrl: \n` +
    `               'https://images.unsplash.com/photo-1562184552-b7a1069700fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' \n` +
    `           }, \n` +
    `       inquiryButton: { \n` +
    `           buttonText: 'Kirim Pertanyaan', \n` +
    `           onClickInquiryButton: (): void => undefined \n` +
    `       }, \n` +
    `       contact: { \n` +
    `           phoneNumbers: ['+621212....', '+621313....', '+621414....'], \n` +
    `           hasWhatsapp: false, \n` +
    `           onClickPhoneButton: (): void => undefined, \n` +
    `           onClickWhatsAppButton: (): void => undefined \n` +
    `       }  \n` +
    `   }} \n` +
    `/> \n`;

/**
 * Section Sidebar Multiple PhoneNumbers
 * @author Nafhul <nafhul.arsyad@99.co>
 * @since 2020.06.04
 */
class SectionSidebarMultiplePhoneNumbersComponent extends React.PureComponent<
    {},
    Record<string, unknown>
> {
    render(): ReactNode {
        return (
            <>
                <HeadingDocsComponent>
                    Multiple Phone Numbers Contact
                </HeadingDocsComponent>
                <TextDocsComponent>
                    Set hasWhatsapp props to false and phone numbers has
                    multiple values
                </TextDocsComponent>
                <CodingViewerDocsComponent sourceCode={docs()}>
                    <R123ListingInquirySidebarComponent
                        {...MultiplePhoneNumbersPropsListingInquiryR123Sidebar}
                    />
                </CodingViewerDocsComponent>
            </>
        );
    }
}

export default SectionSidebarMultiplePhoneNumbersComponent;
