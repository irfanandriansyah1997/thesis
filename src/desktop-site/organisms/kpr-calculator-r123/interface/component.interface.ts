/**
 * KPR Calculator R123 Props Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.05.27
 */
export interface KPRCalculatorComponentInterface {
    heading?: KPRCalculatorHeadingInterface;
    disclaimer?: KPRCalculatorDisclaimerInterface;
    downPayment: KPRCalculatorDownPaymentInterface;
    itemAmount: KPRCalculatorItemAmountPropsInterface;
    propertyPrice: KPRCalculatorPropertyPriceInterface;
    onChangePrice?: () => void;
    onChangeDropdownField: (
        key: 'down-payment' | 'interest',
        value: string | number
    ) => void;
}

/**
 * Heading Props Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.05.27
 */
export type KPRCalculatorHeadingInterface = {
    headingText: string;
    headingLogo: string;
};

/**
 * Item Amount Props Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.05.27
 */
export type KPRCalculatorItemAmountPropsInterface = {
    loanAmount: string;
    monthlyPayment: string;
};

/**
 * Calculator Detail Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.05.27
 */
export interface CalculatorDetailInterface {
    name: string;
}

/**
 * Property Price Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.05.27
 */
export type KPRCalculatorPropertyPriceInterface = CalculatorDetailInterface & {
    priceLabel: string;
    priceValue: string;
    interestLabel: string;
    interest: KPRCalculatorOptionInterface;
    editablePriceValue?: boolean;
};

/**
 * Down Payment Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.05.27
 */
export type KPRCalculatorDownPaymentInterface = CalculatorDetailInterface & {
    downPaymentLabel: string;
    downPaymentValue: string;
    periodLabel: string;
    period: KPRCalculatorOptionInterface;
};

/**
 * Filter Combobox Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.05.27
 */
export interface KPRCalculatorOptionInterface {
    name: string;
    className?: string;
    value: number | string;
    option: KPRCalculatorOptionItemInterface[];
}

/**
 * Combobox Item Props Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.05.27
 */
export interface KPRCalculatorOptionItemInterface {
    id: string;
    label: string;
    value: string | number;
}

/**
 * Disclaimer Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.05.27
 */
export interface KPRCalculatorDisclaimerInterface {
    disclaimerText: string;
    disclaimerToggleText: string;
    onDisclaimerClick: () => void;
}
