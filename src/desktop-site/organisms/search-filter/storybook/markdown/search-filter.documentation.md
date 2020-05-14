# R123 Search Filter Component

## How to use
Explanation on how to import and render R123 search filter component, including list of props.

### Import Component

```jsx
import SearchFilter from '@99/component-ninetynine/lib/desktop-site/organisms/search-filter/SearchFilter.component'
```

### Implementation In Component Render Method
```jsx
return (
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
                },
                label: 'Luas Tanah (m2)'
            },
            {
                name: 'building-size',
                onChange: (start, end): void => {
                    this.setState({ start, end });
                },
                type: 'range',
                isChildrenToggle: true,
                min: 0,
                max: 7000,
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
                onChange: (param: string | number): void => {
                    this.setState({
                        bathRoomSelection: param
                    });
                },
                type: 'checkbox',
                isChildrenToggle: true,
                option: bathRoom,
                value: bathRoomSelection as number,
                className: 'sold-out-property',
                label: 'Termasuk iklan terjual'
            }
        ]}
        sortingItem={{
            value: sortingSelection as number,
            sortingText: '',
            option: sortingItem,
            onChange: (param: string | number): void => {
                this.setState({
                    sortingSelection: param
                });
            }
        }}
        onChangeFilterField={(): void => undefined}
        onChangeSortingField={(): void => undefined}
    />
)
```

## Props

| Property | Type | Default | Description |
|-------|-----------|---------|-----------|
|**searchResultText**|string|-|Display search filter heading text|
|**hasChildrenToggle**|boolean|-|Whether to have closable child filter as collapsed content|
|**hasSortingFilter**|boolean|-|Whether to have sorting filter, if `true` sorting filter section will be displayed in the search filter|
|**filterItem**|`object[]`|-|Search filter content|

## Filter Items Props

| Property | Type | Default | Description |
|-------|-----------|---------|-----------|
|**name**|string|-|Additional text (mortgage) at the top part of card component|
|**onChange**|`(event) => void`|-|Callback function executed to make dropdown content visible|
|**type**|`combobox | range | checkbox`|-|Type of the search filter item|
|**isChildrenToggle**|boolean|-|If `true`, the filter item will be displayed as collapsed content|
|**option**|`object[]`|-|Filter item's content|
|**value**|`string[] | number[]`|-|Set the active item of filter item|
|**className**|string|-|ClassName of filter item|
|**label**|string|-|Text label for filter item|

## Sorting Filter Props

| Property | Type | Default | Description |
|-------|-----------|---------|-----------|
|**value**|`string[] | number[]`|-|Set the active item of sorting filter|
|**sortingText**|string|-|Sorting filter text label|
|**option**|`object[]`|-|Content of sorting filter item|
|**onChange**|`(event) => void`|-|Callback function executed to make dropdown content visible|