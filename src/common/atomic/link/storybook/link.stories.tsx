import React, { SFC } from 'react';

import LinkComponent from '../link.component';
import IconComponent from '../../icon/icon.component';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';
import TextDocsComponent from '../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../.storybook/component/atomic/heading/heading.component';
import CodingViewerDocsComponent from '../../../../.storybook/component/molecules/code-viewer/code-viewer.component';

import '../style/style.scss';

const TextDocumentation = require('./markdown/link.documentation.md');

/**
 * Create Icon
 * @return {string}
 */
const Icon: SFC = () => (
    <IconComponent color="primary" size={18}>
        rui-icon-save
    </IconComponent>
);

((): void => {
    new StorybookDocumentationBuilder('Link Component', 'atomic')
        .setSection('common')
        .setDescriptionComponent(
            'Link component is used to define a relationship between an HTML document and an external resource..'
        )
        .setMarkdownFile(TextDocumentation)
        .registerDocumentation(
            <>
                <HeadingDocsComponent>Usage</HeadingDocsComponent>
                <TextDocsComponent>
                    Link component rendered as normal, colored and without
                    underline
                </TextDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={`${'<LinkComponent>Link</LinkComponent>'}\n${'<LinkComponent  color="warning">Link</LinkComponent>'}\n${'<LinkComponent noUnderline>Link</LinkComponent>'}`}
                >
                    <div style={{ margin: 8 }}>
                        <LinkComponent>Link</LinkComponent>
                    </div>
                    <div style={{ margin: 8 }}>
                        <LinkComponent color="warning">Link</LinkComponent>
                    </div>
                    <div style={{ margin: 8 }}>
                        <LinkComponent noUnderline>Link</LinkComponent>
                    </div>
                </CodingViewerDocsComponent>
                <TextDocsComponent>
                    Link component rendered with icon
                </TextDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={`${'<LinkComponent icon={<Icon />}>Link</LinkComponent>'}`}
                >
                    <div style={{ margin: 8 }}>
                        <LinkComponent
                            icon={<Icon />}
                            noUnderline
                            // eslint-disable-next-line no-alert
                            onClick={(): void => alert('Saved')}
                        >
                            Save
                        </LinkComponent>
                    </div>
                </CodingViewerDocsComponent>
                <TextDocsComponent>
                    Link component rendered with onClick event
                </TextDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={`${'<LinkComponent onClick={(): void => alert("Saved")}>Link</LinkComponent>'}`}
                >
                    <div style={{ margin: 8 }}>
                        <LinkComponent
                            noUnderline
                            // eslint-disable-next-line no-alert
                            onClick={(): void => alert('Saved')}
                        >
                            Save
                        </LinkComponent>
                    </div>
                </CodingViewerDocsComponent>
                <TextDocsComponent>
                    Link component rendered with href attribute
                </TextDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={`${'<LinkComponent href="https://www.google.com">Google</LinkComponent>'}\n${'<LinkComponent href=https://www.linkedin.com">Linkedin</LinkComponent>'}`}
                >
                    <div style={{ margin: 8 }}>
                        <LinkComponent
                            href="https://www.google.com"
                            noUnderline
                        >
                            Google
                        </LinkComponent>
                    </div>
                    <div style={{ margin: 8 }}>
                        <LinkComponent href="https://www.linkedin.com">
                            Linkedin
                        </LinkComponent>
                    </div>
                </CodingViewerDocsComponent>
            </>
        )
        .execute();
})();
