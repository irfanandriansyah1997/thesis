# Accordion Component

## How to use
Explanation on how to import and render dialog component, including list of props.

### Import Component

```jsx
import AccordionComponent from '@99/component-ninetynine/lib/common/molecules/accordion/accordion.component'
```

### Implementation In Component Render Method
```jsx
return (
    <AccordionComponent selector="Toggle selector">Content</AccordionComponent>
)
```

## Props

| Property | Type | Default | Description |
|-------|-----------|---------|-----------|
|**children**|node / string||The content node to be collapsed|
|**selector**|node / string|-|Allow to customize title of the selector|
|**show**|boolean|`false`|Forced render of content, instead of rendering after clicking on selector|
|**onToggleSelector**|function||Callback function executed when active selector is changed|
|**collapsedHeight**|string|`'0px'`|The height of the accordion content when collapsed|
|**gradient**|boolean|`false`|Whether to show the collapsed content with gradient effect|
|**showArrow**|boolean|`false`|If `true`, selector will have arrow icon|