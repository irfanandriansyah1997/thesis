import React from 'react';
import { render } from 'enzyme';
import { DefaultPropsListingInquiryR123Sidebar } from '../storybook/templates/template-listing-inquiry-r123-sidebar.stories';
import ListingInquiryR123SidebarComponent from '../listing-inquiry-r123-sidebar.component';

describe('Testing listing inquiry r123 sidebar in organisms component ', () => {
    it('should render component working properly', () => {
        render(
            <ListingInquiryR123SidebarComponent
                {...DefaultPropsListingInquiryR123Sidebar}
            />
        );
    });
});
