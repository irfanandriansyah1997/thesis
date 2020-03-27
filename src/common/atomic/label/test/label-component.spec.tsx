import React from 'react';
import { render, shallow } from 'enzyme';

import LabelComponent from '../label.component';
import IconComponent from '../../icon/icon.component';

describe('Testing label component', () => {
    it('Test render label component', () => {
        const label = render(
            <LabelComponent rounded={false} labelText="Label test" />
        );

        expect(label.text()).toContain('Label test');
        expect(label.hasClass('ui-atomic-button')).toBe(false);
        expect(label.hasClass('ui-atomic-label--styling-rounded')).toBe(false);
    });

    it('Test render label component with rounded and icon', () => {
        const label = shallow(
            <LabelComponent rounded labelText="Label test" icon="close" />
        );

        expect(
            label
                .find(IconComponent)
                .at(0)
                .props().children
        ).toBe('close');
        expect(label.hasClass('ui-atomic-label--styling-rounded')).toBe(true);
    });
});
