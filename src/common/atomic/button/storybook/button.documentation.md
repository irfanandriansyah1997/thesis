# Button Component

## Cara Penggunaan
Berikut adalah cara penggunaan button component

```jsx
// Import Component
import Button from 'button.component.js'

// Implementasi di method render
return (
    <Button size="small" theme="primary">Primary</Button>
)
```

## Props
Berikut adalah dokumentasi props component

| Props | PropTypes | Default | Deskripsi |
|-------|-----------|---------|-----------|
|size|String / Number||Anda dapat mengatur ukuran button sebagai `big`, `small` atau angka|
|theme|String|`default`|Dapat diatur sebagai `primary`, `secondary`, `success`, `warning`, `danger` dan `info`|
|outline|Boolean|`false`|Opsi untuk memberikan border pada button|
|icon|ReactNode|-|Menambahkan icon pada button|
