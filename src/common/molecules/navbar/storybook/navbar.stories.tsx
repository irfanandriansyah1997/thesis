import React from 'react';

import SectionNavbarItemComponent from './section/section-navbar-item.stories';
import SectionNavbarDropdownComponent from './section/section-navbar-dropdown.stories';
import DividerDocsComponent from '../../../../.storybook/component/atomic/divider/divider.component';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';

import '../style/style.scss';

((): void => {
    new StorybookDocumentationBuilder('Navbar Component', 'molecules')
        .setSection('common')
        .setDescriptionComponent(
            'A navbar can be used to display menu or link in header section'
        )
        .registerDocumentation(
            <>
                <SectionNavbarItemComponent />
                <DividerDocsComponent />
                <SectionNavbarDropdownComponent />
            </>
        )
        .execute();
})();
