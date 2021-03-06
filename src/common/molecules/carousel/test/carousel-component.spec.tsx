import React from 'react';
import { render, mount } from 'enzyme';

import CarouselComponent from '../carousel.component';
import IconComponent from '../../../atomic/icon/icon.component';
import MediaPlayerComponent from '../../../atomic/media-player/media-player.component';

describe('Testing <CarouselComponent> in molecules component ', () => {
    const callback = jest.fn();
    const carouselItem = [
        {
            id: 1,
            src: 'https://i.postimg.cc/LXbhnMdf/image-01.jpg',
            alt: 'Image 01'
        },
        {
            id: 2,
            src: 'https://i.postimg.cc/dt7N7RCT/image-02.jpg',
            alt: 'Image 02'
        }
    ];

    it('Should render carousel component correctly', () => {
        const card = render(
            <CarouselComponent item={carouselItem} onChangeActive={callback} />
        );

        expect(card.hasClass('ui-molecules-carousel')).toBe(true);
    });

    it('test when user click next/prev button', () => {
        const cardWrapper = mount(
            <CarouselComponent item={carouselItem} onChangeActive={callback} />
        );

        cardWrapper
            .find('div.ui-molecules-carousel__action--next')
            .find(IconComponent)
            .first()
            .simulate('click');

        expect(
            cardWrapper.find('div.ui-molecules-carousel__content').props().style
        ).toHaveProperty('transform', 'translateX(-100%)');

        cardWrapper
            .find('div.ui-molecules-carousel__action--prev')
            .find(IconComponent)
            .first()
            .simulate('click');

        expect(
            cardWrapper.find('div.ui-molecules-carousel__content').props().style
        ).toHaveProperty('transform', 'translateX(0%)');

        cardWrapper
            .find('div.ui-molecules-carousel__action--prev')
            .find(IconComponent)
            .first()
            .simulate('click');

        expect(
            cardWrapper.find('div.ui-molecules-carousel__content').props().style
        ).toHaveProperty('transform', 'translateX(-100%)');

        cardWrapper
            .find('div.ui-molecules-carousel__action--prev')
            .find(IconComponent)
            .first()
            .simulate('click');

        expect(
            cardWrapper.find('div.ui-molecules-carousel__content').props().style
        ).toHaveProperty('transform', 'translateX(0%)');

        cardWrapper
            .find('div.ui-molecules-carousel__action--next')
            .find(IconComponent)
            .first()
            .simulate('click');

        expect(
            cardWrapper.find('div.ui-molecules-carousel__content').props().style
        ).toHaveProperty('transform', 'translateX(-100%)');

        cardWrapper
            .find('div.ui-molecules-carousel__action--next')
            .find(IconComponent)
            .first()
            .simulate('click');

        expect(
            cardWrapper.find('div.ui-molecules-carousel__content').props().style
        ).toHaveProperty('transform', 'translateX(0%)');
    });

    it('render video in carousel component', () => {
        const cardWrapper = mount(
            <CarouselComponent
                item={[
                    {
                        alt: '',
                        id: '',
                        src: '',
                        type: 'youtube'
                    }
                ]}
                onChangeActive={callback}
            />
        );

        expect(cardWrapper.find(MediaPlayerComponent).length).toBe(1);
    });

    it('render video in carousel component', () => {
        const cardWrapper = mount(
            <CarouselComponent
                item={[
                    {
                        alt: '',
                        id: '',
                        src: '',
                        type: 'youtube'
                    }
                ]}
                onChangeActive={callback}
            />
        );

        expect(cardWrapper.find(MediaPlayerComponent).length).toBe(1);
    });
});
