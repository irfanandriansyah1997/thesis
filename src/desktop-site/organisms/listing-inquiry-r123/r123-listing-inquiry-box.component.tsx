import React, { FunctionComponent } from 'react';
import { ListingInquiryBoxPropsInterface } from './interface/component.interface';
import StringHelper from '../../../shared/helper/string.helper';
import R123ListingInquiryContactSectionComponent from './inquiry-contact-section-component';
import R123ListingInquiryEmailSectionComponent from './email-section-component';

/**
 * R123 Listing Inquiry Box Component
 * @author nafhul <nafhul.arsyad@99.co>
 * @since 2020.06.04
 */
const R123ListingInquiryBoxComponent: FunctionComponent<ListingInquiryBoxPropsInterface> = ({
    agent,
    contact,
    buttonText,
    agreement,
    onClickInquiryButton,
    buyerName,
    buyerEmail,
    placeholder,
    onChangeInquiryField
}: ListingInquiryBoxPropsInterface) => {
    return (
        <div
            className={StringHelper.objToString({
                'ui-organism-listing-inquiry-r123': true,
                flex: true,
                'flex-column': true,
                'flex-align-start': true
            })}
        >
            <R123ListingInquiryContactSectionComponent
                agent={agent}
                contact={contact}
            />
            <R123ListingInquiryEmailSectionComponent
                buttonText={buttonText}
                agreement={agreement}
                onClickInquiryButton={onClickInquiryButton}
                buyerName={buyerName}
                buyerEmail={buyerEmail}
                placeholder={placeholder}
                onChangeInquiryField={onChangeInquiryField}
            />
        </div>
    );
};

export default R123ListingInquiryBoxComponent;
