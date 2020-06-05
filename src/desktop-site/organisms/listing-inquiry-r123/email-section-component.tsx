/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FunctionComponent } from 'react';
import { ListingInquiryEmailSectionPropsInterface } from './interface/component.interface';
import TextComponent from '../../../common/atomic/text/text.component';
import GridComponent from '../../../common/atomic/grid/grid.component';
import ButtonComponent from '../../../common/atomic/button/button.component';
import EditTextComponent from '../../../common/atomic/edit-text/edit-text.component';

/**
 * R123 Listing Inquiry Email Section Component
 * @author nafhul <nafhul.arsyad@99.co>
 * @since 2020.05.18
 */
const R123ListingInquiryEmailSectionComponent: FunctionComponent<ListingInquiryEmailSectionPropsInterface> = ({
    buttonText,
    agreement,
    onClickInquiryButton,
    buyerName,
    buyerEmail,
    placeholder,
    onChangeInquiryField
}: ListingInquiryEmailSectionPropsInterface) => {
    /**
     * Agreement HTML text
     * @return {any}
     */
    const agreementMarkup: any = (): Record<string, string> => {
        return { __html: agreement || '' };
    };

    return (
        <div className="ui-organism-listing-inquiry-r123__inquiry-box-wrapper">
            <GridComponent.Container className="container-example">
                <GridComponent.Row>
                    <GridComponent.Column defaultSize={6} id="email-column">
                        <textarea
                            placeholder={placeholder.message}
                            style={{
                                width: '100%',
                                height: '135px',
                                resize: 'none',
                                marginTop: '20px'
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
                            onChange={(event): void => {
                                onChangeInquiryField('name', event);
                            }}
                        />
                        <EditTextComponent
                            className="ui-organism-listing-inquiry-r123__buyer_info"
                            id="inquiry-input"
                            name="inquiry-email"
                            type="email"
                            value={buyerEmail}
                            placeholder={placeholder.email}
                            onChange={(event): void => {
                                onChangeInquiryField('email', event);
                            }}
                        />
                        <EditTextComponent
                            className="ui-organism-listing-inquiry-r123__buyer_info"
                            id="inquiry-input"
                            name="inquiry-phone"
                            type="text"
                            placeholder={placeholder.phone}
                            onChange={(event): void => {
                                onChangeInquiryField('phone', event);
                            }}
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

R123ListingInquiryEmailSectionComponent.defaultProps = {};

export default R123ListingInquiryEmailSectionComponent;
