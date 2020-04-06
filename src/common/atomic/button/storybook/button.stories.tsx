import React, { SFC } from 'react';

import ButtonComponent from '../button.component';
import IconComponent from '../../icon/icon.component';
import TextDocsComponent from '../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../.storybook/component/atomic/heading/heading.component';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';
import CodingViewerDocsComponent from '../../../../.storybook/component/molecules/code-viewer/code-viewer.component';
import { ButtonPropsInterface } from '../interface/component.interface';
import { ButtonDefaultDocsTemplate } from './template/template-button.stories';

import '../style/style.scss';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ButtonDocumentation = require('./markdown/button.documentation.md');

/**
 * Generate Docs
 * @param {string} type - type props image
 * @return {string}
 */
const docs = (props: ButtonPropsInterface): string =>
    `<ButtonComponent size="${props.size} "theme="${props.theme}">Outline</ButtonComponent>
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
                    sourceCode={ButtonDefaultDocsTemplate.map(
                        (item: ButtonPropsInterface): string =>
                            docs({
                                ...item
                            })
                    ).join('\n\n')}
                >
                    <ButtonComponent
                        outline
                        size="default"
                        theme="secondary"
                        icon={<Icon />}
                    >
                        Close
                    </ButtonComponent>
                </CodingViewerDocsComponent>
            </>
        )
        .execute();
})();
