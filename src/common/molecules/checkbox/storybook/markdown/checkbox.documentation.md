# Checkbox Component

Checkbox component bertujuan untuk form input yang terdiri dari lebih dari 1 opsi dan kita dapat memilih lebih dari satu opsi tersebut

## Cara Penggunaan
berikut adalah cara penggunaan checkbox component

### Import Component

```jsx
import CheckboxComponent from '@99/component-ninetynine/lib/common/molecules/checkbox/checkbox.component';
```

### Implementasi Pada Method Render Component
```jsx
return (
    <CheckboxComponent 
        name="sample"
        styling="horizontal"
        onChange={(): void => {}}
        value={[]}
    >
        <CheckboxComponent.Item
            id="hello-1"
            value={1}
            label="Label 1"
        />
        <CheckboxComponent.Item
            id="hello-2"
            value={2}
            label="Label 2"
        />
        <CheckboxComponent.Item
            id="hello-3"
            value={3}
            label="Label 3"
        />
    </CheckboxComponent>
)
```

## Props
berikut adalah beberapa props yang tersedia pada checkbox component

| Props | PropTypes | Required | Default | Deskripsi |
|:-------|:-----------|:---------:|-----------|-----------|
|**name**|`string`| ✅|-|Anda diwajibkan menamakan checkbox dan harus identik tidak boleh sama satu dengan yang lainya.|
|**type**| `checkbox` <br> `radio` | ❌|`checkbox`| type bentuk checkbox component, seperti checkbox yang berupa check list atau radio button yang berupa opsi bulatan |
|**styling**|`horizontal` <br> `vertical`| ❌|`horizontal`| Mode render component horizontal atau vertical|
|**onChange**|`function`| ✅|-| Callback function yang digunakan apabila user mengganti opsi di checkbox component |
|**value**| `string[]` <br> `number[]`| ✅|`[]`| value component ini untuk mengatur aktif / tidak checkbox item|

<br>
# Checkbox Item Component

Checkbox item component adalah item yang akan dirender oleh checkbox component yang nantinya menjadi opsi input checkbox

## Props
berikut adalah beberapa props yang tersedia pada checkbox item component

| Props | PropTypes | Required | Default | Deskripsi |
|:-------|:-----------|:---------:|-----------|-----------|
|**label**|`string`| ❌|`undefined`|Label ini bertujuan untuk memberikan text pada checkbox item.|
|**id**| `string` | ✅| -| id checkbox item |
|**value**| `string[]` <br> `number[]`| ✅|-| value component ini untuk mengisi value pada checkbox item|