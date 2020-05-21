import React from 'react';
import { render } from 'enzyme';

import CardR123Basic from '../card-r123-basic.component';
import { CardR123BasicPropsInterface } from '../interface/component.interface';

const MOCK_PROPS: CardR123BasicPropsInterface = {
    id: 'ahsjkahdu2ry2r2',
    link: '99.co',
    priceTag: 'Rp 2,1 M',
    propertyType: 'Rumah',
    address: 'Lebak Bulus, Jakarta Selatan',
    installment: 'Cicilan : Rp. 7,46 Jt/bulan',
    title:
        'Lebak Bulus Rumah Murah Siap Huni, Lebak Bulus, Jakarta Selatan, DKI Jakarta, Indonesia',
    media: [
        {
            alt: '',
            id: 'image-1',
            src:
                'https://img.rea-asia.com/rumah123/750x420-crop/house/ho64/6491275/original/hos6491275-rumah-di-jual-di-bintaro-tangerang-15881493488971.jpg'
        },
        {
            alt: '',
            id: 'image-2',
            src: 'https://i.postimg.cc/sXCf3YFN/image-04.jpg'
        }
    ],
    attribute: {
        carport: '1',
        bedroom: '2',
        bathroom: '1',
        landSize: 'Luas Tanah : 60m²',
        buildingSize: 'Luas Bangunan : 60m²'
    },
    action: {
        onClickSave: (): void => undefined,
        onClickMortgageSimulation: (): void => undefined
    }
};

describe('Testing <CardR123Basic> in organisms component ', () => {
    it('Should render r123 basic card component correctly', () => {
        const card = render(<CardR123Basic {...MOCK_PROPS} />);

        expect(card.hasClass('ui-organisms-card-r123-basic')).toBe(true);
    });

    // it('Test <CardR123Basic> with onClick event', () => {
    //     const card = mount(<CardR123Basic {...MOCK_PROPS}>Save</CardR123Basic>);

    //     card.find(LinkComponent)
    //         .at(0)
    //         .simulate('click');

    //     expect(callback).toBeCalledTimes(1);
    // });
});
