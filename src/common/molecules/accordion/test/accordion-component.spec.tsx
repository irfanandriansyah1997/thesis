import React from 'react';
import { render, mount } from 'enzyme';

import { AccordionPropsInterface } from '../interface/component.interface';
import AccordionComponent from '../accordion.component';
import TextComponent from '../../../atomic/text/text.component';

describe('Testing accordion component in molecules component', () => {
    const props: AccordionPropsInterface = {
        children: (
            <div>
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
            </div>
        ),
        selector: <div>Selector</div>,
        show: false,
        onToggleSelector: jest.fn(),
        collapsedHeight: '50px',
        gradient: false,
        showArrow: false
    };

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
        expect(
            accordion.find('div.ui-molecules-accordion__content').prop('style')
        ).toHaveProperty('max-height', '0px');
    });

    it('on click toggle accordion', () => {
        const accordion = mount(<AccordionComponent {...props} />);

        expect(props.onToggleSelector).toHaveBeenCalledTimes(0);

        /**
         * Expand Accordion
         */
        accordion
            .find('div.ui-molecules-accordion__selector')
            .children()
            .simulate('click');

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        expect((accordion.state() as any).show).toBe(true);
        expect(props.onToggleSelector).toHaveBeenCalledTimes(1);

        /**
         * Collapse Accordion
         */
        accordion
            .find('div.ui-molecules-accordion__selector')
            .children()
            .simulate('click');

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        expect((accordion.state() as any).show).toBe(false);
        expect(props.onToggleSelector).toHaveBeenCalledTimes(2);
    });

    it('Should render accordion component with collapsed height', () => {
        const accordion = render(
            <AccordionComponent
                selector="Toggle selector"
                collapsedHeight="50px"
            >
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

        expect(
            accordion.find('div.ui-molecules-accordion__content').prop('style')
        ).toHaveProperty('max-height', '50px');
    });

    it('Should render accordion component with gradient effect & arrow icon', () => {
        const accordion = render(
            <AccordionComponent selector="Toggle selector" gradient showArrow>
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

        expect(
            accordion
                .children()
                .hasClass('ui-molecules-accordion__selector-gradient')
        ).toBe(true);
        expect(
            accordion
                .find('span')
                .hasClass('ui-molecules-accordion__selector-icon')
        ).toBe(true);
    });
});
