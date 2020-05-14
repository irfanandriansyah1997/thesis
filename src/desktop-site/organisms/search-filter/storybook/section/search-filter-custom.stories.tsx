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
    `    sortingItem={${props.sortingItem}}\n` +
    `    hasSortingFilter=${props.hasSortingFilter}\n` +
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

const bedRoom = [
    {
        id: '1',
        value: '1',
        label: 'Kamar Tidur'
    },
    {
        id: '2',
        value: '2',
        label: '1+'
    },
    {
        id: '3',
        value: '3',
        label: '2+'
    },
    {
        id: '4',
        value: '4',
        label: '3+'
    },
    {
        id: '5',
        value: '5',
        label: '4+'
    }
];

const bathRoom = [
    {
        id: '1',
        value: '1',
        label: 'Kamar Mandi'
    },
    {
        id: '2',
        value: '2',
        label: '1+'
    },
    {
        id: '3',
        value: '3',
        label: '2+'
    },
    {
        id: '4',
        value: '4',
        label: '3+'
    },
    {
        id: '5',
        value: '5',
        label: '4+'
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
class DefaultSearchFilterSectionComponent extends React.PureComponent<
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
            bedRoomSelection: 1,
            bathRoomSelection: 1,
            sortingSelection: 1,
            start: 0,
            end: 100,
            checkboxSelection: []
        };
    }

    render(): ReactNode {
        const {
            subChannelSelection,
            propertyTypeSelection,
            minPriceSelection,
            maxPriceSelection,
            bedRoomSelection,
            bathRoomSelection,
            sortingSelection,
            checkboxSelection,
            ...res
        } = this.state;
        return (
            <>
                <HeadingDocsComponent>Usage</HeadingDocsComponent>
                <TextDocsComponent>
                    Search filter component with search result text, children
                    toggle and sorting filter
                </TextDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={docs({
                        searchResultText: 'Rumah dijual di Jakarta',
                        hasChildrenToggle: true,
                        hasSortingFilter: true,
                        sortingItem: { value: 1, sortingText: '', option: [] },
                        filterItem: [],
                        onChangeFilterField: (): void => {},
                        onChangeSortingField: (): void => {}
                    })}
                >
                    <SearchFilter
                        searchResultText="Rumah dijual di Jakarta"
                        hasChildrenToggle
                        hasSortingFilter
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
                            },
                            {
                                name: 'building-size',
                                type: 'range',
                                isChildrenToggle: true,
                                min: 0,
                                max: 100,
                                onChange: (start, end): void => {
                                    this.setState({ start, end });
                                },
                                value: {
                                    start: res.start as number,
                                    end: res.end as number
                                },
                                label: 'Luas Bangunan (m2)'
                            },
                            {
                                name: 'bedroom',
                                onChange: (param: string | number): void => {
                                    this.setState({
                                        bedRoomSelection: param
                                    });
                                },
                                type: 'combobox',
                                isChildrenToggle: true,
                                option: bedRoom,
                                value: bedRoomSelection as number,
                                className: 'bedroom'
                            },
                            {
                                name: 'bathroom',
                                onChange: (param: string | number): void => {
                                    this.setState({
                                        bathRoomSelection: param
                                    });
                                },
                                type: 'combobox',
                                isChildrenToggle: true,
                                option: bathRoom,
                                value: bathRoomSelection as number,
                                className: 'bathroom'
                            },
                            {
                                name: 'sold-out-property',
                                onChange: (
                                    param: (string | number)[]
                                ): void => {
                                    this.setState(
                                        { checkboxSelection: param },
                                        (): void => console.debug(this.state)
                                    );
                                },
                                type: 'checkbox',
                                isChildrenToggle: true,
                                className: 'sold-out-property',
                                label: 'Termasuk iklan terjual',
                                value: (checkboxSelection as unknown) as (
                                    | string
                                    | number
                                )[],
                                isChecked: false
                            }
                        ]}
                        sortingItem={{
                            value: sortingSelection as number,
                            sortingText: '',
                            option: sortingItem
                        }}
                        onChangeFilterField={(): void => undefined}
                        onChangeSortingField={(
                            param: string | number
                        ): void => {
                            this.setState({
                                sortingSelection: param
                            });
                        }}
                    />
                </CodingViewerDocsComponent>
            </>
        );
    }
}

export default DefaultSearchFilterSectionComponent;
