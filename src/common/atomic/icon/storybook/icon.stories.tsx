/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';

import IconComponent from '../icon.component';
import TextDocsComponent from '../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../.storybook/component/atomic/heading/heading.component';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';
import CodingViewerDocsComponent from '../../../../.storybook/component/molecules/code-viewer/code-viewer.component';

import '../style/style.scss';

const IconDocumentation = require('./icon.documentation.md');

((): void => {
    new StorybookDocumentationBuilder('Icon Component', 'atomic')
        .setSection('common')
        .setDescriptionComponent('Testing Icon Component')
        .setMarkdownFile(IconDocumentation)
        .registerDocumentation(
            <>
                <HeadingDocsComponent>Penggunaan Komponen</HeadingDocsComponent>
                <TextDocsComponent>
                    Contoh penggunaan komponent Button.
                </TextDocsComponent>
                <CodingViewerDocsComponent sourceCode="<IconComponent color='primary' size={20}>close</IconComponent>">
                    <IconComponent color="primary" size={20}>
                        close
                    </IconComponent>
                </CodingViewerDocsComponent>
            </>
        )
        .execute();
})();
