# R123 KPR Calculator Component

## How to use
Explanation on how to import and render R123 KPR calculator component, including list of props.

### Import Component

```jsx
import KprCalculatorR123Component from '@99/component-ninetynine/lib/desktop-site/organisms/kpr-calculator-r123/kpr-calculator-r123.component'
```

### Implementation In Component Render Method
```jsx
const interestRate = [
    {
        id: '1',
        value: '1',
        label: '6%'
    },
    {
        id: '2',
        value: '2',
        label: '6,68%'
    },
    {
        id: '3',
        value: '3',
        label: '7,7%'
    }
];

const period = [
    {
        id: '1',
        value: '1',
        label: '1 tahun'
    },
    {
        id: '2',
        value: '2',
        label: '2 tahun'
    },
    {
        id: '3',
        value: '3',
        label: '3 tahun'
    }
];

constructor(props) {
    super(props);

    this.state = {
        interestRateSelection: 2,
        periodSelection: 2
    };
}
return (
    <KprCalculatorR123Component
        heading={{
            headingText: 'Kalkulator KPR',
            headingLogo: 'https://public.urbanindo.com/style-guide/r123-logo.svg'
        }}
        itemAmount={{
            loanAmount: 'Rp. 1.840.168',
            monthlyPayment: 'Jumlah pinjaman: Rp. 220.000.000'
        }}
        downPayment={{
            name: 'down-payment',
            downPaymentLabel: 'Uang muka',
            downPaymentValue: 'Rp. 55.000.000',
            periodLabel: 'Jangka waktu',
            period: {
                name: 'down-payment',
                value: periodSelection as number,
                option: period
            }
        }}
        propertyPrice={{
            name: 'interest',
            priceLabel: 'Harga properti (Rp.)',
            priceValue: 'Rp. 275.000.000',
            interestLabel: 'Suku bunga (%)',
            interest: {
                name: 'interest',
                value: interestRateSelection as number,
                option: interestRate
            }
        }}
        disclaimer={{
            disclaimerText: 'Silakan baca disclaimer',
            disclaimerToggleText: 'Disclaimer content',
            onDisclaimerClick: (): void => {}
        }}
        onChangeDropdownField={(key, value): void => {
            if (key === 'down-payment') {
                this.setState({ periodSelection: value });
            }
            if (key === 'interest') {
                this.setState({ interestRateSelection: value });
            }
        }}
    />
)
```

## Props

| Property | Type | Default | Description |
|-------|-----------|---------|-----------|
|**heading**|object|-|Display kpr calculator heading text & logo|
|**disclaimer**|object|-|Whether to have disclaimer or not. Disclaimer content will be dispayed as collapsed content)|
|**downPayment**|object|-|Display downpayment & period section|
|**itemAmount**|object|-|Display monthly payment & loan amount|
|**propertyPrice**|object|-|Display property price & interest section|
|**onChangeDropdownField**|`(key: 'down-payment' | 'interest',`<br>`value: string| number) => void`|-|Callback function executed when calculator downpayment/interest dropdown item changed|

## Heading Props

| Property | Type | Default | Description |
|-------|-----------|---------|-----------|
|**headingText**|string|-|Display calculator heading text|
|**headingLogo**|string|-|The address of the image for an image logo|

## Item Amount, Downpayment & Interest Props

| Property | Type | Default | Description |
|-------|-----------|---------|-----------|
|**loanAmount**|string|-|Loan amount value|
|**monthlyPayment**|string|-|Monthly payment value|
|**downPaymentLabel**|string|-|Display label in downpayment section|
|**downPaymentValue**|string|-|Downpayemnt value|
|**periodLabel**|string|-|Label for downpayment dropdown|
|**period**|`object[]`|-|Downpayment dropdown content|
|**priceLabel**|string|-|Display label in property price section|
|**priceValue**|string|-|Property price value|
|**interestLabel**|string|-|Label for property price interest dropdown|
|**interest**|`object[]`|-|Property price interest dropdown content|
|**editablePriceValue**|boolean|-|If `true`, property price will be displayed as editable text|

## Disclaimer Props

| Property | Type | Default | Description |
|-------|-----------|---------|-----------|
|**disclaimerText**|string|-|Display disclaimer text used as toggle selector|
|**disclaimerToggleText**|string|-|Content of dislaimer|
|**onDisclaimerClick**|`() => void`|-|Callback function executed when clicking on disclaimer|