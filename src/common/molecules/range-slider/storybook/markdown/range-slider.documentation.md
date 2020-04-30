# Range Slider Component

Range slider component adalah 2 slider yang adalah sebuah input dapat mengatur jarak minimum dan maksimum (luas tanah, mata uang, dll) dengan cara melakukan drag salah satu pointer

## Cara Penggunaan
berikut adalah cara penggunaan ramge slider component

### Import Component

```jsx
import RangeSliderComponent from '@99/component-ninetynine/lib/common/molecules/range-slider/range-slider.component';
```

### Implementasi Pada Method Render Component
```jsx
return (
    <RangeSlider 
        max={100}
        min={0}
        step={1}
        onChange={(start, end) => {}}
        value={{
            start: 20,
            end: 80
        }}
    />
)
```


## Props
berikut adalah beberapa props yang tersedia pada ramge slider component

| Props | PropTypes | Required | Default | Deskripsi |
|:-------|:-----------|:---------:|-----------|-----------|
|**max**|`number`| ✅|-|batas maksimum range slider.|
|**min**| `number`| ✅|-| batas minimum range slider. |
|**step**|`number`| ❌|`1`| loncatan step setiap range slider digeser |
|**label**|`object`| ❌|-| label component untuk memberitahu batas maksimum dan minimum |
|**value**| `object`| ✅|`[]`| value component ini untuk mengatur rentang min & maksimum pada component ini |
|**onChange**| `function`| ✅|`[]`| callback function yang akan diinvoke apabila terdapat perubahaan value|
