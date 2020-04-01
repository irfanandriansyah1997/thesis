# Avatar Component

Avatar component berguna apabila anda ingin menampilkan gambar yang berukuran sama sisi yang biasa digunakan untuk photo user

## Cara Penggunaan
berikut adalah cara penggunaan avatar component

### Import Component

```jsx
import AvatarComponenent from '@99/component-ninetynine/lib/common/atomic/avatar/avatar.component';
```

### Implementasi Pada Method Render Component
```jsx
return (
    <AvatarComponent
        size={40}
        type="square"
        src="image source"
        alt="label image"
        objectFit="cover"
    />
)
```

## Props
berikut adalah beberapa props yang tersedia pada avatar component

| Props | PropTypes | Required | Default | Deskripsi |
|:-------|:-----------|:---------:|-----------|-----------|
|**src**|```string```| ✅|-|Anda dapat mengisi url gambar yang akan anda tampilkan|
|**alt**|`string`| ✅|-|[Attribute alt](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img) pada img|
|**size**|`string / number`| ✅|-| Ukuran gambar yang akan dirender oleh anda|
|**objectFit**|`-moz-initial` <br> `inherit` <br> `initial` <br> `revert` <br> `unset` <br> `contain` <br> `cover` <br> `fill` <br> `none` <br> `scale-down`| ❌|`initial`| css tag `object-fit`|
|**type**|`circle` <br> `square` <br> `rounded` <br> `rounded-bottom` <br> `rounded-left` <br> `rounded-top` <br> `rounded-right`| ❌|`intial`| Bentuk avatar component|
