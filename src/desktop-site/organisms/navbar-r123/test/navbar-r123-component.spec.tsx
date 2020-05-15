import React from 'react';
import { render, mount } from 'enzyme';

import NavbarR123Component from '../navbar-r123.component';
import { DefaultPropsNavbarR123 } from '../storybook/templates/template-menu.stories';
import NavbarR123LoginComponent from '../navbar-r123-login.component';
import TextComponent from '../../../../common/atomic/text/text.component';
import NavbarR123LanguageChooserComponent from '../navbar-r123-language.component';

describe('Testing navbar r123 in organisms component ', () => {
    it('should render component working properly', () => {
        render(<NavbarR123Component {...DefaultPropsNavbarR123} />);
    });

    it('testing onClick login button', () => {
        const callback = jest.fn();
        const navbar = mount(
            <NavbarR123Component
                menu={[]}
                onChangeLanguange={callback}
                onClickLoginButton={callback}
                languange={{
                    active: 'Id',
                    option: ['Id', 'En']
                }}
            />
        );

        const login = navbar.find(NavbarR123LoginComponent);
        expect(login.length).toBe(1);

        login
            .at(0)
            .find(TextComponent)
            .simulate('click');

        expect(callback).toHaveBeenCalledTimes(1);
    });

    it('testing onClick login button', () => {
        const callback = jest.fn();
        const navbar = mount(
            <NavbarR123Component
                menu={[]}
                onChangeLanguange={callback}
                onClickLoginButton={callback}
                languange={{
                    active: 'Id',
                    option: ['Id', 'En']
                }}
            />
        );

        const login = navbar.find(NavbarR123LoginComponent);
        expect(login.length).toBe(1);

        login
            .at(0)
            .find(TextComponent)
            .simulate('click');

        expect(callback).toHaveBeenCalledTimes(1);
    });

    it('testing onClick language chooser', () => {
        const callback = jest.fn((x) => x);
        const navbar = mount(
            <NavbarR123Component
                menu={[]}
                onChangeLanguange={callback}
                onClickLoginButton={jest.fn()}
                languange={{
                    active: 'Id',
                    option: ['Id', 'En']
                }}
            />
        );

        const languange = navbar.find(NavbarR123LanguageChooserComponent);
        expect(languange.length).toBe(1);

        languange
            .at(0)
            .find(TextComponent)
            .at(0)
            .simulate('click');

        expect(callback).toHaveBeenCalledTimes(1);
        expect(callback.mock.results[0].value).toBe('Id');

        languange
            .at(0)
            .find(TextComponent)
            .at(1)
            .simulate('click');

        expect(callback).toHaveBeenCalledTimes(2);
        expect(callback.mock.results[0].value).toBe('En');
    });
});
