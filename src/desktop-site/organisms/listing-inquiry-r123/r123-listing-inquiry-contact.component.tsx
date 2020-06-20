import React, {
    FunctionComponent,
    Validator,
    useEffect,
    useState,
    ReactText
} from 'react';
import PropTypes from 'prop-types';
import { ListingInquiryContactPropsInterface } from './interface/component.interface';
import ButtonComponent from '../../../common/atomic/button/button.component';
import IconComponent from '../../../common/atomic/icon/icon.component';
import ImageComponent from '../../../common/atomic/image/image.component';
import ComboboxSplitComponent from '../../../common/molecules/combobox-split/combobox-split.component';

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
    const [selectedNumber, setSelectedNumber] = useState('');

    useEffect(() => {
        const [p] = phoneNumbers;
        setSelectedNumber(p);
    }, []);

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

    /**
     * handleOnChange function
     * @return void
     */
    const handleOnChange = (res: ReactText): void => {
        setSelectedNumber(res.toString());
    };

    return (
        <div className="ui-organism-listing-inquiry-r123__inquiry-buttons flex">
            {phoneNumbers.length > 1 ? (
                <ComboboxSplitComponent
                    name="contacts"
                    value={selectedNumber}
                    onChange={handleOnChange}
                    onClick={onClickPhoneButton}
                    icon={<CallIcon />}
                >
                    {phoneNumbers.map((phoneNumber) => {
                        return (
                            <ComboboxSplitComponent.Item
                                key={phoneNumber}
                                id={phoneNumber}
                                value={phoneNumber}
                                label={phoneNumber}
                            >
                                {phoneNumber}
                            </ComboboxSplitComponent.Item>
                        );
                    })}
                </ComboboxSplitComponent>
            ) : (
                <ButtonComponent
                    size="big"
                    theme="secondary"
                    onClick={onClickPhoneButton}
                    icon={<CallIcon />}
                >
                    {selectedNumber}
                </ButtonComponent>
            )}

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
