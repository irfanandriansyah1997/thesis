import React, { FunctionComponent } from 'react';
import {
    FooterLinkInterface,
    FooterTabInterface,
    FooterUpperSectionPropsInterface
} from './interface/component.interface';
import TabsComponent from '../../../common/molecules/tabs/tabs.component';
import LinkComponent from '../../../common/atomic/link/link.component';

/**
 * Footer Upper Section Component
 * @author nafhul <nafhul.arsyad@99.co>
 * @since 2020.05.18
 */
const FooterUpperSectionComponent: FunctionComponent<FooterUpperSectionPropsInterface> = ({
    tabs
}: FooterUpperSectionPropsInterface) => {
    const { Item } = TabsComponent;

    const tabPanes = tabs.map(({ name, menu }: FooterTabInterface) => {
        return (
            <Item key={name} tab={name}>
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
            </Item>
        );
    });

    return (
        <div className="ui-organism-footer-r123__upper-container">
            <div className="ui-organism-footer-r123__upper-container__footer-section">
                <TabsComponent tabsID="footer-upper-section">
                    {tabPanes}
                </TabsComponent>
            </div>
        </div>
    );
};

export default FooterUpperSectionComponent;
