import React from 'react';

import NavbarComponent from '../navbar.component';
import TextComponent from '../../../atomic/text/text.component';
import AvatarComponent from '../../../atomic/avatar/avatar.component';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';

import '../style/style.scss';

((): void => {
    new StorybookDocumentationBuilder('Navbar Component', 'molecules')
        .setSection('common')
        .setDescriptionComponent(
            'A list can be used to display content related to a single subject'
        )
        .registerDocumentation(
            <>
                <NavbarComponent backgroundColor="primary">
                    <NavbarComponent.Menu id="123" position="left">
                        <NavbarComponent.Item
                            to="/"
                            active
                            text="Dijual"
                            color="white"
                            fontWeight={500}
                        />
                        <NavbarComponent.Item
                            to="/"
                            text="Disewa"
                            color="white"
                            fontWeight={500}
                        />
                        <NavbarComponent.Item
                            to="/"
                            text="Properti Baru"
                            color="white"
                            fontWeight={500}
                        />
                        <NavbarComponent.Item
                            to="/"
                            text="KPR"
                            color="white"
                            fontWeight={500}
                        />
                        <NavbarComponent.Item
                            to="/"
                            text="Panduan"
                            color="white"
                            fontWeight={500}
                        />
                        <NavbarComponent.Dropdown
                            to="/berita"
                            text="Berita"
                            color="white"
                            fontWeight={500}
                        >
                            <NavbarComponent.Item
                                to="/"
                                text="Berita Properti"
                            />
                            <NavbarComponent.Item
                                to="/"
                                text="Berita Ekonomi"
                            />
                        </NavbarComponent.Dropdown>
                        <NavbarComponent.Item
                            to="/"
                            text="Internasional"
                            color="white"
                            fontWeight={500}
                        />
                    </NavbarComponent.Menu>
                    <NavbarComponent.Menu id="124" position="right">
                        <NavbarComponent.Section>
                            <AvatarComponent
                                alt=""
                                size={20}
                                src="https://public.urbanindo.com/style-guide/r123-globe.svg"
                            />
                            &nbsp;&nbsp;
                            <TextComponent
                                tag="p"
                                color="white"
                                styling="default"
                            >
                                Id
                            </TextComponent>
                            &nbsp;&nbsp;
                            <TextComponent
                                tag="p"
                                color="white"
                                styling="default"
                                style={{ opacity: 0.6 }}
                            >
                                En
                            </TextComponent>
                        </NavbarComponent.Section>
                        <NavbarComponent.Divider color="white" />
                        <NavbarComponent.Section>
                            <AvatarComponent
                                alt=""
                                size={20}
                                src="https://public.urbanindo.com/style-guide/r123-group.svg"
                            />
                            &nbsp;&nbsp;
                            <TextComponent
                                tag="p"
                                color="white"
                                styling="default"
                                style={{ opacity: 0.6 }}
                            >
                                Akun
                            </TextComponent>
                        </NavbarComponent.Section>
                    </NavbarComponent.Menu>
                </NavbarComponent>
            </>
        )
        .execute();
})();
