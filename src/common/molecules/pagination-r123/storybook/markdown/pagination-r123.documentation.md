# Carousel Component

## How to use
Explanation on how to import and render r123 pagination component, including list of props.

### Import Component

```jsx
import PaginationR123Component from '@99/component-ninetynine/lib/common/molecules/pagination-r123/pagination-r123.component'
```

### Implementation In Component Render Method
```jsx

return (
    <PaginationR123Component
        page={1}
        totalPage={30}
        pageRange={2}
        onPageChange={(): void => undefined}
    />
)
```

## Props

| Property | Type | Default | Description |
|-------|-----------|---------|-----------|
|**page**|number||Set page as the intial page selected|
|**totalPage**|number||The total number of pages.|
|**pageRange**|number||The range of pages displayed|
|**marginPageDisplay**|number||The number of pages to display for margins|
|**paginationSummary**|string|-|Add pagination summary|
|**onPageChange**|`(selectedItem: { selected: number }) => void`||The method to call when a page is clicked|
