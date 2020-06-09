/**
 * R123 Inquiry Modal Props Interface
 * @author Nafhul <nafhul.arsyad@99.co>
 * @since 2020.06.09
 */
export interface R123InquiryModalPropsInterface {
    icon: string;
    title: string;
    button: R123InquiryModalButtonPropsInterface;
    remarks: string;
}

/**
 * R123 Inquiry Modal Button Props Interface
 * @author Nafhul <nafhul.arsyad@99.co>
 * @since 2020.06.09
 */
export interface R123InquiryModalButtonPropsInterface {
    buttonText: string;
    onClickInquiryModalButton: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
}
