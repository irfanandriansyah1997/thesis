/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import GalleryComponent from '../gallery.component';
import TextDocsComponent from '../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../.storybook/component/atomic/heading/heading.component';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';
import CodingViewerDocsComponent from '../../../../.storybook/component/molecules/code-viewer/code-viewer.component';

import '../style/style.scss';

const docs =
    `<GalleryComponent \n` +
    `    labelToggle={{ \n` +
    `        onCLose: 'Sembunyikan Thumbnail', \n` +
    `        onExpand: 'Tampilkan Thumbnail' \n` +
    `    }} \n` +
    `    showNumbering \n` +
    `    item={[ \n` +
    `        { \n` +
    `            id: 1, \n` +
    `            src: \n` +
    `                'https://i.postimg.cc/LXbhnMdf/image-01.jpg', \n` +
    `            alt: 'Image 01' \n` +
    `        }, \n` +
    `        { \n` +
    `            id: 2, \n` +
    `            src: \n` +
    `                'https://i.postimg.cc/dt7N7RCT/image-02.jpg', \n` +
    `            alt: 'Image 02' \n` +
    `        }, \n` +
    `        { \n` +
    `            id: 3, \n` +
    `            src: \n` +
    `                'https://i.postimg.cc/j546n2x9/image-03.jpg', \n` +
    `            alt: 'Image 03' \n` +
    `        }, \n` +
    `        { \n` +
    `            id: 4, \n` +
    `            src: \n` +
    `                'https://i.postimg.cc/sXCf3YFN/image-04.jpg', \n` +
    `            alt: 'Image 04' \n` +
    `        }, \n` +
    `        { \n` +
    `            id: 5, \n` +
    `            src: \n` +
    `                'https://i.postimg.cc/RZj4T70Z/image-05.jpg', \n` +
    `            alt: 'Image 05' \n` +
    `        }, \n` +
    `        { \n` +
    `            id: 6, \n` +
    `            src: '04mfKJWDSzI', \n` +
    `            alt: 'Image 06', \n` +
    `            type: 'youtube' \n` +
    `        } \n` +
    `    ]} \n` +
    `    onChangeActive={(): void => {}} \n` +
    `/> \n`;

((): void => {
    new StorybookDocumentationBuilder('Gallery Component', 'organism')
        .setSection('common')
        .setDescriptionComponent(
            'Gallery Component digunakan untuk menampilkan kumpulan gambar dan thumbnail untuk memilih gambar tersebut'
        )
        .registerDocumentation(
            <>
                <HeadingDocsComponent>Usage</HeadingDocsComponent>
                <TextDocsComponent>
                    basic usage gallery component
                </TextDocsComponent>
                <CodingViewerDocsComponent sourceCode={docs}>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            height: 600
                        }}
                    >
                        <GalleryComponent
                            labelToggle={{
                                onCLose: 'Sembunyikan Thumbnail',
                                onExpand: 'Tampilkan Thumbnail'
                            }}
                            showNumbering
                            item={[
                                {
                                    id: 1,
                                    src:
                                        'https://i.postimg.cc/LXbhnMdf/image-01.jpg',
                                    alt: 'Image 01'
                                },
                                {
                                    id: 2,
                                    src:
                                        'https://i.postimg.cc/dt7N7RCT/image-02.jpg',
                                    alt: 'Image 02'
                                },
                                {
                                    id: 3,
                                    src:
                                        'https://i.postimg.cc/j546n2x9/image-03.jpg',
                                    alt: 'Image 03'
                                },
                                {
                                    id: 4,
                                    src:
                                        'https://i.postimg.cc/sXCf3YFN/image-04.jpg',
                                    alt: 'Image 04'
                                },
                                {
                                    id: 5,
                                    src:
                                        'https://i.postimg.cc/RZj4T70Z/image-05.jpg',
                                    alt: 'Image 05'
                                },
                                {
                                    id: 6,
                                    src: '04mfKJWDSzI',
                                    alt: 'Image 06',
                                    type: 'youtube'
                                }
                            ]}
                            onChangeActive={(): void => {}}
                        />
                    </div>
                </CodingViewerDocsComponent>
            </>
        )
        .execute();
})();
