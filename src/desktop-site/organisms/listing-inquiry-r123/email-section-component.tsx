import React, { FunctionComponent } from 'react';
import { ListingInquiryEmailSectionPropsInterface } from './interface/component.interface';
import ListingInquiryButtonComponent from './listing-inquiry-r123-button.component';

/**
 * Listing Inquiry Sidebar Agent Component
 * @author nafhul <nafhul.arsyad@99.co>
 * @since 2020.05.18
 */
const ListingInquiryR123EmailSectionComponent: FunctionComponent<ListingInquiryEmailSectionPropsInterface> = ({
    buttonText,
    onClickInquiryButton
}: ListingInquiryEmailSectionPropsInterface) => {
    return (
        <div>
            <div className="ui-organism-listing-inquiry-r123__email-form-body"></div>
            <div className="ui-organism-listing-inquiry-r123__email-form-footer">
                <ListingInquiryButtonComponent
                    buttonText={buttonText}
                    onClickInquiryButton={onClickInquiryButton}
                />
            </div>
        </div>
    );
};

export default ListingInquiryR123EmailSectionComponent;
