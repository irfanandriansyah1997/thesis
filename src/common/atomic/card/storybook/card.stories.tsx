import React from 'react';

import CardComponent from '../card.component';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';
import TextDocsComponent from '../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../.storybook/component/atomic/heading/heading.component';
import CodingViewerDocsComponent from '../../../../.storybook/component/molecules/code-viewer/code-viewer.component';

import '../style/style.scss';

const CardDocumentation = require('./markdown/card.documentation.md');

((): void => {
    new StorybookDocumentationBuilder('Card Component', 'atomic')
        .setSection('common')
        .setDescriptionComponent(
            'A card can be used to display content related to a single subject.'
        )
        .setMarkdownFile(CardDocumentation)
        .registerDocumentation(
            <>
                <HeadingDocsComponent>Usage</HeadingDocsComponent>
                <TextDocsComponent>Default card</TextDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={
                        `${'<CardComponent>'}\n` +
                        `   ${'<p>'}\n` +
                        `       ${'In hac habitasse platea dictumst. Quisque tristique erat ante, vitae cursus quam molestie non. Etiam hendrerit elit at maximus venenatis. Vivamus aliquam risus ante. Phasellus in mauris mollis, aliquam libero gravida, vulputate eros. Fusce vel malesuada eros.'}\n` +
                        `   ${'</p>'}\n` +
                        `${'</CardComponent>'}`
                    }
                >
                    <div
                        style={{
                            width: '100%',
                            padding: 24,
                            backgroundColor: '#f4f4f4'
                        }}
                    >
                        <CardComponent style={{ maxWidth: 360, padding: 16 }}>
                            <p
                                style={{
                                    lineHeight: 1.5
                                }}
                            >
                                In hac habitasse platea dictumst. Quisque
                                tristique erat ante, vitae cursus quam molestie
                                non. Etiam hendrerit elit at maximus venenatis.
                                Vivamus aliquam risus ante. Phasellus in mauris
                                mollis, aliquam libero gravida, vulputate eros.
                                Fusce vel malesuada eros.
                            </p>
                        </CardComponent>
                    </div>
                </CodingViewerDocsComponent>
                <TextDocsComponent>
                    Default card with box shadow
                </TextDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={
                        `${'<CardComponent boxShadow="r123">'}\n` +
                        `   ${'<p>'}\n` +
                        `       ${'In hac habitasse platea dictumst. Quisque tristique erat ante, vitae cursus quam molestie non. Etiam hendrerit elit at maximus venenatis. Vivamus aliquam risus ante. Phasellus in mauris mollis, aliquam libero gravida, vulputate eros. Fusce vel malesuada eros.'}\n` +
                        `   ${'</p>'}\n` +
                        `${'</CardComponent>'}`
                    }
                >
                    <CardComponent
                        boxShadow="r123"
                        style={{ maxWidth: 360, padding: 16 }}
                    >
                        <p
                            style={{
                                lineHeight: 1.5
                            }}
                        >
                            In hac habitasse platea dictumst. Quisque tristique
                            erat ante, vitae cursus quam molestie non. Etiam
                            hendrerit elit at maximus venenatis. Vivamus aliquam
                            risus ante. Phasellus in mauris mollis, aliquam
                            libero gravida, vulputate eros. Fusce vel malesuada
                            eros.
                        </p>
                    </CardComponent>
                </CodingViewerDocsComponent>
                <TextDocsComponent>Card with customized size</TextDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={
                        `${'<CardComponent boxShadow="r123" size={750}>'}\n` +
                        `   ${'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>'}\n` +
                        `   ${'<p>'}\n` +
                        `       ${'Donec in est ex. Suspendisse massa arcu, aliquet quis purus in, rhoncus porta nisl. Cras interdum erat sed leo suscipit convallis. Sed sed accumsan tortor. Vivamus aliquam orci eros, auctor sollicitudin lorem efficitur vitae. Curabitur ullamcorper nisl at pretium posuere. Morbi lobortis turpis et consectetur consequat. In venenatis viverra maximus. Vivamus maximus tristique dolor vel feugiat. Nam sit amet rhoncus ante.'}\n` +
                        `   ${'</p>'}\n` +
                        `${'</CardComponent>'}`
                    }
                >
                    <CardComponent
                        boxShadow="r123"
                        size={750}
                        style={{ padding: 16 }}
                    >
                        <p style={{ lineHeight: 1.5, fontSize: 24 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                        <p
                            style={{
                                lineHeight: 1.5
                            }}
                        >
                            Donec in est ex. Suspendisse massa arcu, aliquet
                            quis purus in, rhoncus porta nisl. Cras interdum
                            erat sed leo suscipit convallis. Sed sed accumsan
                            tortor. Vivamus aliquam orci eros, auctor
                            sollicitudin lorem efficitur vitae. Curabitur
                            ullamcorper nisl at pretium posuere. Morbi lobortis
                            turpis et consectetur consequat. In venenatis
                            viverra maximus. Vivamus maximus tristique dolor vel
                            feugiat. Nam sit amet rhoncus ante.
                        </p>
                    </CardComponent>
                </CodingViewerDocsComponent>
            </>
        )
        .execute();
})();
