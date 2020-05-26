import PropTypes from 'prop-types';
import React, { FunctionComponent, Validator } from 'react';

import GridComponent from '../../../common/atomic/grid/grid.component';
import TabsComponent from '../../../common/molecules/tabs/tabs.component';
import FooterUpperSectionItemComponent from './footer-r123-upper-section-item.component';
import ExpandTextComponent from '../../../common/molecules/expand-text/expand-text.component';
import {
    FooterTabInterface,
    FooterUpperSectionPropsInterface
} from './interface/component.interface';

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

    const tabPanes = tabs.map(({ name, menu }) => {
        return (
            <Item key={name} tab={name}>
                {menu.length > minTogglerItems ? (
                    <ExpandTextComponent
                        color="white"
                        fontWeight={500}
                        collapsedHeight={160}
                        textToggleButton={{
                            onCLose: 'Tampilkan Lebih Lengkap',
                            onExpand: 'Tampilkan lebih sedikit'
                        }}
                    >
                        <FooterUpperSectionItemComponent menu={menu} />
                    </ExpandTextComponent>
                ) : (
                    <FooterUpperSectionItemComponent menu={menu} />
                )}
            </Item>
        );
    });

    return (
        <section className="ui-organism-footer-r123__upper-section">
            <GridComponent.Container>
                <GridComponent.Row>
                    <GridComponent.Column id="footer-upper" defaultSize={12}>
                        <TabsComponent tabsID="footer-upper-section">
                            {tabPanes}
                        </TabsComponent>
                    </GridComponent.Column>
                </GridComponent.Row>
            </GridComponent.Container>
        </section>
    );
};

FooterUpperSectionComponent.propTypes = {
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            menu: PropTypes.arrayOf(
                PropTypes.shape({
                    text: PropTypes.string,
                    to: PropTypes.string
                })
            )
        })
    ).isRequired as Validator<FooterTabInterface[]>
};

FooterUpperSectionComponent.defaultProps = {
    tabs: []
};

export default FooterUpperSectionComponent;
