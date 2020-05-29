/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ReactNode } from 'react';

import TextComponent from '../../../../atomic/text/text.component';
import IconComponent from '../../../../atomic/icon/icon.component';
import MultipleSelectionComponent from '../../multiple-selection.component';
import MultipleSelectionItemComponent from '../../multiple-selection-item.component';
import MultipleSelectionHeadingComponent from '../../multiple-selection-heading.component';
import TextDocsComponent from '../../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../../.storybook/component/atomic/heading/heading.component';
import CodingViewerDocsComponent from '../../../../../.storybook/component/molecules/code-viewer/code-viewer.component';
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
            option: []
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
                    Basic usage Multiple Selection
                </TextDocsComponent>
                <CodingViewerDocsComponent sourceCode="">
                    <MultipleSelectionComponent
                        onChange={onChangeValue}
                        fontSize={14}
                        placeholder="Cari berdasarkan lokasi, area sekitar, nama property, nama project, atau nama developer"
                        value={
                            (option as unknown) as MultipleSelectionItemValueInterface[]
                        }
                    >
                        <MultipleSelectionHeadingComponent id="saran">
                            <div className="flex flex-align-center">
                                <IconComponent color="heading" size={16}>
                                    search
                                </IconComponent>
                                &nbsp;
                                <TextComponent
                                    tag="p"
                                    color="heading"
                                    fontWeight={500}
                                >
                                    Saran Pencarian
                                </TextComponent>
                            </div>
                        </MultipleSelectionHeadingComponent>
                        <MultipleSelectionItemComponent
                            label="Cimahi, Jawa Barat"
                            id="f574128d9944326385f1aa7be08b8685"
                            value="f574128d9944326385f1aa7be08b8685"
                            others={{
                                id: '1'
                            }}
                        >
                            <div className="flex flex-align-center">
                                <IconComponent size={16} color="text">
                                    place
                                </IconComponent>
                                &nbsp;
                                <TextComponent
                                    tag="p"
                                    fontWeight={400}
                                    color="text"
                                >
                                    Cimahi, Jawa Barat
                                </TextComponent>
                            </div>
                        </MultipleSelectionItemComponent>
                        <MultipleSelectionItemComponent
                            id="167411a051e8f85e5949b8712d5b59fa"
                            label="Cimahi Selatan, Cimahi"
                            value="167411a051e8f85e5949b8712d5b59fa"
                            others={{
                                id: '2'
                            }}
                        >
                            <div className="flex flex-align-center">
                                <IconComponent size={16} color="text">
                                    place
                                </IconComponent>
                                &nbsp;
                                <TextComponent
                                    tag="p"
                                    fontWeight={400}
                                    color="text"
                                >
                                    Cimahi Selatan, Cimahi
                                </TextComponent>
                            </div>
                        </MultipleSelectionItemComponent>
                        <MultipleSelectionItemComponent
                            label="Cimahi Tengah, Cimahi"
                            id="b9addc94e54625e8eb6b1ed933b89233"
                            value="b9addc94e54625e8eb6b1ed933b89233"
                            others={{
                                id: '2'
                            }}
                        >
                            <div className="flex flex-align-center">
                                <IconComponent size={16} color="text">
                                    place
                                </IconComponent>
                                &nbsp;
                                <TextComponent
                                    tag="p"
                                    fontWeight={400}
                                    color="text"
                                >
                                    Cimahi Tengah, Cimahi
                                </TextComponent>
                            </div>
                        </MultipleSelectionItemComponent>
                        <MultipleSelectionItemComponent
                            id="f33fc7510f0d5ebfecbe278642ee00e1"
                            label="Cimahi Utara, Cimahi"
                            value="f33fc7510f0d5ebfecbe278642ee00e1"
                            others={{
                                id: '3'
                            }}
                        >
                            <div className="flex flex-align-center">
                                <IconComponent size={16} color="text">
                                    place
                                </IconComponent>
                                &nbsp;
                                <TextComponent
                                    tag="p"
                                    fontWeight={400}
                                    color="text"
                                >
                                    Cimahi Utara, Cimahi
                                </TextComponent>
                            </div>
                        </MultipleSelectionItemComponent>
                    </MultipleSelectionComponent>
                </CodingViewerDocsComponent>
            </>
        );
    }
}

export default SectionDefaultMultipleSelectionComponent;
