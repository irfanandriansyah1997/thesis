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
    contact,
    agent
}: ListingInquiryContactSectionPropsInterface) => {
    const agentInfoMarkup = () => {
        if (agent.agentInfo) {
            return { __html: agent.agentInfo };
        }
        return { __html: '' };
    };

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
                        src={agent.agentImageUrl}
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
                        dangerouslySetInnerHTML={agentInfoMarkup()}
                        className="ui-organism-listing-inquiry-r123__agent-info"
                    >                        
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
