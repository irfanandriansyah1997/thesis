import React, { FunctionComponent } from 'react';
import { ListingInquirySidebarPropsInterface } from './interface/component.interface';
import ListingInquiryR123ContactComponent from './listing-inquiry-r123-contact.component';
import ListingInquiryButtonComponent from './listing-inquiry-r123-button.component';
import StringHelper from '../../../shared/helper/string.helper';
import ListingInquiryR123SidebarAgentComponent from './sidebar-agent.component';
import ListingInquiryR123OrgComponent from './sidebar-organization.component';

/**
 * Listing Inquiry Sidebar Component
 * @author nafhul <nafhul.arsyad@99.co>
 * @since 2020.05.18
 */
const ListingInquiryR123SidebarComponent: FunctionComponent<ListingInquirySidebarPropsInterface> = ({
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
                    <div className="ui-organism-listing-inquiry-r123__agent-wrapper">
                        <ListingInquiryR123SidebarAgentComponent
                            agentName={agent.agentName}
                            agentJoinInfo={agent.agentJoinInfo}
                            agentImageUrl={agent.agentImageUrl}
                            agentPageUrl={agent.agentPageUrl}
                        />
                    </div>
                    <ListingInquiryR123ContactComponent
                        phoneNumbers={contact.phoneNumbers}
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

export default ListingInquiryR123SidebarComponent;
