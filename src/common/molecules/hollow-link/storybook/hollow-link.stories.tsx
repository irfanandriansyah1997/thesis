import React from 'react';

import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';

import '../style/style.scss';
import HollowLinkComponent from '../hollow-link.component';

((): void => {
    new StorybookDocumentationBuilder('Hollow Link', 'molecules')
        .setSection('common')
        .setDescriptionComponent(
            'R123 Featured Card can be used to display featured or premier listing card on search result page.'
        )
        .registerDocumentation(
            <>
                <HollowLinkComponent icon="rui-icon-calculator" href="a">
                    Simulasi KPR
                </HollowLinkComponent>
            </>
        )
        .execute();
})();
