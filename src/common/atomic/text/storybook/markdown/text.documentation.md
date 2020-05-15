# Text Component

## How to use
Explanation on how to import and render text component, including list of props.

### Import Component

```jsx
import TextComponent from '@99/component-ninetynine/lib/common/atomic/text/text.component'
```

### Implementation In Component Render Method
```jsx
return (
    <TextComponent tag="h1" styling="heading-1">h1 Text heading</TextComponent>
)
```

## Props

| Property | Type | Default | Description |
|-------|-----------|---------|-----------|
|**tag**|`h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `p`, `span`|-|Set text as HTML element|
|**align**|`left`, `center`, `right`|`left`|Text alignment|
|**color**|string|`undefined`|Adding color to text. See [color.constant.ts](https://github.com/urbanindo/style-guide/blob/master/src/shared/constant/color.constant.ts) for color reference|
|**styling**|`heading-1`, `heading-2`, `heading-3`,<br> `heading-4`, `heading-5`, `heading-6`, `featured`, `meta`, `caption`, `tiny`, `default`|`default`|Text styling to match the font styling of a certain element (e.g. heading) when unable to use the associated HTML element|
|**fontFamily**|`primary`, `secondary`|`primary`|Set the font family|
|**fontWeight**|number: `300`, `400`, `500`, `600`, `700`|`400`|Change the weight (boldness) of text|
