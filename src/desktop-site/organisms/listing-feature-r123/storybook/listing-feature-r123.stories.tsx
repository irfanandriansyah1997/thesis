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
                        `${'<ListingDescriptionR123'}\n` +
                        `   ${'map={}'}\n` +
                        `   ${'content={}'}\n` +
                        `   ${'contentToggleSelector={}'}\n` +
                        `${'>'}`
                    }
                >
                    <div style={{ width: 750 }}>
                        <ListingFeatureR123 title="Informasi properti" />
                    </div>
                </CodingViewerDocsComponent>
            </>
        )
        .execute();
})();
