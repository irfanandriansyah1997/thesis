// import React, { SFC } from 'react';
// import { render } from 'enzyme';

// import CardR123Featured from '../card-r123-featured.component';
// import IconComponent from '../../../../common/atomic/icon/icon.component';

// describe('Testing <CardComponent> in atomic component ', () => {
//     /**
//      * Create bedroom icon
//      * @return {string}
//      */
//     const BedroomIcon: SFC = () => (
//         <IconComponent color="text" size={18}>
//             rui-icon-bed
//         </IconComponent>
//     );

//     /**
//      * Create bathroom icon
//      * @return {string}
//      */
//     const BathroomIcon: SFC = () => (
//         <IconComponent color="text" size={18}>
//             rui-icon-bath
//         </IconComponent>
//     );

//     /**
//      * Create carpark icon
//      * @return {string}
//      */
//     const CarparkIcon: SFC = () => (
//         <IconComponent color="text" size={18}>
//             rui-icon-car
//         </IconComponent>
//     );

//     const image = [
//         {
//             id: 1,
//             src:
//                 'https://images.unsplash.com/photo-1562886812-41775a01195d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//             alt: 'Images 1'
//         }
//     ];

//     const card = render(
//         <CardR123Featured
//             heading={{
//                 agencyTitle: 'Ray White',
//                 creationDate: 'Tayang 5 hari yang lalu'
//             }}
//             cardMedia={{
//                 media: image,
//                 caption: {
//                     priceTag: 'Rp 2,1 M',
//                     installment: 'Cicilan : Rp. 7,46 Jt/bulan',
//                     numMedias: 23
//                 },
//                 tier: 'featured'
//             }}
//             content={{
//                 mortgageLinkText: 'Simulasi KPR',
//                 title:
//                     'Ready Rumah Murah Di Sukun Perum Tirtasari Malang, Sukun, Kota Malang',

//                 address: 'Malang',

//                 landSize: 'Luas tanah: 339 m2',
//                 buildingSize: 'Luas bangunan: 700 m2',
//                 propertyType: 'Rumah',
//                 attribute: [
//                     { icon: <BathroomIcon />, value: '2' },
//                     { icon: <BedroomIcon />, value: '3' },
//                     { icon: <CarparkIcon />, value: '1' }
//                 ]
//             }}
//             action={{
//                 onClickSave: (): void => undefined,
//                 onClickViewDetail: (): void => undefined
//             }}
//             link="https://www.rumah123.com/"
//         />
//     );

//     it('Should render card component correctly', () => {
//         expect(card.hasClass('ui-organisms-card-r123-featured')).toBe(true);
//         expect(card.hasClass('box-shadow-r123')).toBe(true);
//         expect(card.prop('style')).toHaveProperty('width', '750px');
//     });
// });
