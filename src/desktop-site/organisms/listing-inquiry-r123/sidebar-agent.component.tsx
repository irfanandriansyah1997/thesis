import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import { ListingInquiryAgentPropsInterface } from './interface/component.interface';
import LinkComponent from '../../../common/atomic/link/link.component';
import ImageComponent from '../../../common/atomic/image/image.component';
import TextComponent from '../../../common/atomic/text/text.component';

/**
 * Listing Inquiry Sidebar Agent Component
 * @author nafhul <nafhul.arsyad@99.co>
 * @since 2020.05.18
 */
const ListingInquiryR123SidebarAgentComponent: FunctionComponent<ListingInquiryAgentPropsInterface> = ({
    agentName,
    agentJoinInfo,
    agentImageUrl,
    agentPageUrl
}: ListingInquiryAgentPropsInterface) => {
    return (
        <LinkComponent noUnderline href={agentPageUrl}>
            <div className="flex flex-align-center">
                <ImageComponent
                    src={agentImageUrl}
                    alt="agent-image"
                    type="circle"
                    width={80}
                    height={80}
                    objectFit="fill"
                />
                <div style={{ marginLeft: '10px' }}>
                    <TextComponent
                        tag="p"
                        className="ui-organism-listing-inquiry-r123__agent-contact-name"
                    >
                        {agentName}
                    </TextComponent>
                    {agentJoinInfo ? (
                        <TextComponent
                            tag="span"
                            className="ui-organism-listing-inquiry-r123__agent-join-info"
                        >
                            {agentJoinInfo}
                        </TextComponent>
                    ) : null}
                </div>
            </div>
        </LinkComponent>
    );
};

ListingInquiryR123SidebarAgentComponent.propTypes = {
    agentName: PropTypes.string.isRequired,
    agentJoinInfo: PropTypes.string,
    agentImageUrl: PropTypes.string.isRequired,
    agentPageUrl: PropTypes.string.isRequired
};

ListingInquiryR123SidebarAgentComponent.defaultProps = {
    agentJoinInfo: undefined
};

export default ListingInquiryR123SidebarAgentComponent;
