import React from 'react';

import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';
import DividerDocsComponent from '../../../../.storybook/component/atomic/divider/divider.component';
import SectionFeaturedCardComponent from './section/section.featured.stories';
import SectionPremierCardComponent from './section/section.premier.stories';

import '../style/style.scss';

const CardR123FeaturedDocumentation = require('./markdown/card-r123-featured.documentation.md');

((): void => {
    new StorybookDocumentationBuilder(
        'R123 Featured Card Component',
        'organism'
    )
        .setSection('common')
        .setDescriptionComponent(
            'R123 Featured Card can be used to display featured or premier listing card on search result page.'
        )
        .setMarkdownFile(CardR123FeaturedDocumentation)
        .registerDocumentation(
            <>
                <SectionFeaturedCardComponent />
                <DividerDocsComponent />
                <SectionPremierCardComponent />
            </>
        )
        .execute();
})();
