/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { render } from 'enzyme';

import ListingSummaryR123 from '../listing-summary-r123.component';
import { ListingSummaryR123PropsInterface } from '../interface/component.interface';

const baseProps: ListingSummaryR123PropsInterface = {
    flaggingBadge: 'Dijual',
    priceTag: 'Rp. 4.550.000.000',
    address: 'Pasar Minggu, Jakarta Selatan',
    tier: 'featured',
    attribute: {
        buildingSize: 'Luas Bangunan : 270 m²',
        landSize: 'Luas Tanah : 305 m²',
        bedroom: '6',
        bathroom: '4',
        carport: '1'
    },
    saveAction: {
        label: 'Simpan',
        onCLick: (): void => {}
    },
    shareAction: {
        label: 'Bagikan',
        onCLick: (): void => {}
    },
    previewAction: {
        label: 'Sudah dilihat',
        onCLick: (): void => {}
    },
    mortgage: {
        installment: 'Rp. 26.110.000 / bulan',
        label: 'Simulasi KPR',
        onClickMortgage: (): void => {}
    }
};

describe('Testing listing summary component in organinsm component', () => {
    it('Should render listing summary component correctly', () => {
        const listingSummary = render(<ListingSummaryR123 {...baseProps} />);

        expect(
            listingSummary.hasClass('ui-organisms-listing-summary-r123')
        ).toBe(true);
    });
});
