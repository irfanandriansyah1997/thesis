import React, { SFC } from 'react';
import { render, mount } from 'enzyme';

import DialogComponent from '../dialog.component';
import IconComponent from '../../icon/icon.component';

describe('Testing dialog component in atomic component', () => {
    it('Should render dialog component correctly', () => {
        const callback = jest.fn();
        const dialog = render(
            <DialogComponent show onCloseDialog={callback}>
                <img
                    alt="Images 1"
                    src="https://images.unsplash.com/photo-1562886812-41775a01195d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                    style={{ width: '100%' }}
                />
            </DialogComponent>
        );

        expect(dialog.hasClass('ui-atomic-dialog')).toBe(true);
        expect(dialog.hasClass('ui-atomic-dialog__show')).toBe(true);
        expect(dialog.hasClass('ui-atomic-dialog--type-popup')).toBe(true);
        expect(dialog.children().hasClass('ui-atomic-dialog__content')).toBe(
            true
        );
        expect(dialog.children().hasClass('ui-atomic-dialog__backdrop')).toBe(
            true
        );
    });

    it('should render dialog in fullscreen view correctly', () => {
        const callback = jest.fn();
        const dialog = render(
            <DialogComponent show type={1} onCloseDialog={callback}>
                <img
                    alt="Images 1"
                    src="https://images.unsplash.com/photo-1562886812-41775a01195d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                    style={{ width: '100%' }}
                />
            </DialogComponent>
        );

        expect(dialog.hasClass('ui-atomic-dialog--type-fullscreen')).toBe(true);
    });

    it('should close the dialog when the area outside dialog content is clicked', () => {
        const callback = jest.fn();
        const wrapper = mount(
            <DialogComponent show onCloseDialog={callback}>
                <img
                    alt="Images 1"
                    src="https://images.unsplash.com/photo-1562886812-41775a01195d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                    style={{ width: '100%' }}
                />
            </DialogComponent>
        );

        wrapper.find('div.ui-atomic-dialog__backdrop').simulate('click');

        expect(callback).toBeCalledTimes(1);
    });

    it('should close the dialog when close button is clicked', () => {
        const callback = jest.fn();
        // eslint-disable-next-line require-jsdoc-except/require-jsdoc
        const Icon: SFC = () => (
            <IconComponent
                color="primary"
                size={32}
                style={{
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    padding: 8,
                    cursor: 'pointer'
                }}
                onClick={callback}
            >
                close
            </IconComponent>
        );

        const wrapper = mount(
            <DialogComponent show onCloseDialog={callback}>
                <Icon />
                <img
                    alt="Images 1"
                    src="https://images.unsplash.com/photo-1562886812-41775a01195d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                    style={{ width: '100%' }}
                />
            </DialogComponent>
        );

        wrapper.find(IconComponent).simulate('click');

        expect(callback).toBeCalledTimes(1);
    });
});
