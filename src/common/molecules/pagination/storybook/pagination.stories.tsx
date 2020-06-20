import React from 'react';

import PaginationComponent from '../pagination.component';
import TextDocsComponent from '../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../.storybook/component/atomic/heading/heading.component';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';
import CodingViewerDocsComponent from '../../../../.storybook/component/molecules/code-viewer/code-viewer.component';

import '../style/style.scss';

const PaginationDocumentation = require('./markdown/pagination.documentation.md');

((): void => {
    new StorybookDocumentationBuilder('Pagination Component', 'molecules')
        .setSection('common')
        .setDescriptionComponent(
            'Pagination is used to separate long sets of data so that it is easier for a user to consume information depending on the length provided.'
        )
        .setMarkdownFile(PaginationDocumentation)
        .registerDocumentation(
            <>
                <HeadingDocsComponent>Usage</HeadingDocsComponent>
                <TextDocsComponent>
                    The usage of this particular component is as follow :
                </TextDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={
                        `${'<PaginationComponent>'}\n` +
                        `           ${'page={2}'}\n` +
                        `           ${'rowCount={5}'}\n` +
                        `           ${'totalPage={10}'}\n` +
                        `           ${'onPageChange={(): void => undefined}'}\n` +
                        `${'/>'}`
                    }
                >
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <PaginationComponent
                            page={2}
                            rowCount={5}
                            totalPage={10}
                            onPageChange={(): void => undefined}
                        />
                    </div>
                </CodingViewerDocsComponent>
            </>
        )
        .execute();
})();
