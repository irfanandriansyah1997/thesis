# Sticky Component

Sticky component is predominantly used for keeping something shown on the screen throughout scrolling.
It maintain their position on the screen, even as the user scrolls up or down the page.
A sticky element remains confined to the parent container it is in.

## Cara Penggunaan
The usage of this particular component is as follow :

### Import Component

```jsx
import StickyComponent from '@99/component-ninetynine/lib/common/atomic/sticky/sticky.component';
```

### Implementasi Pada Method Render Component
```jsx
return (
    <StickyComponent>This is a Sticky Component</StickyComponent>
)
```

## Props
Only className (as string) is available for the props.