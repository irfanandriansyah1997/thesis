/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ReactNode } from 'react';

import SearchbarSRPR123Component from '../../searchbar-srp-r123.component';
import ColorDefaultConstant from '../../../../../shared/constant/color.constant';
import TextDocsComponent from '../../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../../.storybook/component/atomic/heading/heading.component';
import { AutocompleteR123ValueInterface } from '../../../../molecules/autocomplete-r123/interface/component.interface';
import CodingViewerDocsComponent from '../../../../../.storybook/component/molecules/code-viewer/code-viewer.component';
import {
    SearchBarSRPR123PropertyType,
    SearchBarSRPR123OnChangeValueType
} from '../../interface/component.interface';
import SectionDefaultAutocompleteR123Component from '../../../../molecules/autocomplete-r123/storybook/section/section-default.stories';

/**
 * Section Default Multiple Selection
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.15
 */
class SectionDefaultSearchbarSRPR123Component extends React.PureComponent<
    {},
    Record<string, unknown>
> {
    constructor(props: {}) {
        super(props);
        this.state = {
            option: [],
            propertyType: 'sale'
        };

        this.onChangeValue = this.onChangeValue.bind(this);
    }

    /**
     * On Change
     */
    public onChangeValue({
        object,
        ...res
    }: SearchBarSRPR123OnChangeValueType): void {
        console.error(res, object);
        this.setState({ option: object });
    }

    render(): ReactNode {
        const { onChangeValue } = this;
        const { option, propertyType } = this.state;

        return (
            <>
                <HeadingDocsComponent>Usage</HeadingDocsComponent>
                <TextDocsComponent>
                    Basic usage Multiple Selection
                </TextDocsComponent>
                <CodingViewerDocsComponent sourceCode="">
                    <div
                        style={{
                            margin: '-30px -20px',
                            width: 'calc(100% + 40px)',
                            height: 'calc(100% + 40px)',
                            padding: '30px 20px',
                            background: ColorDefaultConstant.grayR123
                        }}
                    >
                        <SearchbarSRPR123Component
                            onChange={onChangeValue}
                            value={option as AutocompleteR123ValueInterface[]}
                            propertyType={
                                propertyType as SearchBarSRPR123PropertyType
                            }
                            asyncService={
                                SectionDefaultAutocompleteR123Component.onLoadData
                            }
                            placeholder="Cari berdasarkan lokasi, area sekitar, nama property, nama project, atau nama developer"
                            label={{
                                rentLabel: 'Disewa',
                                saleLabel: 'Dijual',
                                searchLabel: 'Perbarui'
                            }}
                        />
                    </div>
                </CodingViewerDocsComponent>
            </>
        );
    }
}

export default SectionDefaultSearchbarSRPR123Component;
