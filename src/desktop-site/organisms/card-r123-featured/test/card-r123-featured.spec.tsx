import React from 'react';
import { render, mount } from 'enzyme';

import CardR123Featured from '../card-r123-featured.component';
import { CardR123FeaturedPropsInterface } from '../interface/component.interface';
import BadgesComponent from '../../../../common/atomic/badges/badges.component';
import HollowLinkComponent from '../../../../common/molecules/hollow-link/hollow-link.component';
import LinkComponent from '../../../../common/atomic/link/link.component';

const MOCK_PROPS: CardR123FeaturedPropsInterface = {
    id: 'ahsjkahdu2ry2r2',
    link: '99.co',
    mediaCount: 2,
    tier: 'premier',
    priceTag: 'Rp 2,1 M',
    propertyType: 'Rumah',
    agencyName: 'Ray White',
    address: 'Lebak Bulus, Jakarta Selatan',
    publishingDate: 'Tayang 5 hari yang lalu',
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
        saveAction: {
            label: 'Simpan',
            onCLick: (): void => undefined
        },
        contactAction: {
            label: 'Kontak Agen',
            onCLick: (): void => undefined
        },
        viewDetailAction: {
            label: 'Lihat Detail',
            onCLick: (): void => undefined
        },
        mortgageSimulationAction: {
            label: 'Simulasi KPR',
            onCLick: (): void => undefined
        }
    }
};

describe('Testing card r123 featured', () => {
    it('Should render card component correctly', () => {
        const card = render(<CardR123Featured {...MOCK_PROPS} />);

        expect(card.hasClass('ui-organisms-card-r123-featured')).toBe(true);
        expect(card.hasClass('box-shadow-r123')).toBe(true);
    });

    it('Should mount card premium component correctly', () => {
        const card = mount(<CardR123Featured {...MOCK_PROPS} />);

        expect(card.find(BadgesComponent).length).toBe(2);

        const { children, color, textColor } = card
            .find(BadgesComponent)
            .at(0)
            .props();

        expect(children).toBe('Premier');
        expect(color).toBe('premiumR123');
        expect(textColor).toBe('headingDarkerR123');
    });

    it('Should mount card feature component correctly', () => {
        const card = mount(
            <CardR123Featured {...MOCK_PROPS} tier="featured" />
        );

        expect(card.find(BadgesComponent).length).toBe(2);

        const { children, color, textColor } = card
            .find(BadgesComponent)
            .at(0)
            .props();

        expect(children).toBe('Featured');
        expect(color).toBe('featuredR123');
        expect(textColor).toBe('white');
    });

    it('Simulate button click', () => {
        const mortgageClick = jest.fn();
        const favouriteClick = jest.fn();
        const agentClick = jest.fn();

        const card = mount(
            <CardR123Featured
                {...MOCK_PROPS}
                action={{
                    ...MOCK_PROPS.action,
                    mortgageSimulationAction: {
                        label: '',
                        onCLick: mortgageClick
                    },
                    saveAction: {
                        label: '',
                        onCLick: favouriteClick
                    },
                    contactAction: {
                        label: '',
                        onCLick: agentClick
                    }
                }}
            />
        );

        /**
         * Click Hollow Link
         */
        expect(card.find(HollowLinkComponent).length).toBe(2);

        expect(mortgageClick).toHaveBeenCalledTimes(0);
        expect(favouriteClick).toHaveBeenCalledTimes(0);

        const mortgage = card.find(HollowLinkComponent).at(0);
        mortgage.simulate('click');

        expect(mortgageClick).toHaveBeenCalledTimes(1);

        const save = card.find(HollowLinkComponent).at(1);
        save.simulate('click');

        expect(favouriteClick).toHaveBeenCalledTimes(1);

        /**
         * Click Link Component
         */
        expect(card.find(LinkComponent).length).toBe(13);
        expect(agentClick).toHaveBeenCalledTimes(0);

        const agent = card.find(LinkComponent).at(12);
        agent.simulate('click');

        expect(agentClick).toHaveBeenCalledTimes(1);
    });
});
