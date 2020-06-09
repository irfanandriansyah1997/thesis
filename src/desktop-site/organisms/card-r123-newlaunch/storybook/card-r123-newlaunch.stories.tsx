/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import CardR123Newlaunch from '../card-r123.newlaunch.component';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';
import TextDocsComponent from '../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../.storybook/component/atomic/heading/heading.component';
import CodingViewerDocsComponent from '../../../../.storybook/component/molecules/code-viewer/code-viewer.component';

import '../style/style.scss';

const CardR123NewlaunchDocumentation = require('./markdown/card-r123-newlaunch.documentation.md');

((): void => {
    new StorybookDocumentationBuilder(
        'New Launch R123 Card Component',
        'organism'
    )
        .setSection('desktop')
        .setDescriptionComponent(
            'R123 New Launch Card can be used to display new developement listing card on search result page.'
        )
        .setMarkdownFile(CardR123NewlaunchDocumentation)
        .registerDocumentation(
            <>
                <HeadingDocsComponent>Usage</HeadingDocsComponent>
                <TextDocsComponent>
                    R123 New Launch Card Component
                </TextDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={
                        `${'<CardR123Newlaunch'}\n` +
                        `   ${'id="r12399co"'}\n` +
                        `   ${'link="99.co"'}\n` +
                        `   ${'unit="3"'}\n` +
                        `   ${'mediaCount={2}'}\n` +
                        `   ${'priceTag="Mulai Rp. 796 Jt - Rp. 1,59 M"'}\n` +
                        `   ${'propertyType="Apartemen"'}\n` +
                        `   ${'agencyName="PT. Adhi Commuter Properti"'}\n` +
                        `   ${'completionDate="Feb 2023"'}\n` +
                        `   ${'address="Lebak Bulus, Jakarta Selatan"'}\n` +
                        `   ${'media={['}\n` +
                        `       ${'{'}\n` +
                        `           ${'id: "img-1",'}\n` +
                        `           ${'src: "https://img.rea-asia.com/rumah123/750x420-crop/house/ho64/6491275/original/hos6491275-rumah-di-jual-di-bintaro-tangerang-15881493488971.jpg"'}\n` +
                        `           ${'alt: "image",'}\n` +
                        `       ${'},'}\n` +
                        `       ${'{'}\n` +
                        `           ${'id: "img-2",'}\n` +
                        `           ${'src: "https://i.postimg.cc/sXCf3YFN/image-04.jpg"'}\n` +
                        `           ${'alt: "image",'}\n` +
                        `       ${'}'}\n` +
                        `   ${']}'}\n` +
                        `   ${'action={{'}\n` +
                        `       ${'onClickSave: (): void => {},'}\n` +
                        `       ${'onClickViewDetail: (): void => {},'}\n` +
                        `       ${'onClickContact: (): void => {}'}\n` +
                        `   ${'}}'}\n` +
                        `${'>'}`
                    }
                >
                    <div>
                        <CardR123Newlaunch
                            id="r12399co"
                            link="99.co"
                            unit="3"
                            mediaCount={2}
                            priceTag="Mulai Rp. 796 Jt - Rp. 1,59 M"
                            propertyType="Apartemen"
                            agencyName="PT. Adhi Commuter Properti"
                            completionDate="Feb 2023"
                            address="Lebak Bulus, Jakarta Selatan"
                            publishingDate="Tayang sejak 1 Jan, 2020"
                            developerLogo="https://d3p0bla3numw14.cloudfront.net/developer/logo/developer-2.-logo-developer-1553849796.png"
                            title="The Premier MTH"
                            media={[
                                {
                                    alt: '',
                                    id: 'image-1',
                                    src:
                                        'https://img.rea-asia.com/rumah123/750x420-crop/house/ho64/6491275/original/hos6491275-rumah-di-jual-di-bintaro-tangerang-15881493488971.jpg'
                                },
                                {
                                    alt: '',
                                    id: 'image-2',
                                    src:
                                        'https://i.postimg.cc/sXCf3YFN/image-04.jpg'
                                }
                            ]}
                            action={{
                                onClickSave: (): void => {},
                                onClickViewDetail: (): void => {},
                                onClickContact: (): void => {}
                            }}
                        />
                    </div>
                </CodingViewerDocsComponent>
            </>
        )
        .execute();
})();