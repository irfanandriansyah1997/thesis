export interface ListingInquiryAgentPropsInterface {
    agentName: string;
    agentJoinInfo?: string;
    agentImageUrl: string;
    agentPageUrl: string;
}

export interface ListingInquiryOrgPropsInterface {
    organizationName: string;
    organizationImageUrl?: string;
    organizationPageUrl: string;
}

export interface ListingInquiryButtonPropsInterface {
    buttonText: string;
    buttonIcon?: string;
    onClickInquiryButton: () => void;
}

export interface ListingInquiryContactPropsInterface {
    whatsAppUrl: string;
    phoneNumber: string;
}

export interface ListingInquiryMsgPropsInterface {
    buyerName: string;
    buyerEmail: string;
    buyerPhoneNumber: string;
    message: string;
}

export type ListingInquirySidebarPropsInterface = ListingInquiryAgentPropsInterface &
    ListingInquiryOrgPropsInterface &
    ListingInquiryContactPropsInterface &
    ListingInquiryButtonPropsInterface;

export type ListingInquiryBoxPropsInterface = ListingInquiryAgentPropsInterface &
    ListingInquiryOrgPropsInterface &
    ListingInquiryContactPropsInterface &
    ListingInquiryButtonPropsInterface &
    ListingInquiryMsgPropsInterface;
