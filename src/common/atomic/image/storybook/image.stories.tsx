import React from 'react';

import TextDocsComponent from '../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../.storybook/component/atomic/heading/heading.component';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';

import '../style/style.scss';
// import { ComponentImageDefaultPropsInterface } from '../../../../shared/interface/component/component-image.inteface';

((): void => {
    new StorybookDocumentationBuilder('Image Komponen', 'atomic')
        .setSection('common')
        .setDescriptionComponent(
            'Image Component digunakan apabila anda akan membuat component gambar'
        )
        .registerDocumentation(
            <>
                <>
                    <HeadingDocsComponent>
                        Penggunaan Komponen Image
                    </HeadingDocsComponent>
                    <TextDocsComponent>
                        Berikut adalah contoh penggunaan komponent image
                    </TextDocsComponent>
                </>
            </>
        )
        .execute();
})();
