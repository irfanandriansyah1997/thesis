import React from 'react';

import SectionDefaultDropdownComponent from './section/section-default.stories';
import SectionDropdownAsContentComponent from './section/section-dropdown-as-content.stories';
import SectionDropdownToggleCustomComponent from './section/section-dropdown-toggle-custom.stories';
import DividerDocsComponent from '../../../../.storybook/component/atomic/divider/divider.component';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';

import '../style/style.scss';

((): void => {
    new StorybookDocumentationBuilder('Dropdown Component', 'molecules')
        .setSection('common')
        .setDescriptionComponent(
            'Dropdown Component is a graphical control element, similar to a list box, that allows the user to choose one value from a list.'
        )
        .registerDocumentation(
            <>
                <SectionDefaultDropdownComponent />
                <DividerDocsComponent />
                <SectionDropdownToggleCustomComponent />
                <DividerDocsComponent />
                <SectionDropdownAsContentComponent />
            </>
        )
        .execute();
})();
