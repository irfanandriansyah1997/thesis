/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import DefaultKprCalculatorR123 from './section/kpr-calculator-r123-default.stories';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';

import '../style/style.scss';
import CustomKprCalculatorR123 from './section/kpr-calculator-r123-custom.stories';

const KprCalculatorR123Documentation = require('./markdown/kpr-calculator-r123.documentation.md');

((): void => {
    new StorybookDocumentationBuilder(
        'KPR Calculator R123 Component',
        'organism'
    )
        .setSection('desktop')
        .setDescriptionComponent(
            'KPR Calculator R123 Component can be used to display listing mortgage section in property detail page.'
        )
        .setMarkdownFile(KprCalculatorR123Documentation)
        .registerDocumentation(
            <>
                <DefaultKprCalculatorR123
                    heading={{
                        headingText: '',
                        headingLogo: ''
                    }}
                    itemAmount={{
                        loanAmount: '',
                        monthlyPayment: ''
                    }}
                    downPayment={{
                        name: '',
                        downPaymentLabel: '',
                        downPaymentValue: '',
                        periodLabel: '',
                        period: {
                            name: '',
                            value: 1,
                            option: []
                        }
                    }}
                    propertyPrice={{
                        name: '',
                        priceLabel: '',
                        priceValue: '',
                        interestLabel: '',
                        interest: {
                            name: '',
                            value: 1,
                            option: []
                        }
                    }}
                    disclaimer={{
                        disclaimerText: '',
                        disclaimerToggleText: '',
                        onDisclaimerClick: (): void => {}
                    }}
                    onChangeDropdownField={(): void => undefined}
                />
                <CustomKprCalculatorR123
                    heading={{
                        headingText: '',
                        headingLogo: ''
                    }}
                    itemAmount={{
                        loanAmount: '',
                        monthlyPayment: ''
                    }}
                    downPayment={{
                        name: '',
                        downPaymentLabel: '',
                        downPaymentValue: '',
                        periodLabel: '',
                        period: {
                            name: '',
                            value: 1,
                            option: []
                        }
                    }}
                    propertyPrice={{
                        name: '',
                        priceLabel: '',
                        priceValue: '',
                        interestLabel: '',
                        editablePriceValue: true,
                        interest: {
                            name: '',
                            value: 1,
                            option: []
                        }
                    }}
                    disclaimer={{
                        disclaimerText: '',
                        disclaimerToggleText: '',
                        onDisclaimerClick: (): void => {}
                    }}
                    onChangeDropdownField={(): void => undefined}
                />
            </>
        )
        .execute();
})();
