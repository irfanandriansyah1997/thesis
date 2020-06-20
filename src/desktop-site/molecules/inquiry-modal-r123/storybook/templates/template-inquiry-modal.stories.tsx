import { R123InquiryModalPropsInterface } from '../../interface/component.interface';

export const DefaultPropsInquiryListingSuccess: R123InquiryModalPropsInterface = {
    type: 'success',
    title: 'Pertanyaan anda telah terkirim ke agen!',
    remarks: 'Ingat pertanyaan Anda dengan login atau membuat profil baru',
    button: {
        buttonText: 'Simpan property',
        onClickInquiryModalButton: (): void => undefined
    },
    dialogBox: {
        show: false,
        onCloseDialog: (): void => undefined
    }
};

export const DefaultPropsInquiryListingFailed: R123InquiryModalPropsInterface = {
    type: 'failed',
    title: 'Maaf terjadi kesalahan',
    remarks:
        'Permintaan Anda tidak dapat dikirim saat ini. Silakan coba kembali beberapa saat lagi',
    button: {
        buttonText: 'Coba sekarang',
        onClickInquiryModalButton: (): void => undefined
    },
    dialogBox: {
        show: false,
        onCloseDialog: (): void => undefined
    }
};
