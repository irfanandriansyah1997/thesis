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
                        `       ${'onClick: (): void => {}'}\n` +
                        `   ${'}}'}\n` +
                        `   ${'shareAction={{'}\n` +
                        `       ${'label: "Bagikan",'}\n` +
                        `       ${'shareLinks: ['}\n` +
                        `           ${'{'}\n` +
                        `               ${'value: "Facebook",'}\n` +
                        `               ${'icon: "rui-icon-facebook",'}\n` +
                        `               ${'onClick: (): void => {}'}\n` +
                        `           ${'},'}\n` +
                        `           ${'{'}\n` +
                        `               ${'value: "Whatsapp",'}\n` +
                        `               ${'icon: "rui-icon-whatsapp",'}\n` +
                        `               ${'onClick: (): void => {}'}\n` +
                        `           ${'},'}\n` +
                        `           ${'{'}\n` +
                        `               ${'value: "Twitter",'}\n` +
                        `               ${'icon: "rui-icon-twitter",'}\n` +
                        `               ${'onClick: (): void => {}'}\n` +
                        `           ${'}'}\n` +
                        `       ${']'}\n` +
                        `   ${'}}'}\n` +
                        `   ${'previewAction={{'}\n` +
                        `       ${'label: "Sudah dilihat",'}\n` +
                        `       ${'viewCount: "Properti sudah dilihat: 965",'}\n` +
                        `       ${'headerContent: "Apa artinya angka diatas?",'}\n` +
                        `       ${'messageContent: "Angka tersebut menunjukan berapa kali pencari properti sudah melihat listing ini di Rumah123.com",'}\n` +
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
                                onClick: (): void => {}
                            }}
                            shareAction={{
                                label: 'Bagikan',
                                shareLinks: [
                                    {
                                        value: 'Facebook',
                                        icon: 'rui-icon-facebook',
                                        onClick: (): void => undefined
                                    },
                                    {
                                        value: 'Whatsapp',
                                        icon: 'rui-icon-whatsapp',
                                        onClick: (): void => undefined
                                    },
                                    {
                                        value: 'Twitter',
                                        icon: 'rui-icon-twitter',
                                        onClick: (): void => undefined
                                    }
                                ]
                            }}
                            previewAction={{
                                label: 'Sudah dilihat',
                                viewCount: 'Properti sudah dilihat: 965',
                                headerContent: 'Apa artinya angka diatas?',
                                messageContent:
                                    'Angka tersebut menunjukan berapa kali pencari properti sudah melihat listing ini di Rumah123.com'
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
