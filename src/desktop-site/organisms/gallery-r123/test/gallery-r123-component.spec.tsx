/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { mount } from 'enzyme';

import GalleryR123Component from '../gallery-r123.component';
import { GalleryR123PropsInterface } from '../interface/component.interface';
import CarouselComponent from '../../../../common/molecules/carousel/carousel.component';
import ImageComponent from '../../../../common/atomic/image/image.component';
import DialogComponent from '../../../../common/atomic/dialog/dialog.component';
import ListComponent from '../../../../common/molecules/list/list.component';
import HollowLinkComponent from '../../../../common/molecules/hollow-link/hollow-link.component';

const MOCK_PROPS: GalleryR123PropsInterface = {
    media: [
        {
            id: 1,
            src:
                'https://img.rea-asia.com/rumah123/800x1080-fit/house/ho65/6535047/original/hos6535047-rumah-di-jual-di-bintaro-jakarta-selatan-15889638051847.jpg',
            alt: 'Image 01'
        },
        {
            id: 2,
            src:
                'https://img.rea-asia.com/rumah123/1620x1080-fit/house/ho65/6535047/original/hos6535047-rumah-di-jual-di-bintaro-jakarta-selatan-15889638598536.jpg',
            alt: 'Image 02'
        },
        {
            id: 3,
            src:
                'https://img.rea-asia.com/rumah123/1620x1080-fit/house/ho65/6535047/original/hos6535047-rumah-di-jual-di-bintaro-jakarta-selatan-15889638944909.jpg',
            alt: 'Image 03'
        }
    ],
    video: [
        {
            id: 1,
            src:
                'https://img.rea-asia.com/rumah123/premium/1620x1080-fit/primary_property/project/1674/1584585989_siteplan_1674.jpg',
            alt: 'Image 01'
        },
        {
            id: 2,
            src:
                'https://img.rea-asia.com/rumah123/premium/1620x1080-fit/primary_property/project/1674/1584600009_5e7313c902628floorplan_3110.png',
            alt: 'Image 02'
        }
    ],
    blueprint: [
        {
            id: 1,
            src: 'PKXloFW_ZCA',
            alt: 'Image 01',
            type: 'youtube'
        },
        {
            id: 2,
            src: 'ZLKZKmdZEjM',
            alt: 'Image 02',
            type: 'youtube'
        },
        {
            id: 3,
            src: 'HyHNuVaZJ-k',
            alt: 'Image 03',
            type: 'youtube'
        }
    ],
    onClickSave: (): void => {},
    address: 'BSD City, Tangerang',
    onChangeActive: (): void => {},
    title: 'Alesha House, Vanya Park BSD City',
    labelToggle: {
        videoBadges: 'Video',
        mediaBadges: 'Media',
        blueprintBadges: 'Denah',
        onExpand: 'Tampilkan Thumbnail',
        onCLose: 'Sembunyikan Thumbnail'
    }
};

describe('Testing Gallery R123 Component', () => {
    it('render component', () => {
        const component = mount(<GalleryR123Component {...MOCK_PROPS} />);

        const images = component
            .find(CarouselComponent)
            .at(0)
            .find(ImageComponent);

        expect(images.length).toBe(3);
        expect(images.at(0).props().objectFit).toBe('contain');
    });

    it('render component new launch', () => {
        const component = mount(
            <GalleryR123Component isNewLaunch {...MOCK_PROPS} />
        );

        const images = component
            .find(CarouselComponent)
            .at(0)
            .find(ImageComponent);

        expect(images.length).toBe(3);
        expect(images.at(0).props().objectFit).toBe('cover');
    });

    it('testing show dialog if user click main pictures', () => {
        const component = mount(
            <GalleryR123Component isNewLaunch {...MOCK_PROPS} />
        );

        const images = component
            .find('.ui-molecules-gallery-r123__content')
            .at(0)
            .find(ImageComponent);

        expect(images.length).toBe(1);
        expect(
            component
                .find(DialogComponent)
                .at(0)
                .props().show
        ).toBe(false);

        images.at(0).simulate('click');
        expect(
            component
                .find(DialogComponent)
                .at(0)
                .props().show
        ).toBe(true);

        component
            .find(DialogComponent)
            .at(0)
            .find('.ui-molecules-gallery-r123__dialog-close')
            .at(0)
            .simulate('click');
        expect(
            component
                .find(DialogComponent)
                .at(0)
                .props().show
        ).toBe(false);
    });

    it('testing toggle section', () => {
        const component = mount(
            <GalleryR123Component isNewLaunch {...MOCK_PROPS} />
        );

        const badges = component
            .find('.ui-molecules-gallery-r123__dialog-heading')
            .at(0)
            .find(ListComponent)
            .at(0)
            .find('.ui-molecules-list__item');

        expect(badges.length).toBe(3);

        // Set Blueprint
        badges.at(1).simulate('click');

        // Set Video
        badges.at(2).simulate('click');

        // Set Media
        badges.at(0).simulate('click');
    });

    it('testing onclick save property', () => {
        const MOCK = {
            ...MOCK_PROPS,
            onClickSave: jest.fn()
        };
        const component = mount(<GalleryR123Component isNewLaunch {...MOCK} />);

        component
            .find(HollowLinkComponent)
            .at(0)
            .simulate('click');

        expect(MOCK.onClickSave).toHaveBeenCalledTimes(1);
    });
});
