import React, { FunctionComponent } from 'react';
import { R123InquiryModalPropsInterface } from './interface/component.interface';
import TextComponent from '../../../common/atomic/text/text.component';
import ButtonComponent from '../../../common/atomic/button/button.component';
import StringHelper from '../../../shared/helper/string.helper';
import ImageComponent from '../../../common/atomic/image/image.component';
import DialogComponent from '../../../common/atomic/dialog/dialog.component';
import IconComponent from '../../../common/atomic/icon/icon.component';

/**
 * R123 Inquiry Modal Component
 * @author nafhul <nafhul.arsyad@99.co>
 * @since 2020.06.10
 */
const R123InquiryModalComponent: FunctionComponent<R123InquiryModalPropsInterface> = ({
    type,
    title,
    button,
    remarks,
    dialogBox
}: R123InquiryModalPropsInterface) => {
    let imgUrl =
        'https://public.urbanindo.com/style-guide/tick-mark-circle.svg';
    if (type === 'failed') {
        imgUrl = 'https://public.urbanindo.com/style-guide/close-circle.svg';
    }

    return (
        <DialogComponent
            show={dialogBox.show}
            onCloseDialog={dialogBox.onCloseDialog}
        >
            <div
                className={StringHelper.objToString({
                    'ui-molecules-inquiry-modal-r123': true,
                    flex: true,
                    'flex-column': true,
                    'flex-justify-center': true
                })}
                style={{ margin: 'auto' }}
            >
                <IconComponent
                    color="text"
                    size={32}
                    style={{
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        padding: 8,
                        cursor: 'pointer'
                    }}
                    onClick={dialogBox.onCloseDialog}
                >
                    close
                </IconComponent>
                <ImageComponent
                    src={imgUrl}
                    alt="inquiry-icon"
                    width={60}
                    height={60}
                />
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
        </DialogComponent>
    );
};

export default R123InquiryModalComponent;
