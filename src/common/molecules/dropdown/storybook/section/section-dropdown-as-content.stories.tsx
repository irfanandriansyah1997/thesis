/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ReactNode } from 'react';

import DropdownComponent from '../../dropdown.component';
import TextComponent from '../../../../atomic/text/text.component';
import IconComponent from '../../../../atomic/icon/icon.component';
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
    `    type="${props.type}"\n` +
    `    name="${props.name}"\n` +
    `    trigger="${props.trigger}"\n` +
    `    icon="rui-icon-arrow-down-small"\n` +
    `>\n` +
    `    <DropdownComponent.Item disableHover withoutPadding>\n` +
    `        <div className="flex flex-row flex-align-center" style={{ padding: '15px' }}>\n` +
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
    `    </DropdownComponent.Item>\n` +
    `    <DropdownComponent.Divider />\n` +
    `    <DropdownComponent.Item>\n` +
    `        <div className="flex flex-row flex-align-center">\n` +
    `            <IconComponent color="text" size={16} style={{ marginRight: 5 }}>\n` +
    `                rui-icon-avatar\n` +
    `            </IconComponent>\n` +
    `            <TextComponent tag="p" fontWeight={500}>\n` +
    `                See Profile\n` +
    `            </TextComponent>\n` +
    `        </div>\n` +
    `    </DropdownComponent.Item>\n` +
    `</DropdownComponent>\n`;

/**
 * Section Dropdown As Content
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.15
 */
class SectionDropdownAsContentComponent extends React.PureComponent<
    {},
    Record<string, unknown>
> {
    render(): ReactNode {
        return (
            <>
                <HeadingDocsComponent>
                    Create Dropdown For Section
                </HeadingDocsComponent>
                <TextDocsComponent>
                    We can set dropdown for section such as form, information,
                    or list notification with if user click dropdown item the
                    dropdown not closed
                </TextDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={docs({
                        name: 'hello',
                        type: 'content',
                        trigger: 'hover',
                        label: 'Account'
                    })}
                >
                    <DropdownComponent
                        name="hello"
                        type="content"
                        trigger="hover"
                        label="Account"
                        icon={ARROW_ON_HIDE}
                    >
                        <DropdownComponent.Item disableHover withoutPadding>
                            <div
                                className="flex flex-row flex-align-center"
                                style={{ padding: '15px' }}
                            >
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
                                    <TextComponent
                                        tag="p"
                                        styling="tiny"
                                        fontWeight={500}
                                    >
                                        Software Engineer
                                    </TextComponent>
                                </div>
                            </div>
                        </DropdownComponent.Item>
                        <DropdownComponent.Divider />
                        <DropdownComponent.Item>
                            <div className="flex flex-row flex-align-center">
                                <IconComponent
                                    color="text"
                                    size={16}
                                    marginRight={5}
                                >
                                    rui-icon-avatar
                                </IconComponent>
                                <TextComponent tag="p" fontWeight={500}>
                                    See Profile
                                </TextComponent>
                            </div>
                        </DropdownComponent.Item>
                    </DropdownComponent>
                </CodingViewerDocsComponent>
            </>
        );
    }
}

export default SectionDropdownAsContentComponent;
