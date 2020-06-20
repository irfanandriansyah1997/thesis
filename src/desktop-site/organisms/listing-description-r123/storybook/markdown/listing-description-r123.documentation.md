# Listing Description R123 Component

## How to use
Explanation on how to import and render listing description component, including list of props.

### Import Component

```jsx
import ListingDescriptionR123 from '@99/component-ninetynine/lib/desktop-site/organisms/listing-description-r123/ListingDescriptionR123.component'
```

### Implementation In Component Render Method
```jsx

return (
    <ListingDescriptionR123
        map={{
            id: 'map',
            location: { lat: -6.300641, lng: 106.814095 },
            width: '750px',
            height: '320px',
            mapKey: ''
        }}
        content={{
            title: 'Listing title',
            description: 'Listing description'
        }}
        contentToggleSelector={{
            onCLose: 'Menampilkan lebih banyak',
            onExpand: 'Menampilkan lebih sedikit'
        }}
    />
)
```

## Props

| Property | Type | Default | Description |
|-------|-----------|---------|-----------|
|**id**|string||Id for map component|
|**location**|object|-|`lat`: Latitude to place the marker component, `lng`: Longitude to place the marker component|
|**width**|string||Width of the map container. If not defined, the map will collapse to `0` width|
|**height**|string||Height of the map container. If not defined, the map will collapse to `0` height|
|**title**|string||Title of listing description content|
|**description**|string|-|Description detail of listing description content|
|**onCLose**|string||Toggle selector text when description detail collpased|
|**onExpand**|string||Toggle selector text when description detail expanded|
