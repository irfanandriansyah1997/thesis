import { NavbarR123PropsInterface } from '../../interface/component.interface';

export const DefaultPropsNavbarR123: NavbarR123PropsInterface = {
    showLogo: true,
    menu: [
        {
            to: '/',
            active: true,
            text: 'Dijual',
            type: 'dropdown',
            dropdownItem: [
                {
                    text: 'Rumah',
                    to: '/'
                },
                {
                    text: 'Apartment',
                    to: '/'
                },
                {
                    text: 'Tanah',
                    to: '/'
                }
            ],
            megamenuItem: {
                heading: 'Bantuan',
                item: [
                    [
                        {
                            text: 'Kalkulator',
                            to: '/'
                        },
                        {
                            text: 'Cari Agen / Kantor Agen',
                            to: '/'
                        }
                    ],
                    [
                        {
                            text: 'Cari Pengembang',
                            to: '/'
                        }
                    ]
                ]
            }
        },
        {
            to: '/',
            text: 'Disewa',
            type: 'dropdown',
            dropdownItem: [
                {
                    text: 'Rumah',
                    to: '/'
                },
                {
                    text: 'Apartment',
                    to: '/'
                },
                {
                    text: 'Tanah',
                    to: '/'
                }
            ],
            megamenuItem: {
                heading: 'Bantuan',
                item: [
                    [
                        {
                            text: 'Cari Agen / Kantor Agen',
                            to: '/'
                        }
                    ]
                ]
            }
        },
        {
            to: '/',
            type: 'link',
            text: 'Property Baru'
        },
        {
            to: '/',
            text: 'KPR',
            type: 'link'
        },
        {
            to: '/',
            text: 'Panduan',
            type: 'dropdown',
            dropdownItem: [
                {
                    text: 'Panduan Properti',
                    to: '/'
                },
                {
                    text: 'FAQ',
                    to: '/'
                }
            ],
            megamenuItem: {
                heading: 'Bantuan',
                item: [
                    [
                        {
                            text: 'Persyaratan KPR',
                            to: '/'
                        }
                    ],
                    [
                        {
                            text: 'Jenis - Jenis KPR',
                            to: '/'
                        }
                    ]
                ]
            }
        },
        {
            to: '/',
            text: 'Berita',
            type: 'dropdown',
            dropdownItem: [
                {
                    text: 'Berita Properti',
                    to: '/'
                },
                {
                    text: 'Pameran Properti',
                    to: '/'
                }
            ]
        },
        {
            to: '/',
            text: 'Internasional',
            type: 'link'
        }
    ],
    languange: {
        active: 'Id',
        option: ['Id', 'En']
    },
    onChangeLanguange: () => undefined,
    onClickLoginButton: () => undefined
};
