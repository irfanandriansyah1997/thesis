import React, { FunctionComponent } from 'react';
import { ListingInquiryContactSectionPropsInterface } from './interface/component.interface';
import LinkComponent from '../../../common/atomic/link/link.component';
import ImageComponent from '../../../common/atomic/image/image.component';
import TextComponent from '../../../common/atomic/text/text.component';
import ListingInquiryR123ContactComponent from './listing-inquiry-r123-contact.component';
import StringHelper from '../../../shared/helper/string.helper';

/**
 * Listing Inquiry Sidebar Agent Component
 * @author nafhul <nafhul.arsyad@99.co>
 * @since 2020.05.18
 */
const ListingInquiryR123ContactSectionComponent: FunctionComponent<ListingInquiryContactSectionPropsInterface> = ({
    contact
}: ListingInquiryContactSectionPropsInterface) => {
    return (
        <div
            className={StringHelper.objToString({
                'ui-organism-listing-inquiry-r123': true,
                flex: true,
                'flex-column': true,
                'flex-align-start': true
            })}
        >
            <div className="ui-organism-listing-inquiry-r123__inquiry-box-wrapper">                
                <LinkComponent noUnderline>
                    <ImageComponent
                        src="https://images.unsplash.com/photo-1562184552-b7a1069700fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                        alt="agent-image"
                        type="circle"
                        width={80}
                        height={80}
                        objectFit="fill"
                    />
                </LinkComponent>
                <div className="ui-organism-listing-inquiry-r123__contact-form-title">
                    <TextComponent
                        tag="p"
                        className="ui-organism-listing-inquiry-r123__agent-contact-name"
                    >
                        "Kontak Sielly Lilianti tentang properti ini"
                    </TextComponent>
                </div>
                <div className="ui-organism-listing-inquiry-r123__container-wrapper">
                    <ListingInquiryR123ContactComponent
                        phoneNumbers={contact.phoneNumbers}
                        onClickPhoneButton={contact.onClickPhoneButton}
                        onClickWhatsAppButton={contact.onClickWhatsAppButton}
                    />
                </div>                
            </div>
        </div>
    );
};

export default ListingInquiryR123ContactSectionComponent;
