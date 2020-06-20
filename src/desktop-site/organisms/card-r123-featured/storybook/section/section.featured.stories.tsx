/* eslint-disable @typescript-eslint/no-empty-function */
import React, { SFC } from 'react';

import CardR123Featured from '../../card-r123-featured.component';
import TextDocsComponent from '../../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../../.storybook/component/atomic/heading/heading.component';
import CodingViewerDocsComponent from '../../../../../.storybook/component/molecules/code-viewer/code-viewer.component';

/**
 * Generate Docs
 * @param {string} type - type props image
 * @return {string}
 */
const docs = (): string =>
    `<CardR123Featured\n` +
    `    id="22u1983129" \n` +
    `    link="99.co"\n` +
    `    mediaCount={2}\n` +
    `    tier="featured"\n` +
    `    priceTag="Rp 2,1 M"\n` +
    `    propertyType="Rumah"\n` +
    `    agencyName="Ray White"\n` +
    `    address="Lebak Bulus, Jakarta Selatan"\n` +
    `    publishingDate="Tayang 5 hari yang lalu"\n` +
    `    installment="Cicilan : Rp. 7,46 Jt/bulan"\n` +
    `    publishingDate="Tayang 5 hari yang lalu"\n` +
    `    title="Lebak Bulus Rumah Murah Siap Huni, Lebak Bulus, Jakarta Selatan, DKI Jakarta, Indonesia"\n` +
    `    media={[\n` +
    `        {\n` +
    `            alt: '',\n` +
    `            id: 'image-1',\n` +
    `            src:\n` +
    `                'https://img.rea-asia.com/rumah123/750x420-crop/house/ho64/6491275/original/hos6491275-rumah-di-jual-di-bintaro-tangerang-15881493488971.jpg'\n` +
    `        },\n` +
    `        {\n` +
    `            alt: '',\n` +
    `            id: 'image-2',\n` +
    `            src: 'https://i.postimg.cc/sXCf3YFN/image-04.jpg'\n` +
    `        }\n` +
    `    ]}\n` +
    `    attribute={{\n` +
    `        carport: '1',\n` +
    `        bedroom: '2',\n` +
    `        bathroom: '1',\n` +
    `        landSize: 'Luas Tanah : 60m²',\n` +
    `        buildingSize: 'Luas Bangunan : 60m²'\n` +
    `    }}\n` +
    `    action={{ \n` +
    `        saveAction: {, \n` +
    `           label: 'Simpan', \n` +
    `           onClick: (): void => {}, \n` +
    `        }, \n` +
    `        contactAction: {, \n` +
    `           label: 'Kontak Agen', \n` +
    `           onClick: (): void => {}, \n` +
    `        }, \n` +
    `        viewDetailAction: {, \n` +
    `           label: 'Lihat Detail', \n` +
    `           onClick: (): void => {}, \n` +
    `        }, \n` +
    `        mortgageSimulationAction: {, \n` +
    `           label: 'Simulasi KPR', \n` +
    `           onClick: (): void => {}, \n` +
    `        }, \n` +
    `    }} \n` +
    `/>\n`;

/**
 * Section Featured Card Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.05.04
 */
const SectionFeaturedCardComponent: SFC = () => (
    <>
        <HeadingDocsComponent>Basic Usage</HeadingDocsComponent>
        <TextDocsComponent>R123 Featured card</TextDocsComponent>
        <CodingViewerDocsComponent sourceCode={docs()}>
            <CardR123Featured
                id="22u1983129"
                link="99.co"
                mediaCount={2}
                tier="featured"
                priceTag="Rp 2,1 M"
                propertyType="Rumah"
                address="Lebak Bulus, Jakarta Selatan"
                installment="Cicilan : Rp. 7,46 Jt/bulan"
                publishingDate="Tayang 5 hari yang lalu"
                title="Lebak Bulus Rumah Murah Siap Huni, Lebak Bulus, Jakarta Selatan, DKI Jakarta, Indonesia"
                media={[
                    {
                        alt: '',
                        id: 'image-1',
                        src:
                            'https://img.rea-asia.com/rumah123/750x420-crop/house/ho64/6491275/original/hos6491275-rumah-di-jual-di-bintaro-tangerang-15881493488971.jpg'
                    },
                    {
                        alt: '',
                        id: 'image-2',
                        src: 'https://i.postimg.cc/sXCf3YFN/image-04.jpg'
                    }
                ]}
                attribute={{
                    carport: '1',
                    bedroom: '2',
                    bathroom: '1',
                    landSize: 'Luas Tanah : 60m²',
                    buildingSize: 'Luas Bangunan : 60m²'
                }}
                action={{
                    saveAction: {
                        label: 'Simpan',
                        onClick: (): void => {}
                    },
                    contactAction: {
                        label: 'Kontak Agen',
                        onClick: (): void => {}
                    },
                    viewDetailAction: {
                        label: 'Lihat Detail',
                        onClick: (): void => {}
                    },
                    mortgageSimulationAction: {
                        label: 'Simulasi KPR',
                        onClick: (): void => {}
                    }
                }}
            />
        </CodingViewerDocsComponent>
    </>
);

export default SectionFeaturedCardComponent;
