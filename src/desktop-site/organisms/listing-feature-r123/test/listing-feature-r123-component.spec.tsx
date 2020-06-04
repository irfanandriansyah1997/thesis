import React from 'react';
import { render, mount } from 'enzyme';

import ListingFeatureR123 from '../listing-feature-r123.component';
import TabsComponent from '../../../../common/molecules/tabs/tabs.component';
import { ListingFeatureR123PropsInterface } from '../interface/component.interface';

const baseProps: ListingFeatureR123PropsInterface = {
    title: 'Informasi properti',
    floor: {
        label: 'Jumlah lantai:',
        value: 2
    },
    listingId: {
        label: 'ID Iklan:',
        value: 'hos6544729'
    },
    furnishing: {
        label: 'Dilengkapi Perabotan:',
        value: 'Semi Furnished'
    },
    postedDate: {
        label: 'Tanggal Tayang:',
        value: '12 May 2020'
    },
    electricity: {
        label: 'Daya Listrik:',
        value: 4400
    },
    certificate: {
        label: 'Sertifikat:',
        value: 'SHM - Sertifikat Hak Milik'
    },
    propertyCondition: {
        label: 'Kondisi Properti:',
        value: 'Bagus Sekali'
    },
    propertyType: {
        label: 'Tipe Properti:',
        value: 'Rumah'
    },
    propertyFacility: 'AC, Swimming Pool, Carport, Garden',
    tabContentToggleSelector: {
        onCLose: 'Menampilkan lebih banyak',
        onExpand: 'Menampilkan lebih sedikit'
    },
    tabItemLabel: {
        detailLabel: 'Detil Property',
        facilityLabel: 'Fasilitas'
    }
};

describe('Testing listing feature component in organinsm component', () => {
    it('Should render listing feature component correctly', () => {
        const listingFeature = render(<ListingFeatureR123 {...baseProps} />);

        expect(
            listingFeature.hasClass('ui-organisms-listing-feature-r123')
        ).toBe(true);
        expect(listingFeature.hasClass('box-shadow-r123')).toBe(true);
    });

    it('Should render tab component correctly', () => {
        const wrapper = mount(<ListingFeatureR123 {...baseProps} />);

        expect(wrapper.find(TabsComponent).length).toBe(1);
    });
});
