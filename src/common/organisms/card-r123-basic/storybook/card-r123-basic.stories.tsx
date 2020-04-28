import React from 'react';

import CardR123Basic from '../card-r123-basic.component';
import ImageComponent from '../../../atomic/image/image.component';
import TextDocsComponent from '../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../.storybook/component/atomic/heading/heading.component';
import CodingViewerDocsComponent from '../../../../.storybook/component/molecules/code-viewer/code-viewer.component';
import TextComponent from '../../../atomic/text/text.component';

import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';

import '../style/style.scss';

const CardR123BasicDocumentation = require('./markdown/card.documentation.md');

const { Media, Content } = CardR123Basic;

((): void => {
    new StorybookDocumentationBuilder('Basic R123 Card Component', 'organism')
        .setSection('common')
        .setDescriptionComponent(
            'Basic R123 Card can be used to display basic listing card in search result page.'
        )
        .setMarkdownFile(CardR123BasicDocumentation)
        .registerDocumentation(
            <>
                <HeadingDocsComponent>Usage</HeadingDocsComponent>
                <TextDocsComponent>Deafult Basic R123 card</TextDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={
                        `${'const { Media, Content } = CardR123Basic;'}\n\n` +
                        `${'<CardR123Basic>'}\n` +
                        `   ${'<Media width={250} height={250}>'}\n` +
                        `       ${'<ImageComponent src="https://images.unsplash.com/photo-1562886812-41775a01195d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="Images 1" type="square" width="100%" height="100%" objectFit="cover" />'}\n` +
                        `   ${'</Media>'}\n` +
                        `   ${'<Content style={{ marginLeft: 16 }}>'}\n` +
                        `       ${'<TextComponent tag="p">'}\n` +
                        `           ${'Some content...'}\n` +
                        `       ${'</TextComponent>'}\n` +
                        `       ${'<TextComponent tag="p" style={{ marginTop: 16 }}>'}\n` +
                        `           ${'Some content...'}\n` +
                        `       ${'</TextComponent>'}\n` +
                        `       ${'<TextComponent tag="p" style={{ marginTop: 16 }}>'}\n` +
                        `           ${'Some content...'}\n` +
                        `       ${'</TextComponent>'}\n` +
                        `   ${'</Content>'}\n` +
                        `${'</CardR123Basic>'}`
                    }
                >
                    <CardR123Basic>
                        <Media width={250} height={250}>
                            <ImageComponent
                                src="https://images.unsplash.com/photo-1562886812-41775a01195d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                                alt="Images 1"
                                type="square"
                                width="100%"
                                height="100%"
                                objectFit="cover"
                            />
                        </Media>
                        <Content style={{ marginLeft: 16 }}>
                            <TextComponent
                                tag="p"
                                style={{
                                    lineHeight: 1.5
                                }}
                            >
                                Some content...
                            </TextComponent>
                            <TextComponent
                                tag="p"
                                style={{
                                    lineHeight: 1.5,
                                    marginTop: 16
                                }}
                            >
                                Some content...
                            </TextComponent>
                            <TextComponent
                                tag="p"
                                style={{
                                    lineHeight: 1.5,
                                    marginTop: 16
                                }}
                            >
                                Some content...
                            </TextComponent>
                        </Content>
                    </CardR123Basic>
                </CodingViewerDocsComponent>
            </>
        )
        .execute();
})();
