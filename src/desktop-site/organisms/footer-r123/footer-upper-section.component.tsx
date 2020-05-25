import React, { FunctionComponent } from 'react';
import {
    FooterTabInterface,
    FooterUpperSectionPropsInterface
} from './interface/component.interface';
import TabsComponent from '../../../common/molecules/tabs/tabs.component';
import ToggleComponent from '../../../common/molecules/toggle/toggle.component';
import FooterUpperSectionItemComponent from './footer-upper-section-item.component';

/**
 * Footer Upper Section Component
 * @author nafhul <nafhul.arsyad@99.co>
 * @since 2020.05.18
 */
const FooterUpperSectionComponent: FunctionComponent<FooterUpperSectionPropsInterface> = ({
    tabs
}: FooterUpperSectionPropsInterface) => {
    const { Item } = TabsComponent;
    const minTogglerItems = 10;

    const tabPanes = tabs.map(({ name, menu }: FooterTabInterface) => {
        return (
            <Item key={name} tab={name}>
                {menu.length > minTogglerItems ? (
                    <ToggleComponent
                        className="ui-organism-footer-r123__upper-container__toggler"
                        selector="Tampilkan lebih lengkap"
                        collapsedHeight={117}
                    >
                        <FooterUpperSectionItemComponent
                            name={name}
                            menu={menu}
                        />
                    </ToggleComponent>
                ) : (
                    <FooterUpperSectionItemComponent name={name} menu={menu} />
                )}
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
