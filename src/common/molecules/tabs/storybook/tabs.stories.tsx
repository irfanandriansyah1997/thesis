import React from 'react';

import TabsComponent from '../tabs.component';
import TextComponent from '../../../atomic/text/text.component';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';
import TextDocsComponent from '../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../.storybook/component/atomic/heading/heading.component';
import CodingViewerDocsComponent from '../../../../.storybook/component/molecules/code-viewer/code-viewer.component';

import '../style/style.scss';

const TextDocumentation = require('./markdown/tabs.documentation.md');

((): void => {
    new StorybookDocumentationBuilder('Tabs Component', 'molecules')
        .setSection('common')
        .setDescriptionComponent(
            'Text component is used to display title or paragraph, text on lable, etc.'
        )
        .setMarkdownFile(TextDocumentation)
        .registerDocumentation(
            <>
                <HeadingDocsComponent>Usage</HeadingDocsComponent>
                <TextDocsComponent>Basic tabs component</TextDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={`${"<TextComponent tag='h1' styling='heading-1'>h1 Text heading</TextComponent>"}\n${"<TextComponent tag='h2' styling='heading-2'>h2 Text heading</TextComponent>"}\n${"<TextComponent tag='h3' styling='heading-3'>h3 Text heading</TextComponent>"}\n${"<TextComponent tag='h4' styling='heading-4'>h4 Text heading</TextComponent>"}\n${"<TextComponent tag='h5' styling='heading-5'>h5 Text heading</TextComponent>"}\n${"<TextComponent tag='h6' styling='heading-6'>h6 Text heading</TextComponent>"}`}
                >
                    <TabsComponent>
                        <TabsComponent.Item tab="Tab1">
                            <TextComponent
                                tag="p"
                                style={{
                                    lineHeight: 1.5
                                }}
                            >
                                Content of tab One
                            </TextComponent>
                        </TabsComponent.Item>
                        <TabsComponent.Item tab="Tab2">
                            <TextComponent
                                tag="p"
                                style={{
                                    marginTop: 16,
                                    lineHeight: 1.5
                                }}
                            >
                                Content of tab Two
                            </TextComponent>
                        </TabsComponent.Item>
                        <TabsComponent.Item tab="Tab3">
                            <TextComponent
                                tag="p"
                                style={{
                                    marginTop: 16,
                                    lineHeight: 1.5
                                }}
                            >
                                Content of tab Three
                            </TextComponent>
                        </TabsComponent.Item>
                    </TabsComponent>
                </CodingViewerDocsComponent>
            </>
        )
        .execute();
})();
