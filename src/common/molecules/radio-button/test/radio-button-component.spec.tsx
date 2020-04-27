import React from 'react';
import { render, mount } from 'enzyme';

import RadioButtonComponent from '../radio-button.component';
import TextComponent from '../../../atomic/text/text.component';

describe('Testing radio component in molecules component', () => {
    it('Should render checkbox component correctly', () => {
        const radioButton = render(
            <RadioButtonComponent
                value={undefined}
                name="testing"
                onChange={jest.fn()}
                className="sample-classname"
            >
                <RadioButtonComponent.Item id="sample-id-1" value={1} />
                <RadioButtonComponent.Item id="sample-id-2" value={2} />
            </RadioButtonComponent>
        );

        expect(radioButton.hasClass('sample-classname')).toBe(true);
        expect(radioButton.hasClass('ui-molecules-radio')).toBe(true);
    });

    it('Testing when user change value', () => {
        const callback = jest.fn((x) => x);
        const radio = mount(
            <RadioButtonComponent
                value={1}
                name="testing"
                onChange={callback}
                className="sample-classname"
            >
                <RadioButtonComponent.Item
                    id="sample-id-1"
                    value={1}
                    label="label"
                />
                <RadioButtonComponent.Item id="sample-id-2" value={2} />
            </RadioButtonComponent>
        );

        radio
            .find(RadioButtonComponent.Item)
            .at(0)
            .find('input')
            .simulate('change', { target: { checked: true } });
        expect(callback).toHaveBeenCalledTimes(1);
        expect(callback.mock.results[0].value).toStrictEqual(1);

        radio
            .find(RadioButtonComponent.Item)
            .at(1)
            .find('input')
            .simulate('change', { target: { checked: true } });
        expect(callback).toHaveBeenCalledTimes(2);
        expect(callback.mock.results[1].value).toStrictEqual(2);

        expect(
            radio
                .find(RadioButtonComponent.Item)
                .at(0)
                .find(TextComponent).length
        ).toBe(1);

        expect(
            radio
                .find(RadioButtonComponent.Item)
                .at(1)
                .find(TextComponent).length
        ).toBe(0);
    });

    it('Testing props styling & type', () => {
        const callback = jest.fn((x) => x);
        const radio1 = render(
            <RadioButtonComponent
                value={1}
                name="testing"
                styling="horizontal"
                type="checkbox"
                onChange={callback}
                className="sample-classname"
            >
                <RadioButtonComponent.Item id="sample-id-1" value={1} />
                <RadioButtonComponent.Item id="sample-id-2" value={2} />
            </RadioButtonComponent>
        );

        const item1 = radio1.find('.ui-molecules-radio__item').first();

        const radio2 = render(
            <RadioButtonComponent
                value={1}
                name="testing"
                styling="vertical"
                type="radio"
                onChange={callback}
                className="sample-classname"
            >
                <RadioButtonComponent.Item id="sample-id-1" value={1} />
                <RadioButtonComponent.Item id="sample-id-2" value={2} />
            </RadioButtonComponent>
        );

        const item2 = radio2.find('.ui-molecules-radio__item').first();

        expect(radio1.prop('style')).toHaveProperty('margin', '-5px');
        expect(item1.hasClass('ui-multiple-option-checkbox')).toBe(true);
        expect(item1.prop('style')).toHaveProperty('margin', '5px');

        expect(radio2.prop('style')).toHaveProperty('margin', '-5px');
        expect(item2.hasClass('ui-multiple-option-radio')).toBe(true);
        expect(item2.prop('style')).toHaveProperty('margin', '5px');
    });
});
