/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import GalleryR123Component from '../gallery-r123.component';
import TextDocsComponent from '../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../.storybook/component/atomic/heading/heading.component';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';
import CodingViewerDocsComponent from '../../../../.storybook/component/molecules/code-viewer/code-viewer.component';

import '../style/style.scss';

const docs =
    `<GalleryR123Component \n` +
    `    media={[ \n` +
    `        { \n` +
    `            id: 1, \n` +
    `            src: \n` +
    `                'https://img.rea-asia.com/rumah123/800x1080-fit/house/ho65/6535047/original/hos6535047-rumah-di-jual-di-bintaro-jakarta-selatan-15889638051847.jpg', \n` +
    `            alt: 'Image 01' \n` +
    `        }, \n` +
    `        { \n` +
    `            id: 2, \n` +
    `            src: \n` +
    `                'https://img.rea-asia.com/rumah123/1620x1080-fit/house/ho65/6535047/original/hos6535047-rumah-di-jual-di-bintaro-jakarta-selatan-15889638598536.jpg', \n` +
    `            alt: 'Image 02' \n` +
    `        }, \n` +
    `        { \n` +
    `            id: 3, \n` +
    `            src: \n` +
    `                'https://img.rea-asia.com/rumah123/1620x1080-fit/house/ho65/6535047/original/hos6535047-rumah-di-jual-di-bintaro-jakarta-selatan-15889638944909.jpg', \n` +
    `            alt: 'Image 03' \n` +
    `        } \n` +
    `    ]} \n` +
    `    video={[ \n` +
    `        { \n` +
    `            id: 1, \n` +
    `            src: 'PKXloFW_ZCA', \n` +
    `            alt: 'Image 01', \n` +
    `            type: 'youtube' \n` +
    `        }, \n` +
    `        { \n` +
    `            id: 2, \n` +
    `            src: 'ZLKZKmdZEjM', \n` +
    `            alt: 'Image 02', \n` +
    `            type: 'youtube' \n` +
    `        }, \n` +
    `        { \n` +
    `            id: 3, \n` +
    `            src: 'HyHNuVaZJ-k', \n` +
    `            alt: 'Image 03', \n` +
    `            type: 'youtube' \n` +
    `        } \n` +
    `    ]} \n` +
    `    blueprint={[ \n` +
    `        { \n` +
    `            id: 1, \n` +
    `            src: \n` +
    `                'https://img.rea-asia.com/rumah123/premium/1620x1080-fit/primary_property/project/1674/1584585989_siteplan_1674.jpg', \n` +
    `            alt: 'Image 01' \n` +
    `        }, \n` +
    `        { \n` +
    `            id: 2, \n` +
    `            src: \n` +
    `                'https://img.rea-asia.com/rumah123/premium/1620x1080-fit/primary_property/project/1674/1584600009_5e7313c902628floorplan_3110.png', \n` +
    `            alt: 'Image 02' \n` +
    `        }, \n` +
    `        { \n` +
    `            id: 3, \n` +
    `            src: \n` +
    `                'https://img.rea-asia.com/rumah123/premium/1620x1080-fit/primary_property/project/1674/1584600438_5e7315764d5f0floorplan_3111.png', \n` +
    `            alt: 'Image 03' \n` +
    `        } \n` +
    `    ]} \n` +
    `    onClickSave={(): void => {}} \n` +
    `    address="BSD City, Tangerang" \n` +
    `    onChangeActive={(): void => {}} \n` +
    `    title="Alesha House, Vanya Park BSD City" \n` +
    `    labelToggle={{ \n` +
    `        videoBadges: 'Video', \n` +
    `        mediaBadges: 'Media', \n` +
    `        blueprintBadges: 'Denah', \n` +
    `        onExpand: 'Tampilkan Thumbnail', \n` +
    `        onCLose: 'Sembunyikan Thumbnail' \n` +
    `    }} \n` +
    `/>`;

((): void => {
    new StorybookDocumentationBuilder('Gallery R123 Component', 'organism')
        .setSection('desktop')
        .setDescriptionComponent(
            'Gallery Component digunakan untuk menampilkan kumpulan gambar dan thumbnail untuk memilih gambar tersebut di halaman properti detail'
        )
        .registerDocumentation(
            <>
                <HeadingDocsComponent>Usage</HeadingDocsComponent>
                <TextDocsComponent>
                    Basic usage gallery component in pdp
                </TextDocsComponent>
                <CodingViewerDocsComponent sourceCode={docs}>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            height: 600
                        }}
                    >
                        <GalleryR123Component
                            media={[
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
                            ]}
                            video={[
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
                            ]}
                            blueprint={[
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
                            ]}
                            onClickSave={(): void => {}}
                            address="BSD City, Tangerang"
                            onChangeActive={(): void => {}}
                            title="Alesha House, Vanya Park BSD City"
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
