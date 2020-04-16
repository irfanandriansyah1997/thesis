import React, { ReactNode } from 'react';

import ButtonComponent from '../../../button/button.component';
import DialogComponent from '../../dialog.component';
import IconComponent from '../../../icon/icon.component';
import {
    DialogPropsInterface,
    DialogStateInterface
} from '../../interface/component.interface';
import TextDocsComponent from '../../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../../.storybook/component/atomic/heading/heading.component';
import CodingViewerDocsComponent from '../../../../../.storybook/component/molecules/code-viewer/code-viewer.component';

/**
 * Section Default Dialog
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.04.14
 */
class SectionSizeDialogComponent extends React.PureComponent<
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
                <HeadingDocsComponent>Fullscreen dialog</HeadingDocsComponent>
                <TextDocsComponent>
                    Dialog component with full-width size (as is the custom in
                    mobile display)
                </TextDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={`${'<DialogComponent type="fullscreen">'}\n   ${'<IconComponent color="primary" size={32}>close</IconComponent>'}\n   ${'<img alt="Images 1" src="https://images.unsplash.com/photo-1562886812-41775a01195d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60" style={{ width: "100%" }}/>'}\n${'</DialogComponent>'}`}
                >
                    <ButtonComponent size="default" onClick={this.showDialog}>
                        Open dialog
                    </ButtonComponent>
                </CodingViewerDocsComponent>
                <DialogComponent
                    show={show}
                    type="fullscreen"
                    onCloseDialog={this.closeDialog}
                >
                    <IconComponent
                        color="primary"
                        size={32}
                        style={{
                            position: 'absolute',
                            right: 0,
                            top: 0,
                            padding: 8,
                            cursor: 'pointer'
                        }}
                        onClick={this.closeDialog}
                    >
                        close
                    </IconComponent>
                    <img
                        alt="Images 1"
                        src="https://images.unsplash.com/photo-1562886812-41775a01195d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                        style={{ width: '100%' }}
                    />
                </DialogComponent>
            </>
        );
    }
}

export default SectionSizeDialogComponent;
