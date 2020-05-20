import React from 'react';

import CardR123Featured from '../card-r123-featured.component';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';

import '../style/style.scss';

const CardR123FeaturedDocumentation = require('./markdown/card-r123-featured.documentation.md');

((): void => {
    new StorybookDocumentationBuilder(
        'Featured R123 Card Component',
        'organism'
    )
        .setSection('desktop')
        .setDescriptionComponent(
            'R123 Featured Card can be used to display featured or premier listing card on search result page.'
        )
        .setMarkdownFile(CardR123FeaturedDocumentation)
        .registerDocumentation(
            <>
                <CardR123Featured
                    action={{
                        onClickSave: (): void => undefined,
                        onClickContactAgent: (): void => undefined,
                        onClickMortgageSimulation: (): void => undefined,
                        onClickViewDetail: (): void => undefined
                    }}
                    address="Cimareme, Kec Ngamprah, Kab Bandung Barat"
                    agentName="Ray White"
                    installment="Cicilan : Rp. 7,46 Jt/bulan"
                    link="99.co"
                    media={[
                        {
                            alt: '',
                            id: 'image-1',
                            src:
                                'https://images.unsplash.com/photo-1562886812-41775a01195d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
                        },
                        {
                            alt: '',
                            id: 'image-2',
                            src: 'https://i.postimg.cc/sXCf3YFN/image-04.jpg'
                        }
                    ]}
                    mediaCount={2}
                    priceTag="Rp 2,1 M"
                    propertyType="Rumah"
                    publishingDate="Tayang 5 hari yang lalu"
                    tier="premier"
                    title="Ready Rumah Murah Di Sukun Perum Tirtasari Malang, Sukun, Kota Malang"
                    attribute={{
                        carport: '1',
                        bedroom: '2',
                        bathroom: '1',
                        landSize: 'Luas Tanah : 60m²'
                        // buildingSize: 'Luas Bangunan : 60m²'
                    }}
                />
            </>
        )
        .execute();
})();
