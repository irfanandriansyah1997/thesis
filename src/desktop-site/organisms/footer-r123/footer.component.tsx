import React, { FunctionComponent } from 'react';
import { FooterPropsInterface } from './interface/component.interface';
import StringHelper from '../../../shared/helper/string.helper';
import FooterUpperSectionComponent from './footer-upper-section.component';
import FooterBelowSectionComponent from './footer-below-section.component';

/**
 * Footer  Section Component
 * @author nafhul <nafhul.arsyad@99.co>
 * @since 2020.05.18
 */
const FooterComponent: FunctionComponent<FooterPropsInterface> = ({
    tabs,
    socmedMedias,
    sitemap,
    publishMedias,
    siteRegions,
    partners,
    copyrightText
}: FooterPropsInterface) => {
    return (
        <div
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
        </div>
    );
};

export default FooterComponent;
