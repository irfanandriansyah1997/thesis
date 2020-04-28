import React, { SFC } from 'react';

import CardR123Basic from '../card-r123-basic.component';
import IconComponent from '../../../atomic/icon/icon.component';
import LinkComponent from '../../../atomic/link/link.component';
import TextDocsComponent from '../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../.storybook/component/atomic/heading/heading.component';
import CodingViewerDocsComponent from '../../../../.storybook/component/molecules/code-viewer/code-viewer.component';

import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';

import '../style/style.scss';

const CardR123BasicDocumentation = require('./markdown/card.documentation.md');

/**
 * Create save icon
 * @return {string}
 */
const SaveIcon: SFC = () => (
    <IconComponent color="primary" size={18}>
        rui-icon-save
    </IconComponent>
);

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
 * Create save button
 * @return {string}
 */
const SaveButton: SFC = () => (
    <LinkComponent
        icon={<SaveIcon />}
        noUnderline
        // eslint-disable-next-line no-alert
        onClick={(): void => alert('Saved')}
    >
        Simpan
    </LinkComponent>
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
                        `${'const { Media, Content } = CardR123Basic;'}\n\n` +
                        `${'<CardR123Basic>'}\n` +
                        `   ${'<Media width={250} height={250}>'}\n` +
                        `       ${'<ImageComponent src="https://images.unsplash.com/photo-1562886812-41775a01195d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="Images 1" type="square" width="100%" height="100%" objectFit="cover" />'}\n` +
                        `   ${'</Media>'}\n` +
                        `   ${'<Content style={{ marginLeft: 16 }}>'}\n` +
                        `       ${'<TextComponent tag="p">'}\n` +
                        `           ${'Some content...'}\n` +
                        `       ${'</TextComponent>'}\n` +
                        `       ${'<TextComponent tag="p" style={{ marginTop: 16 }}>'}\n` +
                        `           ${'Some content...'}\n` +
                        `       ${'</TextComponent>'}\n` +
                        `       ${'<TextComponent tag="p" style={{ marginTop: 16 }}>'}\n` +
                        `           ${'Some content...'}\n` +
                        `       ${'</TextComponent>'}\n` +
                        `   ${'</Content>'}\n` +
                        `${'</CardR123Basic>'}`
                    }
                >
                    <CardR123Basic
                        media={{
                            images:
                                'https://images.unsplash.com/photo-1562886812-41775a01195d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                            alt: 'Images 1'
                        }}
                        content={{
                            heading: <SaveButton />,
                            title:
                                'Ready Rumah Murah Di Sukun Perum Tirtasari Malang, Sukun, Malang',
                            address: 'Malang',
                            priceTag: 'Rp 2,1 M',
                            landSize: 'Luas tanah: 339 m2',
                            buildingSize: 'Luas bangunan: 700 m2',
                            propertyType: 'Rumah',
                            attribute: [{ icon: <BedroomIcon />, value: '3' }]
                        }}
                        action={{}}
                    />
                </CodingViewerDocsComponent>
            </>
        )
        .execute();
})();
