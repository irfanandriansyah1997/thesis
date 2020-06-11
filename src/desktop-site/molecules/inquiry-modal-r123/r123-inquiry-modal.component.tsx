import React, { FunctionComponent } from 'react';
import { R123InquiryModalPropsInterface } from './interface/component.interface';
import TextComponent from '../../../common/atomic/text/text.component';
import ButtonComponent from '../../../common/atomic/button/button.component';
import StringHelper from '../../../shared/helper/string.helper';

/**
 * R123 Inquiry Modal Component
 * @author nafhul <nafhul.arsyad@99.co>
 * @since 2020.06.10
 */
const R123InquiryModalComponent: FunctionComponent<R123InquiryModalPropsInterface> = ({
    type,
    title,
    button,
    remarks
}: R123InquiryModalPropsInterface) => {
    return (
        <div
            className={StringHelper.objToString({
                'ui-molecules-inquiry-modal-r123': true,
                flex: true,
                'flex-column': true
            })}
        >
            <TextComponent
                tag="p"
                className="ui-molecules-inquiry-modal-r123__title"
                fontWeight={700}
            >
                {title}
            </TextComponent>
            {type === 'failed' ? (
                <TextComponent
                    tag="p"
                    className="ui-molecules-inquiry-modal-r123__failed-remarks"
                >
                    {remarks}
                </TextComponent>
            ) : null}
            <ButtonComponent
                size="default"
                theme="danger"
                style={{
                    marginTop: '32px'
                }}
                onClick={button.onClickInquiryModalButton}
            >
                {button.buttonText}
            </ButtonComponent>
            {type === 'success' ? (
                <TextComponent
                    tag="p"
                    className="ui-molecules-inquiry-modal-r123__success-remarks"
                    fontWeight={300}
                >
                    {remarks}
                </TextComponent>
            ) : null}
        </div>
    );
};

export default R123InquiryModalComponent;
