import React from 'react';
import { mount } from 'enzyme';

import MediaPlayerComponent from '../media-player.component';

describe('Testing Media Player Component', () => {
    it('Testing render media player', () => {
        const component = mount(
            <MediaPlayerComponent
                youtubeId="ZLKZKmdZEjM"
                width="100px"
                height="100px"
            />
        );

        expect(component.isEmptyRender()).toBeTruthy();
    });
});
