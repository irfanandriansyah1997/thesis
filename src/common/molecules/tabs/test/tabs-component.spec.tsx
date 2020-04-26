import React from 'react';
import { render, mount } from 'enzyme';

import TabsComponent from '../tabs.component';
import TextComponent from '../../../atomic/text/text.component';

describe('Testing tabs component in molecules component', () => {
    it('Should render link component correctly', () => {
        const tabs = render(
            <TabsComponent tabsID="tabs-id">
                <TabsComponent.Item tab="Tab1">
                    <TextComponent
                        tag="p"
                        style={{
                            lineHeight: 1.5
                        }}
                    >
                        Content of tab One
                    </TextComponent>
                </TabsComponent.Item>
                <TabsComponent.Item tab="Tab2">
                    <TextComponent
                        tag="p"
                        style={{
                            marginTop: 16,
                            lineHeight: 1.5
                        }}
                    >
                        Content of tab Two
                    </TextComponent>
                </TabsComponent.Item>
            </TabsComponent>
        );

        expect(tabs.hasClass('ui-molecules-tab')).toBe(true);
        expect(tabs.hasClass('ui-molecules-tab-wrapper')).toBe(true);
        expect(tabs.children().hasClass('ui-molecules-tab__bar')).toBe(true);
        expect(tabs.children().hasClass('ui-molecules-tab__content')).toBe(
            true
        );
    });

    it('test when user click tab', () => {
        const callback = jest.fn((x) => x);
        const mockFunc = jest.fn();
        mockFunc.mockReturnValueOnce([{ type: 'div' }]);
        const tabs = mount(
            <TabsComponent tabsID="tabs-id" onTabChange={callback}>
                <TabsComponent.Item tab="Tab1">
                    <TextComponent
                        tag="p"
                        style={{
                            lineHeight: 1.5
                        }}
                    >
                        Content of tab One
                    </TextComponent>
                </TabsComponent.Item>
            </TabsComponent>
        );

        tabs.find('div.ui-molecules-tab__pane')
            .at(0)
            .simulate('click');

        expect(callback).toHaveBeenCalledTimes(1);
    });
});
