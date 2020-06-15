import { DialogPropsInterface } from '../../../../common/atomic/dialog/interface/component.interface';

/**
 * R123 Inquiry Modal Props Interface
 * @author Nafhul <nafhul.arsyad@99.co>
 * @since 2020.06.09
 */
export interface R123InquiryModalPropsInterface {
    type: 'success' | 'failed';
    title: string;
    button: R123InquiryModalButtonPropsInterface;
    remarks: string;
    dialogBox: DialogPropsInterface;
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
