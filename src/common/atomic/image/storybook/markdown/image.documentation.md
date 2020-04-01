# Image Component

image component berguna apabila anda ingin menampilkan gambar baik sama sisi atau tidak

## Cara Penggunaan
berikut adalah cara penggunaan image component

### Import Component

```jsx
import ImageCimponent from '@99/component-ninetynine/lib/common/atomic/image/image.component';
```

### Implementasi Pada Method Render Component
```jsx
return (
    <ImageComponent
        width={40}
        height={20}
        type="square"
        src="image source"
        alt="label image"
        overflow="hidden"
        objectFit="cover"
    />
)
```

## Props
berikut adalah beberapa props yang tersedia pada image component

| Props | PropTypes | Required | Default | Deskripsi |
|:-------|:-----------|:---------:|-----------|-----------|
|**src**|```string```| ✅|-|Anda dapat mengisi url gambar yang akan anda tampilkan|
|**alt**|`string`| ✅|-|[Attribute alt](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img) pada img|
|**width**|`string / number`| ❌|-| Panjang gambar yang akan dirender oleh anda|
|height|`string / number`| ❌|-| Tinggi gambar yang akan dirender oleh anda|
|**objectFit**|`-moz-initial` <br> `inherit` <br> `initial` <br> `revert` <br> `unset` <br> `contain` <br> `cover` <br> `fill` <br> `none` <br> `scale-down`| ❌|`initial`| css tag `object-fit`|
|**overflow**|`-moz-initial` <br> `inherit` <br> `initial` <br> `revert` <br> `unset` <br> `contain` <br> `cover` <br> `fill` <br> `none` <br> `scale-down`| ❌|`initial`| css tag `overflow`|
|**type**|`circle` <br> `square` <br> `rounded` <br> `rounded-bottom` <br> `rounded-left` <br> `rounded-top` <br> `rounded-right`| ❌|`intial`| Bentuk image component|
