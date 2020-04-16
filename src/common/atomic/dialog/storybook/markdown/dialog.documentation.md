# Dialog Component

## How to use
Explanation on how to import and render dialog component, including list of props.

### Import Component

```jsx
import DialogComponent from '@99/component-ninetynine/lib/common/atomic/dialog/dialog.component'
```

### Implementation In Component Render Method
```jsx
return (
    <DialogComponent>Content</DialogComponent>
)
```

## Props

| Property | Type | Default | Description |
|-------|-----------|---------|-----------|
|**children**|node / string||Children of the Dialog, usually the included sub-components| 
|**show**|boolean||If `true`, the Dialog is open|
|**type**|`popup` or `fullscreen`|`popup`|Determine the type of the dialog|
|**className**|string|-|ClassName of container|
|**animation**|string|`fade-scale-center`|Whether to show the Dialog with animation|
|**onCloseDialog**|function||Callback fired when the component requests to be closed|