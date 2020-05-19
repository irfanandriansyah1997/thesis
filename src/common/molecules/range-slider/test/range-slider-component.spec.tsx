import React from 'react';
import { render, mount } from 'enzyme';

import RangeSliderComponent from '../range-slider.component';
import TextComponent from '../../../atomic/text/text.component';

describe('Testing Range Slider Component', () => {
    it('Should render range slider properly', () => {
        const callback = jest.fn();
        const range = render(
            <RangeSliderComponent
                className="sample"
                max={100}
                min={10}
                onChange={callback}
                value={{
                    end: 80,
                    start: 20
                }}
            />
        );

        expect(range.hasClass('ui-molecules-range-slider')).toBe(true);
        expect(range.hasClass('sample')).toBe(true);
    });

    it('Simulate onchange value minimum input', () => {
        const callback = jest.fn();
        const callbackOnChange = jest.fn();

        const range = mount(
            <RangeSliderComponent
                className="sample"
                max={100}
                min={10}
                onChange={callback}
                value={{
                    end: 80,
                    start: 20
                }}
            />
        );

        let input = range.find('input');
        expect(input.length).toBe(2);
        expect(range.find('.ui-molecules-range-slider__label').length).toBe(0);

        /**
         * Check Attribute Input Element
         */
        expect(input.at(0).props().max).toBe(100);
        expect(input.at(0).props().min).toBe(10);
        expect(input.at(0).props().type).toBe('range');

        /**
         * Check Value Input Element
         */
        expect(input.at(0).props().value).toBe(20);
        expect(input.at(1).props().value).toBe(80);

        /**
         * Onchange Value Minimum Input
         */
        input.at(0).simulate('change', {
            target: { value: 30 },
            preventDefault: callbackOnChange
        });

        expect(callback).toHaveBeenCalledTimes(1);
        expect(callbackOnChange).toHaveBeenCalledTimes(0);

        input = range.find('input');
        expect(input.at(0).props().value).toBe(30);

        const rangeElement = range
            .find('.ui-molecules-range-slider__range')
            .getDOMNode<HTMLDivElement>();
        const startThumb = range
            .find('.ui-molecules-range-slider__start-thumb')
            .getDOMNode<HTMLDivElement>();
        const endThumb = range
            .find('.ui-molecules-range-slider__end-thumb')
            .getDOMNode<HTMLDivElement>();

        expect(rangeElement.style.left).toBe('22.222222222222225%');
        expect(rangeElement.style.width).toBe('55.55555555555554%');

        expect(startThumb.style.left).toBe('22.222222222222225%');
        expect(startThumb.style.transform).toBe(
            'translate(-22.222222222222225%, -50%)'
        );

        expect(endThumb.style.right).toBe('0px');
        expect(endThumb.style.left).toBe('77.77777777777777%');
        expect(endThumb.style.transform).toBe(
            'translate(-77.77777777777777%, -50%)'
        );
    });

    it('Simulate onchange value maximum input', () => {
        const callback = jest.fn((min, max) => ({ min, max }));
        const callbackOnChange = jest.fn();

        const range = mount(
            <RangeSliderComponent
                className="sample"
                max={100}
                min={10}
                onChange={callback}
                value={{
                    end: 80,
                    start: 20
                }}
            />
        );

        let input = range.find('input');
        expect(input.length).toBe(2);

        /**
         * Check Attribute Input Element
         */
        expect(input.at(0).props().max).toBe(100);
        expect(input.at(0).props().min).toBe(10);
        expect(input.at(0).props().type).toBe('range');

        /**
         * Check Value Input Element
         */
        expect(input.at(0).props().value).toBe(20);
        expect(input.at(1).props().value).toBe(80);

        /**
         * Onchange Value Maximum Input
         */
        input.at(1).simulate('change', {
            target: { value: 50 },
            preventDefault: callbackOnChange
        });

        expect(callback).toHaveBeenCalledTimes(1);
        expect(callbackOnChange).toHaveBeenCalledTimes(0);

        input = range.find('input');
        expect(input.at(1).props().value).toBe(50);

        expect(callback.mock.results[0].value).toStrictEqual({
            min: 20,
            max: 50
        });

        const rangeElement = range
            .find('.ui-molecules-range-slider__range')
            .getDOMNode<HTMLDivElement>();
        const startThumb = range
            .find('.ui-molecules-range-slider__start-thumb')
            .getDOMNode<HTMLDivElement>();
        const endThumb = range
            .find('.ui-molecules-range-slider__end-thumb')
            .getDOMNode<HTMLDivElement>();

        expect(rangeElement.style.left).toBe('11.11111111111111%');
        expect(rangeElement.style.width).toBe('33.33333333333333%');

        expect(startThumb.style.left).toBe('11.11111111111111%');
        expect(startThumb.style.transform).toBe(
            'translate(-11.11111111111111%, -50%)'
        );

        expect(endThumb.style.right).toBe('0px');
        expect(endThumb.style.left).toBe('44.44444444444444%');
        expect(endThumb.style.transform).toBe(
            'translate(-44.44444444444444%, -50%)'
        );
    });

    it('Simulate onchange with wrong parameter', () => {
        const callback = jest.fn((min, max) => ({ min, max }));
        const callbackOnChange = jest.fn();

        const range = mount(
            <RangeSliderComponent
                className="sample"
                max={100}
                min={10}
                onChange={callback}
                value={{
                    end: 50,
                    start: 40
                }}
            />
        );

        const input = range.find('input');

        /**
         * Onchange Value Maximum Input
         */
        input.at(1).simulate('change', {
            target: { value: 10 },
            preventDefault: callbackOnChange
        });

        expect(callback).toHaveBeenCalledTimes(0);
        expect(callbackOnChange).toHaveBeenCalledTimes(0);
    });

    it('Create range component with label', () => {
        const callback = jest.fn((min, max) => ({ min, max }));

        const range = mount(
            <RangeSliderComponent
                className="sample"
                max={100}
                min={10}
                label={{
                    maxLabel: 'maksimum',
                    minLabel: 'minimum'
                }}
                onChange={callback}
                value={{
                    end: 80,
                    start: 20
                }}
            />
        );

        const label = range.find('.ui-molecules-range-slider__label');
        expect(label.length).toBe(1);

        const textLabel = range.find(TextComponent);
        expect(textLabel.length).toBe(2);

        expect(textLabel.at(0).text()).toBe('minimum');
        expect(textLabel.at(1).text()).toBe('maksimum');
    });
});
