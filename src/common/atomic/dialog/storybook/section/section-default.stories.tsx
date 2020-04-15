import React, { ReactNode } from 'react';

import ButtonComponent from '../../../button/button.component';
import DialogComponent from '../../dialog.component';
import {
    PropsInterface,
    StateInterface
} from '../../interface/component.interface';
import TextDocsComponent from '../../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../../.storybook/component/atomic/heading/heading.component';
import CodingViewerDocsComponent from '../../../../../.storybook/component/molecules/code-viewer/code-viewer.component';

/**
 * Section Default Badge
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.04.14
 */
class SectionDefaultDialogComponent extends React.PureComponent<
    PropsInterface,
    StateInterface
> {
    constructor(props: PropsInterface) {
        super(props);
        this.state = {
            show: false
        };
        this.setOpenDialog = this.setOpenDialog.bind(this);
    }

    /**
     * Action triggered to open the dialog.
     */
    setOpenDialog(): void {
        this.setState({ show: true });
    }

    /**
     * Action triggered to close the dialog.
     */
    setCloseDialog(): void {
        this.setState({ show: false });
    }

    render(): ReactNode {
        const { show } = this.state;
        return (
            <>
                <HeadingDocsComponent>Usage</HeadingDocsComponent>
                <TextDocsComponent>Basic dialog component</TextDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={`${'<DialogComponent>Open dialog</DialogComponent>'}`}
                >
                    <ButtonComponent
                        size="default"
                        onClick={this.setOpenDialog}
                    >
                        Open dialog
                    </ButtonComponent>
                </CodingViewerDocsComponent>
                <DialogComponent
                    show={show}
                    onCloseDialog={this.setCloseDialog}
                >
                    Link
                </DialogComponent>
            </>
        );
    }
}

export default SectionDefaultDialogComponent;
