import React from 'react';

import TabsComponent from '../tabs.component';
import TextComponent from '../../../atomic/text/text.component';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';
import TextDocsComponent from '../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../.storybook/component/atomic/heading/heading.component';
import CodingViewerDocsComponent from '../../../../.storybook/component/molecules/code-viewer/code-viewer.component';

import '../style/style.scss';

const TextDocumentation = require('./markdown/tabs.documentation.md');

const { Item } = TabsComponent;

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
                    sourceCode={
                        `${'const { Item } = TabsComponent;'}\n\n` +
                        `${'<TabsComponent>'}\n` +
                        `   ${'<Item tab="Tab1">'}\n` +
                        `       ${'<TextComponent tag="p">Content of tab One</TextComponent>'}\n` +
                        `   ${'</Item>'}\n` +
                        `   ${'<Item tab="Tab2">'}\n` +
                        `       ${'<TextComponent tag="p">Content of tab Two</TextComponent>'}\n` +
                        `   ${'</Item>'}\n` +
                        `   ${'<Item tab="Tab3">'}\n` +
                        `       ${'<TextComponent tag="p">Content of tab Three</TextComponent>'}\n` +
                        `   ${'</Item>'}\n` +
                        `${'</TabsComponent>'}`
                    }
                >
                    <TabsComponent>
                        <Item tab="Tab1">
                            <TextComponent
                                tag="p"
                                style={{
                                    lineHeight: 1.5
                                }}
                            >
                                Content of tab One
                            </TextComponent>
                        </Item>
                        <Item tab="Tab2">
                            <TextComponent
                                tag="p"
                                style={{
                                    marginTop: 16,
                                    lineHeight: 1.5
                                }}
                            >
                                Content of tab Two
                            </TextComponent>
                        </Item>
                        <Item tab="Tab3">
                            <TextComponent
                                tag="p"
                                style={{
                                    marginTop: 16,
                                    lineHeight: 1.5
                                }}
                            >
                                Content of tab Three
                            </TextComponent>
                        </Item>
                    </TabsComponent>
                </CodingViewerDocsComponent>
            </>
        )
        .execute();
})();
