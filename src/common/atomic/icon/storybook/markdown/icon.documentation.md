# Icon Component

Dalam icon component anda dapat memilih salah satu dari 2 icon yaitu [Material Icon](https://material.io/icons/), Rumah123 Icon atau [Urbanindo Icon](https://s3.amazonaws.com/public.urbanindo.com/fonts/UrbanIndoIcons-20170831060809/index.html)

## Cara Penggunaan
berikut adalah cara penggunaan icon component

### Import Component

```jsx
import IconComponent from '@99/component-ninetynine/lib/common/atomic/icon/icon.component'
```

### Implementasi Pada Method Render Component
```jsx
return (
    <IconComponent
        color="primary"
        size="default"
    >
        edit
    </IconComponent>
)
```

## Props
berikut adalah beberapa props yang tersedia pada icon component

| Props | PropTypes | Required | Default | Deskripsi |
|:-------|:-----------|:---------:|-----------|-----------|
|**color**|`Pallete Warna`| ✅|-|Anda dapat menggubah warna  secara spesifik.|
|**size**|`number / 'big' / 'default' / 'small'`| ✅|-|Anda dapat mengatur ukuran font size di icon.|
|**children**|`string warna`| ✅|-| Icon yang tersedia di material icon, urbanindo icon dan rumah123 icon|


## Notes
- untuk warna anda dapat mengacu pada file [color.constant.ts](https://github.com/urbanindo/style-guide/blob/master/src/shared/constant/color.constant.ts)