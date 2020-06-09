import React from 'react';
import { render } from 'enzyme';

import CardR123HeadingComponent from '../card-heading-r123.component';

const baseProps = {
    agencyName: 'Agency',
    publishingDate: '1 jan, 2020'
};

describe('Testing Card Heading in desktop molecules component ', () => {
    it('Should render card heading r123 component correctly', () => {
        const cardHeading = render(<CardR123HeadingComponent {...baseProps} />);

        expect(cardHeading.hasClass('ui-organisms-card-r123__heading')).toBe(
            true
        );
    });
});
