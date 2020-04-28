import React from 'react';
import { render } from 'enzyme';

import CardR123Basic from '../card-r123-basic.component';

describe('Testing <CardR123Basic> in organisms component ', () => {
    it('Should render r123 basic card component correctly', () => {
        const card = render(
            <CardR123Basic
                media={{
                    images:
                        'https://images.unsplash.com/photo-1562886812-41775a01195d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                    alt: 'Images 1'
                }}
                content={{
                    title: 'Title of the property',
                    address:
                        'Address of the listed property (city or district)',
                    priceTag: 'Price of the property',
                    landSize: 'Land size',
                    buildingSize: 'Building size',
                    propertyType: 'Type of the property (house, land, etc)',
                    attribute: [{ icon: '', value: '' }]
                }}
                action={{}}
            />
        );

        expect(card.hasClass('ui-organisms-card')).toBe(true);
    });
});
