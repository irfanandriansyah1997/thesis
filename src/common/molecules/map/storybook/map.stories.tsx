import React from 'react';

import MapComponent from '../map.component';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';
import TextDocsComponent from '../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../.storybook/component/atomic/heading/heading.component';
import CodingViewerDocsComponent from '../../../../.storybook/component/molecules/code-viewer/code-viewer.component';

import '../style/style.scss';

const MapDocumentation = require('./markdown/map.documentation.md');

((): void => {
    new StorybookDocumentationBuilder('Map Component', 'molecules')
        .setSection('common')
        .setDescriptionComponent(
            'Map component can be used to display location of the listing.'
        )
        .setMarkdownFile(MapDocumentation)
        .registerDocumentation(
            <>
                <HeadingDocsComponent>Usage</HeadingDocsComponent>
                <TextDocsComponent>Map Component</TextDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={
                        `${'<MapComponent'}\n` +
                        `   ${'id="Map"'}\n` +
                        `   ${'location={{ lat: -6.300641, lng: 106.814095 }}'}\n` +
                        `   ${'width="750px"'}\n` +
                        `   ${'height="400px"'}\n` +
                        `   ${'mapKey=""'}\n` +
                        `${'>'}`
                    }
                >
                    <MapComponent
                        id="Map"
                        location={{ lat: -6.300641, lng: 106.814095 }}
                        width="750px"
                        height="400px"
                        mapKey=""
                    />
                </CodingViewerDocsComponent>
            </>
        )
        .execute();
})();
