# Radio Button Component

Radio Button component bertujuan untuk form input yang terdiri dari lebih dari 1 opsi dan kita dapat memilih lebih dari satu opsi tersebut

## Cara Penggunaan
berikut adalah cara penggunaan radio button component

### Import Component

```jsx
import RadioButtonComponent from '@99/component-ninetynine/lib/common/molecules/radio-button/radio-button.component';
```

### Implementasi Pada Method Render Component
```jsx
return (
    <RadioButtonComponent 
        name="sample"
        styling="horizontal"
        onChange={(): void => {}}
        value={1}
    >
        <RadioButtonComponent.Item
            id="hello-1"
            value={1}
            label="Label 1"
        />
        <RadioButtonComponent.Item
            id="hello-2"
            value={2}
            label="Label 2"
        />
        <RadioButtonComponent.Item
            id="hello-3"
            value={3}
            label="Label 3"
        />
    </RadioButtonComponent>
)
```

## Props
berikut adalah beberapa props yang tersedia pada radio button component

| Props | PropTypes | Required | Default | Deskripsi |
|:-------|:-----------|:---------:|-----------|-----------|
|**name**|`string`| ✅|-|Anda diwajibkan menamakan radio button dan harus identik tidak boleh sama satu dengan yang lainya.|
|**type**| `checkbox` <br> `radio` | ❌|`radio`| type bentuk checkbox component, seperti checkbox yang berupa check list atau radio button yang berupa opsi bulatan |
|**styling**|`horizontal` <br> `vertical`| ❌|`horizontal`| Mode render component horizontal atau vertical|
|**onChange**|`function`| ✅|-| Callback function yang digunakan apabila user mengganti opsi di radio button component |
|**value**| `string` <br> `number`| ❌|`undefined`| value component ini untuk mengatur aktif / tidak radio button item|

<br>
# Radio Button Item Component

Radio Button item component adalah item yang akan dirender oleh radio button component yang nantinya menjadi opsi input radio button

## Props
berikut adalah beberapa props yang tersedia pada radio button item component

| Props | PropTypes | Required | Default | Deskripsi |
|:-------|:-----------|:---------:|-----------|-----------|
|**label**|`string`| ❌|`undefined`|Label ini bertujuan untuk memberikan text pada radio button item.|
|**id**| `string` | ✅| -| id radio button item |
|**value**| `string[]` <br> `number[]`| ✅|-| value component ini untuk mengisi value pada radio button item|