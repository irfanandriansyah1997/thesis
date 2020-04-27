import React from 'react';
import { render, shallow } from 'enzyme';

import CardComponent from '../card.component';

describe('Testing <CardComponent> in atomic component ', () => {
    it('Should render card component correctly', () => {
        const card = render(<CardComponent>Card content</CardComponent>);

        const cardWrapper = shallow(
            <CardComponent>Card content</CardComponent>
        );

        expect(card.hasClass('ui-atomic-card')).toBe(true);
        expect(card.prop('style')).toHaveProperty('width', 'auto');
        expect(cardWrapper.children()).toHaveLength(1);
    });

    it('Should render card component with correct box-shadow', () => {
        const card = render(
            <CardComponent boxShadow="r123">Card content</CardComponent>
        );

        expect(card.hasClass('ui-atomic-card')).toBe(true);
        expect(card.hasClass('box-shadow-r123')).toBe(true);
    });

    it('Should render card component with the correct size', () => {
        const card = render(
            <CardComponent size={750}>Card content</CardComponent>
        );

        expect(card.prop('style')).toHaveProperty('width', '750px');
    });
});
