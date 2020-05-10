import React, { SFC } from 'react';

import CardR123Featured from '../../card-r123-featured.component';
import IconComponent from '../../../../../common/atomic/icon/icon.component';
import TextDocsComponent from '../../../../../.storybook/component/atomic/text/text.component';
import CodingViewerDocsComponent from '../../../../../.storybook/component/molecules/code-viewer/code-viewer.component';

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

/**
 * Create bedroom icon
 * @return {string}
 */
const BedroomIcon: SFC = () => (
    <IconComponent color="text" size={18}>
        rui-icon-bed
    </IconComponent>
);

/**
 * Create bathroom icon
 * @return {string}
 */
const BathroomIcon: SFC = () => (
    <IconComponent color="text" size={18}>
        rui-icon-bath
    </IconComponent>
);

/**
 * Create carpark icon
 * @return {string}
 */
const CarparkIcon: SFC = () => (
    <IconComponent color="text" size={18}>
        rui-icon-car
    </IconComponent>
);

/**
 * Section Premier Card Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.05.04
 */
const SectionPremierCardComponent: SFC = () => (
    <>
        <TextDocsComponent>R123 Premier card</TextDocsComponent>
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
                `${'<CardR123Featured'}\n` +
                `   ${'heading={{'}\n` +
                `       ${'agencyTitle: "Ray White",'}\n` +
                `       ${'creationDate: "Tayang 5 hari yang lalu"'}\n` +
                `   ${'}}'}\n` +
                `   ${'media={{'}\n` +
                `       ${'media: carouselItem,'}\n` +
                `       ${'caption: {'}\n` +
                `           ${'priceTag: "Rp 2,1 M",'}\n` +
                `           ${'installment: "Cicilan : Rp. 7,46 Jt/bulan",'}\n` +
                `           ${'numMedias: 23,'}\n` +
                `       ${'}'}\n` +
                `       ${'tier: "premier",'}\n` +
                `   ${'}}'}\n` +
                `   ${'content={{'}\n` +
                `       ${'mortgageLinkText: "Simulasi KPR",'}\n` +
                `       ${'title: "Ready Rumah Murah Di Sukun Perum Tirtasari Malang, Sukun, Kota Malang",'}\n` +
                `       ${'address: "Malang",'}\n` +
                `       ${'priceTag: "Rp 2,1 M",'}\n` +
                `       ${'landSize: "Luas tanah: 339 m2",'}\n` +
                `       ${'buildingSize: "Luas bangunan: 700 m2",'}\n` +
                `       ${'propertyType: "Rumah",'}\n` +
                `       ${'attribute: ['}\n` +
                `           ${'{ icon: <BathroomIcon />, value: "2" },'}\n` +
                `           ${'{ icon: <BedroomIcon />, value: "3" },'}\n` +
                `           ${'{ icon: <CarparkIcon />, value: "1" },'}\n` +
                `       ${']'}\n` +
                `   ${'}}'}\n` +
                `   ${'action={{'}\n` +
                `       ${'onClickSave: (): void => {},'}\n` +
                `       ${'onClickViewDetail: (): void => {}'}\n` +
                `   ${'}}'}\n` +
                `   ${'link="https://www.rumah123.com/"'}\n` +
                `${'/>'}`
            }
        >
            <CardR123Featured
                heading={{
                    agencyTitle: 'Ray White',
                    creationDate: 'Tayang 5 hari yang lalu'
                }}
                cardMedia={{
                    media: carouselItem,
                    caption: {
                        priceTag: 'Rp 2,1 M',
                        installment: 'Cicilan : Rp. 7,46 Jt/bulan',
                        numMedias: 23
                    },
                    tier: 'premier'
                }}
                content={{
                    mortgageLinkText: 'Simulasi KPR',
                    title:
                        'Ready Rumah Murah Di Sukun Perum Tirtasari Malang, Sukun, Kota Malang',

                    address: 'Malang',

                    landSize: 'Luas tanah: 339 m2',
                    buildingSize: 'Luas bangunan: 700 m2',
                    propertyType: 'Rumah',
                    attribute: [
                        { icon: <BathroomIcon />, value: '2' },
                        { icon: <BedroomIcon />, value: '3' },
                        { icon: <CarparkIcon />, value: '1' }
                    ]
                }}
                action={{
                    onClickSave: (): void => undefined,
                    onClickViewDetail: (): void => undefined
                }}
                link="https://www.rumah123.com/"
                carouselIndicator={nextPrevButton}
            />
        </CodingViewerDocsComponent>
    </>
);

export default SectionPremierCardComponent;
