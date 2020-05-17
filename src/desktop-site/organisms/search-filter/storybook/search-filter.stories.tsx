import React from 'react';

import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';
import DefaultSearchFilterSectionComponent from './section/search-filter-custom.stories';
import CustomSearchFilterSectionComponent from './section/search-filter-default.stories';
import DividerDocsComponent from '../../../../.storybook/component/atomic/divider/divider.component';

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
                <CustomSearchFilterSectionComponent
                    hasChildrenToggle={false}
                    hasSortingFilter={false}
                    filterItem={[]}
                    sortingItem={{
                        value: 1,
                        sortingText: '',
                        option: []
                    }}
                    onChangeFilterField={(): void => undefined}
                    onChangeSortingField={(): void => undefined}
                />
                <DividerDocsComponent />
                <DefaultSearchFilterSectionComponent
                    hasChildrenToggle
                    hasSortingFilter
                    filterItem={[]}
                    sortingItem={{
                        value: 1,
                        sortingText: '',
                        option: []
                    }}
                    onChangeFilterField={(): void => undefined}
                    onChangeSortingField={(): void => undefined}
                />
            </>
        )
        .execute();
})();
