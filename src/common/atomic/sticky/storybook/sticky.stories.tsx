import React from 'react';

import StickyComponent from '../sticky.component';
import TextDocsComponent from '../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../.storybook/component/atomic/heading/heading.component';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';
import CodingViewerDocsComponent from '../../../../.storybook/component/molecules/code-viewer/code-viewer.component';

import '../style/style.scss';

const StickyDocumentation = require('./markdown/sticky.documentation.md');

/**
 * Sticky Component
 * @author Cathrine <cathrine@99.co>
 * @since 2020.05.03
 */
((): void => {
    new StorybookDocumentationBuilder('Sticky Component', 'atomic')
        .setSection('common')
        .setDescriptionComponent(
            'Sticky component is predominantly used for keeping something shown on the screen throughout scrolling'
        )
        .setMarkdownFile(StickyDocumentation)
        .registerDocumentation(
            <>
                <HeadingDocsComponent>Usage</HeadingDocsComponent>
                <TextDocsComponent>
                    The usage of this particular component is as follow :
                </TextDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={`${'<StickyComponent>Just drop anything here!</StickyComponent>'}`}
                >
                    <div
                        style={{
                            height: '300px'
                        }}
                    >
                        <StickyComponent>
                            Notice me! I am a sticky element!
                        </StickyComponent>
                    </div>
                </CodingViewerDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={`${'<StickyComponent top={100}>Just drop anything here!</StickyComponent>'}`}
                >
                    <div
                        style={{
                            height: '800px'
                        }}
                    >
                        <StickyComponent top={100}>
                            I am another sticky element with inserted top value
                        </StickyComponent>
                    </div>
                </CodingViewerDocsComponent>
            </>
        )
        .execute();
})();
