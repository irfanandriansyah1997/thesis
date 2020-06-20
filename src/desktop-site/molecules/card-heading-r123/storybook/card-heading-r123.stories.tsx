/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import CardR123HeadingComponent from '../card-heading-r123.component';
import TextDocsComponent from '../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../.storybook/component/atomic/heading/heading.component';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';
import CodingViewerDocsComponent from '../../../../.storybook/component/molecules/code-viewer/code-viewer.component';

import '../style/style.scss';

const CardR123HeadingDocumentation = require('./markdown/card-r123-heading.documentation.md');

((): void => {
    new StorybookDocumentationBuilder(
        'Card Heading Component R123',
        'molecules'
    )
        .setSection('desktop')
        .setDescriptionComponent(
            'R123 Card hedaing can be used to display agency name & publising date in search result page cards.'
        )
        .setMarkdownFile(CardR123HeadingDocumentation)
        .registerDocumentation(
            <>
                <HeadingDocsComponent>Usage</HeadingDocsComponent>
                <TextDocsComponent>R123 card heading</TextDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={
                        `${'<CardR123HeadingComponent'}\n` +
                        `   ${'agencyName="Agency Name"'}\n` +
                        `   ${'publishingDate="Tayang sejak 1 Jan, 2020"'}\n` +
                        `${'>'}`
                    }
                >
                    <div style={{ border: '1px solid #f4f4f4' }}>
                        <CardR123HeadingComponent
                            agencyName="Agency Name"
                            publishingDate="Tayang sejak 1 Jan, 2020"
                        />
                    </div>
                </CodingViewerDocsComponent>
            </>
        )
        .execute();
})();
