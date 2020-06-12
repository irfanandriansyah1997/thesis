/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ReactNode } from 'react';
import HeadingDocsComponent from '../../../../../.storybook/component/atomic/heading/heading.component';
import TextDocsComponent from '../../../../../.storybook/component/atomic/text/text.component';
import CodingViewerDocsComponent from '../../../../../.storybook/component/molecules/code-viewer/code-viewer.component';
import R123InquiryModalComponent from '../../r123-inquiry-modal.component';
import '../../style/style.scss';
import { DefaultPropsInquiryListingSuccess } from '../templates/template-inquiry-modal.stories';

/**
 * Generate Docs
 * @param {string} type - props
 * @return {string}
 */
const docs = (): string =>
    `<R123InquiryModalComponent \n` +
    ` {...{ \n` +
    `       type: 'success', \n` +
    `       title: 'Pertanyaan anda telah terkirim ke agen!', \n` +
    `       remarks: 'Ingat pertanyaan Anda dengan login atau membuat profil baru', \n` +
    `       button: { \n` +
    `           buttonText: 'Simpan property', \n` +
    `           onClickInquiryModalButton: (): void => undefined \n` +
    `       } \n` +
    `     }} \n` +
    `/> \n`;

/**
 * Section Inquiry Modal Success
 * @author Nafhul <nafhul.arsyad@99.co>
 * @since 2020.06.10
 */
class SectionInquiryModalSuccessComponent extends React.PureComponent<
    {},
    Record<string, unknown>
> {
    render(): ReactNode {
        return (
            <>
                <HeadingDocsComponent>
                    Listing Inquiry Box Component
                </HeadingDocsComponent>
                <TextDocsComponent>Success Case</TextDocsComponent>
                <CodingViewerDocsComponent sourceCode={docs()}>
                    <R123InquiryModalComponent
                        {...DefaultPropsInquiryListingSuccess}
                    />
                </CodingViewerDocsComponent>
            </>
        );
    }
}

export default SectionInquiryModalSuccessComponent;
