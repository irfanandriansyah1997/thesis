import React from 'react';

import NavbarComponent from '../navbar.component';
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
                            text="Jual"
                            color="white"
                            fontWeight={500}
                        />
                        <NavbarComponent.Item
                            to="/"
                            text="Beli"
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
                    </NavbarComponent.Menu>
                    <NavbarComponent.Menu id="124" position="right">
                        <NavbarComponent.Item
                            to="/"
                            text="Hello"
                            color="white"
                            fontWeight={500}
                        />
                        <NavbarComponent.Item
                            to="/"
                            text="Hello"
                            color="white"
                            fontWeight={500}
                        />
                    </NavbarComponent.Menu>
                </NavbarComponent>
            </>
        )
        .execute();
})();
