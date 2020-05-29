import React, { FunctionComponent } from 'react';
import { ListingInquiryContactPropsInterface } from './interface/component.interface';
import ButtonComponent from '../../../common/atomic/button/button.component';
import IconComponent from '../../../common/atomic/icon/icon.component';

/**
 * Listing Inquiry R123 Contact Component
 * @author nafhul <nafhul.arsyad@99.co>
 * @since 2020.05.18
 */
const ListingInquiryR123ContactComponent: FunctionComponent<ListingInquiryContactPropsInterface> = ({
    onClickWhatsAppButton,
    onClickPhoneButton,
    phoneNumbers
}: ListingInquiryContactPropsInterface) => {
    /**
     * Create Icon
     * @return {string}
     */
    const Icon: FunctionComponent = () => (
        <IconComponent color="success" size={20}>
            rui-icon-whatsapp
        </IconComponent>
    );
    const phone = phoneNumbers[0];
    return (
        <div className="ui-organism-listing-inquiry-r123__inquiry-buttons">
            <ButtonComponent
                size="big"
                theme="secondary"
                onClick={(event): void => onClickPhoneButton(event)}
            >
                {phone}
            </ButtonComponent>
            <ButtonComponent
                size="big"
                theme="secondary"
                onClick={(event): void => onClickWhatsAppButton(event)}
                icon={<Icon />}
            >
                WhatsApp
            </ButtonComponent>
        </div>
    );
};

export default ListingInquiryR123ContactComponent;
