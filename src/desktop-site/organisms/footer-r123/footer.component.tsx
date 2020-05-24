import React, { FunctionComponent } from 'react';
import {
    FooterPropsInterface,
    FooterTab,
    FooterLink,
    MediaLink
} from './interface/component.interface';
import TabsComponent from '../../../common/molecules/tabs/tabs.component';
import LinkComponent from '../../../common/atomic/link/link.component';
import './style/style.scss';
import StringHelper from '../../../shared/helper/string.helper';
import ListComponent from '../../../common/molecules/list/list.component';
import TextComponent from '../../../common/atomic/text/text.component';
import ImageComponent from '../../../common/atomic/image/image.component';

/**
 * Footer  Section Component
 * @author nafhul <nafhul.arsyad@99.co>
 * @since 2020.05.18
 */
const FooterSectionComponent: FunctionComponent<FooterPropsInterface> = ({
    tabs,
    socmedMedias,
    sitemap,
    publishMedias,
    siteRegions,
    partners,
    copyrightText
}: FooterPropsInterface) => {
    const { Item } = TabsComponent;

    const tabPanes = tabs.map(({ name, menu }: FooterTab) => {
        return (
            <Item key={name} tab={name}>
                <div className="tab-container">
                    {menu.map(({ text, to }: FooterLink) => {
                        return (
                            <div key={text} className="active-content">
                                <LinkComponent href={to}>{text}</LinkComponent>
                            </div>
                        );
                    })}
                </div>
            </Item>
        );
    });

    const socmedLinks = socmedMedias.map(({ imageUrl, to }: MediaLink) => {
        return (
            <ListComponent.Item key={to}>
                <LinkComponent href={to}>
                    <ImageComponent alt="img-socmed" src={imageUrl} />
                </LinkComponent>
            </ListComponent.Item>
        );
    });

    const localLinks = sitemap.map((site) => {
        return (
            <ListComponent.Item key={site.to}>
                <LinkComponent href={site.to}>{site.text}</LinkComponent>
            </ListComponent.Item>
        );
    });

    const appStores = publishMedias.map(({ imageUrl, to }: MediaLink) => {
        return (
            <ListComponent.Item key={to}>
                <LinkComponent href={to}>
                    <ImageComponent
                        alt="img-store"
                        width={130}
                        src={imageUrl}
                    />
                </LinkComponent>
            </ListComponent.Item>
        );
    });

    const regionalSites = siteRegions.map((region) => {
        return (
            <ListComponent.Item key={region.to}>
                <LinkComponent href={region.to}>{region.text}</LinkComponent>
            </ListComponent.Item>
        );
    });

    const sitePartners = partners.map((partner) => {
        return (
            <ListComponent.Item key={partner.to}>
                <LinkComponent href={partner.to}>{partner.text}</LinkComponent>
            </ListComponent.Item>
        );
    });

    return (
        <div
            className={StringHelper.objToString({
                'ui-organism-footer-r123': true,
                flex: true,
                'flex-column': true,
                'flex-align-start': true
            })}
        >
            <div className="ui-organism-footer-r123__upper-container">
                <div className="ui-organism-footer-r123__upper-container__footer-section">
                    <TabsComponent tabsID="footer">{tabPanes}</TabsComponent>
                </div>
            </div>
            <div className="ui-organism-footer-r123__bottom-container">
                <div className="ui-organism-footer-r123__bottom-container__footer-section">
                    <div className="ui-organism-footer-r123__bottom-container__block-container">
                        <ListComponent space={20} divider="none">
                            {socmedLinks}
                        </ListComponent>
                        <ListComponent space={20} divider="none">
                            {localLinks}
                        </ListComponent>
                    </div>
                    <div className="ui-organism-footer-r123__bottom-container__block-container">
                        <ListComponent space={20} divider="none">
                            {appStores}
                        </ListComponent>
                    </div>
                    <div className="ui-organism-footer-r123__bottom-container__block-container">
                        <h3 className="ui-organism-footer-r123__bottom-container__site-title">
                            Situs Internasional:
                        </h3>
                        <ListComponent
                            space={40}
                            divider="line"
                            dividerColor="white"
                        >
                            {regionalSites}
                        </ListComponent>
                    </div>
                    <div className="ui-organism-footer-r123__bottom-container__block-container">
                        <h3 className="ui-organism-footer-r123__bottom-container__site-title">
                            Situs Partner:
                        </h3>
                        <ListComponent
                            space={40}
                            divider="line"
                            dividerColor="white"
                        >
                            {sitePartners}
                        </ListComponent>
                    </div>
                    <div
                        className="ui-organism-footer-r123__bottom-container__block-container"
                        style={{ marginTop: '48px' }}
                    >
                        <TextComponent tag="p">{copyrightText}</TextComponent>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterSectionComponent;
