import { ListingInquirySidebarPropsInterface } from '../../interface/component.interface';

export const DefaultPropsListingInquiryR123Sidebar: ListingInquirySidebarPropsInterface = {
    agent: {
        agentName: 'John Doe',
        agentPageUrl: 'http://google.com',
        agentInfo: 'Bergabung dari kemarin',
        agentImageUrl:
            'https://images.unsplash.com/photo-1562184552-b7a1069700fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    organization: {
        organizationName: 'Jaya Baya Company',
        organizationPageUrl: 'http://google.com',
        organizationImageUrl:
            'https://images.unsplash.com/photo-1562184552-b7a1069700fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    inquiryButton: {
        buttonIcon: 'rui-icon-email-small',
        buttonText: 'Kirim Pertanyaan',
        onClickInquiryButton: (): void => undefined
    },
    contact: {
        phoneNumbers: ['+621212....'],
        onClickPhoneButton: (): void => undefined,
        onClickWhatsAppButton: (): void => undefined
    }
};

export const NoOrgPropsListingInquiryR123Sidebar: ListingInquirySidebarPropsInterface = {
    agent: {
        agentName: 'John Doe',
        agentPageUrl: 'http://google.com',
        agentInfo: 'Bergabung dari kemarin',
        agentImageUrl:
            'https://images.unsplash.com/photo-1562184552-b7a1069700fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    inquiryButton: {
        buttonText: 'Kirim Pertanyaan',
        onClickInquiryButton: (): void => undefined
    },
    contact: {
        phoneNumbers: ['+621212....'],
        onClickPhoneButton: (): void => undefined,
        onClickWhatsAppButton: (): void => undefined
    }
};
