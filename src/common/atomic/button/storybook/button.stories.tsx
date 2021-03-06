import React, { SFC } from 'react';

import ButtonComponent from '../button.component';
import IconComponent from '../../icon/icon.component';
import { ButtonPropsInterface } from '../interface/component.interface';
import { ButtonDefaultDocsTemplate } from './template/template-button.stories';
import TextDocsComponent from '../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../.storybook/component/atomic/heading/heading.component';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';
import CodingViewerDocsComponent from '../../../../.storybook/component/molecules/code-viewer/code-viewer.component';

import '../style/style.scss';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ButtonDocumentation = require('./markdown/button.documentation.md');

/**
 * Generate Docs
 * @param {string} type - type props image
 * @return {string}
 */
const docs = (props: ButtonPropsInterface): string =>
    `<ButtonComponent size="${props.size}" theme="${props.theme}" icon={<Icon />}>Outline</ButtonComponent>
`;

/**
 * Create Icon
 * @return {string}
 */
const Icon: SFC = () => (
    <IconComponent color="primary" size={18}>
        close
    </IconComponent>
);

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
                    <ButtonComponent size="default" style={{ marginRight: 8 }}>
                        Primary
                    </ButtonComponent>
                    <ButtonComponent
                        size="default"
                        theme="secondary"
                        style={{ marginRight: 8 }}
                    >
                        Secondary
                    </ButtonComponent>
                    <ButtonComponent
                        size="default"
                        theme="success"
                        style={{ marginRight: 8 }}
                    >
                        Success
                    </ButtonComponent>
                    <ButtonComponent
                        size="default"
                        theme="warning"
                        style={{ marginRight: 8 }}
                    >
                        Warning
                    </ButtonComponent>
                    <ButtonComponent
                        size="default"
                        theme="danger"
                        style={{ marginRight: 8 }}
                    >
                        Danger
                    </ButtonComponent>
                    <ButtonComponent size="default" theme="info">
                        Info
                    </ButtonComponent>
                </CodingViewerDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={`${"<ButtonComponent size='big' theme='primary'>Primary</ButtonComponent>"}\n${"<ButtonComponent size='big' theme='secondary'>Secondary</ButtonComponent>"}\n${"<ButtonComponent size='big' theme='danger'>Danger</ButtonComponent>"}`}
                >
                    <ButtonComponent size="big" style={{ marginRight: 8 }}>
                        Big primary button
                    </ButtonComponent>
                    <ButtonComponent
                        size="big"
                        theme="secondary"
                        style={{ marginRight: 8 }}
                    >
                        Big secondary button
                    </ButtonComponent>
                    <ButtonComponent size="big" theme="danger">
                        Big danger button
                    </ButtonComponent>
                </CodingViewerDocsComponent>
                <CodingViewerDocsComponent sourceCode="<ButtonComponent outline>Outline</ButtonComponent>">
                    <ButtonComponent outline size="default">
                        Outline
                    </ButtonComponent>
                </CodingViewerDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={ButtonDefaultDocsTemplate.map(
                        (item: ButtonPropsInterface): string =>
                            docs({
                                ...item
                            })
                    ).join('\n\n')}
                >
                    <ButtonComponent outline size="default" icon={<Icon />}>
                        Close
                    </ButtonComponent>
                </CodingViewerDocsComponent>
            </>
        )
        .execute();
})();
