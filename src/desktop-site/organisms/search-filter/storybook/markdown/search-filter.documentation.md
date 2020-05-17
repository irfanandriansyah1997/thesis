# R123 Search Filter Component

## How to use
Explanation on how to import and render R123 search filter component, including list of props.

### Import Component

```jsx
import SearchFilter from '@99/component-ninetynine/lib/desktop-site/organisms/search-filter/SearchFilter.component'
```

### Implementation In Component Render Method
```jsx
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
return (
    <CardComponent
        boxShadow="r123"
        style={{ width: '100%', padding: '16px' }}
    >
        <SearchFilter
            searchResultText="Rumah dijual di Jakarta"
            hasChildrenToggle
            hasSortingFilter
            filterItem={[
                {
                    name: 'sub-channel',
                    type: 'combobox',
                    isChildrenToggle: false,
                    option: subChannel,
                    value: subChannelSelection as number,
                    className: 'sub-channel'
                },
                {
                    name: 'property-type',
                    type: 'combobox',
                    isChildrenToggle: false,
                    option: propertyType,
                    value: propertyTypeSelection as number,
                    className: 'property-type'
                },
                {
                    name: 'min-price',
                    type: 'combobox',
                    isChildrenToggle: false,
                    option: minPrice,
                    value: minPriceSelection as number,
                    className: 'min-price'
                },
                {
                    name: 'max-price',
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
                    max: 7000,
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
                    max: 7000,
                    value: {
                        start: res.start as number,
                        end: res.end as number
                    },
                    label: 'Luas Bangunan (m2)'
                },
                },
                {
                    name: 'bedroom',
                    type: 'combobox',
                    isChildrenToggle: true,
                    option: bedRoom,
                    value: bedRoomSelection as number,
                    className: 'bedroom'
                },
                {
                    name: 'bathroom',
                    type: 'combobox',
                    isChildrenToggle: true,
                    option: bathRoom,
                    value: bathRoomSelection as number,
                    className: 'bathroom'
                },
                {
                    name: 'sold-out-property',
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
                option: sortingItem
            }}
            onChangeFilterField={(key, value): void => {
                if (key === 'sub-channel') {
                    this.setState({ subChannelSelection: value });
                }
                if (key === 'property-type') {
                    this.setState({ propertyTypeSelection: value });
                }
                if (key === 'min-price') {
                    this.setState({ minPriceSelection: value });
                }
                if (key === 'max-price') {
                    this.setState({ maxPriceSelection: value });
                }
                if (key === 'land-size') {
                    this.setState({
                        start: value[0],
                        end: value[1]
                    });
                }
                if (key === 'building-size') {
                    this.setState({
                        start: value[0],
                        end: value[1]
                    });
                }
                if (key === 'bedroom') {
                    this.setState({ bedRoomSelection: value });
                }
                if (key === 'bathroom') {
                    this.setState({ bathRoomSelection: value });
                }
                if (key === 'sold-out') {
                    this.setState({ checkboxSelection: value });
                }
            }}
            onChangeSortingField={(param: string | number): void => {
                    this.setState({
                        sortingSelection: param
                    });
                }}
        />
    </CardComponent>
)
```

## Props

| Property | Type | Default | Description |
|-------|-----------|---------|-----------|
|**searchResultText**|string|-|Display search filter heading text|
|**hasChildrenToggle**|boolean|-|Whether to have closable child filter as collapsed content|
|**hasSortingFilter**|boolean|-|Whether to have sorting filter, if `true` sorting filter content will be displayed in the search filter|
|**sortingItem**|object|-|Search sorting filter content|
|**filterItem**|`object[]`|-|Search filter content|
|**onChangeSortingField**|`(value: string | number) => void`|-|Callback function executed when sorting filter item changed|
|**onChangeFilterField**|`(key: string, value: string`<br>`| number`<br>`| (string | number)[]) => void`|-|Callback function executed when (combobox/range/checkbox) filter item changed|

## Filter Items Props

| Property | Type | Default | Description |
|-------|-----------|---------|-----------|
|**name**|string|-|Name of the filter item|
|**type**|`combobox | range | checkbox`|-|Type of the search filter item|
|**isChildrenToggle**|boolean|-|If `true`, the filter item will be displayed as collapsed content|
|**option**|`object[]`|-|Filter item's content|
|**value**|`string[] | number[]`|-|Set the active item of (combobox) filter item|
|**className**|string|-|ClassName of filter item|
|**label**|string|-|Text label for (checkbox) filter item|

## Sorting Filter Props

| Property | Type | Default | Description |
|-------|-----------|---------|-----------|
|**value**|`string[] | number[]`|-|Set the active item of sorting filter|
|**sortingText**|string|-|Sorting filter text label|
|**option**|`object[]`|-|Content of sorting filter item|