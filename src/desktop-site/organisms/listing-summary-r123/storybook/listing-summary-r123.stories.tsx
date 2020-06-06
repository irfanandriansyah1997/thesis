/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import ListingSummaryR123 from '../listing-summary-r123.component';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';
import TextDocsComponent from '../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../.storybook/component/atomic/heading/heading.component';
import CodingViewerDocsComponent from '../../../../.storybook/component/molecules/code-viewer/code-viewer.component';

import '../style/style.scss';

const ListingSummaryR123Documentation = require('./markdown/listing-summary-r123.documentation.md');

((): void => {
    new StorybookDocumentationBuilder(
        'Listing Summary R123 Component',
        'organism'
    )
        .setSection('desktop')
        .setDescriptionComponent(
            'Listing summary component can be used to display summary info of the listing.'
        )
        .setMarkdownFile(ListingSummaryR123Documentation)
        .registerDocumentation(
            <>
                <HeadingDocsComponent>Usage</HeadingDocsComponent>
                <TextDocsComponent>Listing Summary Component</TextDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={
                        `${'<ListingSummaryR123'}\n` +
                        `   ${'flaggingBadge="Dijual"'}\n` +
                        `   ${'priceTag="Rp. 4.550.000.000"'}\n` +
                        `   ${'address="Pasar Minggu, Jakarta Selatan"'}\n` +
                        `   ${'tier="featured"'}\n` +
                        `   ${'attribute={{'}\n` +
                        `       ${'buildingSize: "Luas Bangunan : 270 m²",'}\n` +
                        `       ${'landSize: "Luas Tanah : 305 m²"'}\n` +
                        `       ${'bedroom: "6",'}\n` +
                        `       ${'bathroom: "4",'}\n` +
                        `       ${'carport: "1",'}\n` +
                        `   ${'}}'}\n` +
                        `   ${'saveAction={{'}\n` +
                        `       ${'label: "Simpan",'}\n` +
                        `       ${'onCLick: (): void => {}'}\n` +
                        `   ${'}}'}\n` +
                        `   ${'shareAction={{'}\n` +
                        `       ${'label: "Bagikan",'}\n` +
                        `       ${'onCLick: (): void => {}'}\n` +
                        `   ${'}}'}\n` +
                        `   ${'previewAction={{'}\n` +
                        `       ${'label: "Sudah dilihat",'}\n` +
                        `       ${'onCLick: (): void => {}'}\n` +
                        `   ${'}}'}\n` +
                        `   ${'mortgage={{'}\n` +
                        `       ${'installment: "Rp. 26.110.000 / bulan",'}\n` +
                        `       ${'label: "Simulasi KPR"'}\n` +
                        `       ${'onClickMortgage: (): void => {}'}\n` +
                        `   ${'}}'}\n` +
                        `${'>'}`
                    }
                >
                    <div>
                        <ListingSummaryR123
                            flaggingBadge="Dijual"
                            priceTag="Rp. 4.550.000.000"
                            address="Pasar Minggu, Jakarta Selatan"
                            tier="featured"
                            attribute={{
                                buildingSize: 'Luas Bangunan : 270 m²',
                                landSize: 'Luas Tanah : 305 m²',
                                bedroom: '6',
                                bathroom: '4',
                                carport: '1'
                            }}
                            saveAction={{
                                label: 'Simpan',
                                onCLick: (): void => {}
                            }}
                            shareAction={{
                                label: 'Bagikan',
                                onCLick: (): void => {}
                            }}
                            previewAction={{
                                label: 'Sudah dilihat',
                                onCLick: (): void => {}
                            }}
                            mortgage={{
                                installment: 'Rp. 26.110.000 / bulan',
                                label: 'Simulasi KPR',
                                onClickMortgage: (): void => {}
                            }}
                        />
                    </div>
                </CodingViewerDocsComponent>
            </>
        )
        .execute();
})();
