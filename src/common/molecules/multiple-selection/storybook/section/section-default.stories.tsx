/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ReactNode } from 'react';

import TextDocsComponent from '../../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../../.storybook/component/atomic/heading/heading.component';
import CodingViewerDocsComponent from '../../../../../.storybook/component/molecules/code-viewer/code-viewer.component';
import MultipleSelectionComponent from '../../multiple-selection.component';
import MultipleSelectionItemComponent from '../../multiple-selection-item.component';
import MultipleSelectionHeadingComponent from '../../multiple-selection-heading.component';
import {
    MultipleSelectionItemValueInterface,
    MultipleSelectionActionResponseType
} from '../../interface/component.interface';

/**
 * Section Default Multiple Selection
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.15
 */
class SectionDefaultMultipleSelectionComponent extends React.PureComponent<
    {},
    Record<string, unknown>
> {
    constructor() {
        super({});
        this.state = {
            option: [
                {
                    value: 'f574128d9944326385f1aa7be08b8685',
                    label: 'Cimahi, Jawa Barat',
                    others: {
                        id: '1'
                    }
                }
            ]
        };

        this.onChangeValue = this.onChangeValue.bind(this);
    }

    /**
     * On Change
     */
    public onChangeValue({
        object
    }: MultipleSelectionActionResponseType): void {
        this.setState({ option: object });
    }

    render(): ReactNode {
        const { onChangeValue } = this;
        const { option } = this.state;
        return (
            <>
                <HeadingDocsComponent>Usage</HeadingDocsComponent>
                <TextDocsComponent>
                    Basic usage Multiple Selection link
                </TextDocsComponent>
                <CodingViewerDocsComponent sourceCode="">
                    <MultipleSelectionComponent
                        onChange={onChangeValue}
                        placeholder="Hello World"
                        value={
                            (option as unknown) as MultipleSelectionItemValueInterface[]
                        }
                    >
                        <MultipleSelectionHeadingComponent id="saran">
                            Saran Pencarian
                        </MultipleSelectionHeadingComponent>
                        <MultipleSelectionItemComponent
                            label="Cimahi, Jawa Barat"
                            id="f574128d9944326385f1aa7be08b8685"
                            value="f574128d9944326385f1aa7be08b8685"
                            others={{
                                id: '1'
                            }}
                        >
                            Cimahi, Jawa Barat
                        </MultipleSelectionItemComponent>
                        <MultipleSelectionItemComponent
                            id="167411a051e8f85e5949b8712d5b59fa"
                            label="Cimahi Selatan, Cimahi"
                            value="167411a051e8f85e5949b8712d5b59fa"
                            others={{
                                id: '2'
                            }}
                        >
                            Cimahi Selatan, Cimahi
                        </MultipleSelectionItemComponent>
                        <MultipleSelectionItemComponent
                            label="Cimahi Tengah, Cimahi"
                            id="b9addc94e54625e8eb6b1ed933b89233"
                            value="b9addc94e54625e8eb6b1ed933b89233"
                            others={{
                                id: '2'
                            }}
                        >
                            Cimahi Tengah, Cimahi
                        </MultipleSelectionItemComponent>
                        <MultipleSelectionItemComponent
                            id="f33fc7510f0d5ebfecbe278642ee00e1"
                            label="Cimahi Utara, Cimahi"
                            value="f33fc7510f0d5ebfecbe278642ee00e1"
                            others={{
                                id: '3'
                            }}
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
