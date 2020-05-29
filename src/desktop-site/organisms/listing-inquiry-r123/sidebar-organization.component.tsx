import React, { FunctionComponent } from 'react';
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
    const imgUrl = organizationImageUrl || '';

    return (
        <div className="ui-organism-listing-inquiry-r123__organization-wrapper">
            <LinkComponent
                noUnderline
                href={organizationPageUrl}
                className="ui-organism-listing-inquiry-r123__organization-content"
            >
                <TextComponent tag="p" align="center">
                    {organizationName}
                </TextComponent>
                <ImageComponent
                    src={imgUrl}
                    alt="Images 1"
                    type="circle"
                    width={50}
                    height={50}
                    objectFit="fill"
                />
            </LinkComponent>
        </div>
    );
};

ListingInquiryR123OrgComponent.defaultProps = {
    organizationImageUrl: ''
};

export default ListingInquiryR123OrgComponent;
