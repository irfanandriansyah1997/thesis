import React from 'react';

import NavbarR123Component from '../navbar-r123.component';
import { DefaultPropsNavbarR123 } from './templates/template-menu.stories';
import DividerDocsComponent from '../../../../.storybook/component/atomic/divider/divider.component';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';

import '../style/style.scss';

((): void => {
    new StorybookDocumentationBuilder('Navbar R123 Component', 'organism')
        .setSection('desktop')
        .setDescriptionComponent(
            'A list can be used to display content related to a single subject'
        )
        .registerDocumentation(
            <>
                <NavbarR123Component {...DefaultPropsNavbarR123} />
                <DividerDocsComponent />
                <NavbarR123Component
                    {...{ ...DefaultPropsNavbarR123, showLogo: false }}
                />
            </>
        )
        .execute();
})();
