import React from 'react';

import SectionDefaultRangeSliderComponent from './section/section-default.stories';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';

import '../style/style.scss';

((): void => {
    new StorybookDocumentationBuilder('Range Slider Component', 'molecules')
        .setSection('common')
        .setDescriptionComponent(
            'Expand text is used to create a toggle section and you can show and hide section based on height these children props'
        )
        .registerDocumentation(
            <>
                <SectionDefaultRangeSliderComponent />
            </>
        )
        .execute();
})();
