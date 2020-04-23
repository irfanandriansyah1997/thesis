# Tabs Component

## How to use
Explanation on how to import and render dialog component, including list of props.

### Import Component

```jsx
import TabsComponent from '@99/component-ninetynine/lib/common/molecules/tabs/tabs.component'
```

### Implementation In Component Render Method
```jsx
const { Item } = TabsComponent;

return (
    <TabsComponent>
        <Item tab="Tab1">
            <TextComponent>
                Content of tab One
            </TextComponent>
        </Item>
    </TabsComponent>
)
```

## Props

| Property | Type | Default | Description |
|-------|-----------|---------|-----------|
|**activeIndex**|number||Current TabsComponent.Item's index|
|**tab**|ReactNode / string /element|-|Show text in TabsComponent.Item|
|**children**|ReactNode / string /element||Content in tabs|
|**onTabChange**|function|-|Callback executed when active tab is changed|