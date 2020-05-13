/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ReactNode } from 'react';

import SearchFilter from '../../search-filter.component';
import TextDocsComponent from '../../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../../.storybook/component/atomic/heading/heading.component';
import CodingViewerDocsComponent from '../../../../../.storybook/component/molecules/code-viewer/code-viewer.component';

import { FilterNavbarComponent } from '../../interface/component.interface';

const subChannel = [
    {
        id: '1',
        value: '1',
        label: 'Baru/seken'
    },
    {
        id: '2',
        value: '2',
        label: 'Properti baru'
    },
    {
        id: '3',
        value: '3',
        label: 'Property seken'
    }
];

const propertyType = [
    {
        id: '1',
        value: '1',
        label: 'Residensial'
    },
    {
        id: '2',
        value: '2',
        label: 'Rumah',
        subOption: true
    },
    {
        id: '3',
        value: '3',
        label: 'Apartemen',
        subOption: true
    },
    {
        id: '4',
        value: '4',
        label: 'Ruko'
    },
    {
        id: '5',
        value: '5',
        label: 'Tanah'
    }
];

const price = [
    {
        id: '1',
        value: '1',
        label: 'Berapapun'
    },
    {
        id: '2',
        value: '2',
        label: '50jt'
    },
    {
        id: '3',
        value: '3',
        label: '100jt'
    },
    {
        id: '4',
        value: '4',
        label: '200jt'
    },
    {
        id: '5',
        value: '5',
        label: '300jt'
    }
];

const sortingItem = [
    {
        id: '1',
        value: '1',
        label: 'Default (Featured)'
    },
    {
        id: '2',
        value: '2',
        label: 'Terbaru'
    },
    {
        id: '3',
        value: '3',
        label: 'Harga Tertinggi'
    },
    {
        id: '4',
        value: '4',
        label: 'Harga Terendah'
    }
];

/**
 * Default Search Filter Section
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.05.13
 */
class DeafultSearchFilterSectionComponent extends React.PureComponent<
    FilterNavbarComponent,
    Record<string, unknown>
> {
    constructor(props: FilterNavbarComponent) {
        super(props);

        this.state = {
            subChannelSelection: 1,
            propertyTypeSelection: 1,
            minPriceSelection: 1,
            maxPriceSelection: 1,
            start: 0,
            end: 7000
        };
    }

    render(): ReactNode {
        const {
            subChannelSelection,
            propertyTypeSelection,
            minPriceSelection,
            maxPriceSelection,
            ...res
        } = this.state;
        return (
            <>
                <HeadingDocsComponent>Usage</HeadingDocsComponent>
                <TextDocsComponent>
                    Default search filter component
                </TextDocsComponent>
                <CodingViewerDocsComponent sourceCode="sourceCode">
                    <SearchFilter
                        searchText="Rumah dijual di Jakarta"
                        filterItem={[
                            {
                                name: 'combobox',
                                onChange: (param: string | number): void => {
                                    this.setState({
                                        subChannelSelection: param
                                    });
                                },
                                type: 'combobox',
                                isChildrenToggle: false,
                                option: subChannel,
                                value: subChannelSelection as number,
                                className: 'sub-channel'
                            },
                            {
                                name: 'combobox',
                                onChange: (param: string | number): void => {
                                    this.setState({
                                        propertyTypeSelection: param
                                    });
                                },
                                type: 'combobox',
                                isChildrenToggle: false,
                                option: propertyType,
                                value: propertyTypeSelection as number,
                                className: 'property-type'
                            },
                            {
                                name: 'combobox',
                                onChange: (param: string | number): void => {
                                    this.setState({
                                        minPriceSelection: param
                                    });
                                },
                                type: 'combobox',
                                isChildrenToggle: false,
                                option: price,
                                value: minPriceSelection as number,
                                className: 'min-price'
                            },
                            {
                                name: 'combobox',
                                onChange: (param: string | number): void => {
                                    this.setState({
                                        maxPriceSelection: param
                                    });
                                },
                                type: 'combobox',
                                isChildrenToggle: false,
                                option: price,
                                value: maxPriceSelection as number,
                                className: 'max-price'
                            },
                            {
                                name: 'range',
                                onChange: (start, end): void => {
                                    this.setState({ start, end });
                                },
                                type: 'range',
                                isChildrenToggle: false,
                                min: 0,
                                max: 7000,
                                value: {
                                    start: res.start as number,
                                    end: res.end as number
                                }
                            }
                        ]}
                        sortingItem={{
                            value: 1,
                            sortingText: '',
                            option: sortingItem
                        }}
                        onChangeFilterField={(): void => undefined}
                        onChangeSortingField={(): void => undefined}
                    />
                </CodingViewerDocsComponent>
            </>
        );
    }
}

export default DeafultSearchFilterSectionComponent;
