import React from 'react';
import { render, mount } from 'enzyme';

import KprCalculatorR123Component from '../kpr-calculator-r123.component';

describe('Testing <KprCalculatorR123Component> in organisms component ', () => {
    const callback = jest.fn((item) => item);
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

    const wrapper = mount(
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
                    value: 1,
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
                    value: 1,
                    option: interestRate
                }
            }}
            disclaimer={{
                disclaimerText: 'Disclaimer',
                disclaimerToggleText: 'Test',
                onDisclaimerClick: jest.fn()
            }}
            onChangeDropdownField={callback}
        />
    );

    it('Should render kpr calculator component correctly', () => {
        const component = render(
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
                        value: 1,
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
                        value: 1,
                        option: interestRate
                    }
                }}
                disclaimer={{
                    disclaimerText: 'Disclaimer',
                    disclaimerToggleText: 'Test',
                    onDisclaimerClick: jest.fn()
                }}
                onChangeDropdownField={jest.fn()}
            />
        );

        expect(component.hasClass('ui-organisms-kpr-calculator-r123')).toBe(
            true
        );
    });

    it('Invoke onclick on kpr interest & downpayment calculator dropdown', () => {
        wrapper
            .find('.kpr-interest')
            .find('.kpr-calculator-dropdown')
            .find('.ui-molecules-dropdown__content')
            .find(
                '.ui-molecules-dropdown__item:not(.ui-molecules-dropdown__item--active)'
            )
            .at(0)
            .find('.ui-molecules-combobox__item')
            .at(0)
            .simulate('click');

        expect(callback).toHaveBeenCalledTimes(1);

        wrapper
            .find('.kpr-downpayment')
            .find('.kpr-calculator-dropdown')
            .find('.ui-molecules-dropdown__content')
            .find(
                '.ui-molecules-dropdown__item:not(.ui-molecules-dropdown__item--active)'
            )
            .at(0)
            .find('.ui-molecules-combobox__item')
            .at(0)
            .simulate('click');

        expect(callback).toHaveBeenCalledTimes(2);
    });
});
