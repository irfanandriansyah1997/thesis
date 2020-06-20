import React from 'react';
import { render, mount } from 'enzyme';
import {
    DefaultPropsListingInquiryR123Sidebar,
    NoOrgPropsListingInquiryR123Sidebar,
    DefaultPropsListingInquiryR123Box
} from '../storybook/templates/template-listing-inquiry-r123-sidebar.stories';
import ButtonComponent from '../../../../common/atomic/button/button.component';
import ListingInquiryR123OrgComponent from '../sidebar-organization.component';
import ImageComponent from '../../../../common/atomic/image/image.component';
import ListingInquiryR123SidebarAgentComponent from '../sidebar-agent.component';
import TextComponent from '../../../../common/atomic/text/text.component';
import R123ListingInquirySidebarComponent from '../r123-listing-inquiry-sidebar.component';
import R123ListingInquiryContactComponent from '../r123-listing-inquiry-contact.component';
import R123ListingInquiryBoxComponent from '../r123-listing-inquiry-box.component';
import ListingInquiryButtonComponent from '../sidebar-inquiry-button.component';

describe('Testing r123 listing inquiry sidebar in organisms component ', () => {
    it('should render component working properly', () => {
        render(
            <R123ListingInquirySidebarComponent
                {...DefaultPropsListingInquiryR123Sidebar}
            />
        );
    });

    it('testing render multiple contact', () => {
        const inquiry = jest.fn();
        render(
            <R123ListingInquiryContactComponent
                onClickWhatsAppButton={inquiry}
                onClickPhoneButton={inquiry}
                phoneNumbers={['+6212121', '+624343434']}
                hasWhatsapp={false}
            />
        );
    });

    it('testing onClick contact button', () => {
        const inquiry = jest.fn();
        const inquiryComponent = mount(
            <R123ListingInquiryContactComponent
                onClickWhatsAppButton={inquiry}
                onClickPhoneButton={inquiry}
                phoneNumbers={[]}
                hasWhatsapp
            />
        );

        const inquiryBtn = inquiryComponent.find(ButtonComponent);
        expect(inquiryBtn.length).toBe(2);

        inquiryBtn
            .at(0)
            .find(ButtonComponent)
            .simulate('click');

        expect(inquiry).toHaveBeenCalledTimes(1);
    });

    it('testing organization no image', () => {
        const organizationComponent = mount(
            <ListingInquiryR123OrgComponent
                organizationImageUrl=""
                organizationName=""
                organizationPageUrl=""
            />
        );

        const imageComponent = organizationComponent.find(ImageComponent);
        expect(imageComponent.length).toBe(0);
    });

    it('testing does not have organization', () => {
        const inquirySidebarComponent = mount(
            <R123ListingInquirySidebarComponent
                {...NoOrgPropsListingInquiryR123Sidebar}
            />
        );

        const organizationComponent = inquirySidebarComponent.find(
            ListingInquiryR123OrgComponent
        );
        expect(organizationComponent.length).toBe(0);
    });

    it('testing agent does not have join info', () => {
        const inquirySidebarComponent = mount(
            <ListingInquiryR123SidebarAgentComponent
                agentImageUrl="http://..."
                agentName="John Doe"
                agentPageUrl="http://..."
            />
        );

        const agentSectionComponent = inquirySidebarComponent.find(
            TextComponent
        );
        expect(agentSectionComponent.length).toBe(2);
    });

    it('should inquiry button no icon', () => {
        render(
            <ListingInquiryButtonComponent
                buttonText="test text"
                onClickInquiryButton={(): void => undefined}
            />
        );
    });
});

describe('Testing r123 listing inquiry box in organisms component ', () => {
    it('should render component working properly', () => {
        render(
            <R123ListingInquiryBoxComponent
                {...DefaultPropsListingInquiryR123Box}
            />
        );
    });
});
