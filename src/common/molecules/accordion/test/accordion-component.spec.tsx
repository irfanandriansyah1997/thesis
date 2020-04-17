import React from 'react';
import { render } from 'enzyme';

import AccordionComponent from '../accordion.component';
import TextComponent from '../../../atomic/text/text.component';

describe('Testing accordion component in molecules component', () => {
    it('Should render accordion component correctly', () => {
        const accordion = render(
            <AccordionComponent selector="Toggle selector">
                <TextComponent
                    tag="p"
                    style={{
                        lineHeight: 1.5,
                        padding: 16,
                        border: '1px solid #f0f0f0'
                    }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </TextComponent>
            </AccordionComponent>
        );

        expect(accordion.hasClass('ui-molecules-accordion')).toBe(true);
        expect(
            accordion.children().hasClass('ui-molecules-accordion__content')
        ).toBe(true);
        expect(
            accordion.children().hasClass('ui-molecules-accordion__selector')
        ).toBe(true);
    });
});
