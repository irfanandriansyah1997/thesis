import React from 'react';

import TextComponent from '../text.component';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';
import TextDocsComponent from '../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../.storybook/component/atomic/heading/heading.component';
import CodingViewerDocsComponent from '../../../../.storybook/component/molecules/code-viewer/code-viewer.component';

import '../style/style.scss';

const TextDocumentation = require('./markdown/text.documentation.md');

((): void => {
    new StorybookDocumentationBuilder('Text Component', 'atomic')
        .setSection('common')
        .setDescriptionComponent(
            'Text component is used to display title or paragraph, text on lable, etc.'
        )
        .setMarkdownFile(TextDocumentation)
        .registerDocumentation(
            <>
                <HeadingDocsComponent>Usage</HeadingDocsComponent>
                <TextDocsComponent>
                    Text component as title or heading
                </TextDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={`${"<TextComponent tag='h1' styling='heading-1'>h1 Text heading</TextComponent>"}\n${"<TextComponent tag='h2' styling='heading-2'>h2 Text heading</TextComponent>"}\n${"<TextComponent tag='h3' styling='heading-3'>h3 Text heading</TextComponent>"}\n${"<TextComponent tag='h4' styling='heading-4'>h4 Text heading</TextComponent>"}\n${"<TextComponent tag='h5' styling='heading-5'>h5 Text heading</TextComponent>"}\n${"<TextComponent tag='h6' styling='heading-6'>h6 Text heading</TextComponent>"}`}
                >
                    <div style={{ margin: 8 }}>
                        <TextComponent tag="h1" styling="heading-1">
                            h1 Text heading
                        </TextComponent>
                    </div>
                    <div style={{ margin: 8 }}>
                        <TextComponent tag="h2" styling="heading-2">
                            h2 Text heading
                        </TextComponent>
                    </div>
                    <div style={{ margin: 8 }}>
                        <TextComponent tag="h3" styling="heading-3">
                            h3 Text heading
                        </TextComponent>
                    </div>
                    <div style={{ margin: 8 }}>
                        <TextComponent tag="h4" styling="heading-4">
                            h4 Text heading
                        </TextComponent>
                    </div>
                    <div style={{ margin: 8 }}>
                        <TextComponent tag="h5" styling="heading-5">
                            h5 Text heading
                        </TextComponent>
                    </div>
                    <div style={{ margin: 8 }}>
                        <TextComponent tag="h6" styling="heading-6">
                            h6 Text heading
                        </TextComponent>
                    </div>
                </CodingViewerDocsComponent>
                <TextDocsComponent>
                    Text component as paragraph or body text
                </TextDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={`${"<TextComponent tag='p' styling='tiny'>This line rendered as tiny text.</TextComponent>"}\n${"<TextComponent tag='p'>This line rendered as normal text.</TextComponent>"}\n${"<TextComponent tag='p' fontWeight=700>This line rendered as bold text.</TextComponent>"}\n${"<TextComponent tag='p' styling='heading-5'>This line of text rendered with heading style.</TextComponent>"}`}
                >
                    <div style={{ margin: 8 }}>
                        <TextComponent tag="p" styling="tiny">
                            This line rendered as tiny text.
                        </TextComponent>
                    </div>
                    <div style={{ margin: 8 }}>
                        <TextComponent tag="p">
                            This line rendered as normal text.
                        </TextComponent>
                    </div>
                    <div style={{ margin: 8 }}>
                        <TextComponent tag="p" fontWeight={700}>
                            This line rendered as bold text.
                        </TextComponent>
                    </div>
                    <div style={{ margin: 8 }}>
                        <TextComponent tag="p" styling="heading-5">
                            This line of text rendered with heading style.
                        </TextComponent>
                    </div>
                </CodingViewerDocsComponent>
                <TextDocsComponent>
                    Adding color to text component
                </TextDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={`${"<TextComponent tag='p' color='primary'>This line of text rendered with primary color.</TextComponent>"}\n${"<TextComponent tag='p' styling='heading-5' color='warning'>This line of text rendered with warning color.</TextComponent>"}\n${"<TextComponent tag='h4' styling='heading-4' color='heading'>This line of text rendered with primary color.</TextComponent>"}`}
                >
                    <div style={{ margin: 8 }}>
                        <TextComponent tag="p" color="primary">
                            This line of text rendered with primary color.
                        </TextComponent>
                    </div>
                    <div style={{ margin: 8 }}>
                        <TextComponent
                            tag="p"
                            styling="heading-5"
                            color="warning"
                        >
                            This line of text rendered with warning color.
                        </TextComponent>
                    </div>
                    <div style={{ margin: 8 }}>
                        <TextComponent
                            tag="h4"
                            styling="heading-4"
                            color="heading"
                        >
                            This heading rendered with heading color.
                        </TextComponent>
                    </div>
                </CodingViewerDocsComponent>
                <TextDocsComponent>
                    Text component with alignment
                </TextDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={`${"<TextComponent tag='p' styling='heading-5'>This line rendered with default alignment.</TextComponent>"}\n${"<TextComponent tag='p' styling='heading-5' align='center'>This line rendered with center alignment.</TextComponent>"}\n${"<TextComponent tag='p' styling='heading-5' align='right'>This line rendered with right alignment.</TextComponent>"}`}
                >
                    <div style={{ margin: 8 }}>
                        <TextComponent tag="p" styling="heading-5">
                            This line rendered with default alignment.
                        </TextComponent>
                    </div>
                    <div style={{ margin: 8 }}>
                        <TextComponent
                            tag="p"
                            styling="heading-5"
                            align="center"
                        >
                            This line rendered with center alignment.
                        </TextComponent>
                    </div>
                    <div style={{ margin: 8 }}>
                        <TextComponent
                            tag="p"
                            styling="heading-5"
                            align="right"
                        >
                            This line rendered with right alignment.
                        </TextComponent>
                    </div>
                </CodingViewerDocsComponent>
            </>
        )
        .execute();
})();
