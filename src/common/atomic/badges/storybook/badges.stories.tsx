import React from 'react';

import BadgesComponent from '../badges.component';
import SectionSizeBadgeComponent from './section/section-size.stories';
import SectionDefaultBadgeComponent from './section/section-default.stories';
import ColorDefaultConstant from '../../../../shared/constant/color.constant';
import { ColorType } from '../../../../shared/interface/common/color.interface';
import SectionTransparentBadgeComponent from './section/section-transparent.stories';
import TextDocsComponent from '../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../.storybook/component/atomic/heading/heading.component';
import DividerDocsComponent from '../../../../.storybook/component/atomic/divider/divider.component';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';
import CardShowcaseDocsComponent from '../../../../.storybook/component/atomic/card-showcase/card-showcase.component';

import '../style/style.scss';

const BadgesDocumentation = require('./markdown/badges.documentation.md');

/**
 * Generate Docs
 * @param {string} type - type props image
 * @return {string}
 */
const docs = (color: ColorType, transparent: boolean): string =>
    `<BadgeComponent \n` +
    `    color="${color}"\n` +
    `    transparent={${transparent ? 'true' : 'false'}}\n` +
    '>\n' +
    `   badges\n` +
    `</BadgeComponent>`;

((): void => {
    new StorybookDocumentationBuilder('Badge Komponen', 'atomic')
        .setSection('common')
        .setMarkdownFile(BadgesDocumentation)
        .setDescriptionComponent(
            'Badges komponen biasa dipakai untuk memberi informasi tertentu di dalam website dengan bentuk bulat maupun persegi'
        )
        .registerDocumentation(
            <>
                <SectionDefaultBadgeComponent />
                <DividerDocsComponent />
                <SectionTransparentBadgeComponent />
                <DividerDocsComponent />
                <SectionSizeBadgeComponent />
                <DividerDocsComponent />
                <>
                    <HeadingDocsComponent>
                        Color Badge Komponen
                    </HeadingDocsComponent>
                    <TextDocsComponent>
                        Berikut adalah semua contoh warna yang tersedia di badge
                        komponen
                    </TextDocsComponent>
                    <div className="ui-showcase">
                        {Object.keys(ColorDefaultConstant).map((item) => (
                            <React.Fragment key={`color-section-${item}`}>
                                <CardShowcaseDocsComponent
                                    title={item}
                                    desc="Badges Normal"
                                    syntax={docs(item as ColorType, false)}
                                >
                                    <BadgesComponent color={item as ColorType}>
                                        Badges
                                    </BadgesComponent>
                                </CardShowcaseDocsComponent>
                                <CardShowcaseDocsComponent
                                    title={item}
                                    desc="Badges Transparent"
                                    syntax={docs(item as ColorType, true)}
                                >
                                    <BadgesComponent
                                        color={item as ColorType}
                                        transparent
                                    >
                                        Badges
                                    </BadgesComponent>
                                </CardShowcaseDocsComponent>
                            </React.Fragment>
                        ))}
                    </div>
                </>
            </>
        )
        .execute();
})();
