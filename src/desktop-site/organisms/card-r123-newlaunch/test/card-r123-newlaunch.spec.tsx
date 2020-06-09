import React from 'react';
import { render, mount } from 'enzyme';

import CardR123Newlaunch from '../card-r123.newlaunch.component';
import LinkComponent from '../../../../common/atomic/link/link.component';
import HollowLinkComponent from '../../../../common/molecules/hollow-link/hollow-link.component';

import { CardR123NewLaunchPropsInterface } from '../interface/component.interface';

const baseProps: CardR123NewLaunchPropsInterface = {
    id: 'r12399co',
    link: '99.co',
    unit: 'Tipe unit tersedia : 3',
    mediaCount: 2,
    videoCount: 1,
    priceTag: 'Mulai Rp. 796 Jt - Rp. 1,59 M',
    propertyType: 'Apartemen',
    completionDate: 'Tanggal penyelesaian : Feb 2023',
    address: 'Lebak Bulus, Jakarta Selatan',
    developerLogo:
        'https://d3p0bla3numw14.cloudfront.net/developer/logo/developer-2.-logo-developer-1553849796.png',
    title: 'The Premier MTH',
    agencyName: 'PT. Adhi Commuter Properti',
    publishingDate: 'Tayang sejak 1 Jan, 2020',
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
    action: {
        onClickSave: (): void => undefined,
        onClickViewDetail: (): void => undefined,
        onClickContact: (): void => undefined
    }
};

describe('Testing card r123 new launch in organism component', () => {
    it('Should render card component correctly', () => {
        const card = render(<CardR123Newlaunch {...baseProps} />);

        expect(card.hasClass('ui-organisms-card-r123-newlaunch')).toBe(true);
        expect(card.hasClass('box-shadow-r123')).toBe(true);
    });

    it('Simulate button click', () => {
        const clickSave = jest.fn();
        const clickContact = jest.fn();

        const card = mount(
            <CardR123Newlaunch
                {...baseProps}
                action={{
                    ...baseProps.action,
                    onClickSave: clickSave,
                    onClickContact: clickContact
                }}
            />
        );

        /**
         * Click Link Component
         */
        expect(card.find(HollowLinkComponent).length).toBe(1);

        expect(clickSave).toHaveBeenCalledTimes(0);

        const saveLink = card.find(HollowLinkComponent).at(0);
        saveLink.simulate('click');

        expect(clickSave).toHaveBeenCalledTimes(1);

        expect(card.find(LinkComponent).length).toBe(8);
        expect(clickContact).toHaveBeenCalledTimes(0);

        const agentLink = card.find(LinkComponent).at(7);
        agentLink.simulate('click');

        expect(clickContact).toHaveBeenCalledTimes(1);
    });
});
