import {
    ListingInquirySidebarPropsInterface,
    ListingInquiryAgentPropsInterface,
    ListingInquiryButtonPropsInterface,
    ListingInquiryContactPropsInterface,
    ListingInquiryBoxPropsInterface
} from '../../interface/component.interface';

const agentProps: ListingInquiryAgentPropsInterface = {
    agentName: 'John Doe',
    agentPageUrl: 'http://google.com',
    agentInfo: 'Bergabung dari kemarin',
    agentImageUrl:
        'https://images.unsplash.com/photo-1562184552-b7a1069700fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
};

const sidebarInquiryButtonProps: ListingInquiryButtonPropsInterface = {
    buttonIcon: 'rui-icon-email-small',
    buttonText: 'Kirim Pertanyaan',
    onClickInquiryButton: (): void => undefined
};

const contactProps: ListingInquiryContactPropsInterface = {
    phoneNumbers: ['+621212....'],
    hasWhatsapp: true,
    onClickPhoneButton: (): void => undefined,
    onClickWhatsAppButton: (): void => undefined
};

export const DefaultPropsListingInquiryR123Sidebar: ListingInquirySidebarPropsInterface = {
    agent: agentProps,
    organization: {
        organizationName: 'Jaya Baya Company',
        organizationPageUrl: 'http://google.com',
        organizationImageUrl:
            'https://images.unsplash.com/photo-1562184552-b7a1069700fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    inquiryButton: sidebarInquiryButtonProps,
    contact: contactProps
};

export const NoOrgPropsListingInquiryR123Sidebar: ListingInquirySidebarPropsInterface = {
    agent: agentProps,
    inquiryButton: sidebarInquiryButtonProps,
    contact: contactProps
};

export const NoWhatsAppPropsListingInquiryR123Sidebar: ListingInquirySidebarPropsInterface = {
    agent: agentProps,
    inquiryButton: sidebarInquiryButtonProps,
    contact: {
        ...contactProps,
        hasWhatsapp: false
    }
};

export const DefaultPropsListingInquiryR123Box: ListingInquiryBoxPropsInterface = {
    agent: agentProps,
    contact: contactProps,
    buttonText: 'Kirim ke agen',
    onClickInquiryButton: (): void => undefined,
    agreement:
        'Dengan mengirimkan, Saya Setuju dengan <a class="ui-organism-listing-inquiry-r123__link-info" href="http://www.first-link.com">Persyaratan Penggunaan</a> ' +
        'dan <a class="ui-organism-listing-inquiry-r123__link-info" href="http://www.first-link.com">Kebijakan Privasi</a> PT Web Marketing Indonesia/Anda termasuk pengumpulan, ' +
        'penggunaan, pengungkapan, pemrosesan, penyimpanan dan penanganan informasi pribadi saya; dan komunikasi pemasaran langsung dari Anda dan / atau mitra Anda.',
    placeholder: {
        name: 'nama',
        email: 'email',
        phone: 'nomor telepon',
        message: 'hai, \nsaya tertarik deh'
    },
    buyerName: 'nama buyer',
    buyerEmail: 'mail@mail.com',
    onChangeInquiryField: (): void => undefined
};
