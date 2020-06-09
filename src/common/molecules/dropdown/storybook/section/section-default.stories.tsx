/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ReactNode } from 'react';

import DropdownComponent from '../../dropdown.component';
import { DropdownPropsInterface } from '../../interface/component.interface';
import { ARROW_ON_HIDE } from '../../../../../shared/constant/component.constant';
import TextDocsComponent from '../../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../../.storybook/component/atomic/heading/heading.component';
import CodingViewerDocsComponent from '../../../../../.storybook/component/molecules/code-viewer/code-viewer.component';

/**
 * Generate Docs
 * @param {string} type - type props image
 * @return {string}
 */
const docs = (props: DropdownPropsInterface): string =>
    `<DropdownComponent\n` +
    `    label="${props.label}"\n` +
    `    name="${props.name}"\n` +
    `    trigger="${props.trigger}"\n` +
    `    icon="rui-icon-arrow-down-small"\n` +
    `>\n` +
    `    <DropdownComponent.Item>\n` +
    `        Dropdown Toggle 1\n` +
    `    </DropdownComponent.Item>\n` +
    `    <DropdownComponent.Item>\n` +
    `        Dropdown Toggle 2\n` +
    `    </DropdownComponent.Item>\n` +
    `    <DropdownComponent.Item>\n` +
    `        Dropdown Toggle 3\n` +
    `    </DropdownComponent.Item>\n` +
    `    <DropdownComponent.Item>\n` +
    `        Dropdown Toggle 4\n` +
    `    </DropdownComponent.Item>\n` +
    `    <DropdownComponent.Item>\n` +
    `        Dropdown Toggle 5\n` +
    `    </DropdownComponent.Item>\n` +
    `    <DropdownComponent.Divider />\n` +
    `    <DropdownComponent.Item>\n` +
    `        Dropdown Toggle 6\n` +
    `    </DropdownComponent.Item>\n` +
    `</DropdownComponent>\n`;

/**
 * Section Default Dropdown
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.15
 */
class SectionDefaultDropdownComponent extends React.PureComponent<
    {},
    Record<string, unknown>
> {
    render(): ReactNode {
        return (
            <>
                <HeadingDocsComponent>Usage</HeadingDocsComponent>
                <TextDocsComponent>Basic dropdown component</TextDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={docs({
                        label: 'Dropdown Toggle',
                        name: 'hello',
                        trigger: 'click'
                    })}
                >
                    <DropdownComponent
                        label="Dropdown Toggle"
                        name="hello"
                        trigger="click"
                        icon={ARROW_ON_HIDE}
                        iconMargin={{ left: 5 }}
                    >
                        <DropdownComponent.Item>
                            Dropdown Toggle 1
                        </DropdownComponent.Item>
                        <DropdownComponent.Item>
                            Dropdown Toggle 2
                        </DropdownComponent.Item>
                        <DropdownComponent.Item>
                            Dropdown Toggle 3
                        </DropdownComponent.Item>
                        <DropdownComponent.Item>
                            Dropdown Toggle 4
                        </DropdownComponent.Item>
                        <DropdownComponent.Item>
                            Dropdown Toggle 5
                        </DropdownComponent.Item>
                        <DropdownComponent.Divider />
                        <DropdownComponent.Item>
                            Dropdown Toggle 6
                        </DropdownComponent.Item>
                    </DropdownComponent>
                </CodingViewerDocsComponent>
            </>
        );
    }
}

export default SectionDefaultDropdownComponent;
