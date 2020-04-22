import React, { SFC, HTMLAttributes } from 'react';
import { ComponentDefaultInterface } from '../../../../shared/interface/component/componen-default.interface';

/**
 * Tabs Props Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.04.21
 */
export type TabPanePropsInterface = HTMLAttributes<HTMLDivElement> & {
    tab: TabChildren;
    children: TabChildren;
    isChange?: boolean;
};

export type TabChildren = React.ReactNode | string | Element;

export interface TabPropsInterface extends ComponentDefaultInterface {
    activeIndex?: number;
    onTabChange?: (index: number) => void;
    isDesktop?: boolean;
    renderDynamic?: boolean;
}

export type TabDefaultExportInterface = SFC<TabPropsInterface> & {
    Item: SFC<TabPanePropsInterface>;
};
