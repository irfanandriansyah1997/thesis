/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { mount } from 'enzyme';

import GalleryComponent from '../gallery.component';
import { GalleryPropsInterface } from '../interface/component.interface';
import IconComponent from '../../../atomic/icon/icon.component';
import {
    ARROW_LEFT_KEY_CHARCODE,
    ARROW_RIGHT_KEY_CHARCODE
} from '../../../../shared/constant/keyboard.constant';

const MOCK_PROPS: GalleryPropsInterface = {
    item: [
        {
            alt: 'sample-1',
            id: 'sample-1',
            src: '1.jpg'
        },
        {
            alt: 'sample-2',
            id: 'sample-2',
            src: '2.jpg'
        },
        {
            alt: 'sample-3',
            id: 'sample-3',
            src: '3.jpg',
            type: 'youtube'
        }
    ],
    labelToggle: {
        onCLose: 'Tutup Thumbnail',
        onExpand: 'Buka Thumbnail'
    },
    onChangeActive: () => undefined
};

describe('Testing Gallery Component', () => {
    it('Testing render gallery', () => {
        const MOCK = {
            ...MOCK_PROPS,
            onChangeActive: jest.fn()
        };

        mount(<GalleryComponent {...MOCK} />);
    });

    it('Testing click direction', () => {
        const MOCK = {
            ...MOCK_PROPS,
            onChangeActive: jest.fn((x) => x)
        };

        const component = mount(<GalleryComponent {...MOCK} />);
        const prev = component
            .find('.ui-molecules-carousel__action--prev')
            .at(0)
            .find(IconComponent);
        const next = component
            .find('.ui-molecules-carousel__action--next')
            .at(0)
            .find(IconComponent);

        expect(prev.length).toBe(1);
        expect(next.length).toBe(1);

        next.at(0).simulate('click');
        expect(MOCK.onChangeActive).toHaveBeenCalledTimes(2);
        expect(MOCK.onChangeActive.mock.results[1].value).toBe(1);

        next.at(0).simulate('click');
        expect(MOCK.onChangeActive).toHaveBeenCalledTimes(3);
        expect(MOCK.onChangeActive.mock.results[2].value).toBe(2);

        next.at(0).simulate('click');
        expect(MOCK.onChangeActive).toHaveBeenCalledTimes(4);
        expect(MOCK.onChangeActive.mock.results[3].value).toBe(0);

        prev.at(0).simulate('click');
        expect(MOCK.onChangeActive).toHaveBeenCalledTimes(5);
        expect(MOCK.onChangeActive.mock.results[4].value).toBe(2);
    });

    it('Testing click toggle thumbnail', () => {
        const MOCK = {
            ...MOCK_PROPS,
            onChangeActive: jest.fn((x) => x)
        };

        const component = mount(<GalleryComponent {...MOCK} />);
        const toggle = component
            .find('.ui-organism-gallery__toggle-text')
            .at(0);

        expect(toggle.length).toBe(1);
        expect(
            component
                .find('.ui-organism-gallery__toggle-text')
                .at(0)
                .text()
        ).toBe('Tutup Thumbnail');

        toggle.at(0).simulate('click');
        expect(
            component
                .find('.ui-organism-gallery__toggle-text')
                .at(0)
                .text()
        ).toBe('Buka Thumbnail');

        toggle.at(0).simulate('click');
        expect(
            component
                .find('.ui-organism-gallery__toggle-text')
                .at(0)
                .text()
        ).toBe('Tutup Thumbnail');
    });

    it('Testing keydown in carousel component', () => {
        const MOCK = {
            ...MOCK_PROPS,
            showNumbering: true,
            onChangeActive: jest.fn((x) => x)
        };

        const component = mount(<GalleryComponent {...MOCK} />);

        expect(component.find('.ui-organism-gallery').length).toBe(1);

        const event: any = new Event('keydown');
        event.keyCode = ARROW_LEFT_KEY_CHARCODE;

        const event2: any = new Event('keydown');
        event2.keyCode = ARROW_RIGHT_KEY_CHARCODE;

        expect(MOCK.onChangeActive).toHaveBeenCalledTimes(1);
        expect(MOCK.onChangeActive.mock.results[0].value).toBe(0);

        component
            .find('.ui-organism-gallery')
            .at(0)
            .getDOMNode()
            .dispatchEvent(event);

        expect(MOCK.onChangeActive).toHaveBeenCalledTimes(2);
        expect(MOCK.onChangeActive.mock.results[1].value).toBe(2);

        component
            .find('.ui-organism-gallery')
            .at(0)
            .getDOMNode()
            .dispatchEvent(event);

        expect(MOCK.onChangeActive).toHaveBeenCalledTimes(3);
        expect(MOCK.onChangeActive.mock.results[2].value).toBe(2);

        component
            .find('.ui-organism-gallery')
            .at(0)
            .getDOMNode()
            .dispatchEvent(event);

        expect(MOCK.onChangeActive).toHaveBeenCalledTimes(5);
        expect(MOCK.onChangeActive.mock.results[4].value).toBe(1);

        component
            .find('.ui-organism-gallery')
            .at(0)
            .getDOMNode()
            .dispatchEvent(event2);

        expect(MOCK.onChangeActive).toHaveBeenCalledTimes(6);
        expect(MOCK.onChangeActive.mock.results[5].value).toBe(0);

        component
            .find('.ui-organism-gallery')
            .at(0)
            .getDOMNode()
            .dispatchEvent(event2);

        expect(MOCK.onChangeActive).toHaveBeenCalledTimes(7);
        expect(MOCK.onChangeActive.mock.results[6].value).toBe(0);
    });
});
