import React, { FunctionComponent } from 'react';
import {
    FooterLinkInterface,
    FooterTabInterface
} from './interface/component.interface';
import LinkComponent from '../../../common/atomic/link/link.component';

/**
 * Footer Upper Section Tab Item Component
 * @author nafhul <nafhul.arsyad@99.co>
 * @since 2020.05.18
 */
const FooterUpperSectionTabItemComponent: FunctionComponent<FooterTabInterface> = ({
    menu
}: FooterTabInterface) => {
    return (
        <div>
            {menu.map(({ text, to }: FooterLinkInterface) => {
                return (
                    <div
                        key={text}
                        className="ui-organism-footer-r123__upper-container__active-content"
                    >
                        <LinkComponent href={to}>{text}</LinkComponent>
                    </div>
                );
            })}
        </div>
    );
};

export default FooterUpperSectionTabItemComponent;
