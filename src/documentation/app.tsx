/* eslint-disable no-new */
import CommonModuleDocumentation from './modules/common.documentation';
import DocumentationBuilder from '../shared/builder/documentation.builder';

import '../style/app.scss';

new DocumentationBuilder({
    common: {
        menu: [],
        name: 'common',
        path: '/common'
    },
    desktop: {
        menu: [],
        name: 'desktop',
        path: '/desktop'
    },
    mobile: {
        menu: [],
        name: 'mobile',
        path: '/mobile'
    }
})
    .setModuleComponent('common', CommonModuleDocumentation)
    .buildRouter()
    .generate();
