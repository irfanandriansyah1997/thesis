import React from 'react';

import CarouselComponent from '../carousel.component';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';
import TextDocsComponent from '../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../.storybook/component/atomic/heading/heading.component';
import CodingViewerDocsComponent from '../../../../.storybook/component/molecules/code-viewer/code-viewer.component';

import '../style/style.scss';

const CarouselDocumentation = require('./markdown/carousel.documentation.md');

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
    }
];

const nextPrevButton = {
    previous: 'rui-icon-arrow-left',
    next: 'rui-icon-arrow-right'
};

((): void => {
    new StorybookDocumentationBuilder('Carousel Component', 'molecules')
        .setSection('common')
        .setDescriptionComponent(
            'A carousel can be used to save space when there is insufficient content space. Commonly used for a group of pictures/cards.'
        )
        .setMarkdownFile(CarouselDocumentation)
        .registerDocumentation(
            <>
                <HeadingDocsComponent>Usage</HeadingDocsComponent>
                <TextDocsComponent>Default carousel</TextDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={
                        `${'const carouselItem = ['}\n` +
                        `   ${'{'}\n` +
                        `       ${'id: 1,'}\n` +
                        `       ${'src: "image-01.jpg",'}\n` +
                        `       ${'alt: "Image 01"'}\n` +
                        `   ${'{'}\n` +
                        `       ${'id: 2,'}\n` +
                        `       ${'src: "image-02.jpg",'}\n` +
                        `       ${'alt: "Image 02"'}\n` +
                        `   ${'{'}\n` +
                        `       ${'id: 3,'}\n` +
                        `       ${'src: "image-03.jpg",'}\n` +
                        `       ${'alt: "Image 03"'}\n` +
                        `   ${'{'}\n` +
                        `       ${'id: 4,'}\n` +
                        `       ${'src: "image-04.jpg",'}\n` +
                        `       ${'alt: "Image 04"'}\n` +
                        `   ${'{'}\n` +
                        `       ${'id: 5,'}\n` +
                        `       ${'src: "image-05.jpg",'}\n` +
                        `       ${'alt: "Image 05"'}\n` +
                        `${']'}\n\n` +
                        `${'<div id="Carousel" style={{ width: 750, height: 420 }}>'}\n` +
                        `   ${'<CarouselComponent item={carouselItem} onChangeActive={(): void => {}} />'}\n` +
                        `${'</div>'}`
                    }
                >
                    <div id="Carousel" style={{ width: 750, height: 420 }}>
                        <CarouselComponent
                            item={carouselItem}
                            onChangeActive={(): void => undefined}
                            indicator={nextPrevButton}
                        />
                    </div>
                </CodingViewerDocsComponent>
            </>
        )
        .execute();
})();
