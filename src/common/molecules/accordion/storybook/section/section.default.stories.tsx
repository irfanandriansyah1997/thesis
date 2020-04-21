import React, { SFC } from 'react';

import AccordionComponent from '../../accordion.component';
import TextComponent from '../../../../atomic/text/text.component';
import TextDocsComponent from '../../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../../.storybook/component/atomic/heading/heading.component';
import CodingViewerDocsComponent from '../../../../../.storybook/component/molecules/code-viewer/code-viewer.component';

/**
 * Section Default Accordion
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.04.17
 */
const SectionDefaultAccordionComponent: SFC = () => (
    <>
        <HeadingDocsComponent>Default Accordion</HeadingDocsComponent>
        <TextDocsComponent>Basic accordion component</TextDocsComponent>
        <CodingViewerDocsComponent
            sourceCode={
                `${'<TextComponent tag="p">Click below to expand</TextComponent>'}\n` +
                `${'<AccordionComponent selector="Toggle selector">'}\n` +
                `   ${'<TextComponent tag="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</TextComponent>'}\n` +
                `   ${'<TextComponent tag="p">In hac habitasse platea dictumst. Quisque tristique erat ante, vitae cursus quam molestie non. Etiam hendrerit elit at maximus venenatis.</TextComponent>'}\n` +
                `   ${'<TextComponent tag="p">Vivamus aliquam risus ante. Phasellus in mauris mollis, aliquam libero gravida, vulputate eros. Fusce vel malesuadaeros.</TextComponent>'}\n` +
                `   ${'<TextComponent tag="p">Quisque in volutpat odio. Phasellus condimentum, erat vitae congue condimentum, nisl odio rutrum ipsum, quis cursus risus diam vitae augue.</TextComponent>'}\n` +
                `${'</AccordionComponent>'}`
            }
        >
            <TextComponent
                tag="p"
                style={{
                    lineHeight: 1.5
                }}
            >
                Click below to expand
            </TextComponent>
            <AccordionComponent selector="Toggle selector">
                <TextComponent
                    tag="p"
                    style={{
                        lineHeight: 1.5,
                        padding: 16,
                        border: '1px solid #f0f0f0'
                    }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </TextComponent>
                <TextComponent
                    tag="p"
                    style={{
                        lineHeight: 1.5,
                        padding: 16,
                        border: '1px solid #f0f0f0'
                    }}
                >
                    In hac habitasse platea dictumst. Quisque tristique erat
                    ante, vitae cursus quam molestie non. Etiam hendrerit elit
                    at maximus venenatis.
                </TextComponent>
                <TextComponent
                    tag="p"
                    style={{
                        lineHeight: 1.5,
                        padding: 16,
                        border: '1px solid #f0f0f0'
                    }}
                >
                    Vivamus aliquam risus ante. Phasellus in mauris mollis,
                    aliquam libero gravida, vulputate eros. Fusce vel malesuada
                    eros.
                </TextComponent>
                <TextComponent
                    tag="p"
                    style={{
                        lineHeight: 1.5,
                        padding: 16,
                        border: '1px solid #f0f0f0'
                    }}
                >
                    Quisque in volutpat odio. Phasellus condimentum, erat vitae
                    congue condimentum, nisl odio rutrum ipsum, quis cursus
                    risus diam vitae augue.
                </TextComponent>
            </AccordionComponent>
        </CodingViewerDocsComponent>
    </>
);

export default SectionDefaultAccordionComponent;
