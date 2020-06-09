# Newlaunch R123 Card Component

## How to use
Explanation on how to import and render newlaunch R123 card component, including list of props.

### Import Component

```jsx
import CardR123Newlaunch from '@99/component-ninetynine/lib/desktop-site/organisms/card-r123-newlaunch/CardR123Newlaunch.component'
```

### Implementation In Component Render Method
```jsx
return (
    const image = [
        {
            id: 1,
            src:'image-1.jpg',
            alt: 'Images 1'
        },
        {
            id: 2,
            src:'image-2.jpg',
            alt: 'Images 2'
        }
    ];

    <CardR123Newlaunch
        id="r12399co"
        link="99.co"
        unit="Tipe unit tersedia : 3"
        mediaCount={2}
        videoCount={1}
        priceTag="Mulai Rp. 796 Jt - Rp. 1,59 M"
        propertyType="Apartemen"
        completionDate="Tanggal penyelesaian : Feb 2023"
        address="Lebak Bulus, Jakarta Selatan"
        developerLogo="logo.png"
        title="The Premier MTH"
        agencyName="PT. Adhi Commuter Properti"
        publishingDate="Tayang sejak 1 Jan, 2020"
        media={image}
        action={{
            saveAction: {
                label: 'Simpan',
                onCLick: (): void => {}
            },
            contactAction: {
                label: 'Kontak Pengembang',
                onCLick: (): void => {}
            },
            viewDetailAction: {
                label: 'Lihat Detail',
                onCLick: (): void => {}
            }
        }}
    />
)
```
## Props

| Property | Type | Default | Description |
|-------|-----------|---------|-----------|
|**id**|string|-|Card container id|
|**link**|string|-|The URL to link to when a component is clicked|
|**unit**|string|-|Number of unit the listed property has|
|**mediaCount**|number|-|Number of listing image|
|**videoCount**|number|-|Number of listing video|
|**priceTag**|string|-|Price of the listed property|
|**propertyType**|string|-|Type of the listed property (Apartment, house, etc)|
|**completionDate**|string|-|Completion date of the listing developemnt|
|**address**|string|-|Address of the listed property|
|**developerLogo**|string|-|The address of the image logo to be displayed|
|**title**|string|-|Title of the listed property|
|**agencyName**|string|-|Agency name of the listed property|
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