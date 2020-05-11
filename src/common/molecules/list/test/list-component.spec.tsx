import React from 'react';
import { render, mount } from 'enzyme';

import ListComponent from '../list.component';
import ColorDefaultConstant from '../../../../shared/constant/color.constant';
import { ColorType } from '../../../../shared/interface/common/color.interface';

describe('Testing list component in molecules component', () => {
    it('Should render list component horizontal correctly', () => {
        const list = render(
            <ListComponent>
                <ListComponent.Item>Hello World</ListComponent.Item>
            </ListComponent>
        );

        expect(list.hasClass('ui-molecules-list')).toBe(true);
        expect(list.hasClass('ui-molecules-list--divider-none')).toBe(true);
        expect(list.prop('style')).toHaveProperty('margin-left', '-7.5px');
    });

    it('Should render list component vertical correctly', () => {
        const list = render(
            <ListComponent styling="vertical" divider="line">
                <ListComponent.Item>Hello World</ListComponent.Item>
            </ListComponent>
        );

        expect(list.hasClass('ui-molecules-list')).toBe(true);
        expect(list.hasClass('ui-molecules-list--divider-line')).toBe(true);
        expect(list.prop('style')).toHaveProperty('margin-top', '-7.5px');
    });

    it('Check render list item not type ListItemComponent', () => {
        const list = mount(
            <ListComponent styling="vertical" divider="line">
                <ListComponent.Item>Hello World</ListComponent.Item>
                <ListComponent.Item>
                    Render using ListingComponent Item
                </ListComponent.Item>
                <div>Not Listing</div>
            </ListComponent>
        );

        expect(list.find('.ui-molecules-list__item').length).toBe(2);
    });

    it('Check style attribute in ListItemComponent Vertical', () => {
        const list = mount(
            <ListComponent styling="vertical" divider="line">
                <ListComponent.Item>Hello World</ListComponent.Item>
                <ListComponent.Item>
                    Render using ListingComponent Item
                </ListComponent.Item>
            </ListComponent>
        );

        expect(list.find('.ui-molecules-list__item').length).toBe(2);

        const style1 = list
            .find('.ui-molecules-list__item')
            .at(0)
            .prop('style');

        const style2 = list
            .find('.ui-molecules-list__item')
            .at(1)
            .prop('style');

        if (style1) {
            expect(style1.marginTop).toBe(7.5);
            expect(style1.paddingBottom).toBe(7.5);
            expect(style1.borderBottom).toBe(
                `1px solid ${ColorDefaultConstant.heading}`
            );
        }

        if (style2) {
            expect(style2.marginTop).toBe(7.5);
            expect(style2.paddingBottom).toBe(undefined);
            expect(style2.borderBottom).toBe(undefined);
        }
    });

    it('Check style attribute in ListItemComponent Horizontal', () => {
        const list = mount(
            <ListComponent
                styling="horizontal"
                divider="line"
                dividerColor={'not-found-color' as ColorType}
            >
                <ListComponent.Item>Hello World</ListComponent.Item>
                <ListComponent.Item>
                    Render using ListingComponent Item
                </ListComponent.Item>
            </ListComponent>
        );

        expect(list.find('.ui-molecules-list__item').length).toBe(2);

        const style1 = list
            .find('.ui-molecules-list__item')
            .at(0)
            .prop('style');

        const style2 = list
            .find('.ui-molecules-list__item')
            .at(1)
            .prop('style');

        if (style1) {
            expect(style1.marginLeft).toBe(7.5);
            expect(style1.paddingRight).toBe(7.5);
            expect(style1.borderRight).toBe(
                `1px solid ${ColorDefaultConstant.heading}`
            );
        }

        if (style2) {
            expect(style2.marginLeft).toBe(7.5);
            expect(style2.paddingRight).toBe(undefined);
            expect(style2.borderRight).toBe(undefined);
        }
    });
});
