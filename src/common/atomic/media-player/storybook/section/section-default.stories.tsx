import React, { SFC } from 'react';

import MediaPlayerComponent from '../../media-player.component';
import TextDocsComponent from '../../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../../.storybook/component/atomic/heading/heading.component';
import CodingViewerDocsComponent from '../../../../../.storybook/component/molecules/code-viewer/code-viewer.component';

/**
 * Section Default Media
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.04.01
 */
const SectionDefaultMediaComponent: SFC = () => (
    <>
        <HeadingDocsComponent>
            Penggunaan Komponen Media Player
        </HeadingDocsComponent>
        <TextDocsComponent>
            Berikut adalah contoh penggunaan komponent media player
        </TextDocsComponent>
        <CodingViewerDocsComponent sourceCode="">
            <MediaPlayerComponent
                youtubeId="Rb6Scz-5YOs"
                width="500"
                height="300"
            />
        </CodingViewerDocsComponent>
    </>
);

export default SectionDefaultMediaComponent;
