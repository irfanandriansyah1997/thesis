/* eslint-disable import/no-extraneous-dependencies */

import { addParameters, configure } from '@storybook/react';

import '../style/app.scss';

const req = require.context('../desktop-site', true, /.stories.tsx$/);

/**
 * Load All Stories
 * @return {void}
 */
function loadStories() {
    req.keys().forEach((filename) => {
        req(filename);
    });
}

// Option defaults:
addParameters({
    options: {
        isFullscreen: false,
        showNav: true,
        showPanel: false,
        panelPosition: 'bottom',
        sidebarAnimations: true
    }
});

configure(loadStories, module);