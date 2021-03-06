import React from 'react';

import SectionPremierCardComponent from './section/section.premier.stories';
import SectionFeaturedCardComponent from './section/section.featured.stories';
import DividerDocsComponent from '../../../../.storybook/component/atomic/divider/divider.component';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';

import '../style/style.scss';

const CardR123FeaturedDocumentation = require('./markdown/card-r123-featured.documentation.md');

((): void => {
    new StorybookDocumentationBuilder(
        'Featured / Premier R123 Card Component',
        'organism'
    )
        .setSection('desktop')
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
