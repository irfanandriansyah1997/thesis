/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import GalleryR123Component from '../gallery-r123.component';
import TextDocsComponent from '../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../.storybook/component/atomic/heading/heading.component';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';
import { CarouselItemInterface } from '../../../../common/molecules/carousel/interface/component.interface';
import CodingViewerDocsComponent from '../../../../.storybook/component/molecules/code-viewer/code-viewer.component';

import '../style/style.scss';

const mediaItem: CarouselItemInterface[] = [
    {
        id: 1,
        src:
            'https://img.rea-asia.com/rumah123/800x1080-fit/house/ho65/6535047/original/hos6535047-rumah-di-jual-di-bintaro-jakarta-selatan-15889638051847.jpg',
        alt: 'Image 01'
    },
    {
        id: 2,
        src:
            'https://img.rea-asia.com/rumah123/1620x1080-fit/house/ho65/6535047/original/hos6535047-rumah-di-jual-di-bintaro-jakarta-selatan-15889638598536.jpg',
        alt: 'Image 02'
    },
    {
        id: 3,
        src:
            'https://img.rea-asia.com/rumah123/1620x1080-fit/house/ho65/6535047/original/hos6535047-rumah-di-jual-di-bintaro-jakarta-selatan-15889638944909.jpg',
        alt: 'Image 03'
    }
];

const blueprintItem: CarouselItemInterface[] = [
    {
        id: 1,
        src:
            'https://img.rea-asia.com/rumah123/premium/1620x1080-fit/primary_property/project/1674/1584585989_siteplan_1674.jpg',
        alt: 'Image 01'
    },
    {
        id: 2,
        src:
            'https://img.rea-asia.com/rumah123/premium/1620x1080-fit/primary_property/project/1674/1584600009_5e7313c902628floorplan_3110.png',
        alt: 'Image 02'
    },
    {
        id: 3,
        src:
            'https://img.rea-asia.com/rumah123/premium/1620x1080-fit/primary_property/project/1674/1584600438_5e7315764d5f0floorplan_3111.png',
        alt: 'Image 03'
    }
];

const videoItem: CarouselItemInterface[] = [
    {
        id: 1,
        src: 'PKXloFW_ZCA',
        alt: 'Image 01',
        type: 'youtube'
    },
    {
        id: 2,
        src: 'ZLKZKmdZEjM',
        alt: 'Image 02',
        type: 'youtube'
    },
    {
        id: 3,
        src: 'HyHNuVaZJ-k',
        alt: 'Image 03',
        type: 'youtube'
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
                            media={mediaItem}
                            video={videoItem}
                            blueprint={blueprintItem}
                            onClickSave={(): void => {}}
                            onChangeActive={(): void => {}}
                            labelToggle={{
                                videoBadges: 'Video',
                                mediaBadges: 'Media',
                                blueprintBadges: 'Denah',
                                onExpand: 'Tampilkan Thumbnail',
                                onCLose: 'Sembunyikan Thumbnail'
                            }}
                        />
                    </div>
                </CodingViewerDocsComponent>
            </>
        )
        .execute();
})();
