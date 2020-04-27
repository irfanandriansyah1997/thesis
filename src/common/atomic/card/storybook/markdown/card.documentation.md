# Card Component

## How to use
Explanation on how to import and render text component, including list of props.

### Import Component

```jsx
import CardComponent from '@99/component-ninetynine/lib/common/atomic/card/card.component'
```

### Implementation In Component Render Method
```jsx
return (
    <CardComponent>Content of the card</CardComponent>
)
```

## Props

| Property | Type | Default | Description |
|-------|-----------|---------|-----------|
|**className**|string|-|className of card container|
|**boxShadow**|`default1`, `default2`, `elevateXs`, `elevateSm`, `elevateMd`, `elevateLg`, `elevateXl`, `r123`||Add box-shadow style to the card container|
|**children**|node / string||Content of the card|
|**size**|number / `auto`|`auto`|Size of the card|