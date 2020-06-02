# Carousel Component

## How to use
Explanation on how to import and render map component, including list of props.

### Import Component

```jsx
import MapComponent from '@99/component-ninetynine/lib/common/molecules/map/map.component'
```

### Implementation In Component Render Method
```jsx

return (
    <MapComponent
        id="Map"
        location={{ lat: -6.300641, lng: 106.814095 }}
        width="750px"
        height="400px"
        mapKey=""
    />
)
```

## Props

| Property | Type | Default | Description |
|-------|-----------|---------|-----------|
|**id**|string||Map id|
|**width**|string||Width of the map container. If not defined, the map will collapse to `0` width|
|**height**|string||Height of the map container. If not defined, the map will collapse to `0` height|
|**mapKey**|number||Google maps api key|
|**location**|object|-|`lat`: Latitude to place the marker component, `lng`: Longitude to place the marker component|
|**onClick**|`(event) => void`||The method to call when map is clicked|
