import React from 'react';

import SectionDefaultImageComponent from './section/section-default.stories';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';

import '../style/style.scss';

const ImageDocumentation = require('./markdown/image.documentation.md');

((): void => {
    new StorybookDocumentationBuilder('Image Komponen', 'atomic')
        .setSection('common')
        .setDescriptionComponent(
            'Image komponen digunakan apabila anda akan membuat komponen gambar'
        )
        .setMarkdownFile(ImageDocumentation)
        .registerDocumentation(
            <>
                <SectionDefaultImageComponent />
            </>
        )
        .execute();
})();
