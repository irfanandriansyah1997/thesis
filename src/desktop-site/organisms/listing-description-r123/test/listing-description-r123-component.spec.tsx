import React from 'react';
import { render } from 'enzyme';

import ListingDescriptionR123 from '../listing-description-r123.component';

describe('Testing listing description component in organinsm component', () => {
    it('Should render listing description component correctly', () => {
        const listingDescription = render(
            <ListingDescriptionR123
                map={{
                    id: 'map',
                    location: { lat: -6.300641, lng: 106.814095 },
                    width: '750px',
                    height: '320px',
                    mapKey: ''
                }}
                content={{
                    title: 'Listing title',
                    description: 'Description content'
                }}
                contentToggleSelector={{
                    onCLose: 'Menampilkan lebih banyak',
                    onExpand: 'Menampilkan lebih sedikit'
                }}
            />
        );

        expect(
            listingDescription.hasClass('ui-organisms-listing-description-r123')
        ).toBe(true);
    });
});
