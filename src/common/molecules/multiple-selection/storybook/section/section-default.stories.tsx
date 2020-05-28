/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ReactNode } from 'react';

import TextDocsComponent from '../../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../../.storybook/component/atomic/heading/heading.component';
import CodingViewerDocsComponent from '../../../../../.storybook/component/molecules/code-viewer/code-viewer.component';
import MultipleSelectionComponent from '../../multiple-selection.component';
import MultipleSelectionItemComponent from '../../multiple-selection-item.component';
import MultipleSelectionHeadingComponent from '../../multiple-selection-heading.component';

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
                        <MultipleSelectionHeadingComponent key="saran">
                            Saran Pencarian
                        </MultipleSelectionHeadingComponent>
                        <MultipleSelectionItemComponent
                            label="Cimahi, Jawa Barat"
                            key="f574128d9944326385f1aa7be08b8685"
                            value="f574128d9944326385f1aa7be08b8685"
                        >
                            Cimahi, Jawa Barat
                        </MultipleSelectionItemComponent>
                        <MultipleSelectionItemComponent
                            key="167411a051e8f85e5949b8712d5b59fa"
                            label="Cimahi Selatan, Cimahi"
                            value="167411a051e8f85e5949b8712d5b59fa"
                        >
                            Cimahi Selatan, Cimahi
                        </MultipleSelectionItemComponent>
                        <MultipleSelectionItemComponent
                            label="Cimahi Tengah, Cimahi"
                            key="b9addc94e54625e8eb6b1ed933b89233"
                            value="b9addc94e54625e8eb6b1ed933b89233"
                        >
                            Cimahi Tengah, Cimahi
                        </MultipleSelectionItemComponent>
                        <MultipleSelectionItemComponent
                            key="f33fc7510f0d5ebfecbe278642ee00e1"
                            label="Cimahi Utara, Cimahi"
                            value="f33fc7510f0d5ebfecbe278642ee00e1"
                        >
                            Cimahi Utara, Cimahi
                        </MultipleSelectionItemComponent>
                    </MultipleSelectionComponent>
                </CodingViewerDocsComponent>
            </>
        );
    }
}

export default SectionDefaultMultipleSelectionComponent;
