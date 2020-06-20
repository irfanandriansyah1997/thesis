/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { render, shallow } from 'enzyme';

import StickyBarR123 from '../sticky-bar-r123.component';
import { StickyBarR123PropsInterface } from '../interface/component.interface';

const baseProps: StickyBarR123PropsInterface = {
    title: 'Title',
    priceTag: 'Price',
    address: 'Address',
    attribute: {
        buildingSize: 'Luas Bangunan : 270 m²',
        landSize: 'Luas Tanah : 305 m²',
        bedroom: '1',
        bathroom: '1',
        carport: '1'
    },
    saveAction: {
        label: 'Simpan',
        onClick: (): void => {}
    }
};

describe('Testing sticky bar component in organinsm component', () => {
    it('Should render sticky bar component correctly', () => {
        const stickyBar = render(
            <StickyBarR123 {...baseProps} tier="featured" />
        );

        expect(stickyBar.hasClass('ui-organisms-sticky-bar-r123')).toBe(true);
    });

    it('Should render the tier badge correctly', () => {
        const wrapper = shallow(
            <StickyBarR123 {...baseProps} tier="premier" />
        );

        expect(
            wrapper
                .find('.ui-organisms-sticky-bar-r123__tier-badge')
                .prop('children')
        ).toEqual('Premier');
    });
});
