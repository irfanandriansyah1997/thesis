/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ReactNode } from 'react';

import TextDocsComponent from '../../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../../.storybook/component/atomic/heading/heading.component';
import CodingViewerDocsComponent from '../../../../../.storybook/component/molecules/code-viewer/code-viewer.component';
import MultipleSelectionComponent from '../../multiple-selection.component';
import MultipleSelectionItemComponent from '../../multiple-selection-item.component';

/**
 * Section Default Multiple Selection
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.15
 */
class SectionDefaultMultipleSelectionComponent extends React.PureComponent<
    {},
    Record<string, unknown>
> {
    render(): ReactNode {
        return (
            <>
                <HeadingDocsComponent>Usage</HeadingDocsComponent>
                <TextDocsComponent>
                    Basic usage Multiple Selection link
                </TextDocsComponent>
                <CodingViewerDocsComponent sourceCode="">
                    <MultipleSelectionComponent
                        onChange={(): void => {}}
                        onSearch={(): void => {}}
                        placeholder="Hello World"
                        value={[]}
                    >
                        <MultipleSelectionItemComponent
                            key="123"
                            label="Irfan"
                            value="irfan"
                        >
                            Irfan Andriansyah
                        </MultipleSelectionItemComponent>
                        <MultipleSelectionItemComponent
                            key="124"
                            label="Whot The Fuck"
                            value="wtf"
                        >
                            Who The Fuck
                        </MultipleSelectionItemComponent>
                    </MultipleSelectionComponent>
                </CodingViewerDocsComponent>
            </>
        );
    }
}

export default SectionDefaultMultipleSelectionComponent;
