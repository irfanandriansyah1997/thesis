import React from 'react';
import { render } from 'enzyme';

import MapComponent from '../map.component';

describe('Testing map component in molecules component', () => {
    it('Should render map component correctly', () => {
        const map = render(
            <MapComponent
                id="Map"
                location={{ lat: -6.300641, lng: 106.814095 }}
                width="750px"
                height="400px"
                mapKey=""
            />
        );

        expect(map.hasClass('ui-molecules-map')).toBe(true);
    });
});
