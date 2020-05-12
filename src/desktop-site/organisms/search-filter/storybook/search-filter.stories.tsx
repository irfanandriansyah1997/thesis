import React from 'react';

import SearchFilter from '../search-filter.component';
import TextDocsComponent from '../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../.storybook/component/atomic/heading/heading.component';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';
import CodingViewerDocsComponent from '../../../../.storybook/component/molecules/code-viewer/code-viewer.component';

import '../style/style.scss';

// const items = [
//     {
//         option: [
//             {
//                 id: '1',
//                 value: '1',
//                 label: 'Baru/seken'
//             },
//             {
//                 id: '2',
//                 value: '2',
//                 label: 'Properti baru'
//             },
//             {
//                 id: '3',
//                 value: '3',
//                 label: 'Property seken'
//             }
//         ]
//     }
// ];

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
                <HeadingDocsComponent>Usage</HeadingDocsComponent>
                <TextDocsComponent>Search Filter</TextDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={
                        `${'<SearchFilter'}\n` +
                        `   ${'heading="Residensial dijual"'}\n` +
                        `${'/>'}`
                    }
                >
                    <SearchFilter
                        searchText="Rumah dijual di Jakarta"
                        filterItem={[]}
                        sortingItem={{ value: 1, sortingText: '', option: [] }}
                    />
                </CodingViewerDocsComponent>
            </>
        )
        .execute();
})();
