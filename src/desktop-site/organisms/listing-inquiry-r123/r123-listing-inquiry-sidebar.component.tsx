import React, { FunctionComponent } from 'react';
import { ListingInquirySidebarPropsInterface } from './interface/component.interface';
import R123ListingInquiryContactComponent from './r123-listing-inquiry-contact.component';
import ListingInquiryButtonComponent from './sidebar-inquiry-button.component';
import StringHelper from '../../../shared/helper/string.helper';
import ListingInquiryR123SidebarAgentComponent from './sidebar-agent.component';
import ListingInquiryR123OrgComponent from './sidebar-organization.component';

/**
 * Listing Inquiry Sidebar Component
 * @author nafhul <nafhul.arsyad@99.co>
 * @since 2020.05.18
 */
const R123ListingInquirySidebarComponent: FunctionComponent<ListingInquirySidebarPropsInterface> = ({
    agent,
    organization,
    contact,
    inquiryButton
}: ListingInquirySidebarPropsInterface) => {
    return (
        <div
            className={StringHelper.objToString({
                'ui-organism-listing-inquiry-r123': true,
                flex: true,
                'flex-column': true,
                'flex-align-start': true
            })}
        >
            <div className="ui-organism-listing-inquiry-r123__container-wrapper">
                <div className="ui-organism-listing-inquiry-r123__contact-wrapper">
                    <div className="ui-organism-listing-inquiry-r123__agent-wrapper block">
                        <ListingInquiryR123SidebarAgentComponent
                            agentName={agent.agentName}
                            agentInfo={agent.agentInfo}
                            agentImageUrl={agent.agentImageUrl}
                            agentPageUrl={agent.agentPageUrl}
                        />
                    </div>
                    <R123ListingInquiryContactComponent
                        phoneNumbers={contact.phoneNumbers}
                        hasWhatsapp={contact.hasWhatsapp}
                        onClickWhatsAppButton={contact.onClickWhatsAppButton}
                        onClickPhoneButton={contact.onClickPhoneButton}
                    />
                    <ListingInquiryButtonComponent
                        buttonText={inquiryButton.buttonText}
                        buttonIcon={inquiryButton.buttonIcon}
                        onClickInquiryButton={
                            inquiryButton.onClickInquiryButton
                        }
                    />
                </div>
                {organization ? (
                    <ListingInquiryR123OrgComponent
                        organizationName={organization.organizationName}
                        organizationImageUrl={organization.organizationImageUrl}
                        organizationPageUrl={organization.organizationPageUrl}
                    />
                ) : null}
            </div>
        </div>
    );
};

export default R123ListingInquirySidebarComponent;
