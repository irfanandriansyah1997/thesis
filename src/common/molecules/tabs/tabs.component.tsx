import React, { SFC, useState, useEffect, ReactNode } from 'react';
import PropTypes from 'prop-types';

import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/componen-default.interface';
import StringHelper from '../../../shared/helper/string.helper';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import {
    TabPropsInterface,
    TabChildren,
    TabPanePropsInterface
} from './interface/component.interface';

/**
 * Tabs Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.04.21
 */
const TabsComponent: SFC<TabPropsInterface> = ({
    activeIndex,
    onTabChange,
    isDesktop,
    children,
    className
}: TabPropsInterface) => {
    const [tabs, setTabs] = useState<TabChildren[]>([]);
    const [contents, setContents] = useState<TabChildren[]>([]);
    const [selectedId, setSelectedId] = useState<number>(0);

    useEffect(() => {
        const tabContents: TabChildren[] = [];
        const tabsTab: TabChildren[] = [];

        if (children) {
            React.Children.forEach(
                children as [],
                (child: React.Component<TabPanePropsInterface>) => {
                    contents.push(child.props.children);
                    tabs.push(child.props.tab);
                }
            );
        }

        setContents(tabContents);
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
        const tabChange =
            onTabChange ||
            // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
            (() => {
                // test
            });
        const name: ComponentClassnameDefaultInterface = {
            [`${className}`]: true,
            'ui-molecules-tab__pane--active': selectedId === index,
            'ui-molecules-tab__pane--desktop': ValidatorHelper.verifiedIsNotFalse(
                isDesktop
            )
        };

        return (
            <div
                className={StringHelper.objToString(name)}
                key={index}
                role="presentation"
                onClick={(): void => {
                    selectTab(index);
                    tabChange(index);
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

    return (
        <div id="ui-molecules-tab-wrapper" className={className}>
            <div className="ui-molecules-tab">{getTabs()}</div>
            <>{contents[selectedId]}</>
        </div>
    );
};

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

export default TabsComponent;
