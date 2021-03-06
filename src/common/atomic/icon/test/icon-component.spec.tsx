import React from 'react';
import { render } from 'enzyme';

import IconComponent from '../icon.component';
import ColorDefaultConstant from '../../../../shared/constant/color.constant';

describe('Testing icon component in atomic component ', () => {
    it('Test render icon material component', () => {
        const icon = render(
            <IconComponent color="info100" size={16}>
                edit
            </IconComponent>
        );

        expect(icon.text()).toContain('edit');
        expect(icon.hasClass('uif')).toBe(false);
        expect(icon.hasClass('rui-icon')).toBe(false);
        expect(icon.hasClass('rui-icon-rss')).toBe(false);
        expect(icon.hasClass('material-icons')).toBe(true);
        expect(icon.hasClass('uif-prospek-harga')).toBe(false);
        expect(icon.hasClass('ui-atomic-icon--size-default')).toBe(false);
        expect(icon.prop('style')).toHaveProperty('font-size', '16px');
        expect(icon.prop('style')).toHaveProperty(
            'color',
            ColorDefaultConstant.info100
        );
    });

    it('Test render icon urbanindo icon', () => {
        const icon = render(
            <IconComponent color="danger" size="default">
                uif-prospek-harga
            </IconComponent>
        );

        expect(icon.text()).toContain('');
        expect(icon.hasClass('uif')).toBe(true);
        expect(icon.hasClass('rui-icon')).toBe(false);
        expect(icon.hasClass('rui-icon-rss')).toBe(false);
        expect(icon.hasClass('uif-prospek-harga')).toBe(true);
        expect(icon.hasClass('ui-atomic-icon--size-default')).toBe(true);
        expect(icon.hasClass('material-icons')).toBe(false);
        expect(icon.prop('style')).toHaveProperty('font-size', undefined);
        expect(icon.prop('style')).toHaveProperty(
            'color',
            ColorDefaultConstant.danger
        );
    });

    it('Test render icon rumah123 icon', () => {
        const icon = render(
            <IconComponent color="primary" size="default">
                rui-icon-rss
            </IconComponent>
        );

        expect(icon.text()).toContain('');
        expect(icon.hasClass('uif')).toBe(false);
        expect(icon.hasClass('rui-icon')).toBe(true);
        expect(icon.hasClass('rui-icon-rss')).toBe(true);
        expect(icon.hasClass('uif-prospek-harga')).toBe(false);
        expect(icon.hasClass('ui-atomic-icon--size-default')).toBe(true);
        expect(icon.hasClass('material-icons')).toBe(false);
        expect(icon.prop('style')).toHaveProperty('font-size', undefined);
        expect(icon.prop('style')).toHaveProperty(
            'color',
            ColorDefaultConstant.primary
        );
    });

    it('Test render icon specific margin', () => {
        const icon = render(
            <IconComponent
                color="info100"
                size={16}
                marginTop={5}
                marginRight={5}
                marginBottom={5}
                marginLeft={5}
            >
                edit
            </IconComponent>
        );

        expect(icon.text()).toContain('edit');
        expect(icon.hasClass('uif')).toBe(false);
        expect(icon.hasClass('rui-icon')).toBe(false);
        expect(icon.hasClass('rui-icon-rss')).toBe(false);
        expect(icon.hasClass('material-icons')).toBe(true);
        expect(icon.hasClass('uif-prospek-harga')).toBe(false);
        expect(icon.hasClass('ui-atomic-icon--size-default')).toBe(false);
        expect(icon.prop('style')).toHaveProperty('font-size', '16px');
        expect(icon.prop('style')).toHaveProperty(
            'color',
            ColorDefaultConstant.info100
        );

        expect(icon.prop('style')).toHaveProperty('margin-top', '5px');
        expect(icon.prop('style')).toHaveProperty('margin-right', '5px');
        expect(icon.prop('style')).toHaveProperty('margin-bottom', '5px');
        expect(icon.prop('style')).toHaveProperty('margin-left', '5px');
    });
});
