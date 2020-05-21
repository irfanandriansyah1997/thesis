import React from 'react';

import SectionDefaultHollowLinkComponent from './section/section-default.stories';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';

import '../style/style.scss';

((): void => {
    new StorybookDocumentationBuilder('Hollow Link', 'molecules')
        .setSection('common')
        .setDescriptionComponent(
            'Link component is used to wrapping link component and icon component'
        )
        .registerDocumentation(
            <>
                <SectionDefaultHollowLinkComponent />
            </>
        )
        .execute();
})();
