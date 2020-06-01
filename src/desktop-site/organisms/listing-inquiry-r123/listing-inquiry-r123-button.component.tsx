import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import ButtonComponent from '../../../common/atomic/button/button.component';
import { ListingInquiryButtonPropsInterface } from './interface/component.interface';

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
    return (
        <div className="ui-organism-listing-inquiry-r123__email-button">
            <ButtonComponent
                size="big"
                theme="danger"
                icon={buttonIcon}
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
    buttonIcon: ''
};

export default ListingInquiryButtonComponent;
