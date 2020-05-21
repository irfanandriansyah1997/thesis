import React from 'react';
import { render, mount } from 'enzyme';

import HollowLinkComponent from '../hollow-link.component';
import IconComponent from '../../../atomic/icon/icon.component';

describe('Testing hollow link component in molecules component', () => {
    it('Should render hollow link component', () => {
        const hollowLink = render(
            <HollowLinkComponent active>Nopes</HollowLinkComponent>
        );

        expect(hollowLink.hasClass('ui-molecules-hollow-link')).toBe(true);
        expect(hollowLink.hasClass('ui-molecules-hollow-link--active')).toBe(
            true
        );
    });

    it('Should render hollow link component with icon', () => {
        const hollowLink = mount(
            <HollowLinkComponent active icon="edit">
                Nopes
            </HollowLinkComponent>
        );

        expect(hollowLink.find(IconComponent).length).toBe(1);
        const { children, size } = hollowLink
            .find(IconComponent)
            .at(0)
            .props();

        expect(size).toBe(16);
        expect(children).toBe('edit');
    });

    it('Simulate click component', () => {
        const onClickMock = jest.fn();
        const hollowLink = mount(
            <HollowLinkComponent active icon="edit" onClick={onClickMock}>
                Nopes
            </HollowLinkComponent>
        );

        expect(onClickMock).toHaveBeenCalledTimes(0);
        hollowLink.simulate('click');
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });
});
