import React from 'react';
import { render } from 'enzyme';
import R123InquiryModalComponent from '../r123-inquiry-modal.component';
import {
    DefaultPropsInquiryListingSuccess,
    DefaultPropsInquiryListingFailed
} from '../storybook/templates/template-inquiry-modal.stories';

describe('Testing r123 inquiry modal in molecules component success case', () => {
    it('should render component working properly', () => {
        render(
            <R123InquiryModalComponent {...DefaultPropsInquiryListingSuccess} />
        );
    });
});

describe('Testing r123 inquiry modal in molecules component failed case ', () => {
    it('should render component working properly', () => {
        render(
            <R123InquiryModalComponent {...DefaultPropsInquiryListingFailed} />
        );
    });
});
