import React, { SFC, HTMLAttributes } from 'react';
import { ComponentDefaultInterface } from '../../../../shared/interface/component/component-default.interface';

/**
 * Tabs Props Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.04.21
 */
export type TabPanePropsInterface = HTMLAttributes<HTMLDivElement> & {
    tab: TabChildren;
    children: TabChildren;
};

export type TabChildren = React.ReactNode | string | Element;

export interface TabPropsInterface extends ComponentDefaultInterface {
    activeIndex?: number;
    onTabChange?: (index: number) => void;
}

export type TabDefaultExportInterface = SFC<TabPropsInterface> & {
    Item: SFC<TabPanePropsInterface>;
};
