import React from 'react';

import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';
import DeafultSearchFilterSectionComponent from './section/search-filter-default.stories';

import '../style/style.scss';

const SearchFilterDocumentation = require('./markdown/search-filter.documentation.md');

((): void => {
    new StorybookDocumentationBuilder('Search Filter Component', 'organism')
        .setSection('desktop')
        .setDescriptionComponent(
            'Search Filter Component in search result page.'
        )
        .setMarkdownFile(SearchFilterDocumentation)
        .registerDocumentation(
            <>
                <DeafultSearchFilterSectionComponent
                    searchText="Rumah dijual di Jakarta"
                    filterItem={[]}
                    sortingItem={{ value: 1, sortingText: '', option: [] }}
                />
            </>
        )
        .execute();
})();
