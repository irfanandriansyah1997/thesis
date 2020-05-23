import React from 'react';

import AvatarComponent from '../avatar.component';
import AvatarDocsTemplate from './template/template-avatar.stories';
import { AvatarPropsInterface } from '../interface/component.interface';
import TextDocsComponent from '../../../../.storybook/component/atomic/text/text.component';
import DividerDocsComponent from '../../../../.storybook/component/atomic/divider/divider.component';
import HeadingDocsComponent from '../../../../.storybook/component/atomic/heading/heading.component';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';
import CodingViewerDocsComponent from '../../../../.storybook/component/molecules/code-viewer/code-viewer.component';
import CardShowcaseDocsComponent from '../../../../.storybook/component/atomic/card-showcase/card-showcase.component';

import '../../image/style/style.scss';

const AvatarDocumentation = require('./markdown/avatar.documentation.md');

/**
 * Generate Docs
 * @param {string} type - type image
 * @return {string}
 */
const docs = (props: AvatarPropsInterface): string =>
    `<AvatarComponent\n` +
    `    src="${props.src}"\n` +
    `    alt="${props.alt}"\n` +
    `    size="${props.size}"\n` +
    `    type="${props.type}"\n` +
    `    objectFit="${props.objectFit}"\n` +
    '/>';

((): void => {
    new StorybookDocumentationBuilder('Avatar Komponen', 'atomic')
        .setSection('common')
        .setDescriptionComponent(
            'Avatar Komponen digunakan apabila anda akan membuat component gambar berisi photo akun tersebut'
        )
        .setMarkdownFile(AvatarDocumentation)
        .registerDocumentation(
            <>
                <>
                    <HeadingDocsComponent>
                        Penggunaan Komponen Avatar (Ini Sudah Di Update)
                    </HeadingDocsComponent>
                    <TextDocsComponent>
                        Berikut adalah contoh penggunaan komponent avatar
                    </TextDocsComponent>
                    <CodingViewerDocsComponent
                        sourceCode={AvatarDocsTemplate.slice(0, 2)
                            .map((item: AvatarPropsInterface): string =>
                                docs({
                                    ...item,
                                    src:
                                        'https://randomuser.me/api/portraits/women/90.jpg'
                                })
                            )
                            .join('\n\n')}
                    >
                        <div className="flex">
                            {AvatarDocsTemplate.map(
                                (item: AvatarPropsInterface) => (
                                    <div key={item.src} style={{ margin: 10 }}>
                                        <AvatarComponent
                                            {...item}
                                            src="https://randomuser.me/api/portraits/women/90.jpg"
                                        />
                                    </div>
                                )
                            )}
                        </div>
                    </CodingViewerDocsComponent>
                </>
                <DividerDocsComponent />
                <>
                    <HeadingDocsComponent>
                        Contoh Penggunaan Komponen
                    </HeadingDocsComponent>
                    <TextDocsComponent>
                        Berikut adalah penggunaan beberapa props komponen avatar
                    </TextDocsComponent>
                    <div className="ui-showcase">
                        {AvatarDocsTemplate.map((item) => (
                            <CardShowcaseDocsComponent
                                key={item.src}
                                title="avatar component"
                                desc={`${item.type} ${item.objectFit}`}
                                syntax={docs(item)}
                            >
                                <AvatarComponent {...item} />
                            </CardShowcaseDocsComponent>
                        ))}
                    </div>
                </>
            </>
        )
        .execute();
})();
