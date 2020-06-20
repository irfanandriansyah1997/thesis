import React from 'react';

import ListingDescriptionR123 from '../listing-description-r123.component';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';
import TextDocsComponent from '../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../.storybook/component/atomic/heading/heading.component';
import CodingViewerDocsComponent from '../../../../.storybook/component/molecules/code-viewer/code-viewer.component';

import '../style/style.scss';

const ListingDescriptionR123Documentation = require('./markdown/listing-description-r123.documentation.md');

((): void => {
    new StorybookDocumentationBuilder(
        'Listing Description Component',
        'organism'
    )
        .setSection('desktop')
        .setDescriptionComponent(
            'Listing description component can be used to display location & description of the listing.'
        )
        .setMarkdownFile(ListingDescriptionR123Documentation)
        .registerDocumentation(
            <>
                <HeadingDocsComponent>Usage</HeadingDocsComponent>
                <TextDocsComponent>
                    Listing Description Component
                </TextDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={
                        `${'<ListingDescriptionR123'}\n` +
                        `   ${'map={}'}\n` +
                        `   ${'content={}'}\n` +
                        `   ${'contentToggleSelector={}'}\n` +
                        `${'>'}`
                    }
                >
                    <div style={{ width: 750 }}>
                        <ListingDescriptionR123
                            map={{
                                id: 'map',
                                location: { lat: -6.300641, lng: 106.814095 },
                                width: '750px',
                                height: '320px',
                                mapKey: ''
                            }}
                            content={{
                                title:
                                    'Rumah Mewah Murah Strategis Bebas Banjir.. 5 menit dari pintu toll jatiasih, Jati Asih, Bekasi',
                                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Pellentesque id tincidunt neque. Curabitur a laoreet diam, vitae pellentesque diam. Suspendisse potenti. Nulla non sem vitae purus hendrerit varius et in ex.
                                    Vestibulum molestie semper libero eu facilisis.
                                    1. Nulla vel nibh in justo hendrerit blandit a vitae erat.
                                    Sed rutrum ex et justo dignissim ultrices.
                                    2. Maecenas quis erat libero.
                                    Aenean sem enim, venenatis sed condimentum ut, luctus sit amet dui.
                                    3. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                    Ut ut libero risus. In efficitur, ligula sit
                                    amet venenatis consequat, ligula quam varius leo,
                                    volutpat tincidunt quam turpis eget turpis. Pellentesque
                                    dapibus, urna nec lobortis tincidunt, risus nisi
                                    malesuada felis, ac rutrum nibh erat pharetra urna. Nunc
                                    eleifend iaculis massa, commodo malesuada leo congue
                                    eget. Morbi a dui erat. Cras consequat nibh felis, id
                                    aliquam libero sodales vel.`
                            }}
                            contentToggleSelector={{
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
