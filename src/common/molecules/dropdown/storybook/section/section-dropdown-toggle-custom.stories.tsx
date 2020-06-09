/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ReactNode } from 'react';

import DropdownComponent from '../../dropdown.component';
import TextComponent from '../../../../atomic/text/text.component';
import AvatarComponent from '../../../../atomic/avatar/avatar.component';
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
    `    label={(\n` +
    `        <div className="flex flex-row flex-align-center">\n` +
    `            <AvatarComponent size={30} alt="user1" type="circle" src="https://randomuser.me/api/portraits/women/90.jpg" />\n` +
    `            <div className="flex flex-column flex-align-start" style={{ padding: '0 10px' }}>\n` +
    `                <TextComponent tag="h5" color="heading" fontWeight={500} styling="default">\n` +
    `                    John Doe\n` +
    `                </TextComponent>\n` +
    `                <TextComponent tag="p" styling="tiny" fontWeight={500}>\n` +
    `                    Software Engineer\n` +
    `                </TextComponent>\n` +
    `            </div>\n` +
    `        </div>\n` +
    `    )}\n` +
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
 * Section Dropdown As Content
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.15
 */
class SectionDropdownToggleCustomComponent extends React.PureComponent<
    {},
    Record<string, unknown>
> {
    /**
     * Example Render Label
     * @return {ReactNode}
     */
    static renderLabel(): ReactNode {
        return (
            <div className="flex flex-row flex-align-center">
                <AvatarComponent
                    size={30}
                    alt="user1"
                    type="circle"
                    src="https://randomuser.me/api/portraits/women/90.jpg"
                />
                <div
                    className="flex flex-column flex-align-start"
                    style={{ padding: '0 10px' }}
                >
                    <TextComponent
                        tag="h5"
                        color="heading"
                        fontWeight={500}
                        styling="default"
                    >
                        John Doe
                    </TextComponent>
                    <TextComponent tag="p" styling="tiny" fontWeight={500}>
                        Software Engineer
                    </TextComponent>
                </div>
            </div>
        );
    }

    render(): ReactNode {
        return (
            <>
                <HeadingDocsComponent>
                    Custom Toggle Dropdown
                </HeadingDocsComponent>
                <TextDocsComponent>
                    We can customize toggle props with element react
                </TextDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={docs({
                        name: 'hello',
                        trigger: 'click',
                        label: ''
                    })}
                >
                    <DropdownComponent
                        name="hello"
                        trigger="click"
                        icon={ARROW_ON_HIDE}
                        iconMargin={{ left: 5 }}
                        label={SectionDropdownToggleCustomComponent.renderLabel()}
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

export default SectionDropdownToggleCustomComponent;
