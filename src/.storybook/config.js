/* eslint-disable import/no-extraneous-dependencies */

import { addParameters, configure } from '@storybook/react';

import '../style/app.scss';

const req = require.context('../', true, /.stories.tsx$/);

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
    },
    viewport: {
        viewports: {
            BBZ30: {
                name: 'BlackBerry Z30',
                styles: {
                    width: '360px',
                    height: '640px'
                }
            },
            BBPlaybook: {
                name: 'BlackBerry Playbook',
                styles: {
                    width: '600px',
                    height: '1024px'
                }
            },
            LGOptimus: {
                name: 'LG Optimus L70',
                styles: {
                    width: '384px',
                    height: '640px'
                }
            },
            Pixel2: {
                name: 'Google Pixel 2',
                styles: {
                    width: '411px',
                    height: '731px'
                }
            },
            IPhone5: {
                name: 'iPhone 5',
                styles: {
                    width: '320px',
                    height: '568px'
                }
            },
            IPhone6: {
                name: 'iPhone 6',
                styles: {
                    width: '375px',
                    height: '667px'
                }
            },
            IPhone6Plus: {
                name: 'iPhone 6+',
                styles: {
                    width: '414px',
                    height: '736px'
                }
            },
            IPhoneX: {
                name: 'iPhone X',
                styles: {
                    width: '375px',
                    height: '812px'
                }
            },
            IPad: {
                name: 'iPad',
                styles: {
                    width: '768px',
                    height: '1024px'
                }
            },
            IPadPro: {
                name: 'iPad Pro',
                styles: {
                    width: '1024px',
                    height: '1366px'
                }
            }
        }
    }
});

configure(loadStories, module);
