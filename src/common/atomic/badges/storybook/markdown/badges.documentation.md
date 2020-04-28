# Badges Component

Badges komponen biasa dipakai untuk memberi informasi tertentu di dalam website dengan bentuk bulat maupun persegi

## Cara Penggunaan
berikut adalah cara penggunaan badges component

### Import Component

```jsx
import BadgesComponent from '@99/component-ninetynine/lib/common/atomic/badges/badges.component';
```

### Implementasi Pada Method Render Component
```jsx
return (
    <BadgesComponent
        color="heading"
        rounded={true}
        transparent={false}
        size="default"
    >
        Ini Badges
    </BadgesComponent>
)
```

## Props
berikut adalah beberapa props yang tersedia pada badges component

| Props | PropTypes | Required | Default | Deskripsi |
|:-------|:-----------|:---------:|-----------|-----------|
|**color**|`Pallete Warna`| ❌|-|Anda dapat menggubah warna  secara spesifik.|
|**rounded**|`boolean`| ❌|`false`| Apakah badges dibuat oval atau persegi|
|**transparent**|`boolean`| ❌|`false`| Transparan warna latar badges komponen |
|**size**| `big` <br> `default` <br> `small`| ❌|`default`| Ukuran badges|
|**onCloseBadges**|`function`| ❌|`undefined`| Callback function untuk mengatur apakah button close pada badges akan ditampilkan atau tidak |
