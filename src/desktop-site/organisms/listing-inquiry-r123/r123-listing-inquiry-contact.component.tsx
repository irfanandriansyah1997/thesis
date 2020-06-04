import React, { FunctionComponent, Validator } from 'react';
import PropTypes from 'prop-types';
import { ListingInquiryContactPropsInterface } from './interface/component.interface';
import ButtonComponent from '../../../common/atomic/button/button.component';
import IconComponent from '../../../common/atomic/icon/icon.component';
import ImageComponent from '../../../common/atomic/image/image.component';
import DropdownComponent from '../../../common/molecules/dropdown/dropdown.component';

/**
 * Listing Inquiry R123 Contact Component
 * @author nafhul <nafhul.arsyad@99.co>
 * @since 2020.05.18
 */
const R123ListingInquiryContactComponent: FunctionComponent<ListingInquiryContactPropsInterface> = ({
    onClickWhatsAppButton,
    onClickPhoneButton,
    phoneNumbers,
    hasWhatsapp
}: ListingInquiryContactPropsInterface) => {
    /**
     * Whatsapp Icon
     * @return {FunctionComponent}
     */
    const WhatsAppIcon: FunctionComponent = () => (
        <ImageComponent
            src="https://public.urbanindo.com/style-guide/r123-whatsapp-icon.svg"
            alt="whatsapp-icon"
            width={25}
            height={25}
        />
    );
    /**
     * Call Icon
     * @return {FunctionComponent}
     */
    const CallIcon: FunctionComponent = () => (
        <IconComponent color="black" size={20}>
            rui-icon-call-small
        </IconComponent>
    );
    const [phone] = phoneNumbers;
    const additionalPhones = phoneNumbers.slice(1);
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
            {phoneNumbers.length > 1 ? (
                <DropdownComponent
                    label=""
                    name="secondary-contacts"
                    trigger="click"
                    icon="rui-icon-arrow-down-small"
                >
                    {additionalPhones.map((addPhone) => {
                        return (
                            <DropdownComponent.Item key={addPhone}>
                                {addPhone}
                            </DropdownComponent.Item>
                        );
                    })}
                </DropdownComponent>
            ) : null}
            {hasWhatsapp ? (
                <ButtonComponent
                    size="big"
                    theme="secondary"
                    onClick={onClickWhatsAppButton}
                    icon={<WhatsAppIcon />}
                >
                    WhatsApp
                </ButtonComponent>
            ) : null}
        </div>
    );
};

R123ListingInquiryContactComponent.propTypes = {
    phoneNumbers: PropTypes.arrayOf(PropTypes.string).isRequired as Validator<
        string[]
    >,
    onClickWhatsAppButton: PropTypes.func.isRequired,
    onClickPhoneButton: PropTypes.func.isRequired
};

R123ListingInquiryContactComponent.defaultProps = {
    phoneNumbers: []
};

export default R123ListingInquiryContactComponent;
