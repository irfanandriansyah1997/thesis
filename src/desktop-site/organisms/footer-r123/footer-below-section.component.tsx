import React, { FunctionComponent } from 'react';
import {
    FooterBelowSectionPropsInterface,
    FooterMediaLinkInterface,
    FooterLinkInterface
} from './interface/component.interface';
import ListComponent from '../../../common/molecules/list/list.component';
import LinkComponent from '../../../common/atomic/link/link.component';
import ImageComponent from '../../../common/atomic/image/image.component';
import TextComponent from '../../../common/atomic/text/text.component';

/**
 * Footer Below Section Component
 * @author nafhul <nafhul.arsyad@99.co>
 * @since 2020.05.18
 */
const FooterBelowSectionComponent: FunctionComponent<FooterBelowSectionPropsInterface> = ({
    socmedMedias,
    sitemap,
    publishMedias,
    siteRegions,
    partners,
    copyrightText
}: FooterBelowSectionPropsInterface) => {
    const socmedLinks = socmedMedias.map(
        ({ imageUrl, to }: FooterMediaLinkInterface) => {
            return (
                <ListComponent.Item key={to}>
                    <LinkComponent href={to}>
                        <ImageComponent alt="img-socmed" src={imageUrl} />
                    </LinkComponent>
                </ListComponent.Item>
            );
        }
    );

    const localLinks = sitemap.map(({ to, text }: FooterLinkInterface) => {
        return (
            <ListComponent.Item key={text}>
                <LinkComponent href={to}>{text}</LinkComponent>
            </ListComponent.Item>
        );
    });

    const appStores = publishMedias.map(
        ({ imageUrl, to }: FooterMediaLinkInterface) => {
            return (
                <ListComponent.Item key={imageUrl}>
                    <LinkComponent href={to}>
                        <ImageComponent
                            alt="img-store"
                            width={130}
                            src={imageUrl}
                        />
                    </LinkComponent>
                </ListComponent.Item>
            );
        }
    );

    const regionalSites = siteRegions.map(
        ({ to, text }: FooterLinkInterface) => {
            return (
                <ListComponent.Item key={text}>
                    <LinkComponent href={to}>{text}</LinkComponent>
                </ListComponent.Item>
            );
        }
    );

    const sitePartners = partners.map(({ to, text }: FooterLinkInterface) => {
        return (
            <ListComponent.Item key={text}>
                <LinkComponent href={to}>{text}</LinkComponent>
            </ListComponent.Item>
        );
    });
    return (
        <div className="ui-organism-footer-r123__bottom-container">
            <div className="ui-organism-footer-r123__bottom-container__footer-section">
                <div className="ui-organism-footer-r123__bottom-container__block-container">
                    <div className="ui-organism-footer-r123__bottom-container__wrapper">
                        <ListComponent space={20} divider="none">
                            {socmedLinks}
                        </ListComponent>
                        <ListComponent space={20} divider="none">
                            {localLinks}
                        </ListComponent>
                    </div>
                </div>
                <div className="ui-organism-footer-r123__bottom-container__block-container">
                    <ListComponent space={20} divider="none">
                        {appStores}
                    </ListComponent>
                </div>
                <TextComponent tag="p" fontWeight={700}>
                    Situs Internasional:
                </TextComponent>
                <ListComponent
                    className="ui-organism-footer-r123__bottom-container__block-container"
                    space={40}
                    divider="line"
                    dividerColor="white"
                >
                    {regionalSites}
                </ListComponent>
                <TextComponent tag="p" fontWeight={700}>
                    Situs Partner:
                </TextComponent>
                <ListComponent
                    className="ui-organism-footer-r123__bottom-container__block-container"
                    space={40}
                    divider="line"
                    dividerColor="white"
                >
                    {sitePartners}
                </ListComponent>
                <TextComponent
                    tag="p"
                    className="ui-organism-footer-r123__bottom-container__copyright-container"
                >
                    {copyrightText}
                </TextComponent>
            </div>
        </div>
    );
};

export default FooterBelowSectionComponent;
