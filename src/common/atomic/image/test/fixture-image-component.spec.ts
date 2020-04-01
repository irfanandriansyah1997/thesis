import { UnitTestingFixtureInterface } from '../../../../shared/interface/unit-testing/unit-testing.interface';
import { ComponentImageDefaultPropsInterface } from '../../../../shared/interface/component/component-image.inteface';

test.skip('it is not snowing', (): void => {});

const FixtureImages: UnitTestingFixtureInterface<
    ComponentImageDefaultPropsInterface,
    ComponentImageDefaultPropsInterface
> = {
    input: [
        {
            src: '1.jpg',
            alt: 'alt 1',
            width: '40px',
            height: '30px',
            objectFit: '-moz-initial',
            type: 'circle',
            overflow: 'auto'
        },
        {
            src: '2.jpg',
            alt: 'alt 1',
            width: '40px',
            height: '10px',
            objectFit: 'contain',
            type: 'rounded',
            overflow: 'hidden'
        },
        {
            src: '3.jpg',
            alt: 'alt 1',
            width: '40px',
            height: '20px',
            objectFit: 'cover',
            type: 'rounded-bottom',
            overflow: 'inherit'
        },
        {
            src: '4.jpg',
            alt: 'alt 1',
            width: '140px',
            height: '40px',
            objectFit: 'fill',
            type: 'rounded-left',
            overflow: 'initial'
        },
        {
            src: '5.jpg',
            alt: 'alt 1',
            width: '100px',
            height: 'auto',
            objectFit: 'inherit',
            type: 'rounded-right',
            overflow: 'revert'
        },
        {
            src: '6.jpg',
            alt: 'alt 1',
            width: '40px',
            height: '90px',
            objectFit: 'initial',
            type: 'rounded-top',
            overflow: 'scroll'
        },
        {
            src: '7.jpg',
            alt: 'alt 1',
            width: '40px',
            height: '40px',
            objectFit: 'none',
            type: 'square',
            overflow: 'unset'
        },
        {
            src: '8.jpg',
            alt: 'alt 1',
            width: '40px',
            height: '40px',
            objectFit: 'revert',
            type: 'circle',
            overflow: 'visible'
        },
        {
            src: '9.jpg',
            alt: 'alt 1',
            width: 40,
            height: '40px',
            objectFit: 'scale-down',
            type: 'circle',
            overflow: '-moz-initial'
        },
        {
            src: '10.jpg',
            alt: 'alt 1',
            width: '40px',
            height: 80,
            objectFit: 'unset',
            type: 'circle',
            overflow: '-moz-initial'
        },
        {
            src: '11.jpg',
            alt: 'alt 1',
            width: undefined,
            height: undefined,
            objectFit: 'unset',
            type: 'circle',
            overflow: '-moz-initial'
        }
    ],
    output: [
        {
            src: '1.jpg',
            alt: 'alt 1',
            width: '40px',
            height: '30px',
            objectFit: '-moz-initial',
            type: 'circle',
            overflow: 'auto'
        },
        {
            src: '2.jpg',
            alt: 'alt 1',
            width: '40px',
            height: '10px',
            objectFit: 'contain',
            type: 'rounded',
            overflow: 'hidden'
        },
        {
            src: '3.jpg',
            alt: 'alt 1',
            width: '40px',
            height: '20px',
            objectFit: 'cover',
            type: 'rounded-bottom',
            overflow: 'inherit'
        },
        {
            src: '4.jpg',
            alt: 'alt 1',
            width: '140px',
            height: '40px',
            objectFit: 'fill',
            type: 'rounded-left',
            overflow: 'initial'
        },
        {
            src: '5.jpg',
            alt: 'alt 1',
            width: '100px',
            height: 'auto',
            objectFit: 'inherit',
            type: 'rounded-right',
            overflow: 'revert'
        },
        {
            src: '6.jpg',
            alt: 'alt 1',
            width: '40px',
            height: '90px',
            objectFit: 'initial',
            type: 'rounded-top',
            overflow: 'scroll'
        },
        {
            src: '7.jpg',
            alt: 'alt 1',
            width: '40px',
            height: '40px',
            objectFit: 'none',
            type: 'square',
            overflow: 'unset'
        },
        {
            src: '8.jpg',
            alt: 'alt 1',
            width: '40px',
            height: '40px',
            objectFit: 'revert',
            type: 'circle',
            overflow: 'visible'
        },
        {
            src: '9.jpg',
            alt: 'alt 1',
            width: '40px',
            height: '40px',
            objectFit: 'scale-down',
            type: 'circle',
            overflow: '-moz-initial'
        },
        {
            src: '10.jpg',
            alt: 'alt 1',
            width: '40px',
            height: '80px',
            objectFit: 'unset',
            type: 'circle',
            overflow: '-moz-initial'
        },
        {
            src: '11.jpg',
            alt: 'alt 1',
            width: 'initial',
            height: 'initial',
            objectFit: 'unset',
            type: 'circle',
            overflow: '-moz-initial'
        }
    ]
};

export default FixtureImages;
