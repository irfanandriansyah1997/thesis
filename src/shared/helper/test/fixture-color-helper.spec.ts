/* eslint-disable import/prefer-default-export */
import ColorDefaultConstant from '../../constant/color.constant';
import { ColorType } from '../../interface/common/color.interface';
import { UnitTestingFixtureInterface } from '../../interface/unit-testing/unit-testing.interface';
import { ComponentStyleColorInterface } from '../../interface/component/component-color.interface';

test.skip('it is not snowing', (): void => {});

export const FixtureColorRGBA: UnitTestingFixtureInterface<
    { hex: string; alpha: number },
    string
> = {
    input: [
        {
            alpha: 1,
            hex: '#000'
        },
        {
            alpha: 0.5,
            hex: ColorDefaultConstant.newPropertyR123
        },
        {
            alpha: 0.7,
            hex: ColorDefaultConstant.info
        },
        {
            alpha: 0.25,
            hex: ColorDefaultConstant.premiumR123
        },
        {
            alpha: 0.1,
            hex: ColorDefaultConstant.milkwhite
        },
        {
            alpha: 1,
            hex: ColorDefaultConstant.primary300
        },
        {
            alpha: 0.8,
            hex: ColorDefaultConstant.heading
        },
        {
            alpha: 1,
            hex: ColorDefaultConstant.secondary
        }
    ],
    output: [
        'rgba(0,0,0,1)',
        'rgba(255,79,0,0.5)',
        'rgba(57,160,249,0.7)',
        'rgba(255,178,0,0.25)',
        'rgba(243,247,248,0.1)',
        'rgba(121,175,255,1)',
        'rgba(34,43,69,0.8)',
        'rgba(255,114,182,1)'
    ]
};

export const FixtureColorComponent: UnitTestingFixtureInterface<
    { color: ColorType; transparent: boolean },
    ComponentStyleColorInterface
> = {
    input: [
        {
            color: 'danger',
            transparent: true
        },
        {
            color: 'secondary',
            transparent: true
        },
        {
            color: 'white',
            transparent: false
        },
        {
            color: 'white',
            transparent: true
        },
        {
            color: 'primary',
            transparent: true
        },
        {
            color: 'featuredR123',
            transparent: true
        }
    ],
    output: [
        {
            background: { color: 'danger', hexColor: 'rgba(220,53,69,0.25)' },
            text: { color: 'danger', hexColor: '#dc3545' }
        },
        {
            background: {
                color: 'secondary',
                hexColor: 'rgba(255,114,182,0.25)'
            },
            text: { color: 'secondary', hexColor: '#ff72b6' }
        },
        {
            background: { color: 'white', hexColor: 'rgba(255,255,255,1)' },
            text: { color: 'heading', hexColor: '#222b45' }
        },
        {
            background: { color: 'white', hexColor: 'rgba(255,255,255,0.25)' },
            text: { color: 'heading', hexColor: '#222b45' }
        },
        {
            background: { color: 'primary', hexColor: 'rgba(41,128,185,0.25)' },
            text: { color: 'primary', hexColor: '#2980b9' }
        },
        {
            background: {
                color: 'featuredR123',
                hexColor: 'rgba(0,190,179,0.25)'
            },
            text: { color: 'featuredR123', hexColor: '#00beb3' }
        }
    ]
};
