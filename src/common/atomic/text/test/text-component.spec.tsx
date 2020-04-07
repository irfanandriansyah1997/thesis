import React from 'react';
import { render } from 'enzyme';

import TextComponent from '../text.component';
import ColorDefaultConstant from '../../../../shared/constant/color.constant';

describe('Testing text component in atomic component', () => {
    it('Should render text component correctly', () => {
        const text = render(
            <TextComponent tag="p">This is text.</TextComponent>
        );

        expect(text.text()).toContain('This is text.');
        expect(text.hasClass('ui-atomic-text')).toBe(true);
        expect(text.hasClass('ui-atomic-text--styling-default')).toBe(true);
        expect(text.hasClass('ui-atomic-text--typeface-primary')).toBe(true);
        expect(text.prop('style')).toHaveProperty('font-weight', '400');
        expect(text.prop('style')).toHaveProperty('text-align', 'left');
    });

    it('Should render heading text correctly', () => {
        const text = render(
            <TextComponent tag="h1" styling="heading-1">
                This is text.
            </TextComponent>
        );

        expect(text.hasClass('ui-atomic-text')).toBe(true);
        expect(text.hasClass('ui-atomic-text--styling-default')).toBe(false);
        expect(text.hasClass('ui-atomic-text--styling-heading-1')).toBe(true);
    });

    it('Should render bold text correctly', () => {
        const text = render(
            <TextComponent tag="p" fontWeight={700}>
                This is text.
            </TextComponent>
        );

        expect(text.prop('style')).toHaveProperty('font-weight', '700');
    });

    it('Should render text component with color correctly', () => {
        const text = render(
            <TextComponent tag="p" color="primary">
                This is text.
            </TextComponent>
        );

        expect(text.prop('style')).toHaveProperty(
            'color',
            ColorDefaultConstant.primary
        );
    });

    it('Should render text component with center alignment correctly', () => {
        const text = render(
            <TextComponent tag="p" align="center">
                This is text.
            </TextComponent>
        );

        expect(text.prop('style')).toHaveProperty('text-align', 'center');
    });
});
