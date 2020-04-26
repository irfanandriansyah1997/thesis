import { ReactNode } from 'react';
import { ComponentDefaultInterface } from '../../../../shared/interface/component/component-default.interface';

/**
 * Accordion Props Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.04.16
 */
export interface AccordionPropsInterface extends ComponentDefaultInterface {
    selector: ReactNode;
    show?: boolean;
    onToggleSelector?: (toggle: boolean) => void;
    collapsedHeight: string;
    gradient: boolean;
    showArrow: boolean;
}

/**
 * Accordion State Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.04.16
 */
export interface AccordionStateInterface {
    show: boolean;
    height: string;
}
