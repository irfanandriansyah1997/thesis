/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ReactNode } from 'react';

import KprCalculatorR123Component from '../../kpr-calculator-r123.component';
import TextDocsComponent from '../../../../../.storybook/component/atomic/text/text.component';
import CodingViewerDocsComponent from '../../../../../.storybook/component/molecules/code-viewer/code-viewer.component';

import { KPRCalculatorComponentInterface } from '../../interface/component.interface';

/**
 * Generate Docs
 * @param {string} type - type props image
 * @return {string}
 */
const docs = (props: KPRCalculatorComponentInterface): string =>
    `<KprCalculatorR123Component \n` +
    `    heading={\n` +
    `       headingText: "Kalkulator KPR",\n` +
    `       headingLogo: "rumah123.jpg"\n` +
    `    }\n` +
    `    itemAmount={\n` +
    `       loanAmount: "Rp. 1.840.168",\n` +
    `       monthlyPayment: "Jumlah pinjaman: Rp. 220.000.000"\n` +
    `    }\n` +
    `    downPayment={\n` +
    `       name: "down-payment",\n` +
    `       downPaymentLabel: "Uang muka"\n` +
    `       downPaymentValue: "Rp. 55.000.000",\n` +
    `       periodLabel: "Jangka waktu"\n` +
    `       period: {\n` +
    `           name: "down-payment",\n` +
    `           value: 1\n` +
    `           option: [],\n` +
    `       }\n` +
    `    }\n` +
    `    propertyPrice={\n` +
    `       name: "interest",\n` +
    `       priceLabel: "Harga properti (Rp.)"\n` +
    `       priceValue: "Rp. 275.000.000",\n` +
    `       interestLabel: "Suku bunga (%)"\n` +
    `       editablePriceValue: true\n` +
    `       interest: {\n` +
    `           name: "interest",\n` +
    `           value: 1\n` +
    `           option: [],\n` +
    `       }\n` +
    `    }\n` +
    `    disclaimer={\n` +
    `       disclaimerText: "Silakan baca disclaimer",\n` +
    `       disclaimerToggleText: "Disclaimer content"\n` +
    `       onDisclaimerClick: (): void => {}\n` +
    `    }\n` +
    `    onChangePrice={${props.onChangePrice}}\n` +
    `    onChangeDropdownField={${props.onChangeDropdownField}}\n` +
    `/>`;

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
    },
    {
        id: '4',
        value: '4',
        label: '8%'
    },
    {
        id: '5',
        value: '5',
        label: '9,25%'
    },
    {
        id: '6',
        value: '6',
        label: '9,75%'
    },
    {
        id: '7',
        value: '7',
        label: '9,99%'
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
    },
    {
        id: '4',
        value: '4',
        label: '4 tahun'
    },
    {
        id: '5',
        value: '5',
        label: '5 tahun'
    },
    {
        id: '6',
        value: '6',
        label: '6 tahun'
    },
    {
        id: '7',
        value: '7',
        label: '7 tahun'
    }
];
/**
 * Default KPR Calculator R123 Section
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.05.28
 */
class CustomKprCalculatorR123 extends React.PureComponent<
    KPRCalculatorComponentInterface,
    Record<string, unknown>
> {
    constructor(props: KPRCalculatorComponentInterface) {
        super(props);

        this.state = {
            interestRateSelection: 2,
            periodSelection: 2
        };
    }

    render(): ReactNode {
        const { interestRateSelection, periodSelection } = this.state;
        return (
            <>
                <TextDocsComponent>
                    Custom KPR Calculator R123 with editable input
                </TextDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={docs({
                        itemAmount: {
                            loanAmount: 'Rp. 1.840.168',
                            monthlyPayment: 'Jumlah pinjaman: Rp. 220.000.000'
                        },
                        downPayment: {
                            name: 'down-payment',
                            downPaymentLabel: 'Uang muka',
                            downPaymentValue: 'Rp. 55.000.000',
                            periodLabel: 'Jangka waktu',
                            period: {
                                name: 'down-payment',
                                value: 1,
                                option: period
                            }
                        },
                        propertyPrice: {
                            name: 'interest',
                            priceLabel: 'Harga properti (Rp.)',
                            priceValue: 'Rp. 275.000.000',
                            interestLabel: 'Suku bunga (%)',
                            editablePriceValue: true,
                            interest: {
                                name: 'interest',
                                value: 1,
                                option: interestRate
                            }
                        },
                        onChangePrice: (): void => {},
                        onChangeDropdownField: (): void => {}
                    })}
                >
                    <KprCalculatorR123Component
                        heading={{
                            headingText: 'Kalkulator KPR',
                            headingLogo:
                                'https://public.urbanindo.com/style-guide/r123-logo.svg'
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
                            editablePriceValue: true,
                            interest: {
                                name: 'interest',
                                value: interestRateSelection as number,
                                option: interestRate
                            }
                        }}
                        disclaimer={{
                            disclaimerText: 'Silakan baca disclaimer',
                            disclaimerToggleText:
                                'Hasil dari kalkulator ini hanya merupakan perkiraan saja. Kalkulator ini, atau perhitungan yang dihasilkan, bukan merupakan suatu kesepakatan atau penawaran dari setiap pemberi pinjaman untuk memberikan kredit. Perhitungan ini tidak mencakup ongkos-ongkos dan biaya-biaya apapun yang dapat dikenakan oleh suatu pemberi pinjaman. PT Web Marketing Indonesia dan kelompok perusahaan REA Group Ltd ("Perseroan") tidak bertanggung jawab atas kalkulator atau perhitungannya dan tidak membuat pernyataan-pernyataan baik secara tegas ataupun secara tersirat tentang kalkulator ataupun perhitungan tersebut. Perseroan tidak memiliki tanggung jawab apapun atas kalkulator atau perhitungan tersebut.',
                            onDisclaimerClick: (): void => {}
                        }}
                        onChangePrice={(): void => {}}
                        onChangeDropdownField={(key, value): void => {
                            if (key === 'down-payment') {
                                this.setState({ periodSelection: value });
                            }
                            if (key === 'interest') {
                                this.setState({ interestRateSelection: value });
                            }
                        }}
                    />
                </CodingViewerDocsComponent>
            </>
        );
    }
}

export default CustomKprCalculatorR123;
