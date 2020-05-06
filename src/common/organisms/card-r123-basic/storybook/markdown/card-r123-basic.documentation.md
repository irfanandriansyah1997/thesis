# Basic R123 Card Component

## How to use
Explanation on how to import and render basic R123 card component, including list of props.

### Import Component

```jsx
import CardR123Basic from '@99/component-ninetynine/lib/common/organisms/card-r123-basic/CardR123Basic.component'
```

### Implementation In Component Render Method
```jsx
return (
    <CardR123Basic
        media={{
            images: 'image.png',
            alt: 'Images 1'
        }}
        content={{
            mortgageLinkText: 'Simulasi KPR',
            title: 'Ready Rumah Murah Di Sukun Perum Tirtasari Malang, Sukun, Malang',
            installment: 'Cicilan : Rp. 7,46 Jt/bulan',
            address: 'Malang',
            priceTag: 'Rp 2,1 M',
            landSize: 'Luas tanah: 339 m2',
            buildingSize: 'Luas bangunan: 700 m2',
            propertyType: 'Rumah',
            attribute: [
                { icon: <BathroomIcon />, value: '2' },
                { icon: <BedroomIcon />, value: '3' },
                { icon: <CarparkIcon />, value: '1' }
            ]
        }}
        action={{
            onClickSave: (): void => undefined,
            onClickViewDetail: (): void => undefined
        }}
        link="https://www.rumah123.com/"
    />
)
```

## Media Props

| Property | Type | Default | Description |
|-------|-----------|---------|-----------|
|**images**|string|-|The address of the media image to be displayed|
|**alt**|string|-|[alt attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img), defines the alternative text describing the image|
|**onClick**|`(event) => void`|-|Set the handler to handle `click` event|

## Content Props

| Property | Type | Default | Description |
|-------|-----------|---------|-----------|
|**mortgageLinkText**|string|-|Additional text (mortgage) at the top part of card component|
|**title**|string|-|Title of the listed property|
|**installment**|string|-|Text to define installment|
|**address**|string|-|Address of the listed property|
|**priceTag**|string|-|Price of the listed property|
|**landSize**|string|-|Land size of the listed property|
|**buildingSize**|string|-|Building size of the listed property|
|**propertyType**|string|-|Type of the listed property|
|**attribute**|`[icon: ReactNode | value: string | alt: string]`|-|Add property attribute, e.g. bedroom, bathroom, carpark, etc|

## Action & Link Props

| Property | Type | Default | Description |
|-------|-----------|---------|-----------|
|**onClickSave**|`(event) => void`|-|Callback executed when save button is clicked|
|**onClickViewDetail**|`(event) => void`|-|Callback executed when view detail button or any area redirects to detail page is clicked|
|**onClickContactAgent**|`(event) => void`|-|Callback executed when contact button is clicked|
|**link**|string|-|The URL to link to when a component is clicked|