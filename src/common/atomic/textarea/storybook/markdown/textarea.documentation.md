# TextArea Component

TextArea component is used to create interactive controls for forms in order to accept data from the user
This component can be displayed in several ways, depending on the type attribute

## Usage

The usage of this particular component is as follow :

### Import Component

```jsx
import TextAreaComponent from '@99/component-ninetynine/lib/common/atomic/textarea/textarea.component';
```

### Component Implementation

```jsx
return (
    <TextAreaComponent className="textarea-class" id="make-this-unique" name="text-primary"/>
    <TextAreaComponent className="textarea-class" id="also-make-this-unique" name="text-secondary"/>
)
```

## TextArea Props

Accessible property for TextArea Component :

| Props | PropTypes | Required | Default | Deskripsi |
|:-------|:-----------|:---------:|-----------|-----------|
|**value**|`string / number`| ❌|-|Value which the field holds|
|**name**|`string`| ✅|-|name for the input field|
|**styling**|`primary` <br> `secondary`| ❌|`primary`| Styling for edit text |
