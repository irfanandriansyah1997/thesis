import React, { SFC } from 'react';

import BadgeComponent from '../../badges.component';
import { BadgesPropsInterface } from '../../interface/component.interface';
import { BadgeSizeDocsTemplate } from '../template/template-badges.stories';
import TextDocsComponent from '../../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../../.storybook/component/atomic/heading/heading.component';
import CodingViewerDocsComponent from '../../../../../.storybook/component/molecules/code-viewer/code-viewer.component';

/**
 * Generate Docs
 * @param {string} type - type props image
 * @return {string}
 */
const docs = (props: BadgesPropsInterface): string =>
    `<BadgeComponent \n` +
    `    color="${props.color}"\n` +
    `    rounded="${props.rounded}"\n` +
    `    transparent="${props.transparent}"\n` +
    `    size="${props.size}"\n` +
    `${props.onCloseBadges ? `    onCloseBadges={(): void => {}}\n` : ''}` +
    '>\n' +
    `   ${props.children}\n` +
    `</BadgeComponent>`;

/**
 * Section Size Badge
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.01
 */
const SectionSizeBadgeComponent: SFC = () => (
    <>
        <HeadingDocsComponent>Size Badge Komponen</HeadingDocsComponent>
        <TextDocsComponent>
            Berikut adalah contoh penggunaan komponen badge menggunakan props
            size
        </TextDocsComponent>
        <CodingViewerDocsComponent
            sourceCode={BadgeSizeDocsTemplate.map(
                (item: BadgesPropsInterface): string =>
                    docs({
                        ...item
                    })
            ).join('\n\n')}
        >
            <div className="flex flex-wrap">
                {BadgeSizeDocsTemplate.map((item: BadgesPropsInterface) => (
                    <div key={item.children as string} style={{ margin: 10 }}>
                        <BadgeComponent {...item} />
                    </div>
                ))}
            </div>
        </CodingViewerDocsComponent>
    </>
);

export default SectionSizeBadgeComponent;
