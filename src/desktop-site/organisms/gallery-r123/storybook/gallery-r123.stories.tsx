/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import GalleryR123Component from '../gallery-r123.component';
import TextDocsComponent from '../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../.storybook/component/atomic/heading/heading.component';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';
import { CarouselItemInterface } from '../../../../common/molecules/carousel/interface/component.interface';
import CodingViewerDocsComponent from '../../../../.storybook/component/molecules/code-viewer/code-viewer.component';

import '../style/style.scss';

const carouselItem: CarouselItemInterface[] = [
    {
        id: 1,
        src: 'https://i.postimg.cc/LXbhnMdf/image-01.jpg',
        alt: 'Image 01'
    },
    {
        id: 2,
        src: 'https://i.postimg.cc/dt7N7RCT/image-02.jpg',
        alt: 'Image 02'
    },
    {
        id: 3,
        src: 'https://i.postimg.cc/j546n2x9/image-03.jpg',
        alt: 'Image 03'
    },
    {
        id: 4,
        src: 'https://i.postimg.cc/sXCf3YFN/image-04.jpg',
        alt: 'Image 04'
    },
    {
        id: 5,
        src: 'https://i.postimg.cc/RZj4T70Z/image-05.jpg',
        alt: 'Image 05'
    }
];

((): void => {
    new StorybookDocumentationBuilder('Gallery R123 Component', 'organism')
        .setSection('desktop')
        .setDescriptionComponent('Organism')
        .registerDocumentation(
            <>
                <HeadingDocsComponent>Usage</HeadingDocsComponent>
                <TextDocsComponent>lol lol</TextDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={
                        `${'<PaginationComponent>'}\n` +
                        `           ${'page={2}'}\n` +
                        `           ${'rowCount={5}'}\n` +
                        `           ${'totalPage={10}'}\n` +
                        `           ${'onPageChange={(): void => undefined}'}\n` +
                        `${'/>'}`
                    }
                >
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            height: 600
                        }}
                    >
                        <GalleryR123Component
                            address="BSD City, Tangerang"
                            title="Alesha House, Vanya Park BSD City"
                            media={carouselItem}
                            video={[]}
                            blueprint={carouselItem}
                            onClickSave={(): void => {}}
                            onChangeActive={(): void => {}}
                        />
                    </div>
                </CodingViewerDocsComponent>
            </>
        )
        .execute();
})();
