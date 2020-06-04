# Listing Feature R123 Component

## How to use
Explanation on how to import and render listing feature component, including list of props.

### Import Component

```jsx
import ListingFeatureR123 from '@99/component-ninetynine/lib/desktop-site/organisms/listing-feature-r123/ListingFeatureR123.component'
```

### Implementation In Component Render Method
```jsx

return (
    <ListingFeatureR123
        title="Informasi properti"
        floor={{
            label: 'Jumlah lantai:',
            value: 2
        }}
        listingId={{
            label: 'ID Iklan:',
            value: 'hos6544729'
        }}
        furnishing={{
            label: 'Dilengkapi Perabotan:',
            value: 'Semi Furnished'
        }}
        postedDate={{
            label: 'Tanggal Tayang:',
            value: '12 May 2020'
        }}
        electricity={{
            label: 'Daya Listrik:',
            value: 4400
        }}
        certificate={{
            label: 'Sertifikat:',
            value: ''
        }}
        propertyCondition={{
            label: 'Kondisi Properti:',
            value: 'Bagus Sekali'
        }}
        propertyType={{
            label: 'Tipe Properti:',
            value: 'Rumah'
        }}
        propertyFacility="AC, Swimming Pool, Carport, Garden"
        tabContentToggleSelector={{
            onCLose: 'Menampilkan lebih banyak',
            onExpand: 'Menampilkan lebih sedikit'
        }}
        tabItemLabel={{
            detailLabel: 'Detil Property',
            facilityLabel: 'Fasilitas'
        }}
    />
)
```

## Props

| Property | Type | Default | Description |
|-------|-----------|---------|-----------|
|**title**|string||Title of listing feature section|
|**label**|string||Text label for each of listing feature detail item|
|**value**|`string | number`||Value for each of listing feature detail item|
|**detailLabel**|string||Text label for detail tab item|
|**facilityLabel**|string||Text label for facility tab item|
|**propertyFacility**|string||Content of property facility tab|
|**onCLose**|string||Toggle selector text when feature detail tab collpased|
|**onExpand**|string||Toggle selector text when feature detail tab expanded|
