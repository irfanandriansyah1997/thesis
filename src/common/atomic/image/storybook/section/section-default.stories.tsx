import React, { SFC } from 'react';

import { ImageDefaultDocsTemplate } from '../template/template-image.stories';
import TextDocsComponent from '../../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../../.storybook/component/atomic/heading/heading.component';
import { ComponentImageDefaultPropsInterface } from '../../../../../shared/interface/component/component-image.inteface';
import CodingViewerDocsComponent from '../../../../../.storybook/component/molecules/code-viewer/code-viewer.component';
import ImageComponent from '../../image.component';

/**
 * Generate Docs
 * @param {string} type - type props image
 * @return {string}
 */
const docs = (props: ComponentImageDefaultPropsInterface): string =>
    `<ImageComponent \n` +
    `    src="${props.src}"\n` +
    `    alt="${props.alt}"\n` +
    `    type="${props.type}"\n` +
    `    width="${props.width}"\n` +
    `    height="${props.height}"\n` +
    `    objectFit="${props.objectFit}"\n` +
    '/>';

/**
 * Section Default Image
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.04.01
 */
const SectionDefaultImageComponent: SFC = () => (
    <>
        <HeadingDocsComponent>Penggunaan Komponen Image</HeadingDocsComponent>
        <TextDocsComponent>
            Berikut adalah contoh penggunaan komponent image
        </TextDocsComponent>
        <CodingViewerDocsComponent
            sourceCode={ImageDefaultDocsTemplate.slice(0, 2)
                .map((item: ComponentImageDefaultPropsInterface): string =>
                    docs({
                        ...item
                    })
                )
                .join('\n\n')}
        >
            <div className="flex">
                {ImageDefaultDocsTemplate.map(
                    (item: ComponentImageDefaultPropsInterface) => (
                        <div key={item.src} style={{ margin: 10 }}>
                            <ImageComponent {...item} />
                        </div>
                    )
                )}
            </div>
        </CodingViewerDocsComponent>
    </>
);

export default SectionDefaultImageComponent;
