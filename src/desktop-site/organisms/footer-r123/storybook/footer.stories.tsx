import React from 'react';
import FooterComponent from '../footer.component';
import { DefaultFooterR123 } from './templates/template-footer.stories';
import TextDocsComponent from '../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../.storybook/component/atomic/heading/heading.component';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';
import CodingViewerDocsComponent from '../../../../.storybook/component/molecules/code-viewer/code-viewer.component';

import '../style/style.scss';

const TextDocumentation = require('./markdown/footer.documentation.md');

((): void => {
    new StorybookDocumentationBuilder('Footer R123 Component', 'organism')
        .setSection('desktop')
        .setDescriptionComponent(
            'R123 footer component can be used to display footer section in page'
        )
        .setMarkdownFile(TextDocumentation)
        .registerDocumentation(
            <>
                <HeadingDocsComponent>Usage</HeadingDocsComponent>
                <TextDocsComponent>Footer component</TextDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={`${'const { Item } = TabsComponent;'}\n\n`}
                >
                    <FooterComponent {...DefaultFooterR123} />
                </CodingViewerDocsComponent>
            </>
        )
        .execute();
})();
