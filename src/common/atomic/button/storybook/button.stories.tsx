import React from 'react';

import ButtonComponent from '../button.component';
import TextDocsComponent from '../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../.storybook/component/atomic/heading/heading.component';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';
import CodingViewerDocsComponent from '../../../../.storybook/component/molecules/code-viewer/code-viewer.component';

import '../style/style.scss';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ButtonDocumentation = require('./button.documentation.md');

((): void => {
    new StorybookDocumentationBuilder('Button Component', 'atomic')
        .setSection('common')
        .setDescriptionComponent('Testing Button Component')
        .setMarkdownFile(ButtonDocumentation)
        .registerDocumentation(
            <>
                <HeadingDocsComponent>Penggunaan Komponen</HeadingDocsComponent>
                <TextDocsComponent>
                    Contoh penggunaan komponent Button.
                </TextDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={`${"<ButtonComponent theme='primary'>Primary</ButtonComponent>"}\n${"<ButtonComponent theme='secondary'>Secondary</ButtonComponent>"}\n${"<ButtonComponent theme='success'>Success</ButtonComponent>"}\n${"<ButtonComponent theme='warning'>Success</ButtonComponent>"}\n${"<ButtonComponent theme='danger'>Danger</ButtonComponent>"}\n${"<ButtonComponent theme='info'>Info</ButtonComponent>"}`}
                >
                    <ButtonComponent size="default" theme="primary">
                        Primary
                    </ButtonComponent>
                    <ButtonComponent size="default" theme="secondary">
                        Secondary
                    </ButtonComponent>
                    <ButtonComponent size="default" theme="success">
                        Success
                    </ButtonComponent>
                    <ButtonComponent size="default" theme="warning">
                        Warning
                    </ButtonComponent>
                    <ButtonComponent size="default" theme="danger">
                        Danger
                    </ButtonComponent>
                    <ButtonComponent size="default" theme="info">
                        Info
                    </ButtonComponent>
                </CodingViewerDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={`${"<ButtonComponent size='big'>Primary</ButtonComponent>"}\n${"<ButtonComponent size='big'>Secondary</ButtonComponent>"}`}
                >
                    <ButtonComponent size="big" theme="primary">
                        Primary
                    </ButtonComponent>
                    <ButtonComponent size="big" theme="secondary">
                        Secondary
                    </ButtonComponent>
                </CodingViewerDocsComponent>
                <CodingViewerDocsComponent sourceCode="<ButtonComponent outline>Outline</ButtonComponent>">
                    <ButtonComponent outline size="default" theme="secondary">
                        Outline
                    </ButtonComponent>
                </CodingViewerDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={`${"<ButtonComponent theme='secondary' icon={<IconComponent />}>Close</ButtonComponent>"}`}
                >
                    <ButtonComponent
                        outline
                        size="default"
                        theme="secondary"
                        icon="close"
                    >
                        Close
                    </ButtonComponent>
                </CodingViewerDocsComponent>
            </>
        )
        .execute();
})();
