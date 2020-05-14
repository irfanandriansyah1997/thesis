/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ReactNode } from 'react';

import SearchFilter from '../../search-filter.component';
import TextDocsComponent from '../../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../../.storybook/component/atomic/heading/heading.component';
import CodingViewerDocsComponent from '../../../../../.storybook/component/molecules/code-viewer/code-viewer.component';

import { FilterNavbarComponent } from '../../interface/component.interface';

/**
 * Generate Docs
 * @param {string} type - type props image
 * @return {string}
 */
const docs = (props: FilterNavbarComponent): string =>
    `<SearchFilter \n` +
    `    searchResultText="${props.searchResultText}"\n` +
    `    hasChildrenToggle=${props.hasChildrenToggle}\n` +
    `    sortingItem=${props.sortingItem}\n` +
    `    filterItem={[${props.filterItem}]}\n` +
    `    onChangeFilterField={${props.onChangeFilterField}}\n` +
    `    onChangeSortingField={${props.onChangeFilterField}}\n` +
    `/>`;

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

const minPrice = [
    {
        id: '1',
        value: '1',
        label: 'Harga Min(Rp)'
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

const maxPrice = [
    {
        id: '1',
        value: '1',
        label: 'Harga Min(Rp)'
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

/**
 * Default Search Filter Section
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.05.13
 */
class CustomSearchFilterSectionComponent extends React.PureComponent<
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
            end: 100
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
                <CodingViewerDocsComponent
                    sourceCode={docs({
                        searchResultText: 'Rumah dijual di Jakarta',
                        hasChildrenToggle: false,
                        hasSortingFilter: false,
                        filterItem: [],
                        onChangeFilterField: (): void => {},
                        onChangeSortingField: (): void => {}
                    })}
                >
                    <SearchFilter
                        hasChildrenToggle={false}
                        hasSortingFilter={false}
                        filterItem={[
                            {
                                name: 'sub-channel',
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
                                name: 'property-type',
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
                                name: 'min-price',
                                onChange: (param: string | number): void => {
                                    this.setState({
                                        minPriceSelection: param
                                    });
                                },
                                type: 'combobox',
                                isChildrenToggle: false,
                                option: minPrice,
                                value: minPriceSelection as number,
                                className: 'min-price'
                            },
                            {
                                name: 'max-price',
                                onChange: (param: string | number): void => {
                                    this.setState({
                                        maxPriceSelection: param
                                    });
                                },
                                type: 'combobox',
                                isChildrenToggle: false,
                                option: maxPrice,
                                value: maxPriceSelection as number,
                                className: 'max-price'
                            },
                            {
                                name: 'land-size',
                                type: 'range',
                                isChildrenToggle: false,
                                min: 0,
                                max: 100,
                                onChange: (start, end): void => {
                                    this.setState({ start, end });
                                },
                                value: {
                                    start: res.start as number,
                                    end: res.end as number
                                },
                                label: 'Luas Tanah (m2)'
                            }
                        ]}
                        onChangeFilterField={(): void => undefined}
                        onChangeSortingField={(): void => undefined}
                    />
                </CodingViewerDocsComponent>
            </>
        );
    }
}

export default CustomSearchFilterSectionComponent;
