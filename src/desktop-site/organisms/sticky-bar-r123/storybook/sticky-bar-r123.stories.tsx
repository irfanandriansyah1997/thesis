/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import StickyBarR123 from '../sticky-bar-r123.component';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';
import TextDocsComponent from '../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../.storybook/component/atomic/heading/heading.component';
import CodingViewerDocsComponent from '../../../../.storybook/component/molecules/code-viewer/code-viewer.component';

import '../style/style.scss';

const StickyBarR123Documentation = require('./markdown/sticky-bar-r123.documentation.md');

((): void => {
    new StorybookDocumentationBuilder('Sticky Bar R123 Component', 'organism')
        .setSection('desktop')
        .setDescriptionComponent(
            'Sticky bar component can be used to display summary info of the listing when the page is scrolled.'
        )
        .setMarkdownFile(StickyBarR123Documentation)
        .registerDocumentation(
            <>
                <HeadingDocsComponent>Usage</HeadingDocsComponent>
                <TextDocsComponent>Sticky Bar Component</TextDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={
                        `${'<StickyBarR123'}\n` +
                        `   ${'title="Rumah murah mewah, Harga terjangkau dan dekat dengan pusat kota Jakarta"'}\n` +
                        `   ${'priceTag="Rp. 4.550.000.000"'}\n` +
                        `   ${'address="Pasar Minggu, Jakarta Selatan"'}\n` +
                        `   ${'tier="premier"'}\n` +
                        `   ${'attribute={{'}\n` +
                        `       ${'bedroom: "6",'}\n` +
                        `       ${'bathroom: "4",'}\n` +
                        `       ${'carport: "1",'}\n` +
                        `   ${'}}'}\n` +
                        `   ${'saveAction={{'}\n` +
                        `       ${'label: "Simpan",'}\n` +
                        `       ${'onClick: (): void => {}'}\n` +
                        `   ${'}}'}\n` +
                        `${'>'}`
                    }
                >
                    <StickyBarR123
                        title="Rumah murah mewah, Harga terjangkau dan dekat dengan pusat kota Jakarta"
                        priceTag="Rp. 4.550.000.000"
                        address="Pasar Minggu, Jakarta Selatan"
                        tier="premier"
                        attribute={{
                            bedroom: '6',
                            bathroom: '4',
                            carport: '1'
                        }}
                        saveAction={{
                            label: 'Simpan',
                            onClick: (): void => {}
                        }}
                    />
                </CodingViewerDocsComponent>
            </>
        )
        .execute();
})();
