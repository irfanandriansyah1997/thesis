# Link Component

## How to use
Import and render link component

### Import Component

```jsx
import LinkComponent from '@99/component-ninetynine/lib/common/atomic/link/link.component'
```

### Implementation In Component Render Method
```jsx
return (
    <LinkComponent>Link</LinkComponent>
)
```

## Props

| Property | Type | Default | Description |
|-------|-----------|---------|-----------|
|**color**|string|`primary(#216bff)`|The color of the link. See [color.constant.ts](https://github.com/urbanindo/style-guide/blob/master/src/shared/constant/color.constant.ts) for color reference|
|**noUnderline**|boolean|`false`|If `true`, link will be displayed without underline|
|**href**|string||Apply href attribute to link component|
|**icon**|ReactNode|-|Add icon to link component|
|**onClick**|`(event) => void`|-|Set the handler to handle `click` event|
