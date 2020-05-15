/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ReactNode } from 'react';

import NavbarComponent from '../../navbar.component';
import TextDocsComponent from '../../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../../.storybook/component/atomic/heading/heading.component';
import CodingViewerDocsComponent from '../../../../../.storybook/component/molecules/code-viewer/code-viewer.component';
import RadioButtonComponent from '../../../radio-button/radio-button.component';

/**
 * Generate Docs
 * @return {string}
 */
const doc = (): string =>
    `<NavbarComponent backgroundColor="primary" shadow> \n` +
    `    <NavbarComponent.Menu id="menu-left" position="left">\n` +
    `        <NavbarComponent.Dropdown active to="/news" text="Sample Dropdown" color="white" fontWeight={500}>\n` +
    `            <NavbarComponent.Item to="/profile" color="heading" text="Berita Properti" />\n` +
    `            <NavbarComponent.Item to="/profile" color="heading" text="Pameran Properti" />\n` +
    `        </NavbarComponent.Dropdown>\n` +
    `        <NavbarComponent.MegaMenu to="/news" text="Sample Mega Menu" color="white" fontWeight={500}>\n` +
    `            <div style={{ padding: 15 }} className="flex flex-column flex-justify-start flex-align-start">\n` +
    `                <HeadingDocsComponent>\n` +
    `                    Content Mega Menu\n` +
    `                </HeadingDocsComponent>\n` +
    `                <TextDocsComponent>\n` +
    `                    We can set content in mega menu children\n` +
    `                </TextDocsComponent>\n` +
    `                <RadioButtonComponent name="horizontal" styling="horizontal" onChange={(): void => undefined} value={2}>\n` +
    `                    <RadioButtonComponent.Item id="horizontal-1" value={1} label="Label horizontal 1" />\n` +
    `                    <RadioButtonComponent.Item id="horizontal-2" value={2} label="Label horizontal 2" />\n` +
    `                </RadioButtonComponent>\n` +
    `            </div>\n` +
    `        </NavbarComponent.MegaMenu>\n` +
    `    </NavbarComponent.Menu>\n` +
    `</NavbarComponent>\n`;

/**
 * Section Navbar Dropdown
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.15
 */
class SectionNavbarDropdownComponent extends React.PureComponent<
    {},
    Record<string, unknown>
> {
    render(): ReactNode {
        return (
            <>
                <HeadingDocsComponent>Navbar Dropdown</HeadingDocsComponent>
                <TextDocsComponent>
                    We can use dropdowm component and set background-color
                    custom in navbar component
                </TextDocsComponent>
                <CodingViewerDocsComponent sourceCode={doc()}>
                    <NavbarComponent backgroundColor="primary" shadow>
                        <NavbarComponent.Menu id="menu-left" position="left">
                            <NavbarComponent.Dropdown
                                active
                                to="/news"
                                text="Sample Dropdown"
                                color="white"
                                fontWeight={500}
                            >
                                <NavbarComponent.Item
                                    to="/profile"
                                    color="heading"
                                    text="Berita Properti"
                                />
                                <NavbarComponent.Item
                                    to="/profile"
                                    color="heading"
                                    text="Pameran Properti"
                                />
                            </NavbarComponent.Dropdown>
                            <NavbarComponent.MegaMenu
                                to="/news"
                                text="Sample Mega Menu"
                                color="white"
                                fontWeight={500}
                            >
                                <div
                                    style={{ padding: 15 }}
                                    className="flex flex-column flex-justify-start flex-align-start"
                                >
                                    <HeadingDocsComponent>
                                        Content Mega Menu
                                    </HeadingDocsComponent>
                                    <TextDocsComponent>
                                        We can set content in mega menu children
                                    </TextDocsComponent>
                                    <RadioButtonComponent
                                        name="horizontal"
                                        styling="horizontal"
                                        onChange={(): void => undefined}
                                        value={2}
                                    >
                                        <RadioButtonComponent.Item
                                            id="horizontal-1"
                                            value={1}
                                            label="Label horizontal 1"
                                        />
                                        <RadioButtonComponent.Item
                                            id="horizontal-2"
                                            value={2}
                                            label="Label horizontal 2"
                                        />
                                    </RadioButtonComponent>
                                </div>
                            </NavbarComponent.MegaMenu>
                        </NavbarComponent.Menu>
                    </NavbarComponent>
                </CodingViewerDocsComponent>
            </>
        );
    }
}

export default SectionNavbarDropdownComponent;
