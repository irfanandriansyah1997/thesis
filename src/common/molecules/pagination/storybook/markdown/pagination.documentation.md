# Pagination Component

pagination component is used to navigate between a set of search results.

## How to use
The usage of this particular component is as follow :

### Import Component

```jsx
import PaginationComponent from '@99/component-ninetynine/lib/common/molecules/pagination/pagination.component'
```

### Implementation
```jsx

return (
    <PaginationComponent
        page={2}
        rowCount={5}
        totalPage={10}
        onPageChange={(): void => undefined}
    />
)
```

## Props
Accessible property for Pagination Component :

| Props | PropTypes | Required | Default | Deskripsi |
|:-------|:-----------|:---------:|-----------|-----------|
|**className**|`string`| ❌|undefined|Insert class name if needed, this is the value of an element's class attribute|
|**page**|`number`| ✅|-|number of page|
|**totalPage**|`number`| ❌|`0`| The range of pages displayed |
|**pageRange**|`number`| ❌|`5`| The range of pages displayed|
|**marginPageDisplay**|`number`| ❌|`0`| The number of pages to display for margins|
|**rowCount**|`number`| ✅|-|Counts of the row |
|**onPageChange**|`(selectedItem: { selected: number }) => void`| ✅|-|The method to call when a page is clicked|
