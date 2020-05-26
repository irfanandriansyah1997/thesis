import PropTypes from 'prop-types';
import React, { FunctionComponent, Validator } from 'react';

import LinkComponent from '../../../common/atomic/link/link.component';
import TextComponent from '../../../common/atomic/text/text.component';
import GridComponent from '../../../common/atomic/grid/grid.component';
import ListComponent from '../../../common/molecules/list/list.component';
import ImageComponent from '../../../common/atomic/image/image.component';
import {
    FooterLinkInterface,
    FooterMediaLinkInterface,
    FooterBelowSectionPropsInterface
} from './interface/component.interface';

/**
 * Footer Below Section Component
 * @author nafhul <nafhul.arsyad@99.co>
 * @since 2020.05.18
 */
const FooterBelowSectionComponent: FunctionComponent<FooterBelowSectionPropsInterface> = ({
    sitemap,
    partners,
    siteRegions,
    socmedMedias,
    publishMedias,
    copyrightText
}: FooterBelowSectionPropsInterface) => {
    const socmedLinks = socmedMedias.map(({ imageUrl, to }) => {
        return (
            <ListComponent.Item key={to}>
                <LinkComponent href={to} target="_blank">
                    <ImageComponent alt="img-socmed" src={imageUrl} />
                </LinkComponent>
            </ListComponent.Item>
        );
    });

    const localLinks = sitemap.map(({ to, text }) => {
        return (
            <ListComponent.Item key={text}>
                <LinkComponent href={to}>{text}</LinkComponent>
            </ListComponent.Item>
        );
    });

    const appStores = publishMedias.map(({ imageUrl, to }) => {
        return (
            <ListComponent.Item key={imageUrl}>
                <LinkComponent href={to} target="_blank">
                    <ImageComponent
                        alt="img-store"
                        width={130}
                        src={imageUrl}
                    />
                </LinkComponent>
            </ListComponent.Item>
        );
    });

    const regionalSites = siteRegions.map(({ to, text }) => {
        return (
            <ListComponent.Item key={text}>
                <LinkComponent href={to} target="_blank">
                    {text}
                </LinkComponent>
            </ListComponent.Item>
        );
    });

    const sitePartners = partners.map(({ to, text }) => {
        return (
            <ListComponent.Item key={text}>
                <LinkComponent href={to} target="_blank">
                    {text}
                </LinkComponent>
            </ListComponent.Item>
        );
    });
    return (
        <section className="ui-organism-footer-r123__bottom-section">
            <GridComponent.Container>
                <GridComponent.Row>
                    <GridComponent.Column id="footer-upper" defaultSize={12}>
                        <div className="ui-organism-footer-r123__bottom-section__block-container">
                            <div className="ui-organism-footer-r123__bottom-section__wrapper">
                                <ListComponent space={20} divider="none">
                                    {socmedLinks}
                                </ListComponent>
                                <ListComponent space={20} divider="none">
                                    {localLinks}
                                </ListComponent>
                            </div>
                        </div>
                        <div className="ui-organism-footer-r123__bottom-section__block-container">
                            <ListComponent space={20} divider="none">
                                {appStores}
                            </ListComponent>
                        </div>
                        <TextComponent tag="p" fontWeight={700}>
                            Situs Internasional:
                        </TextComponent>
                        <ListComponent
                            className="ui-organism-footer-r123__bottom-section__block-container"
                            space={32}
                            divider="line"
                            dividerColor="white"
                        >
                            {regionalSites}
                        </ListComponent>
                        <TextComponent tag="p" fontWeight={700}>
                            Situs Partner:
                        </TextComponent>
                        <ListComponent
                            className="ui-organism-footer-r123__bottom-section__block-container"
                            space={32}
                            divider="line"
                            dividerColor="white"
                        >
                            {sitePartners}
                        </ListComponent>
                        <TextComponent
                            tag="p"
                            className="ui-organism-footer-r123__bottom-section__copyright-container"
                        >
                            {copyrightText}
                        </TextComponent>
                    </GridComponent.Column>
                </GridComponent.Row>
            </GridComponent.Container>
        </section>
    );
};

FooterBelowSectionComponent.propTypes = {
    copyrightText: PropTypes.string.isRequired,
    sitemap: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
            to: PropTypes.string
        })
    ).isRequired as Validator<FooterLinkInterface[]>,
    partners: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
            to: PropTypes.string
        })
    ).isRequired as Validator<FooterLinkInterface[]>,
    siteRegions: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
            to: PropTypes.string
        })
    ).isRequired as Validator<FooterLinkInterface[]>,
    socmedMedias: PropTypes.arrayOf(
        PropTypes.shape({
            imageUrl: PropTypes.string,
            to: PropTypes.string
        })
    ).isRequired as Validator<FooterMediaLinkInterface[]>,
    publishMedias: PropTypes.arrayOf(
        PropTypes.shape({
            imageUrl: PropTypes.string,
            to: PropTypes.string
        })
    ).isRequired as Validator<FooterMediaLinkInterface[]>
};

FooterBelowSectionComponent.defaultProps = {
    sitemap: [],
    partners: [],
    siteRegions: [],
    socmedMedias: [],
    publishMedias: []
};

export default FooterBelowSectionComponent;
