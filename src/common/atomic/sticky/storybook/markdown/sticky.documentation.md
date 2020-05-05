# Sticky Component

Sticky component is predominantly used for keeping something shown on the screen throughout scrolling.
It maintain their position on the screen, even as the user scrolls up or down the page.
A sticky element remains confined to the parent container it is in.

## Usage
The usage of this particular component is as follow :

### Import Component

```jsx
import StickyComponent from '@99/component-ninetynine/lib/common/atomic/sticky/sticky.component';
```

### Component Implementation
```jsx
return (
    <StickyComponent>This is a Sticky Component</StickyComponent>
    <StickyComponent top={20}>This is a Sticky Component with the top value provided</StickyComponent>
)
```

## Props
Below are available property for Sticky Component :

| Props | PropTypes | Required | Default | Deskripsi |
|:-------|:-----------|:---------:|-----------|-----------|
|**className**|```string```| ❌|undefined|Insert class name if needed, this is the value of an element's class attribute|
|**top**|`number`| ❌|0|Affects the vertical position of a positioned element, this specify the top edge of an element to a unit above the top edge of its nearest positioned ancestor|
