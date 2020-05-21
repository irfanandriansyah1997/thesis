/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ReactNode } from 'react';

import HollowLinkComponent from '../../hollow-link.component';
import TextDocsComponent from '../../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../../.storybook/component/atomic/heading/heading.component';
import CodingViewerDocsComponent from '../../../../../.storybook/component/molecules/code-viewer/code-viewer.component';
import DividerDocsComponent from '../../../../../.storybook/component/atomic/divider/divider.component';

const docs =
    `<HollowLinkComponent icon="rui-icon-calculator">\n` +
    `    With Icon\n` +
    `</HollowLinkComponent>\n` +
    `<HollowLinkComponent>Without Icon</HollowLinkComponent>\n`;

/**
 * Section Default Hollow Link
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.15
 */
class SectionDefaultHollowLinkComponent extends React.PureComponent<
    {},
    Record<string, unknown>
> {
    render(): ReactNode {
        return (
            <>
                <HeadingDocsComponent>Usage</HeadingDocsComponent>
                <TextDocsComponent>Basic usage hollow link</TextDocsComponent>
                <CodingViewerDocsComponent sourceCode={docs}>
                    <HollowLinkComponent icon="rui-icon-calculator">
                        With Icon
                    </HollowLinkComponent>
                    <DividerDocsComponent />
                    <HollowLinkComponent>Without Icon</HollowLinkComponent>
                </CodingViewerDocsComponent>
            </>
        );
    }
}

export default SectionDefaultHollowLinkComponent;
