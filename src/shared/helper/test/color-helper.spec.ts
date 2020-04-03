import ColorHelper from '../color.helper';
import UnitTestingHelper from '../unit-testing.helper';
import {
    FixtureColorRGBA,
    FixtureColorComponent
} from './fixture-color-helper.spec';
import ColorDefaultConstant from '../../constant/color.constant';
import { ColorType } from '../../interface/common/color.interface';
import { ComponentStyleColorInterface } from '../../interface/component/component-color.interface';

describe('Testing Color Helper', () => {
    beforeEach(() => {
        global.console = {
            ...global.console,
            error: jest.fn(),
            debug: jest.fn()
        };
    });

    it('testing get color', () => {
        Object.keys(ColorDefaultConstant).forEach((item: string) =>
            expect(ColorHelper.getColor(item as ColorType)).toBe(
                ColorDefaultConstant[item]
            )
        );
    });

    it('testing get color with wrong color name', () => {
        expect(ColorHelper.getColor('secondarys' as ColorType, 'success')).toBe(
            ColorDefaultConstant.success
        );
    });

    it('testing hex to rgba', () => {
        UnitTestingHelper.fixture<{ hex: string; alpha: number }, string>(
            FixtureColorRGBA,
            (input: { hex: string; alpha: number }, output: string): void => {
                expect(ColorHelper.hexToRgba(input.hex, input.alpha)).toBe(
                    output
                );
            }
        );
    });

    it('testing hex to rgba', () => {
        try {
            ColorHelper.hexToRgba('123456789', 1);
        } catch (e) {
            expect(e.message).toBe('Bad Hex');
        }
    });

    it('testing method is too dark / light', () => {
        [
            {
                input: ColorDefaultConstant.white,
                output: 'light'
            },
            {
                input: ColorDefaultConstant.heading,
                output: 'dark'
            },
            {
                input: ColorDefaultConstant.success,
                output: 'dark'
            },
            {
                input: ColorDefaultConstant.warning100,
                output: 'light'
            },
            {
                input: ColorDefaultConstant.heading100,
                output: 'light'
            },
            {
                input: ColorDefaultConstant.actionR123,
                output: 'dark'
            },
            {
                input: ColorDefaultConstant.newPropertyR123,
                output: 'dark'
            }
        ].forEach(({ input, output }: { input: string; output: string }) => {
            ColorHelper.isDarkOrLight(input, (status) => {
                expect(status).toBe(output);
            });
        });
    });

    it('testing color component', () => {
        UnitTestingHelper.fixture<
            { color: ColorType; transparent: boolean },
            ComponentStyleColorInterface
        >(
            FixtureColorComponent,
            (
                input: { color: ColorType; transparent: boolean },
                output: ComponentStyleColorInterface
            ): void => {
                expect(
                    ColorHelper.generateColorComponent(
                        input.color,
                        input.transparent
                    )
                ).toStrictEqual(output);
            }
        );
    });

    it('testing color component with wrong parameter', () => {
        try {
            expect(
                ColorHelper.generateColorComponent(
                    'headings' as ColorType,
                    true
                )
            ).toStrictEqual({
                background: {
                    color: 'heading',
                    hexColor: ColorHelper.getColor('heading')
                },
                text: {
                    color: 'white',
                    hexColor: ColorHelper.getColor('white')
                }
            });
        } catch (e) {
            expect(e.message).toBe('[Error] key is not exists');
        }
    });
});
