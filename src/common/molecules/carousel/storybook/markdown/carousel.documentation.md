# Carousel Component

## How to use
Explanation on how to import and render carousel component, including list of props.

### Import Component

```jsx
import CarouselComponent from '@99/component-ninetynine/lib/common/molecules/carousel/carousel.component'
```

### Implementation In Component Render Method
```jsx

return (
    <CarouselComponent
        item={carouselItem}
        onChangeActive={(): void => undefined}
    />
)
```

## Carousel Props

| Property | Type | Default | Description |
|-------|-----------|---------|-----------|
|**className**|string||ClassName of carousel|
|**item**|string||ClassName of carousel|
|**onChangeActive**|function||Function called after the current index changes|
|**scrollEffect**|boolean|`false`|Whether to give scroll transition effect|

# Carousel Item Props

| Property | Type | Default | Description |
|-------|-----------|---------|-----------|
|**src**|string|-|The address of the carousel image to be displayed|
|**alt**|string|-|[alt attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img), defines the alternative text describing the image|

# Carousel Indicator Props

| Property | Type | Default | Description |
|-------|-----------|---------|-----------|
|**previous**|string||Icon text for prev button|
|**next**|string|-|Icon text for next button|