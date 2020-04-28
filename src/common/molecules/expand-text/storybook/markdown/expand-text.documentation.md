# Expand Text Component

Expand text component digunakan untuk menampilkan dan menyembunyikan text berdasarkan tinggi yang telah diatur

## Cara Penggunaan
berikut adalah cara penggunaan expand text component

### Import Component

```jsx
import ExpandTextComponent from '@99/component-ninetynine/lib/common/molecules/expand-text/expand-text.component';
```

### Implementasi Pada Method Render Component
```jsx
return (
    <ExpandComponent 
        color="primary"
        collapsedHeight="100"
        textToggleButton={{
            onCLose: 'Buka lebih detail',
            onExpand: 'Tutup Deskripsi'
        }}
    >
        ....content....
    </ExpandComponent>
)
```

## Props
berikut adalah beberapa props yang tersedia pada expand text component

| Props | PropTypes | Required | Default | Deskripsi |
|:-------|:-----------|:---------:|-----------|-----------|
|**show**|`boolean`| ❌|`false`|Inisialisasi apakah expand text akan terbuka atau tertutup pada awal component di render|
|**collapsedHeight**|`number`| ✅|-| Tinggi maksimal apabila expand text component diciutkan|
|**onToggleExpand**|`function`| ✅|-| Callback function yang akan di invoke apabila expand text berubah ukuran |
|**color**|`Pallete Warna`| ❌|-|Anda dapat menggubah warna  secara spesifik.|
|**textToggleButton**|`Object`| ❌|| Text toggle apabila sedang dibuka dan diciutkan|
|**showArror**|`boolean`| ❌|`false`| Apakah text expand akan menampilkan icon panah di toggle component |
