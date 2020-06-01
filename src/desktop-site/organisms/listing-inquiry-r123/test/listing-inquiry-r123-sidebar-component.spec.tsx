import React from 'react';
import { render, mount } from 'enzyme';
import {
    DefaultPropsListingInquiryR123Sidebar,
    NoOrgPropsListingInquiryR123Sidebar
} from '../storybook/templates/template-listing-inquiry-r123-sidebar.stories';
import ListingInquiryR123SidebarComponent from '../listing-inquiry-r123-sidebar.component';
import ListingInquiryR123ContactComponent from '../listing-inquiry-r123-contact.component';
import ButtonComponent from '../../../../common/atomic/button/button.component';
import ListingInquiryR123OrgComponent from '../sidebar-organization.component';
import ImageComponent from '../../../../common/atomic/image/image.component';

describe('Testing listing inquiry r123 sidebar in organisms component ', () => {
    it('should render component working properly', () => {
        render(
            <ListingInquiryR123SidebarComponent
                {...DefaultPropsListingInquiryR123Sidebar}
            />
        );
    });

    it('testing onClick contact button', () => {
        const inquiry = jest.fn();
        const inquiryComponent = mount(
            <ListingInquiryR123ContactComponent
                onClickWhatsAppButton={inquiry}
                onClickPhoneButton={inquiry}
                phoneNumbers={[]}
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
            <ListingInquiryR123SidebarComponent
                {...NoOrgPropsListingInquiryR123Sidebar}
            />
        );

        const organizationComponent = inquirySidebarComponent.find(
            ListingInquiryR123OrgComponent
        );
        expect(organizationComponent.length).toBe(0);
    });
});
