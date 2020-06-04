import React from 'react';

import ListingFeatureR123 from '../listing-feature-r123.component';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';
import TextDocsComponent from '../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../.storybook/component/atomic/heading/heading.component';
import CodingViewerDocsComponent from '../../../../.storybook/component/molecules/code-viewer/code-viewer.component';

import '../style/style.scss';

const ListingFeatureR123Documentation = require('./markdown/listing-feature-r123.documentation.md');

((): void => {
    new StorybookDocumentationBuilder(
        'Listing Feature R123 Component',
        'organism'
    )
        .setSection('desktop')
        .setDescriptionComponent(
            'Listing feature component can be used to display listing detail & facility.'
        )
        .setMarkdownFile(ListingFeatureR123Documentation)
        .registerDocumentation(
            <>
                <HeadingDocsComponent>Usage</HeadingDocsComponent>
                <TextDocsComponent>Listing Feature Component</TextDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={
                        `${'<ListingFeatureR123'}\n` +
                        `   ${'title="Informasi properti"'}\n` +
                        `   ${'floor={{'}\n` +
                        `       ${'label: "Jumlah lantai:",'}\n` +
                        `       ${'value: 2'}\n` +
                        `   ${'}}'}\n` +
                        `   ${'listingId={{'}\n` +
                        `       ${'label: "ID Iklan:",'}\n` +
                        `       ${'value: "hos6544729"'}\n` +
                        `   ${'}}'}\n` +
                        `   ${'furnishing={{'}\n` +
                        `       ${'label: "Dilengkapi Perabotan:",'}\n` +
                        `       ${'value: "Semi Furnished"'}\n` +
                        `   ${'}}'}\n` +
                        `   ${'postedDate={{'}\n` +
                        `       ${'label: "Tanggal Tayang:",'}\n` +
                        `       ${'value: "12 May 2020"'}\n` +
                        `   ${'}}'}\n` +
                        `   ${'electricity={{'}\n` +
                        `       ${'label: "Daya Listrik:",'}\n` +
                        `       ${'value: 4400'}\n` +
                        `   ${'}}'}\n` +
                        `   ${'certificate={{'}\n` +
                        `       ${'label: "Sertifikat:",'}\n` +
                        `       ${'value: "SHM - Sertifikat Hak Milik"'}\n` +
                        `   ${'}}'}\n` +
                        `   ${'propertyCondition={{'}\n` +
                        `       ${'label: "Kondisi Properti:",'}\n` +
                        `       ${'value: "Bagus Sekali"'}\n` +
                        `   ${'}}'}\n` +
                        `   ${'propertyType={{'}\n` +
                        `       ${'label: "Tipe Properti:",'}\n` +
                        `       ${'value: "Rumah"'}\n` +
                        `   ${'}}'}\n` +
                        `   ${'propertyFacility="AC, Swimming Pool, Carport, Garden"'}\n` +
                        `   ${'tabContentToggleSelector={{'}\n` +
                        `       ${'onCLose: "Menampilkan lebih banyak",'}\n` +
                        `       ${'onExpand: "Menampilkan lebih sedikit",'}\n` +
                        `   ${'}}'}\n` +
                        `${'>'}`
                    }
                >
                    <div style={{ width: 750 }}>
                        <ListingFeatureR123
                            title="Informasi properti"
                            floor={{
                                label: 'Jumlah lantai:',
                                value: 2
                            }}
                            listingId={{
                                label: 'ID Iklan:',
                                value: 'hos6544729'
                            }}
                            furnishing={{
                                label: 'Dilengkapi Perabotan:',
                                value: 'Semi Furnished'
                            }}
                            postedDate={{
                                label: 'Tanggal Tayang:',
                                value: '12 May 2020'
                            }}
                            electricity={{
                                label: 'Daya Listrik:',
                                value: 4400
                            }}
                            certificate={{
                                label: 'Sertifikat:',
                                value: 'SHM - Sertifikat Hak Milik'
                            }}
                            propertyCondition={{
                                label: 'Kondisi Properti:',
                                value: 'Bagus Sekali'
                            }}
                            propertyType={{
                                label: 'Tipe Properti:',
                                value: 'Rumah'
                            }}
                            propertyFacility="AC, Swimming Pool, Carport, Garden"
                            tabContentToggleSelector={{
                                onCLose: 'Menampilkan lebih banyak',
                                onExpand: 'Menampilkan lebih sedikit'
                            }}
                        />
                    </div>
                </CodingViewerDocsComponent>
            </>
        )
        .execute();
})();
