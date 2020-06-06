# Listing Summary R123 Component

## How to use
Explanation on how to import and render listing summary component, including list of props.

### Import Component

```jsx
import ListingSummaryR123 from '@99/component-ninetynine/lib/desktop-site/organisms/listing-feature-r123/ListingFeatureR123.component'
```

### Implementation In Component Render Method
```jsx

return (
    <ListingSummaryR123
        flaggingBadge="Dijual"
        priceTag="Rp. 4.550.000.000"
        address="Pasar Minggu, Jakarta Selatan"
        tier="featured"
        attribute={{
            buildingSize: 'Luas Bangunan : 270 m²',
            landSize: 'Luas Tanah : 305 m²',
            bedroom: '6',
            bathroom: '4',
            carport: '1'
        }}
        saveAction={{
            label: 'Simpan',
            onCLick: (): void => {}
        }}
        shareAction={{
            label: 'Bagikan',
            onCLick: (): void => {}
        }}
        previewAction={{
            label: 'Sudah dilihat',
            onCLick: (): void => {}
        }}
        mortgage={{
            installment: 'Rp. 26.110.000 / bulan',
            label: 'Simulasi KPR',
            onClickMortgage: (): void => {}
        }}
    />
)
```

## Props

| Property | Type | Default | Description |
|-------|-----------|---------|-----------|
|**flaggingBadge**|string|-|Badge of the listed property, e.g. "Dijual" or "Disewa"|
|**priceTag**|string|-|Price of the listed property|
|**address**|string|-|Address of the listed property|
|**tier**|`premier | featured`|-|Level of the listed property|

## Action Panel Props (Save, Share and Preview)

| Property | Type | Default | Description |
|-------|-----------|---------|-----------|
|**label**|string|-|Text label of the action button|
|**onCLick**|`(event) => void`|-|Callback executed when action button is clicked|

## Attribute Props

| Property | Type | Default | Description |
|-------|-----------|---------|-----------|
|**buildingSize**|string|-|Building size of the listed property|
|**landSize**|string|-|Land size of the listed property|
|**bedroom**|number|-|Total bedroom that the listed property has|
|**bathroom**|number|-|Total bathroom that the listed property has|
|**carport**|number|-|Total carport that the listed property has|

## Mortgage Props

| Property | Type | Default | Description |
|-------|-----------|---------|-----------|
|**installment**|string|-|(Monthly) installment of the listed property|
|**label**|string|-|Text label of the mortgage link|
|**onClickMortgage**|`(event) => void`|-|Callback executed when mortgage link is clicked|
