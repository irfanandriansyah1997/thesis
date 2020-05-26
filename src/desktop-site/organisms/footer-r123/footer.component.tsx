import PropTypes from 'prop-types';
import React, { FunctionComponent, Validator } from 'react';

import StringHelper from '../../../shared/helper/string.helper';
import FooterUpperSectionComponent from './footer-upper-section.component';
import FooterBelowSectionComponent from './footer-below-section.component';
import {
    FooterTabInterface,
    FooterLinkInterface,
    FooterPropsInterface,
    FooterMediaLinkInterface
} from './interface/component.interface';

/**
 * Footer Section Component
 * @author nafhul <nafhul.arsyad@99.co>
 * @since 2020.05.18
 */
const FooterR123Component: FunctionComponent<FooterPropsInterface> = ({
    tabs,
    sitemap,
    partners,
    siteRegions,
    socmedMedias,
    publishMedias,
    copyrightText
}: FooterPropsInterface) => {
    return (
        <section
            className={StringHelper.objToString({
                'ui-organism-footer-r123': true,
                flex: true,
                'flex-column': true,
                'flex-align-start': true
            })}
        >
            <FooterUpperSectionComponent tabs={tabs} />
            <FooterBelowSectionComponent
                socmedMedias={socmedMedias}
                sitemap={sitemap}
                publishMedias={publishMedias}
                siteRegions={siteRegions}
                partners={partners}
                copyrightText={copyrightText}
            />
        </section>
    );
};

FooterR123Component.propTypes = {
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
    ).isRequired as Validator<FooterMediaLinkInterface[]>,
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

FooterR123Component.defaultProps = {
    tabs: [],
    sitemap: [],
    partners: [],
    siteRegions: [],
    socmedMedias: [],
    publishMedias: []
};

export default FooterR123Component;
