import React, { ReactNode } from 'react';

import ButtonComponent from '../../../button/button.component';
import DialogComponent from '../../dialog.component';
import IconComponent from '../../../icon/icon.component';
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
                <HeadingDocsComponent>Basic dialog</HeadingDocsComponent>
                <TextDocsComponent>Basic dialog component</TextDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={`${'<DialogComponent>Open dialog</DialogComponent>'}`}
                >
                    <ButtonComponent size="default" onClick={this.showDialog}>
                        Open dialog
                    </ButtonComponent>
                </CodingViewerDocsComponent>
                <DialogComponent show={show} onCloseDialog={this.closeDialog}>
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

export default SectionDefaultDialogComponent;
