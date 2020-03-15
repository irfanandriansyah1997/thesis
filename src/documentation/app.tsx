/* eslint-disable no-new */
import DocumentationBuilder from '../shared/builder/documentation.builder';
import CommonModuleDocumentation from './modules/common/common.documentation';
import MobileModuleDocumentation from './modules/mobile/mobile.documentation';
import DesktopModuleDocumentation from './modules/desktop/desktop.documentation';

import '../style/app.scss';

new DocumentationBuilder({
    common: {
        menu: [
            ...CommonModuleDocumentation.component.atomic,
            ...CommonModuleDocumentation.component.organism,
            ...CommonModuleDocumentation.component.molecules
        ],
        name: 'common',
        path: '/common'
    },
    desktop: {
        menu: [
            ...DesktopModuleDocumentation.component.atomic,
            ...DesktopModuleDocumentation.component.organism,
            ...DesktopModuleDocumentation.component.molecules
        ],
        name: 'desktop',
        path: '/desktop'
    },
    mobile: {
        menu: [
            ...MobileModuleDocumentation.component.atomic,
            ...MobileModuleDocumentation.component.organism,
            ...MobileModuleDocumentation.component.molecules
        ],
        name: 'mobile',
        path: '/mobile'
    }
})
    .setModuleComponent('common', CommonModuleDocumentation)
    .setModuleComponent('mobile', MobileModuleDocumentation)
    .setModuleComponent('desktop', DesktopModuleDocumentation)
    .buildRouter()
    .generate();
