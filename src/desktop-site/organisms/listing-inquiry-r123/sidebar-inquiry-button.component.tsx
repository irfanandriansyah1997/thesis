import React, { FunctionComponent, ReactNode } from 'react';
import PropTypes from 'prop-types';
import ButtonComponent from '../../../common/atomic/button/button.component';
import { ListingInquiryButtonPropsInterface } from './interface/component.interface';
import IconComponent from '../../../common/atomic/icon/icon.component';

/**
 * Listing Inquiry Button Component
 * @author nafhul <nafhul.arsyad@99.co>
 * @since 2020.05.28
 */
const ListingInquiryButtonComponent: FunctionComponent<ListingInquiryButtonPropsInterface> = ({
    buttonText,
    buttonIcon,
    onClickInquiryButton
}: ListingInquiryButtonPropsInterface) => {
    /**
     * Inquiry Button Icon
     * @return {string}
     */
    const icon = (): ReactNode => {
        if (buttonIcon) {
            return (
                <IconComponent color="black" size={20}>
                    {buttonIcon}
                </IconComponent>
            );
        }
        return null;
    };

    return (
        <div className="ui-organism-listing-inquiry-r123__email-button">
            <ButtonComponent
                size="big"
                theme="danger"
                icon={icon()}
                onClick={onClickInquiryButton}
            >
                {buttonText}
            </ButtonComponent>
        </div>
    );
};

ListingInquiryButtonComponent.propTypes = {
    buttonText: PropTypes.string.isRequired,
    buttonIcon: PropTypes.string,
    onClickInquiryButton: PropTypes.func.isRequired
};

ListingInquiryButtonComponent.defaultProps = {
    buttonIcon: undefined
};

export default ListingInquiryButtonComponent;
