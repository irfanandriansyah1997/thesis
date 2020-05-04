import React, { SFC } from 'react';

import CardR123Featured from '../../card-r123-featured.component';
import IconComponent from '../../../../atomic/icon/icon.component';
import TextDocsComponent from '../../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../../.storybook/component/atomic/heading/heading.component';
import CodingViewerDocsComponent from '../../../../../.storybook/component/molecules/code-viewer/code-viewer.component';

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
 * Section Featured Card Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.05.04
 */
const SectionFeaturedCardComponent: SFC = () => (
    <>
        <HeadingDocsComponent>Usage</HeadingDocsComponent>
        <TextDocsComponent>R123 Featured card</TextDocsComponent>
        <CodingViewerDocsComponent
            sourceCode={
                `${'<CardR123Basic'}\n` +
                `   ${'heading={{'}\n` +
                `       ${'agencyTitle: "Ray White",'}\n` +
                `       ${'creationDate: "Tayang 5 hari yang lalu"'}\n` +
                `   ${'}}'}\n` +
                `   ${'media={{'}\n` +
                `       ${'images: "image.jpg",'}\n` +
                `       ${'alt: "Image",'}\n` +
                `       ${'caption: {'}\n` +
                `           ${'priceTag: "Rp 2,1 M",'}\n` +
                `           ${'installment: "Cicilan : Rp. 7,46 Jt/bulan",'}\n` +
                `           ${'numMedias: 23,'}\n` +
                `       ${'}'}\n` +
                `       ${'tier: "featured",'}\n` +
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
                media={{
                    images:
                        'https://images.unsplash.com/photo-1562886812-41775a01195d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                    alt: 'Images 1',
                    caption: {
                        priceTag: 'Rp 2,1 M',
                        installment: 'Cicilan : Rp. 7,46 Jt/bulan',
                        numMedias: 23
                    },
                    tier: 'featured'
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
            />
        </CodingViewerDocsComponent>
    </>
);

export default SectionFeaturedCardComponent;
