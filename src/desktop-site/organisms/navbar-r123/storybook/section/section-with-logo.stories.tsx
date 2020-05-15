/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ReactNode } from 'react';

import NavbarR123Component from '../../navbar-r123.component';
import { DefaultPropsNavbarR123 } from '../templates/template-menu.stories';
import { NavbarR123PropsInterface } from '../../interface/component.interface';
import TextDocsComponent from '../../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../../.storybook/component/atomic/heading/heading.component';
import CodingViewerDocsComponent from '../../../../../.storybook/component/molecules/code-viewer/code-viewer.component';

/**
 * Generate Docs
 * @param {string} type - type props image
 * @return {string}
 */
const docs = (props: NavbarR123PropsInterface): string =>
    `<NavbarR123Component\n` +
    `    menu={[]}\n` +
    `    showLogo={${props.showLogo ? 'true' : 'false'}}\n` +
    `    language={{\n` +
    `        active: 'Id'\n` +
    `        active: ['Id', 'En']\n` +
    `    }}\n` +
    `    onChangeLanguage={() => {}}\n` +
    `    onClickLoginButton={() => {}}\n` +
    `/>\n`;

/**
 * Section Navbar With Logo
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.15
 */
class SectionNavbarWithLogoComponent extends React.PureComponent<
    {},
    Record<string, unknown>
> {
    constructor() {
        super({});

        this.state = {
            language: 'Id'
        };
    }

    render(): ReactNode {
        const { language } = this.state;

        return (
            <>
                <HeadingDocsComponent>
                    Navbar R123 Using Logo
                </HeadingDocsComponent>
                <TextDocsComponent>
                    You can show logo with set props showLogo true
                </TextDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={docs({
                        ...DefaultPropsNavbarR123,
                        showLogo: true,
                        language: {
                            ...DefaultPropsNavbarR123.language,
                            active: language as string
                        },
                        onChangeLanguage: (id) =>
                            this.setState({
                                language: id
                            })
                    })}
                >
                    <NavbarR123Component
                        {...{
                            ...DefaultPropsNavbarR123,
                            language: {
                                ...DefaultPropsNavbarR123.language,
                                active: language as string
                            },
                            onChangeLanguage: (id): void =>
                                this.setState({
                                    language: id
                                })
                        }}
                    />
                </CodingViewerDocsComponent>
            </>
        );
    }
}

export default SectionNavbarWithLogoComponent;
