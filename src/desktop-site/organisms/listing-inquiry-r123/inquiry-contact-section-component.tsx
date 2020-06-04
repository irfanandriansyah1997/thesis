/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FunctionComponent } from 'react';
import { ListingInquiryContactSectionPropsInterface } from './interface/component.interface';
import LinkComponent from '../../../common/atomic/link/link.component';
import ImageComponent from '../../../common/atomic/image/image.component';
import TextComponent from '../../../common/atomic/text/text.component';
import R123ListingInquiryContactComponent from './r123-listing-inquiry-contact.component';

/**
 * Listing Inquiry Sidebar Agent Component
 * @author nafhul <nafhul.arsyad@99.co>
 * @since 2020.05.18
 */
const R123ListingInquiryContactSectionComponent: FunctionComponent<ListingInquiryContactSectionPropsInterface> = ({
    contact,
    agent
}: ListingInquiryContactSectionPropsInterface) => {
    /**
     * Agent info HTML text
     * @return {any}
     */
    const agentInfoMarkup: any = () => {
        if (agent.agentInfo) {
            return { __html: agent.agentInfo };
        }
        return { __html: '' };
    };
    /* eslint-enable @typescript-eslint/no-explicit-any */

    return (
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
                />
            </div>
            <div className="ui-organism-listing-inquiry-r123__container-wrapper">
                <R123ListingInquiryContactComponent
                    phoneNumbers={contact.phoneNumbers}
                    hasWhatsapp={contact.hasWhatsapp}
                    onClickPhoneButton={contact.onClickPhoneButton}
                    onClickWhatsAppButton={contact.onClickWhatsAppButton}
                />
            </div>
        </div>
    );
};

export default R123ListingInquiryContactSectionComponent;
