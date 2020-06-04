import React from 'react';
import { render } from 'enzyme';

import ListingFeatureR123 from '../listing-feature-r123.component';

describe('Testing listing feature component in organinsm component', () => {
    it('Should render listing feature component correctly', () => {
        const listingFeature = render(
            <ListingFeatureR123
                title="Informasi properti"
                floor={{
                    label: 'Jumlah lantai:',
                    value: 2
                }}
                listingId={{
                    label: 'ID Iklan:',
                    value: 'hos6544729'
                }}
                furnishing={{
                    label: 'Dilengkapi Perabotan:',
                    value: 'Semi Furnished'
                }}
                postedDate={{
                    label: 'Tanggal Tayang:',
                    value: '12 May 2020'
                }}
                electricity={{
                    label: 'Daya Listrik:',
                    value: 4400
                }}
                certificate={{
                    label: 'Sertifikat:',
                    value: 'SHM - Sertifikat Hak Milik'
                }}
                propertyCondition={{
                    label: 'Kondisi Properti:',
                    value: 'Bagus Sekali'
                }}
                propertyType={{
                    label: 'Tipe Properti:',
                    value: 'Rumah'
                }}
                propertyFacility="AC, Swimming Pool, Carport, Garden"
                tabContentToggleSelector={{
                    onCLose: 'Menampilkan lebih banyak',
                    onExpand: 'Menampilkan lebih sedikit'
                }}
            />
        );

        expect(
            listingFeature.hasClass('ui-organisms-listing-feature-r123')
        ).toBe(true);
    });
});
