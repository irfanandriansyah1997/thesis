import React, { ReactNode } from 'react';

import CheckboxComponent from '../../checkbox.component';
import TextDocsComponent from '../../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../../.storybook/component/atomic/heading/heading.component';
import CodingViewerDocsComponent from '../../../../../.storybook/component/molecules/code-viewer/code-viewer.component';

/**
 * Section Default Badge
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.15
 */
class SectionDefaultDialogComponent extends React.PureComponent<
    {},
    Record<string, unknown>
> {
    constructor(props: {}) {
        super(props);
        this.state = {
            selection: []
        };
    }

    render(): ReactNode {
        const { selection } = this.state;

        return (
            <>
                <HeadingDocsComponent>Usage</HeadingDocsComponent>
                <TextDocsComponent>Basic checkbox component</TextDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={`${'<DialogComponent>Open dialog</DialogComponent>'}`}
                >
                    <CheckboxComponent
                        name="sample"
                        styling="horizontal"
                        onChange={(res: (string | number)[]): void => {
                            this.setState({ selection: res }, (): void =>
                                console.debug(this.state)
                            );
                        }}
                        value={(selection as unknown) as (string | number)[]}
                    >
                        <CheckboxComponent.Item
                            id="hello-1"
                            value={1}
                            label="Label 1"
                        />
                        <CheckboxComponent.Item
                            id="hello-2"
                            value={2}
                            label="Label 2"
                        />
                        <CheckboxComponent.Item
                            id="hello-3"
                            value={3}
                            label="Label 3"
                        />
                    </CheckboxComponent>
                </CodingViewerDocsComponent>
            </>
        );
    }
}

export default SectionDefaultDialogComponent;
