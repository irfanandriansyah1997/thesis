# Basic R123 Card Component

## How to use
Explanation on how to import and render text component, including list of props.

### Import Component

```jsx
import CardR123Featured from '@99/component-ninetynine/lib/common/organisms/card-r123-featured/CardR123Featured.component'
```

### Implementation In Component Render Method
```jsx
return (
    <CardR123Featured
        heading={{
            agencyTitle: 'Ray White',
            creationDate: 'Tayang 5 hari yang lalu'
        }}
        media={{
            images: 'https://images.unsplash.com/photo-1562886812-41775a01195d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            alt: 'Images 1',
            caption: {
                priceTag: 'Rp 2,1 M',
                installment: 'Cicilan : Rp. 7,46 Jt/bulan',
                numMedias: 23
            }
        }}
        content={{
            mortgageLinkText: 'Simulasi KPR',
            title: 'Ready Rumah Murah Di Sukun Perum Tirtasari Malang, Sukun, Kota Malang',
            address: 'Malang',
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
|**tier**|`featured | premier`||Set the listing card tier which will define the media image size & caption. `Premier` card will have bigger image & different badge color|

## Caption Props

| Property | Type | Default | Description |
|-------|-----------|---------|-----------|
|**priceTag**|string|-|Price of the listed property|
|**installment**|string|-|Text to define installment|
|**numMedias**|number|-|Number of listing card images|

## Content Props

| Property | Type | Default | Description |
|-------|-----------|---------|-----------|
|**mortgageLinkText**|string|-|Additional text (mortgage) at the top part of card component|
|**title**|string|-|Title of the listed property|
|**address**|string|-|Address of the listed property|
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