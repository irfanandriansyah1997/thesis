import React from 'react';
import { render, mount } from 'enzyme';

import CheckboxComponent from '../checkbox.component';
import TextComponent from '../../../atomic/text/text.component';

describe('Testing checbok component in molecules component', () => {
    it('Should render checkbox component correctly', () => {
        const checkbox = render(
            <CheckboxComponent
                value={[]}
                name="testing"
                onChange={jest.fn()}
                className="sample-classname"
            >
                <CheckboxComponent.Item id="sample-id-1" value={1} />
                <CheckboxComponent.Item id="sample-id-2" value={2} />
            </CheckboxComponent>
        );

        expect(checkbox.hasClass('sample-classname')).toBe(true);
        expect(checkbox.hasClass('ui-molecules-checkbox')).toBe(true);
    });

    it('Testing when user change value', () => {
        const callback = jest.fn((x) => x);
        const checkbox = mount(
            <CheckboxComponent
                value={[1]}
                name="testing"
                onChange={callback}
                className="sample-classname"
            >
                <CheckboxComponent.Item
                    id="sample-id-1"
                    value={1}
                    label="label"
                />
                <CheckboxComponent.Item id="sample-id-2" value={2} />
            </CheckboxComponent>
        );

        checkbox
            .find(CheckboxComponent.Item)
            .at(0)
            .find('input')
            .simulate('change', { target: { checked: true } });
        expect(callback).toHaveBeenCalledTimes(1);
        expect(callback.mock.results[0].value).toStrictEqual([]);

        checkbox
            .find(CheckboxComponent.Item)
            .at(1)
            .find('input')
            .simulate('change', { target: { checked: true } });
        expect(callback).toHaveBeenCalledTimes(2);
        expect(callback.mock.results[1].value).toStrictEqual([1, 2]);

        expect(
            checkbox
                .find(CheckboxComponent.Item)
                .at(0)
                .find(TextComponent).length
        ).toBe(1);

        expect(
            checkbox
                .find(CheckboxComponent.Item)
                .at(1)
                .find(TextComponent).length
        ).toBe(0);
    });

    it('Testing props styling & type', () => {
        const callback = jest.fn((x) => x);
        const checkbox1 = render(
            <CheckboxComponent
                value={[1]}
                name="testing"
                styling="horizontal"
                type="checkbox"
                onChange={callback}
                className="sample-classname"
            >
                <CheckboxComponent.Item id="sample-id-1" value={1} />
                <CheckboxComponent.Item id="sample-id-2" value={2} />
            </CheckboxComponent>
        );

        const item1 = checkbox1.find('.ui-molecules-checkbox__item').first();

        const checkbox2 = render(
            <CheckboxComponent
                value={[1]}
                name="testing"
                styling="vertical"
                type="radio"
                onChange={callback}
                className="sample-classname"
            >
                <CheckboxComponent.Item id="sample-id-1" value={1} />
                <CheckboxComponent.Item id="sample-id-2" value={2} />
            </CheckboxComponent>
        );

        const item2 = checkbox2.find('.ui-molecules-checkbox__item').first();

        expect(checkbox1.prop('style')).toHaveProperty('margin', '-5px');
        expect(item1.hasClass('ui-multiple-option-checkbox')).toBe(true);
        expect(item1.prop('style')).toHaveProperty('margin', '5px');

        expect(checkbox2.prop('style')).toHaveProperty('margin', '-5px');
        expect(item2.hasClass('ui-multiple-option-radio')).toBe(true);
        expect(item2.prop('style')).toHaveProperty('margin', '5px');
    });
});
