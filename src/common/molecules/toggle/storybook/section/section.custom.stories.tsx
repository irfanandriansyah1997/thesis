import React, { SFC } from 'react';

import ToggleComponent from '../../toggle.component';
import TextComponent from '../../../../atomic/text/text.component';
import TextDocsComponent from '../../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../../.storybook/component/atomic/heading/heading.component';
import CodingViewerDocsComponent from '../../../../../.storybook/component/molecules/code-viewer/code-viewer.component';

/**
 * Section Custom Toggle
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.04.17
 */
const SectionCustomToggleComponent: SFC = () => (
    <>
        <HeadingDocsComponent>Customized Toggle Component</HeadingDocsComponent>
        <TextDocsComponent>
            Toggle component with collapsed height and gradient effect.
        </TextDocsComponent>
        <CodingViewerDocsComponent
            sourceCode={
                `${'<ToggleComponent selector="Toggle selector" collapsedHeight={50} gradient>'}\n` +
                `   ${'<TextComponent tag="p">In hac habitasse platea dictumst. Quisque tristique erat ante, vitae cursus quam molestie non. Etiam hendrerit elit at maximus venenatis. Vivamus aliquam risus ante. Phasellus in mauris mollis, aliquam libero gravida, vulputate eros. Fusce vel malesuada eros. Quisque in volutpat odio. Phasellus condimentum, erat vitae congue condimentum, nislodio rutrum ipsum, quis cursus risus diam vitae augue. Aliquam aliquet mauris a ipsum sagittis consectetur. Maecenas orci mauris, rhoncus at libero pretium, finibus pulvinar est. Duis volutpat purus odio.</TextComponent>'}\n` +
                `   ${'<TextComponent tag="p">Cras hendrerit vitae ante nec malesuada. Aenean ornare egestas felis. Nulla facilisi. Morbi malesuada libero at libero commodo mattis quis sed sem. Sed vel porttitor risus. In venenatis metus ipsum, ac mollis sem porta in. Donec scelerisque, metus ac imperdiet euismod, urna urna bibendum libero, mollis semper erat neque quis justo. Sed quis diam in eros facilisis facilisis at non elit. Fusce efficitur urna at sem luctus, egestas condimentum nunc feugiat. Sed feugiat nibh ac dapibus eleifend. Aenean efficitur, sem et interdum hendrerit, erat nisi accumsan mauris, sed viverra quam tellus ac purus.</TextComponent>'}\n` +
                `${'</ToggleComponent>'}`
            }
        >
            <ToggleComponent
                selector="Toggle selector"
                collapsedHeight={50}
                gradient
            >
                <TextComponent
                    tag="p"
                    style={{
                        lineHeight: 1.5
                    }}
                >
                    In hac habitasse platea dictumst. Quisque tristique erat
                    ante, vitae cursus quam molestie non. Etiam hendrerit elit
                    at maximus venenatis. Vivamus aliquam risus ante. Phasellus
                    in mauris mollis, aliquam libero gravida, vulputate eros.
                    Fusce vel malesuada eros. Quisque in volutpat odio.
                    Phasellus condimentum, erat vitae congue condimentum, nisl
                    odio rutrum ipsum, quis cursus risus diam vitae augue.
                    Aliquam aliquet mauris a ipsum sagittis consectetur.
                    Maecenas orci mauris, rhoncus at libero pretium, finibus
                    pulvinar est. Duis volutpat purus odio.
                </TextComponent>
                <TextComponent
                    tag="p"
                    style={{
                        marginTop: 16,
                        lineHeight: 1.5
                    }}
                >
                    Cras hendrerit vitae ante nec malesuada. Aenean ornare
                    egestas felis. Nulla facilisi. Morbi malesuada libero at
                    libero commodo mattis quis sed sem. Sed vel porttitor risus.
                    In venenatis metus ipsum, ac mollis sem porta in. Donec
                    scelerisque, metus ac imperdiet euismod, urna urna bibendum
                    libero, mollis semper erat neque quis justo. Sed quis diam
                    in eros facilisis facilisis at non elit. Fusce efficitur
                    urna at sem luctus, egestas condimentum nunc feugiat. Sed
                    feugiat nibh ac dapibus eleifend. Aenean efficitur, sem et
                    interdum hendrerit, erat nisi accumsan mauris, sed viverra
                    quam tellus ac purus.
                </TextComponent>
            </ToggleComponent>
        </CodingViewerDocsComponent>
    </>
);

export default SectionCustomToggleComponent;
