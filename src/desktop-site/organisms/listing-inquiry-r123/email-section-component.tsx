import React, { FunctionComponent } from 'react';
import { ListingInquiryEmailSectionPropsInterface } from './interface/component.interface';
import TextComponent from '../../../common/atomic/text/text.component';
import GridComponent from '../../../common/atomic/grid/grid.component';
import ButtonComponent from '../../../common/atomic/button/button.component';
import EditTextComponent from '../../../common/atomic/edit-text/edit-text.component';

/**
 * Listing Inquiry Sidebar Agent Component
 * @author nafhul <nafhul.arsyad@99.co>
 * @since 2020.05.18
 */
const ListingInquiryR123EmailSectionComponent: FunctionComponent<ListingInquiryEmailSectionPropsInterface> = ({
    buttonText,
    agreement,
    onClickInquiryButton,
    buyerName,
    buyerEmail,
    placeholder
}: ListingInquiryEmailSectionPropsInterface) => {
    const agreementMarkup = () => {
        return { __html: agreement ? agreement : '' };
    };

    return (
        <div>
            <GridComponent.Container className="container-example">
                <GridComponent.Row>
                    <GridComponent.Column defaultSize={6} id="email-column">
                        <textarea
                            placeholder={placeholder.message}
                            style={{
                                width: '100%',
                                height: '135px',
                                resize: 'none'
                            }}
                        />
                    </GridComponent.Column>
                    <GridComponent.Column
                        defaultSize={6}
                        id="inquiry-info-column"
                    >
                        <EditTextComponent
                            className="ui-organism-listing-inquiry-r123__buyer_info"
                            id="inquiry-input"
                            name="inquiry-name"
                            type="text"
                            value={buyerName}
                            placeholder={placeholder.name}
                        />
                        <EditTextComponent
                            className="ui-organism-listing-inquiry-r123__inquiry_buyer_info"
                            id="inquiry-input"
                            name="inquiry-email"
                            type="email"
                            value={buyerEmail}
                            placeholder={placeholder.email}
                        />
                        <EditTextComponent
                            className="ui-organism-listing-inquiry-r123__inquiry_buyer_info"
                            id="inquiry-input"
                            name="inquiry-phone"
                            type="text"
                            placeholder={placeholder.phone}
                        />
                    </GridComponent.Column>
                </GridComponent.Row>
                <GridComponent.Row>
                    <GridComponent.Column defaultSize={9} id="column-term">
                        <TextComponent
                            tag="p"
                            className="ui-organism-listing-inquiry-r123__term"
                            dangerouslySetInnerHTML={agreementMarkup()}
                        />
                    </GridComponent.Column>
                    <GridComponent.Column
                        defaultSize={3}
                        id="column-submit"
                        className="ui-organism-listing-inquiry-r123__email-submit"
                    >
                        <ButtonComponent
                            size="big"
                            theme="danger"
                            onClick={onClickInquiryButton}
                        >
                            {buttonText}
                        </ButtonComponent>
                    </GridComponent.Column>
                </GridComponent.Row>
            </GridComponent.Container>
        </div>
    );
};

ListingInquiryR123EmailSectionComponent.defaultProps = {};

export default ListingInquiryR123EmailSectionComponent;
