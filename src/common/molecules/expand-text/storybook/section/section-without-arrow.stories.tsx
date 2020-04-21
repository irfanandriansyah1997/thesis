/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ReactNode } from 'react';

import ExpandTextComponent from '../../expand-text.component';
import TextComponent from '../../../../atomic/text/text.component';
import {
    ExpandTextPropsInterface,
    ExpandTextToggleButtonInterface
} from '../../interfaces/component.interface';
import TextDocsComponent from '../../../../../.storybook/component/atomic/text/text.component';
import DividerDocsComponent from '../../../../../.storybook/component/atomic/divider/divider.component';
import HeadingDocsComponent from '../../../../../.storybook/component/atomic/heading/heading.component';
import CodingViewerDocsComponent from '../../../../../.storybook/component/molecules/code-viewer/code-viewer.component';

/**
 * Generate Docs
 * @param {string} type - type props image
 * @return {string}
 */
const docs = (props: ExpandTextPropsInterface): string =>
    `<ExpandComponent \n` +
    `    showArrow="${props.showArrow}"\n` +
    `    color="${props.color}"\n` +
    `    collapsedHeight="${props.collapsedHeight}"\n` +
    `    textToggleButton={{\n` +
    `        onCLose: '${
        (props.textToggleButton as ExpandTextToggleButtonInterface).onCLose
    }',\n` +
    `        onExpand: '${
        (props.textToggleButton as ExpandTextToggleButtonInterface).onExpand
    }'\n` +
    `    }}\n` +
    '>\n' +
    `    ....content...\n` +
    `</ExpandComponent>`;

/**
 * Section Without Arror  Expand Text
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.15
 */
class SectionWithoutArrowExpandTextComponent extends React.PureComponent<
    {},
    Record<string, unknown>
> {
    render(): ReactNode {
        return (
            <>
                <HeadingDocsComponent>
                    Customized Expand Text
                </HeadingDocsComponent>
                <TextDocsComponent>
                    Render expand text component without arrow icon in the
                    selector.
                </TextDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={docs({
                        showArrow: false,
                        color: 'heading',
                        collapsedHeight: 100,
                        textToggleButton: {
                            onCLose: 'Buka lebih detail',
                            onExpand: 'Tutup Deskripsi'
                        },
                        children: ''
                    })}
                >
                    <ExpandTextComponent
                        showArrow={false}
                        color="heading"
                        collapsedHeight={100}
                        textToggleButton={{
                            onCLose: 'Buka lebih detail',
                            onExpand: 'Tutup Deskripsi'
                        }}
                    >
                        <TextComponent
                            color="heading600"
                            fontWeight={400}
                            align="justify"
                            tag="p"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Pellentesque id tincidunt neque. Curabitur a
                            laoreet diam, vitae pellentesque diam. Suspendisse
                            potenti. Nulla non sem vitae purus hendrerit varius
                            et in ex. Vestibulum molestie semper libero eu
                            facilisis. Nulla vel nibh in justo hendrerit blandit
                            a vitae erat. Sed rutrum ex et justo dignissim
                            ultrices. Maecenas quis erat libero. Aenean sem
                            enim, venenatis sed condimentum ut, luctus sit amet
                            dui. Class aptent taciti sociosqu ad litora torquent
                            per conubia nostra, per inceptos himenaeos. Ut ut
                            libero risus. In efficitur, ligula sit amet
                            venenatis consequat, ligula quam varius leo,
                            volutpat tincidunt quam turpis eget turpis.
                            Pellentesque dapibus, urna nec lobortis tincidunt,
                            risus nisi malesuada felis, ac rutrum nibh erat
                            pharetra urna. Nunc eleifend iaculis massa, commodo
                            malesuada leo congue eget. Morbi a dui erat. Cras
                            consequat nibh felis, id aliquam libero sodales vel.
                        </TextComponent>
                        <DividerDocsComponent />
                        <TextComponent
                            color="heading600"
                            fontWeight={400}
                            align="justify"
                            tag="p"
                        >
                            Pellentesque sed lacus felis. Maecenas a commodo mi.
                            In hac habitasse platea dictumst. Nulla porta non
                            dui sed malesuada. Mauris nec molestie dui. Nam ex
                            purus, consequat vitae sodales eu, accumsan sed
                            libero. Vestibulum a tincidunt dolor. Integer ipsum
                            massa, facilisis vel mauris id, mollis tincidunt
                            lectus.
                        </TextComponent>
                    </ExpandTextComponent>
                </CodingViewerDocsComponent>
            </>
        );
    }
}

export default SectionWithoutArrowExpandTextComponent;
