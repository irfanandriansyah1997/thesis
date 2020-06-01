import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import { ListingInquiryOrgPropsInterface } from './interface/component.interface';
import TextComponent from '../../../common/atomic/text/text.component';
import LinkComponent from '../../../common/atomic/link/link.component';
import ImageComponent from '../../../common/atomic/image/image.component';

/**
 * Footer Section Component
 * @author nafhul <nafhul.arsyad@99.co>
 * @since 2020.05.18
 */
const ListingInquiryR123OrgComponent: FunctionComponent<ListingInquiryOrgPropsInterface> = ({
    organizationName,
    organizationImageUrl,
    organizationPageUrl
}: ListingInquiryOrgPropsInterface) => {
    return (
        <div className="ui-organism-listing-inquiry-r123__organization-wrapper flex flex-column">
            <LinkComponent
                noUnderline
                href={organizationPageUrl}
                className="ui-organism-listing-inquiry-r123__organization-content text-center"
            >
                <TextComponent tag="p" align="center">
                    {organizationName}
                </TextComponent>
                {organizationImageUrl ? (
                    <ImageComponent
                        src={organizationImageUrl}
                        alt="organization-image"
                        type="circle"
                        width={50}
                        height={50}
                        objectFit="fill"
                    />
                ) : null}
            </LinkComponent>
        </div>
    );
};

ListingInquiryR123OrgComponent.propTypes = {
    organizationName: PropTypes.string,
    organizationImageUrl: PropTypes.string,
    organizationPageUrl: PropTypes.string
};

ListingInquiryR123OrgComponent.defaultProps = {
    organizationName: '',
    organizationImageUrl: '',
    organizationPageUrl: ''
};

export default ListingInquiryR123OrgComponent;
