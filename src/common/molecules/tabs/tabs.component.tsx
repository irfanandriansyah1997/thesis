import PropTypes from 'prop-types';
import React, { useState, useEffect, ReactNode, Component } from 'react';

import TabsItemComponent from './tabs-item.component';
import TabsContentComponent from './tabs-content.component';
import TabsPaneInterface from './tabs-pane.component';
import StringHelper from '../../../shared/helper/string.helper';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';
import {
    TabChildrenType,
    TabPropsInterface,
    TabPanePropsInterface,
    TabDefaultExportInterface
} from './interface/component.interface';

/**
 * Tabs Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.04.21
 */
const TabsComponent: TabDefaultExportInterface = ({
    tabsID,
    children,
    activeIndex,
    onTabChange,
    ...res
}: TabPropsInterface) => {
    const [tabs, setTabs] = useState<TabChildrenType[]>([]);
    const [contents, setContents] = useState<ReactNode[]>([]);
    const [selectedId, setSelectedId] = useState<number>(0);

    useEffect(() => {
        const tabContent: ReactNode[] = [];
        const tabsTab: TabChildrenType[] = [];
        try {
            if (children) {
                React.Children.forEach(
                    children as [],
                    ({ props }: Component<TabPanePropsInterface>) => {
                        const validationProps = [
                            'tab',
                            'children'
                        ].filter((item) =>
                            ValidatorHelper.verifiedKeyIsExist(props, item)
                        ).length;

                        if (validationProps === 2) {
                            const { tab, ...resItemContent } = props;

                            tabContent.push(
                                <TabsContentComponent {...resItemContent} />
                            );
                            tabsTab.push(tab);
                        } else {
                            throw new Error(
                                '[Error] child component needs to have tab or child props'
                            );
                        }
                    }
                );
            }
        } catch (e) {
            console.error(e);
        }

        setTabs(tabsTab);
        setContents(tabContent);
        setSelectedId(activeIndex || 0);
    }, []);

    /**
     * Generate Tabs
     * @return {ReactNode}
     */
    const getTabs = (): ReactNode => {
        let tabsItem = tabs;

        if (tabsItem.length === 0 || children) {
            tabsItem = React.Children.map(
                children as [],
                (
                    child: React.Component<TabPanePropsInterface>
                ): React.ReactNode => child.props.tab
            );
        }

        return (
            <TabsPaneInterface
                tabsID={tabsID}
                selectedID={selectedId}
                onClick={(index): void => {
                    setSelectedId(index);

                    if (onTabChange) {
                        onTabChange(index);
                    }
                }}
                item={tabsItem}
            />
        );
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
        <div className={StringHelper.objToString(className)} {...res}>
            {getTabs()}
            <div className="ui-molecules-tab__content">
                {contents[selectedId]}
            </div>
        </div>
    );
};

TabsComponent.defaultProps = {
    activeIndex: 0,
    onTabChange: undefined
};

TabsComponent.propTypes = {
    onTabChange: PropTypes.func,
    activeIndex: PropTypes.number,
    tabsID: PropTypes.string.isRequired
};

TabsComponent.Item = TabsItemComponent;

export default TabsComponent;
