import React from 'react';
import FooterSectionComponent from '../footer.component';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';
import HeadingDocsComponent from '../../../../.storybook/component/atomic/heading/heading.component';
import TextDocsComponent from '../../../../.storybook/component/atomic/text/text.component';
import CodingViewerDocsComponent from '../../../../.storybook/component/molecules/code-viewer/code-viewer.component';
import { FooterPropsInterface } from '../interface/component.interface';
import '../style/style.scss';

const TextDocumentation = require('./markdown/footer.documentation.md');

const initParam: FooterPropsInterface = {
    tabs: [
        {
            name: 'Property Dijual di Indonesia',
            menu: [
                {
                    text: 'Rumah dijual di Aceh',
                    to: 'https://www.rumah123.com/jual/aceh/residensial/'
                },
                {
                    text: 'Rumah dijual di Bali',
                    to: 'https://www.rumah123.com/jual/aceh/residensial/'
                },
                {
                    text: 'Rumah dijual di Banten',
                    to: 'https://www.rumah123.com/jual/aceh/residensial/'
                },
                {
                    text: 'Rumah dijual di Bengkulu',
                    to: 'https://www.rumah123.com/jual/aceh/residensial/'
                },
                {
                    text: 'Rumah dijual di Daerah Istiwema Yogyakarta',
                    to: 'https://www.rumah123.com/jual/aceh/residensial/'
                },
                {
                    text: 'Rumah dijual di DKI Jakarta',
                    to: 'https://www.rumah123.com/jual/aceh/residensial/'
                },
                {
                    text: 'Rumah dijual di Gorontalo',
                    to: 'https://www.rumah123.com/jual/aceh/residensial/'
                },
                {
                    text: 'Rumah dijual di Jambi',
                    to: 'https://www.rumah123.com/jual/aceh/residensial/'
                },
                {
                    text: 'Rumah dijual di Jawa Barat',
                    to: 'https://www.rumah123.com/jual/aceh/residensial/'
                },
                {
                    text: 'Rumah dijual di Jawa Tengah',
                    to: 'https://www.rumah123.com/jual/aceh/residensial/'
                },
                {
                    text: 'Rumah dijual di Jawa Timur',
                    to: 'https://www.rumah123.com/jual/aceh/residensial/'
                },
                {
                    text: 'Rumah dijual di Jawa Kalimantan Barat',
                    to: 'https://www.rumah123.com/jual/aceh/residensial/'
                },
                {
                    text: 'Rumah dijual di Jawa Kalimantan Selatan',
                    to: 'https://www.rumah123.com/jual/aceh/residensial/'
                },
                {
                    text: 'Rumah dijual di Jawa Kalimantan Tengah',
                    to: 'https://www.rumah123.com/jual/aceh/residensial/'
                },
                {
                    text: 'Rumah dijual di Jawa Kalimantan Timur',
                    to: 'https://www.rumah123.com/jual/aceh/residensial/'
                },
                {
                    text: 'Rumah dijual di Jawa Kalimantan Utara',
                    to: 'https://www.rumah123.com/jual/aceh/residensial/'
                }
            ]
        },
        {
            name: 'Lokasi Popular',
            menu: [
                {
                    text: 'Property di Jakarta',
                    to: 'https://www.rumah123.com/jual/aceh/residensial/'
                },
                {
                    text: 'Property di Bali',
                    to: 'https://www.rumah123.com/jual/aceh/residensial/'
                }
            ]
        }
    ],
    socmedMedias: [
        {
            imageUrl:
                'https://public.urbanindo.com/style-guide/icons8-facebook-old.svg',
            to: 'https://facebook.com'
        },
        {
            imageUrl:
                'https://public.urbanindo.com/style-guide/icons8-twitter.svg',
            to: 'https://twitter.com'
        },
        {
            imageUrl:
                'https://public.urbanindo.com/style-guide/icons8-instagram.svg',
            to: 'https://instagram.com'
        },
        {
            imageUrl:
                'https://public.urbanindo.com/style-guide/icons8-play-button.svg',
            to: 'https://youtube.com'
        }
    ],
    sitemap: [
        {
            text: 'Tentang Kami',
            to: 'https://www.rumah123.com/tentang-kami/'
        },
        {
            text: 'Karir',
            to: 'https://www.rumah123.com/tentang-kami/'
        },
        {
            text: 'Kontak Kami',
            to: 'https://www.rumah123.com/tentang-kami/'
        },
        {
            text: 'Iklankan Properti Anda',
            to: 'https://www.rumah123.com/tentang-kami/'
        },
        {
            text: 'Kebijakan Privasi',
            to: 'https://www.rumah123.com/tentang-kami/'
        },
        {
            text: 'Syarat Penggunaan',
            to: 'https://www.rumah123.com/tentang-kami/'
        },
        {
            text: 'Syarat Penggunaan Agen',
            to: 'https://www.rumah123.com/tentang-kami/'
        }
    ],
    publishMedias: [
        {
            imageUrl:
                'https://public.urbanindo.com/style-guide/appStoreIcon.svg',
            to: 'https://www.apple.com/ios/app-store/'
        },
        {
            imageUrl:
                'https://public.urbanindo.com/style-guide/googlePlayIcon.svg',
            to: 'https://play.google.com/store?hl=en'
        }
    ],
    siteRegions: [
        {
            text: 'Australia',
            to: 'https://www.rumah123.com/tentang-kami/'
        },
        {
            text: 'Hongkong',
            to: 'https://www.rumah123.com/tentang-kami/'
        },
        {
            text: 'India',
            to: 'https://www.rumah123.com/tentang-kami/'
        },
        {
            text: 'Indonesia',
            to: 'https://www.rumah123.com/tentang-kami/'
        },
        {
            text: 'Malaysia',
            to: 'https://www.rumah123.com/tentang-kami/'
        },
        {
            text: 'Singapura',
            to: 'https://www.rumah123.com/tentang-kami/'
        },
        {
            text: 'Thailand',
            to: 'https://www.rumah123.com/tentang-kami/'
        },
        {
            text: 'Amerika Serikat',
            to: 'https://www.rumah123.com/tentang-kami/'
        }
    ],
    partners: [
        {
            text: 'myfun.com',
            to: 'https://myfun.com'
        },
        {
            text: 'makaan.com',
            to: 'https://makaan.com'
        },
        {
            text: 'move.com',
            to: 'https://move.com'
        },
        {
            text: 'proptiger.com',
            to: 'https://proptiger.com'
        },
        {
            text: 'prakard.com',
            to: 'https://prakard.com'
        },
        {
            text: 'realcommercial.com.au',
            to: 'https://realcommercial.com.au'
        },
        {
            text: 'SMARTExpo',
            to: 'https://SMARTExpo.com'
        }
    ],
    copyrightText:
        '2020 PT. Web Marketing Indonesia. Seluruh hak cipta. Anak Perusahaan REA Group Ltd'
};
((): void => {
    const param = initParam;
    new StorybookDocumentationBuilder('Footer Component', 'organism')
        .setSection('desktop')
        .setDescriptionComponent('Footer component')
        .setMarkdownFile(TextDocumentation)
        .registerDocumentation(
            <>
                <HeadingDocsComponent>Usage</HeadingDocsComponent>
                <TextDocsComponent>Footer component</TextDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={`${'const { Item } = TabsComponent;'}\n\n`}
                >
                    <FooterSectionComponent
                        tabs={param.tabs}
                        socmedMedias={param.socmedMedias}
                        sitemap={param.sitemap}
                        publishMedias={param.publishMedias}
                        siteRegions={param.siteRegions}
                        partners={param.partners}
                        copyrightText={param.copyrightText}
                    />
                </CodingViewerDocsComponent>
            </>
        )
        .execute();
})();
