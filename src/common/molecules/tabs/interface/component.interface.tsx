import React, { SFC, HTMLAttributes } from 'react';

/**
 * Tabs Pane Props Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.04.21
 */
export type TabPanePropsInterface = HTMLAttributes<HTMLDivElement> & {
    tab: TabChildrenType;
    children: TabChildrenType;
};

/**
 * Tabs Content Props Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.04.21
 */
export type TabContentPropsInterface = Omit<TabPanePropsInterface, 'tab'>;

/**
 * Tabs Content Props Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.04.21
 */
export type TabSelectorPropsInterface = {
    tabsID: string;
    selectedID: number;
    item: TabChildrenType[];
    onClick: (index: number) => void;
};

/**
 * Tabs Children Type
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.04.21
 */
export type TabChildrenType = React.ReactNode | string | Element;

/**
 * Tabs Props Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.04.21
 */
export type TabPropsInterface = Omit<
    HTMLAttributes<HTMLElement>,
    | 'dangerouslySetInnerHTML'
    | 'onClick'
    | 'onKeyDown'
    | 'onKeyDown'
    | 'onKeyPress'
    | 'onChange'
    | 'style'
> & {
    tabsID: string; // id tabs component
    activeIndex?: number;
    onTabChange?: (index: number) => void;
};

/**
 * Tabs Default Props Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.04.21
 */
export type TabDefaultExportInterface = SFC<TabPropsInterface> & {
    Item: SFC<TabPanePropsInterface>;
};
