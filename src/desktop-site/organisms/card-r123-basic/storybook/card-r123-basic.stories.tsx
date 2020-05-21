import React from 'react';

import CardR123Basic from '../card-r123-basic.component';
import TextDocsComponent from '../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../.storybook/component/atomic/heading/heading.component';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';
import CodingViewerDocsComponent from '../../../../.storybook/component/molecules/code-viewer/code-viewer.component';

import '../style/style.scss';

const CardR123BasicDocumentation = require('./markdown/card-r123-basic.documentation.md');

/**
 * Generate Docs
 * @param {string} type - type props image
 * @return {string}
 */
const docs = (): string =>
    `<CardR123Basic \n` +
    `    link="99.co" \n` +
    `    priceTag="Rp 2,1 M" \n` +
    `    propertyType="Rumah" \n` +
    `    address="Lebak Bulus, Jakarta Selatan" \n` +
    `    installment="Cicilan : Rp. 7,46 Jt/bulan" \n` +
    `    title="Lebak Bulus Rumah Murah Siap Huni, Lebak Bulus, Jakarta Selatan, DKI Jakarta, Indonesia" \n` +
    `    media={[ \n` +
    `        { \n` +
    `            alt: '', \n` +
    `            id: 'image-1', \n` +
    `            src: 'https://img.rea-asia.com/rumah123/750x420-crop/house/ho64/6491275/original/hos6491275-rumah-di-jual-di-bintaro-tangerang-15881493488971.jpg' \n` +
    `        }, \n` +
    `        { \n` +
    `            alt: '', \n` +
    `            id: 'image-2', \n` +
    `            src: 'https://i.postimg.cc/sXCf3YFN/image-04.jpg' \n` +
    `        } \n` +
    `    ]} \n` +
    `    attribute={{ \n` +
    `        carport: '1', \n` +
    `        bedroom: '2', \n` +
    `        bathroom: '1', \n` +
    `        landSize: 'Luas Tanah : 60m²', \n` +
    `        buildingSize: 'Luas Bangunan : 60m²' \n` +
    `    }} \n` +
    `    action={{ \n` +
    `        onClickSave: (): void => undefined, \n` +
    `        onClickMortgageSimulation: (): void => undefined \n` +
    `    }} \n` +
    `/> \n`;

((): void => {
    new StorybookDocumentationBuilder('Basic R123 Card Component', 'organism')
        .setSection('desktop')
        .setDescriptionComponent(
            'Basic R123 Card can be used to display basic listing card in search result page.'
        )
        .setMarkdownFile(CardR123BasicDocumentation)
        .registerDocumentation(
            <>
                <HeadingDocsComponent>Usage</HeadingDocsComponent>
                <TextDocsComponent>Deafult Basic R123 card</TextDocsComponent>
                <CodingViewerDocsComponent sourceCode={docs()}>
                    <CardR123Basic
                        link="99.co"
                        priceTag="Rp 2,1 M"
                        propertyType="Rumah"
                        address="Lebak Bulus, Jakarta Selatan"
                        installment="Cicilan : Rp. 7,46 Jt/bulan"
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
                                src:
                                    'https://i.postimg.cc/sXCf3YFN/image-04.jpg'
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
                            onClickSave: (): void => undefined,
                            onClickMortgageSimulation: (): void => undefined
                        }}
                    />
                </CodingViewerDocsComponent>
            </>
        )
        .execute();
})();
