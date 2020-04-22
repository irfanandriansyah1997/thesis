import React, { useState, useEffect, ReactNode } from 'react';
import PropTypes from 'prop-types';

import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/componen-default.interface';
import StringHelper from '../../../shared/helper/string.helper';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import {
    TabDefaultExportInterface,
    TabChildren,
    TabPanePropsInterface,
    TabPropsInterface
} from './interface/component.interface';

/**
 * Tabs Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.04.21
 */
const TabsComponent: TabDefaultExportInterface = ({
    activeIndex,
    onTabChange,
    isDesktop,
    children,
    ...res
}: TabPropsInterface) => {
    const [tabs, setTabs] = useState<TabChildren[]>([]);
    const [contents, setContents] = useState<TabChildren[]>([]);
    const [selectedId, setSelectedId] = useState<number>(0);

    useEffect(() => {
        const tabContent: TabChildren[] = [];
        const tabsTab: TabChildren[] = [];

        if (children) {
            React.Children.forEach(
                children as [],
                (child: React.Component<TabPanePropsInterface>) => {
                    tabContent.push(child.props.children);
                    tabsTab.push(child.props.tab);
                }
            );
        }

        setContents(tabContent);
        setTabs(tabsTab);
        setSelectedId(activeIndex || 0);
    }, []);

    /**
     * event on click tab item
     */
    const selectTab = (index: number): void => setSelectedId(index);

    /**
     * Generate tab item based on parameter in this method
     */
    const generateTabItem = (
        tab: TabChildren,
        index: number
    ): React.ReactNode => {
        const name: ComponentClassnameDefaultInterface = {
            [`${res.className}`]: ValidatorHelper.verifiedIsNotEmpty(
                res.className
            ),
            'ui-molecules-tab__pane': true,
            'ui-molecules-tab__pane--desktop': ValidatorHelper.verifiedIsNotFalse(
                isDesktop
            ),
            'ui-molecules-tab__pane--active': selectedId === index
        };
        delete res.className;

        return (
            <div
                className={StringHelper.objToString(name)}
                key={index}
                role="presentation"
                onClick={(): void => {
                    selectTab(index);
                    if (onTabChange) {
                        onTabChange(index);
                    }
                }}
            >
                {tab}
            </div>
        );
    };

    /**
     * Generate Tabs
     */
    const getTabs = (): ReactNode => {
        if (children) {
            return React.Children.map(
                children as [],
                (
                    child: React.Component<TabPanePropsInterface>
                ): React.ReactNode => child.props.tab
            ).map(generateTabItem);
        }

        return tabs.map(generateTabItem);
    };

    /**
     * Get tab className
     */
    const className: ComponentClassnameDefaultInterface = {
        [`${res.className}`]: ValidatorHelper.verifiedIsNotEmpty(res.className),
        'ui-molecules-tab': true,
        'ui-molecules-tab-wrapper': true
    };
    delete res.className;

    return (
        <div className={StringHelper.objToString(className)}>
            <div className="ui-molecules-tab__bar flex">{getTabs()}</div>
            <div className="ui-molecules-tab__content">
                {contents[selectedId]}
            </div>
        </div>
    );
};

/**
 * @description Item for each tab
 */
const Item: React.ComponentType<TabPanePropsInterface> = () => null;

TabsComponent.defaultProps = {
    activeIndex: 0,
    onTabChange: undefined,
    isDesktop: true
};

TabsComponent.propTypes = {
    activeIndex: PropTypes.number,
    onTabChange: PropTypes.func,
    isDesktop: PropTypes.bool
};

TabsComponent.Item = Item;

export default TabsComponent;
