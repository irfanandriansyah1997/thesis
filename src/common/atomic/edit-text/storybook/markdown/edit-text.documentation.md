# Edit Text Component

Edit text component is used to create interactive controls for forms in order to accept data from the user
This component can be displayed in several ways, depending on the type attribute

## Usage
The usage of this particular component is as follow :

### Import Component

```jsx
import EditTextComponent from '@99/component-ninetynine/lib/common/atomic/edit-text/edit-text.component';
```

### Component Implementation
```jsx
return (
    <EditTextComponent className="edit-text-class" id="make-this-unique" name="edit-text-primary"/>
    <EditTextComponent className="edit-text-class" id="also-make-this-unique" name="edit-text-secondary"/>
    <EditTextComponent.Addon name="left-addon">Rp</EditTextComponent.Addon>
    <EditTextComponent.Addon name="right-addon" position="right">%</EditTextComponent.Addon>
)
```

## Edit Text Props
Accessible property for Edit Text Component :

| Props | PropTypes | Required | Default | Deskripsi |
|:-------|:-----------|:---------:|-----------|-----------|
|**value**|`string / number`| ❌|-|Value which the field holds|
|**name**|`string`| ✅|-|name for the input field|
|**styling**|`primary` <br> `secondary`| ❌|`primary`| Styling for edit text |
|**type**|`text` <br> `number` <br> `password` <br> `email`| ❌|`text`| Input type|


## Edit Text Add On Props
Accessible property for Edit Text Add On Component :

| Props | PropTypes | Required | Default | Deskripsi |
|:-------|:-----------|:---------:|-----------|-----------|
|**font-size**|`number`| ❌|`13px`|Customizeable font size|
|**font-weight**|`number`| ❌|`400`|Customizeable font weight|
|**position**|`left` <br> `right`| ❌|`left`| Alignment for add on text|
|**children**|`node / string`| ✅|-| Add on content|