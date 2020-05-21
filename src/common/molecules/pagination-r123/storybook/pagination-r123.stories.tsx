import React from 'react';

import PaginationR123Component from '../pagination-r123.component';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';
import TextDocsComponent from '../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../.storybook/component/atomic/heading/heading.component';
import CodingViewerDocsComponent from '../../../../.storybook/component/molecules/code-viewer/code-viewer.component';

import '../style/style.scss';

const PaginationR123Documentation = require('./markdown/pagination-r123.documentation.md');

((): void => {
    new StorybookDocumentationBuilder('Pagination R123 Component', 'molecules')
        .setSection('common')
        .setDescriptionComponent(
            'Pagination can be used when it will take a long time to load/render all items or if we want to browse the data by navigating through pages.'
        )
        .setMarkdownFile(PaginationR123Documentation)
        .registerDocumentation(
            <>
                <HeadingDocsComponent>Usage</HeadingDocsComponent>
                <TextDocsComponent>Basic R123 Pagination</TextDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={
                        `${'<div style={{ display: "flex", justifyContent: "center" }}>'}\n` +
                        `   ${'<PaginationR123Component'}\n` +
                        `           ${'page={1}'}\n` +
                        `           ${'totalPage={30}'}\n` +
                        `           ${'pageRange={1}'}\n` +
                        `           ${'onPageChange={(): void => undefined}'}\n` +
                        `   ${'/>'}\n` +
                        `${'</div>'}`
                    }
                >
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <PaginationR123Component
                            page={19}
                            totalPage={20}
                            pageRange={3}
                            onPageChange={(): void => undefined}
                        />
                    </div>
                </CodingViewerDocsComponent>
            </>
        )
        .execute();
})();
