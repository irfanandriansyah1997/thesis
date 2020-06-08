import React from 'react';

import SectionDefaultMediaPlayerComponent from './section/section-default.stories';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';

import '../style/style.scss';

((): void => {
    new StorybookDocumentationBuilder('Media Komponen', 'atomic')
        .setSection('common')
        .setDescriptionComponent(
            'Media player komponen digunakan apabila anda akan menampilkan iframe youtube yang nantinya akan ditampilkan didalam website'
        )
        .registerDocumentation(
            <>
                <SectionDefaultMediaPlayerComponent />
            </>
        )
        .execute();
})();
