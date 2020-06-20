# Featured / Premier R123 Card Component

## How to use
Explanation on how to import and render featured / premier R123 card component, including list of props.

### Import Component

```jsx
import CardR123Featured from '@99/component-ninetynine/lib/desktop-site/organisms/card-r123-featured/CardR123Featured.component'
```

### Implementation In Component Render Method
```jsx
return (
    const image = [
        {
            id: 1,
            src:
                'https://images.unsplash.com/photo-1562886812-41775a01195d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            alt: 'Images 1'
        }
    ];

    <CardR123Featured
        id="22u1983129"
        link="99.co"
        mediaCount={2}
        tier="premier"
        priceTag="Rp 2,1 M"
        propertyType="Rumah"
        address="Lebak Bulus, Jakarta Selatan"
        installment="Cicilan : Rp. 7,46 Jt/bulan"
        agencyName="Ray White"
        publishingDate="Tayang 5 hari yang lalu"
        title="Lebak Bulus Rumah Murah Siap Huni, Lebak Bulus, Jakarta Selatan, DKI Jakarta, Indonesia"
        media={media}
        attribute={{
            carport: '1',
            bedroom: '2',
            bathroom: '1',
            landSize: 'Luas Tanah : 60m²',
            buildingSize: 'Luas Bangunan : 60m²'
        }}
        action={{
            saveAction: {
                label: 'Simpan',
                onCLick: (): void => {}
            },
            contactAction: {
                label: 'Kontak Agen',
                onCLick: (): void => {}
            },
            viewDetailAction: {
                label: 'Lihat Detail',
                onCLick: (): void => {}
            },
            mortgageSimulationAction: {
                label: 'Simulasi KPR',
                onCLick: (): void => {}
            }
        }}
)
```

## Props

| Property | Type | Default | Description |
|-------|-----------|---------|-----------|
|**id**|string|-|Card container id|
|**link**|string|-|The URL to link to when a component is clicked|
|**mediaCount**|number|-|Number of listing image|
|**priceTag**|string|-|Price of the listed property|
|**propertyType**|string|-|Type of the listed property (Apartment, house, etc)|
|**address**|string|-|Address of the listed property|
|**installment**|string|-|Monthly installment of the listed property|
|**title**|string|-|Title of the listed property|
|**agencyName**|string|`'Independent Property Agent'`|Agency name of the listed property|
|**publishingDate**|string|-|Date in which the listed property is published|


## Media Props

| Property | Type | Default | Description |
|-------|-----------|---------|-----------|
|**id**|string|-|Image id|
|**src**|string|-|The address of the media image to be displayed|
|**alt**|string|-|[alt attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img), defines the alternative text describing the image|


## Action Props

| Property | Type | Default | Description |
|-------|-----------|---------|-----------|
|**onClick**|`(event) => void`|-|Callback executed when action button is clicked|
|**label**|string|-|Text label added to action button|
