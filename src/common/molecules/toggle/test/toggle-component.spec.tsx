/* eslint-disable @typescript-eslint/ban-ts-ignore */
import React from 'react';
import { render, mount } from 'enzyme';

import ToggleComponent from '../toggle.component';
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

    it('Should render toggle component correctly', () => {
        const expandText = render(
            <ToggleComponent
                color="text"
                collapsedHeight={100}
                className="sample-classname"
                selector={<button>selector</button>}
            >
                {children}
            </ToggleComponent>
        );

        expect(expandText.hasClass('sample-classname')).toBe(true);
        expect(expandText.hasClass('ui-molecules-toggle')).toBe(true);
    });

    it('Testing props onclick & onComponentResize', () => {
        const toggle = jest.fn((x) => x);
        const onResize = jest.fn((x) => x);
        const expandText = mount(
            <ToggleComponent
                color="text"
                className="sample-classname"
                selector={<button>selector</button>}
                onToggleExpand={toggle}
                onComponentResize={onResize}
            >
                {children}
            </ToggleComponent>
        );

        expect(
            (expandText
                .find('.ui-molecules-toggle__selector')
                .at(0)
                .props().className as string).includes(
                'ui-molecules-toggle__selector--bottom'
            )
        ).toBe(true);

        expect(expandText.find('button').length).toBe(1);
        expandText
            .find('button')
            .at(0)
            .simulate('click');

        expect(toggle.mock.results[0].value).toBe(true);
        expect(onResize.mock.results[0].value).toBe(200);
        expect(
            (expandText
                .find('.ui-molecules-toggle')
                .at(0)
                .props().className as string).includes(
                'ui-molecules-toggle--expand'
            )
        ).toBe(true);

        expandText
            .find('button')
            .at(0)
            .simulate('click');

        expect(toggle.mock.results[1].value).toBe(false);
        expect(onResize.mock.results[1].value).toBe(200);
        expect(
            (expandText
                .find('.ui-molecules-toggle')
                .at(0)
                .props().className as string).includes(
                'ui-molecules-toggle--expand'
            )
        ).toBe(false);
    });
});
