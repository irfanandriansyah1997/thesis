import React, { SFC } from 'react';

import CardR123Basic from '../card-r123-basic.component';
import IconComponent from '../../../atomic/icon/icon.component';
import TextDocsComponent from '../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../.storybook/component/atomic/heading/heading.component';
import CodingViewerDocsComponent from '../../../../.storybook/component/molecules/code-viewer/code-viewer.component';

import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';

import '../style/style.scss';

const CardR123BasicDocumentation = require('./markdown/card-r123-basic.documentation.md');

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

((): void => {
    new StorybookDocumentationBuilder('Basic R123 Card Component', 'organism')
        .setSection('common')
        .setDescriptionComponent(
            'Basic R123 Card can be used to display basic listing card in search result page.'
        )
        .setMarkdownFile(CardR123BasicDocumentation)
        .registerDocumentation(
            <>
                <HeadingDocsComponent>Usage</HeadingDocsComponent>
                <TextDocsComponent>Deafult Basic R123 card</TextDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={
                        `${'<CardR123Basic'}\n` +
                        `   ${'media={{images: "img.jpg", alt: "Images 1"}}'}\n` +
                        `   ${'content={{'}\n` +
                        `       ${'title: "Ready Rumah Murah Di Sukun Perum Tirtasari Malang, Sukun, Malang",'}\n` +
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
                        `   ${'content={{'}\n` +
                        `       ${'onClickSave: (): void => {},'}\n` +
                        `       ${'onClickViewDetail: (): void => {}'}\n` +
                        `   ${'}}'}\n` +
                        `   ${'link="https://www.rumah123.com/"'}\n` +
                        `${'/>'}`
                    }
                >
                    <CardR123Basic
                        media={{
                            images:
                                'https://images.unsplash.com/photo-1562886812-41775a01195d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                            alt: 'Images 1'
                        }}
                        content={{
                            headingText: 'Simulasi KPR',
                            title:
                                'Ready Rumah Murah Di Sukun Perum Tirtasari Malang, Sukun, Malang',
                            installment: 'Cicilan : Rp. 7,46 Jt/bulan',
                            address: 'Malang',
                            priceTag: 'Rp 2,1 M',
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
        )
        .execute();
})();
