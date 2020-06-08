/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import GalleryComponent from '../gallery.component';
import TextDocsComponent from '../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../.storybook/component/atomic/heading/heading.component';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';
import CodingViewerDocsComponent from '../../../../.storybook/component/molecules/code-viewer/code-viewer.component';

import '../style/style.scss';

const carouselItem = [
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
    },
    {
        id: 6,
        src: 'https://i.postimg.cc/LXbhnMdf/image-01.jpg',
        alt: 'Image 06'
    },
    {
        id: 7,
        src: 'https://i.postimg.cc/dt7N7RCT/image-02.jpg',
        alt: 'Image 07'
    },
    {
        id: 8,
        src: 'https://i.postimg.cc/j546n2x9/image-03.jpg',
        alt: 'Image 08'
    },
    {
        id: 9,
        src: 'https://i.postimg.cc/sXCf3YFN/image-04.jpg',
        alt: 'Image 09'
    },
    {
        id: 10,
        src: 'https://i.postimg.cc/RZj4T70Z/image-05.jpg',
        alt: 'Image 10'
    },
    {
        id: 11,
        src: 'https://i.postimg.cc/LXbhnMdf/image-01.jpg',
        alt: 'Image 11'
    },
    {
        id: 12,
        src: 'https://i.postimg.cc/dt7N7RCT/image-02.jpg',
        alt: 'Image 12'
    },
    {
        id: 13,
        src: 'https://i.postimg.cc/j546n2x9/image-03.jpg',
        alt: 'Image 13'
    },
    {
        id: 5,
        src: 'https://i.postimg.cc/sXCf3YFN/image-04.jpg',
        alt: 'Image 05'
    },
    {
        id: 5,
        src: 'https://i.postimg.cc/RZj4T70Z/image-05.jpg',
        alt: 'Image 05'
    }
];

((): void => {
    new StorybookDocumentationBuilder('Gallery Component', 'organism')
        .setSection('common')
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
                        <GalleryComponent
                            showNumbering
                            item={carouselItem}
                            onChangeActive={(): void => {}}
                        />
                    </div>
                </CodingViewerDocsComponent>
            </>
        )
        .execute();
})();
