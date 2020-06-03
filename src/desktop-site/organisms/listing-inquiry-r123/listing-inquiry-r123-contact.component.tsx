import React, { FunctionComponent, Validator } from 'react';
import PropTypes from 'prop-types';
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
     * Whatsapp Icon
     * @return {string}
     */
    const WhatsAppIcon: FunctionComponent = () => (
        <IconComponent color="success" size={20}>
            rui-icon-whatsapp
        </IconComponent>
    );
    /**
     * Call Icon
     * @return {string}
     */
    const CallIcon: FunctionComponent = () => (
        <IconComponent color="success" size={20}>
            rui-icon-call-small
        </IconComponent>
    );
    const [phone] = phoneNumbers;
    return (
        <div className="ui-organism-listing-inquiry-r123__inquiry-buttons flex">
            <ButtonComponent
                size="big"
                theme="secondary"
                onClick={onClickPhoneButton}
                icon={<CallIcon />}
            >
                {phone}
            </ButtonComponent>
            <ButtonComponent
                size="big"
                theme="secondary"
                onClick={onClickWhatsAppButton}
                icon={<WhatsAppIcon />}
            >
                WhatsApp
            </ButtonComponent>
        </div>
    );
};

ListingInquiryR123ContactComponent.propTypes = {
    phoneNumbers: PropTypes.arrayOf(PropTypes.string).isRequired as Validator<
        string[]
    >,
    onClickWhatsAppButton: PropTypes.func.isRequired,
    onClickPhoneButton: PropTypes.func.isRequired
};

ListingInquiryR123ContactComponent.defaultProps = {
    phoneNumbers: []
};

export default ListingInquiryR123ContactComponent;
