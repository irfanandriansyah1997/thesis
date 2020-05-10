import React from 'react';
import { render, mount } from 'enzyme';

import CardR123Basic from '../card-r123-basic.component';
import LinkComponent from '../../../../common/atomic/link/link.component';

describe('Testing <CardR123Basic> in organisms component ', () => {
    const callback = jest.fn();
    const image = [
        {
            id: 1,
            src:
                'https://images.unsplash.com/photo-1562886812-41775a01195d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            alt: 'Images 1'
        }
    ];
    const baseProps = {
        cardMedia: { media: image },
        content: {
            title: 'Title of the property',
            address: 'Address of the listed property (city or district)',
            priceTag: 'Price of the property',
            landSize: 'Land size',
            buildingSize: 'Building size',
            propertyType: 'Type of the property (house, land, etc)',
            attribute: [
                {
                    icon: '',
                    value: '',
                    alt: ''
                }
            ]
        },
        action: {
            onClickViewDetail: callback,
            onClickSave: callback,
            onClickContactAgent: callback
        },
        link: '99.co'
    };

    it('Should render r123 basic card component correctly', () => {
        const card = render(<CardR123Basic {...baseProps} />);

        expect(card.hasClass('ui-organisms-card')).toBe(true);
    });

    it('Test <CardR123Basic> with onClick event', () => {
        const card = mount(<CardR123Basic {...baseProps}>Save</CardR123Basic>);

        card.find(LinkComponent)
            .at(0)
            .simulate('click');

        expect(callback).toBeCalledTimes(1);
    });
});
