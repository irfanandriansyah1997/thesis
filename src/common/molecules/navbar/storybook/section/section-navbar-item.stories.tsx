/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ReactNode } from 'react';

import NavbarComponent from '../../navbar.component';
import TextDocsComponent from '../../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../../.storybook/component/atomic/heading/heading.component';
import CodingViewerDocsComponent from '../../../../../.storybook/component/molecules/code-viewer/code-viewer.component';
import IconComponent from '../../../../atomic/icon/icon.component';
import TextComponent from '../../../../atomic/text/text.component';

/**
 * Generate Docs
 * @return {string}
 */
const docs = (): string =>
    `<NavbarComponent backgroundColor="white" shadow>\n` +
    `    <NavbarComponent.Menu id="menu-left" position="left">\n` +
    `        <NavbarComponent.Item text="Home" to="/home" color="primary" fontWeight={500} />\n` +
    `        <NavbarComponent.Item text="Profile" to="/profile" color="primary" fontWeight={500} />\n` +
    `    </NavbarComponent.Menu>\n` +
    `    <NavbarComponent.Menu id="menu-right" position="right">\n` +
    `        <NavbarComponent.Section>\n` +
    `            <IconComponent size="default" color="primary">\n` +
    `                language\n` +
    `            </IconComponent>\n` +
    `            &nbsp;&nbsp;\n` +
    `            <TextComponent tag="p" color="primary" styling="default">\n` +
    `                Id\n` +
    `            </TextComponent>\n` +
    `            <NavbarComponent.Divider color="heading300" />\n` +
    `            <TextComponent tag="p" color="primary" styling="default" style={{ opacity: 0.6 }}>\n` +
    `                En\n` +
    `            </TextComponent>\n` +
    `        </NavbarComponent.Section>\n` +
    `    </NavbarComponent.Menu>\n` +
    `</NavbarComponent>`;

/**
 * Section Navbar Item
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.15
 */
class SectionNavbarItemComponent extends React.PureComponent<
    {},
    Record<string, unknown>
> {
    render(): ReactNode {
        return (
            <>
                <HeadingDocsComponent>Basic Usage</HeadingDocsComponent>
                <TextDocsComponent>Basic navbar component</TextDocsComponent>
                <CodingViewerDocsComponent sourceCode={docs()}>
                    <HeadingDocsComponent>Usage</HeadingDocsComponent>
                    <TextDocsComponent>
                        We can set navbar only link in left section and widget
                        in right section
                    </TextDocsComponent>
                    <NavbarComponent backgroundColor="white" shadow>
                        <NavbarComponent.Menu id="menu-left" position="left">
                            <NavbarComponent.Item
                                text="Home"
                                to="/home"
                                color="primary"
                                fontWeight={500}
                            />
                            <NavbarComponent.Item
                                text="Profile"
                                to="/profile"
                                color="primary"
                                fontWeight={500}
                            />
                        </NavbarComponent.Menu>
                        <NavbarComponent.Menu id="menu-right" position="right">
                            <NavbarComponent.Section>
                                <IconComponent size="default" color="primary">
                                    language
                                </IconComponent>
                                &nbsp;&nbsp;
                                <TextComponent
                                    tag="p"
                                    color="primary"
                                    styling="default"
                                >
                                    Id
                                </TextComponent>
                                <NavbarComponent.Divider color="heading300" />
                                <TextComponent
                                    tag="p"
                                    color="primary"
                                    styling="default"
                                    style={{ opacity: 0.6 }}
                                >
                                    En
                                </TextComponent>
                            </NavbarComponent.Section>
                        </NavbarComponent.Menu>
                    </NavbarComponent>
                </CodingViewerDocsComponent>
            </>
        );
    }
}

export default SectionNavbarItemComponent;
