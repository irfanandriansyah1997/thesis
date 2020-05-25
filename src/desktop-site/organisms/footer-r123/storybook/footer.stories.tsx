import React from 'react';
import FooterComponent from '../footer.component';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';
import HeadingDocsComponent from '../../../../.storybook/component/atomic/heading/heading.component';
import TextDocsComponent from '../../../../.storybook/component/atomic/text/text.component';
import CodingViewerDocsComponent from '../../../../.storybook/component/molecules/code-viewer/code-viewer.component';
import '../style/style.scss';
import { DefaultFooterR123 } from './templates/template-footer.stories';

const TextDocumentation = require('./markdown/footer.documentation.md');

((): void => {
    const param = DefaultFooterR123;
    new StorybookDocumentationBuilder('R123 Footer Component', 'organism')
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
                    <FooterComponent
                        tabs={param.tabs}
                        socmedMedias={param.socmedMedias}
                        sitemap={param.sitemap}
                        publishMedias={param.publishMedias}
                        siteRegions={param.siteRegions}
                        partners={param.partners}
                        copyrightText={param.copyrightText}
                    />
                </CodingViewerDocsComponent>
            </>
        )
        .execute();
})();
