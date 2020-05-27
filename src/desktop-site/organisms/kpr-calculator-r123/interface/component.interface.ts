/**
 * KPR Calculator R123 Props Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.05.27
 */
export interface KPRCalculatorComponent {
    heading?: KPRCalculatorHeadingInterface;
    disclaimer?: KPRCalculatorDisclaimerInterface;
    downPayment: KPRCalculatorDownPaymentInterface;
    itemAmount: KPRCalculatorItemAmountPropsInterface;
    propertyPrice: KPRCalculatorPropertyPriceInterface;
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
    label: string;
    value: string;
}

/**
 * Property Price Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.05.27
 */
export type KPRCalculatorPropertyPriceInterface = CalculatorDetailInterface & {
    label: string;
    value: string;
    interest: KPRCalculatorOptionInterface;
};

/**
 * Down Payment Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.05.27
 */
export type KPRCalculatorDownPaymentInterface = CalculatorDetailInterface & {
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
