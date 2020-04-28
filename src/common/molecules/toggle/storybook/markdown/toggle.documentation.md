# Toggle Component

## How to use
Explanation on how to import and render toggle component, including list of props.

### Import Component

```jsx
import ToggleComponent from '@99/component-ninetynine/lib/common/molecules/toggle/toggle.component'
```

### Implementation In Component Render Method
```jsx
return (
    <ToggleComponent
        selector="Toggle selector"
    >
        Content
    </AccordionComponent>
)
```

## Props

| Property | Type | Default | Description |
|-------|-----------|---------|-----------|
|**children**|node / string||The content node to be collapsed|
|**selector**|node / string|-|Allow to customize title of the selector|
|**show**|boolean|`false`|Forced render of content, instead of rendering after clicking on selector|
|**onToggleExpand**|function|`undefined`|Callback function executed when active selector is changed|
|**onComponentResize**|function|`undefined`|Callback function executed when toggle content component is resize|
|**collapsedHeight**|number|0|The height of the accordion content when collapsed|
|**gradient**|boolean|`false`|Whether to show the collapsed content with gradient effect|
|**selectorPosition**|`bottom`<br> `top`|`bottom`|Toggle content position if selector toggle active|