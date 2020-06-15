/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ReactNode } from 'react';
import HeadingDocsComponent from '../../../../../.storybook/component/atomic/heading/heading.component';
import TextDocsComponent from '../../../../../.storybook/component/atomic/text/text.component';
import CodingViewerDocsComponent from '../../../../../.storybook/component/molecules/code-viewer/code-viewer.component';
import R123InquiryModalComponent from '../../r123-inquiry-modal.component';
import '../../style/style.scss';
import { DefaultPropsInquiryListingFailed } from '../templates/template-inquiry-modal.stories';
import {
    DialogPropsInterface,
    DialogStateInterface
} from '../../../../../common/atomic/dialog/interface/component.interface';
import ButtonComponent from '../../../../../common/atomic/button/button.component';

/**
 * Generate Docs
 * @param {string} type - props
 * @return {string}
 */
const docs = (): string =>
    `<R123InquiryModalComponent \n` +
    ` {...{ \n` +
    `       type: 'failed', \n` +
    `       title: 'Maaf terjadi kesalahan', \n` +
    `       remarks: \n` +
    `           'Permintaan Anda tidak dapat dikirim saat ini. Silakan coba kembali beberapa saat lagi', \n` +
    `       button: { \n` +
    `           buttonText: 'Coba sekarang', \n` +
    `           onClickInquiryModalButton: (): void => undefined \n` +
    `       }, \n` +
    `       dialogBox: { \n` +
    `           show: false, \n` +
    `           onCloseDialog: (): void => undefined \n` +
    `       } \n` +
    `     }} \n` +
    `/> \n`;

/**
 * Section Inquiry Modal Failed
 * @author Nafhul <nafhul.arsyad@99.co>
 * @since 2020.06.10
 */
class SectionInquiryModalFailedComponent extends React.PureComponent<
    DialogPropsInterface,
    DialogStateInterface
> {
    constructor(props: DialogPropsInterface) {
        super(props);
        this.state = {
            show: false
        };
        this.showDialog = this.showDialog.bind(this);
    }

    /**
     * Action triggered to open the dialog.
     */
    showDialog = (): void => {
        this.setState({ show: true });
    };

    /**
     * Action triggered to close the dialog.
     */
    closeDialog = (): void => {
        this.setState({ show: false });
    };

    render(): ReactNode {
        const { show } = this.state;
        return (
            <>
                <HeadingDocsComponent>
                    Listing Inquiry Box Component
                </HeadingDocsComponent>
                <TextDocsComponent>Failed Case</TextDocsComponent>
                <CodingViewerDocsComponent sourceCode={docs()}>
                    <ButtonComponent size="default" onClick={this.showDialog}>
                        Open inquiry failed dialog
                    </ButtonComponent>
                </CodingViewerDocsComponent>
                <R123InquiryModalComponent
                    {...DefaultPropsInquiryListingFailed}
                    dialogBox={{
                        show,
                        onCloseDialog: this.closeDialog
                    }}
                />
            </>
        );
    }
}

export default SectionInquiryModalFailedComponent;
