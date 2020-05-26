import PropTypes from 'prop-types';
import React, { FunctionComponent, Validator, ReactNode } from 'react';

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
    /**
     * Generate Link Item Component
     * @param {'link' | 'link-with-image'} type - type link item
     * @param {FooterMediaLinkInterface[] | FooterLinkInterface[]} menu - menu item
     * @param {string | undefined} target - target attribute in link component
     * @param {string | undefined} alt - alt attribute in image component
     * @param {string | undefined} size - width attribute in image component
     * @return {ReactNode}
     */
    const generateLinkItem = (
        type: 'link' | 'link-with-image',
        menu: FooterMediaLinkInterface[] | FooterLinkInterface[],
        target: string | undefined = undefined,
        alt: string | undefined = undefined,
        size: number | undefined = undefined
    ): ReactNode => {
        if (type === 'link') {
            return (menu as FooterLinkInterface[]).map(({ to, text }) => {
                return (
                    <ListComponent.Item key={text}>
                        <LinkComponent href={to} target={target}>
                            {text}
                        </LinkComponent>
                    </ListComponent.Item>
                );
            });
        }

        return (menu as FooterMediaLinkInterface[]).map(({ to, imageUrl }) => {
            return (
                <ListComponent.Item key={to}>
                    <LinkComponent href={to} target={target}>
                        <ImageComponent
                            alt={alt || ''}
                            width={size}
                            src={imageUrl}
                        />
                    </LinkComponent>
                </ListComponent.Item>
            );
        });
    };

    /**
     * Generate Bottom Link
     * @param {string} heading - heading section
     * @param {FooterLinkInterface[]} menu - menu item
     * @return {ReactNode}
     */
    const generateBottomLink = (
        heading: string,
        menu: FooterLinkInterface[]
    ): ReactNode => {
        return (
            <>
                <TextComponent tag="p" fontWeight={700}>
                    {heading}
                </TextComponent>
                <ListComponent
                    className="ui-organism-footer-r123__bottom-section__block-container"
                    space={32}
                    divider="line"
                    dividerColor="white"
                >
                    {generateLinkItem('link', menu, '_blank')}
                </ListComponent>
            </>
        );
    };

    return (
        <section className="ui-organism-footer-r123__bottom-section">
            <GridComponent.Container>
                <GridComponent.Row>
                    <GridComponent.Column id="footer-upper" defaultSize={12}>
                        <div className="ui-organism-footer-r123__bottom-section__block-container">
                            <div className="ui-organism-footer-r123__bottom-section__wrapper">
                                <ListComponent space={20} divider="none">
                                    {generateLinkItem(
                                        'link-with-image',
                                        socmedMedias,
                                        '_blank',
                                        'img-socmed'
                                    )}
                                </ListComponent>
                                <ListComponent space={20} divider="none">
                                    {generateLinkItem('link', sitemap)}
                                </ListComponent>
                            </div>
                        </div>
                        <div className="ui-organism-footer-r123__bottom-section__block-container">
                            <ListComponent space={20} divider="none">
                                {generateLinkItem(
                                    'link-with-image',
                                    publishMedias,
                                    '_blank',
                                    'img-store',
                                    130
                                )}
                            </ListComponent>
                        </div>
                        {generateBottomLink(
                            'Situs Internasional:',
                            siteRegions
                        )}
                        {generateBottomLink('Situs Partner:', partners)}
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
