/**
 * Listing Inquiry R123 Agent Info Props Interface
 * @author Nafhul <nafhul.arsyad@99.co>
 * @since 2020.05.28
 */
export type ListingInquiryAgentPropsInterface = {
    agentName: string;
    agentInfo?: string;
    agentImageUrl: string;
    agentPageUrl: string;
};

/**
 * Listing Inquiry R123 Organization Info Props Interface
 * @author Nafhul <nafhul.arsyad@99.co>
 * @since 2020.05.28
 */
export interface ListingInquiryOrgPropsInterface {
    organizationName?: string;
    organizationImageUrl?: string;
    organizationPageUrl?: string;
}

/**
 * Listing Inquiry Button R123 Props Interface
 * @author Nafhul <nafhul.arsyad@99.co>
 * @since 2020.05.28
 */
export interface ListingInquiryButtonPropsInterface {
    buttonText: string;
    buttonIcon?: string;
    agreement?: string;
    onClickInquiryButton: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
}

/**
 * Listing Inquiry R123 Contact Props Interface
 * @author Nafhul <nafhul.arsyad@99.co>
 * @since 2020.05.28
 */
export interface ListingInquiryContactPropsInterface {
    phoneNumbers: string[];
    hasWhatsapp: boolean;
    onClickWhatsAppButton: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
    onClickPhoneButton: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
}

/**
 * Listing Inquiry Message Box Props Interface
 * @author Nafhul <nafhul.arsyad@99.co>
 * @since 2020.05.28
 */
export interface ListingInquiryMsgPropsInterface {
    buyerName?: string;
    buyerEmail?: string;
    placeholder: ListingInquiryMsgPlaceholderInterface;
    onChangeInquiryField: (
        fieldName: 'name' | 'email' | 'phone' | 'message',
        event: React.ChangeEvent<HTMLInputElement>
    ) => void;
}

/**
 * Listing Inquiry Message Box Placeholder Props Interface
 * @author Nafhul <nafhul.arsyad@99.co>
 * @since 2020.06.03
 */
export interface ListingInquiryMsgPlaceholderInterface {
    name: string;
    email: string;
    phone: string;
    message: string;
}

/**
 * Listing Inquiry R123 Sidebar Props Interface
 * @author Nafhul <nafhul.arsyad@99.co>
 * @since 2020.05.28
 */
export interface ListingInquirySidebarPropsInterface {
    agent: ListingInquiryAgentPropsInterface;
    organization?: ListingInquiryOrgPropsInterface;
    contact: ListingInquiryContactPropsInterface;
    inquiryButton: ListingInquiryButtonPropsInterface;
}

/**
 * Listing Inquiry Contact Props Interface
 * @author Nafhul <nafhul.arsyad@99.co>
 * @since 2020.05.28
 */
export interface ListingInquiryContactSectionPropsInterface {
    agent: ListingInquiryAgentPropsInterface;
    contact: ListingInquiryContactPropsInterface;
}

/**
 * Listing Inquiry Email Section Props Interface
 * @author Nafhul <nafhul.arsyad@99.co>
 * @since 2020.05.28
 */
export type ListingInquiryEmailSectionPropsInterface = ListingInquiryButtonPropsInterface &
    ListingInquiryMsgPropsInterface;

/**
 * Listing Inquiry R123 Box Props Interface
 * @author Nafhul <nafhul.arsyad@99.co>
 * @since 2020.05.28
 */
export type ListingInquiryBoxPropsInterface = ListingInquiryContactSectionPropsInterface &
    ListingInquiryEmailSectionPropsInterface;
