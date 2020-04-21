import React from 'react';

import SectionCustomAccordionComponent from './section/section.custom.stories';
import SectionDefaultAccordionComponent from './section/section.default.stories';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';
import DividerDocsComponent from '../../../../.storybook/component/atomic/divider/divider.component';

import '../style/style.scss';

const LinkDocumentation = require('./markdown/accordion.documentation.md');

((): void => {
    new StorybookDocumentationBuilder('Accordion Component', 'molecules')
        .setSection('common')
        .setDescriptionComponent(
            'Accordion is a content area which can be collapsed and expanded, used to group or hide complex regions to keep the page clean.'
        )
        .setMarkdownFile(LinkDocumentation)
        .registerDocumentation(
            <>
                <SectionDefaultAccordionComponent />
                <DividerDocsComponent />
                <SectionCustomAccordionComponent />
            </>
        )
        .execute();
})();
