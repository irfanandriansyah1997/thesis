/* eslint-disable @typescript-eslint/ban-ts-ignore */
import React from 'react';
import { render, mount } from 'enzyme';

import ExpandTextComponent from '../expand-text.component';
import TextComponent from '../../../atomic/text/text.component';
import ResizeObserver from '../../../../shared/helper/__mocks__/resizer-observer';

const children = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
Voluptatem necessitatibus totam, nostrum fugiat, ullam eveniet
harum perspiciatis neque, fugit dolorum autem. Magnam laudantium
dolore soluta atque natus quos expedita? Similique? Lorem ipsum
dolor sit amet consectetur adipisicing elit. Voluptatem
necessitatibus totam, nostrum fugiat, ullam eveniet harum
perspiciatis neque, fugit dolorum autem. Magnam laudantium
dolore soluta atque natus quos expedita? Similique? Lorem ipsum
dolor sit amet consectetur adipisicing elit. Voluptatem
necessitatibus totam, nostrum fugiat, ullam eveniet harum
perspiciatis neque, fugit dolorum autem. Magnam laudantium
dolore soluta atque natus quos expedita? Similique? Lorem ipsum
dolor sit amet consectetur adipisicing elit. Voluptatem
necessitatibus totam, nostrum fugiat, ullam eveniet harum
perspiciatis neque, fugit dolorum autem. Magnam laudantium
dolore soluta atque natus quos expedita? Similique? Lorem ipsum
dolor sit amet consectetur adipisicing elit. Voluptatem
necessitatibus totam, nostrum fugiat, ullam eveniet harum
perspiciatis neque, fugit dolorum autem. Magnam laudantium
dolore soluta atque natus quos expedita? Similique? Lorem ipsum
dolor sit amet consectetur adipisicing elit. Voluptatem
necessitatibus totam, nostrum fugiat, ullam eveniet harum
perspiciatis neque, fugit dolorum autem. Magnam laudantium
dolore soluta atque natus quos expedita? Similique? Lorem ipsum
dolor sit amet consectetur adipisicing elit. Voluptatem
necessitatibus totam, nostrum fugiat, ullam eveniet harum
perspiciatis neque, fugit dolorum autem. Magnam laudantium
dolore soluta atque natus quos expedita? Similique?`;

beforeAll(() => {
    Object.defineProperty(HTMLElement.prototype, 'scrollHeight', {
        configurable: true,
        value: 200
    });
});

describe('Testing expand text component in atomic component', () => {
    beforeEach(() => {
        global.console = {
            ...global.console,
            error: jest.fn(),
            debug: jest.fn()
        };
        // @ts-ignore
        global.ResizeObserver = ResizeObserver;
    });

    it('Should render expand text component correctly', () => {
        const expandText = render(
            <ExpandTextComponent
                color="text"
                collapsedHeight={100}
                className="sample-classname"
                textToggleButton={{
                    onCLose: 'Buka',
                    onExpand: 'Tutup'
                }}
            >
                {children}
            </ExpandTextComponent>
        );

        expect(expandText.hasClass('sample-classname')).toBe(true);
        expect(expandText.hasClass('ui-molecules-toggle')).toBe(true);
    });

    it('Testing props onclick toggle', () => {
        const toggle = jest.fn((x) => x);
        const expandText = mount(
            <ExpandTextComponent
                color="text"
                collapsedHeight={10}
                className="sample-classname"
                textToggleButton={{
                    onCLose: 'Buka',
                    onExpand: 'Tutup'
                }}
                onToggleExpand={toggle}
            >
                {children}
            </ExpandTextComponent>
        );

        expect(expandText.find(TextComponent).length).toBe(1);
        expandText
            .find(TextComponent)
            .at(0)
            .simulate('click');

        expect(toggle.mock.results[0].value).toBe(true);

        expandText
            .find(TextComponent)
            .at(0)
            .simulate('click');

        expect(toggle.mock.results[1].value).toBe(false);
    });

    it('Testing props onclick toggle without set props onToggleExpan', () => {
        const expandText = mount(
            <ExpandTextComponent
                showArrow={false}
                color="text"
                collapsedHeight={10}
                className="sample-classname"
                textToggleButton={{
                    onCLose: 'Buka',
                    onExpand: 'Tutup'
                }}
            >
                {children}
            </ExpandTextComponent>
        );

        expect(expandText.find(TextComponent).length).toBe(1);
        expandText
            .find(TextComponent)
            .at(0)
            .simulate('click');

        expect(
            expandText.find('.ui-molecules-toggle__content').props().style
        ).toHaveProperty('maxHeight', '200px');

        expandText
            .find(TextComponent)
            .at(0)
            .simulate('click');
        expect(
            expandText.find('.ui-molecules-toggle__content').props().style
        ).toHaveProperty('maxHeight', '10px');
    });

    it('Testing props with scrollHeight is smaller then props collapsedHeight', () => {
        const expandText = mount(
            <ExpandTextComponent
                showArrow
                color="text"
                collapsedHeight={1000}
                className="sample-classname"
                textToggleButton={{
                    onCLose: 'Buka',
                    onExpand: 'Tutup'
                }}
            >
                {children}
            </ExpandTextComponent>
        );

        expect(expandText.find(TextComponent).length).toBe(0);
    });
});
