/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ReactNode } from 'react';
import HeadingDocsComponent from '../../../../../.storybook/component/atomic/heading/heading.component';
import TextDocsComponent from '../../../../../.storybook/component/atomic/text/text.component';
import CodingViewerDocsComponent from '../../../../../.storybook/component/molecules/code-viewer/code-viewer.component';
import R123InquiryModalComponent from '../../r123-inquiry-modal.component';
import '../../style/style.scss';
import { DefaultPropsInquiryListingFailed } from '../templates/template-inquiry-modal.stories';

/**
 * Generate Docs
 * @param {string} type - props
 * @return {string}
 */
const docs = (): string => `<R123InquiryModalComponent \n`;

/**
 * Section Inquiry Modal Failed
 * @author Nafhul <nafhul.arsyad@99.co>
 * @since 2020.06.10
 */
class SectionInquiryModalFailedComponent extends React.PureComponent<
    {},
    Record<string, unknown>
> {
    render(): ReactNode {
        return (
            <>
                <HeadingDocsComponent>
                    Listing Inquiry Box Component Failed Case
                </HeadingDocsComponent>
                <TextDocsComponent>Full props case</TextDocsComponent>
                <CodingViewerDocsComponent sourceCode={docs()}>
                    <R123InquiryModalComponent
                        {...DefaultPropsInquiryListingFailed}
                    />
                </CodingViewerDocsComponent>
            </>
        );
    }
}

export default SectionInquiryModalFailedComponent;
