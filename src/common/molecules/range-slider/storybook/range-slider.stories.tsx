import React from 'react';

import SectionDefaultRangeSliderComponent from './section/section-default.stories';
import SectionWithLabelRangeSliderComponent from './section/section-with-label.stories';
import DividerDocsComponent from '../../../../.storybook/component/atomic/divider/divider.component';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';

import '../style/style.scss';

const RangeSliderDocumentation = require('./markdown/range-slider.documentation.md');

((): void => {
    new StorybookDocumentationBuilder('Range Slider Component', 'molecules')
        .setSection('common')
        .setMarkdownFile(RangeSliderDocumentation)
        .setDescriptionComponent(
            'Range slider is a two-handle slider control that allows the user to select one or a range of values (e.g. prices, dates, times, etc) by dragging handles.'
        )
        .registerDocumentation(
            <>
                <SectionDefaultRangeSliderComponent />
                <DividerDocsComponent />
                <SectionWithLabelRangeSliderComponent />
            </>
        )
        .execute();
})();
