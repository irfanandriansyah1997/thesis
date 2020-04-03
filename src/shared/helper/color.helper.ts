/* eslint-disable @typescript-eslint/no-explicit-any */
import ValidatorHelper from './validator.helper';
import ColorDefaultConstant from '../constant/color.constant';
import { ColorType } from '../interface/common/color.interface';
import LogHelperAbstract from '../abstract/log/log-helper.abstract';
import {
    ComponentColorInterface,
    ComponentStyleColorInterface
} from '../interface/component/component-color.interface';

/**
 * Color Helper
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.03
 */
class ColorHelper extends LogHelperAbstract {
    /**
     * Getter color from color default constant
     * @param {ColorType | undefined } color - color key
     */
    static getColor(
        color: ColorType | undefined,
        defaultValue: ColorType = 'heading'
    ): string {
        return ValidatorHelper.verifiedKeyIsExist(ColorDefaultConstant, color)
            ? ColorDefaultConstant[color as ColorType]
            : ColorDefaultConstant[defaultValue];
    }

    /**
     * Convert Hext To RGBA
     * @param {string} hex - hex color
     * @param {number} alpha - apha color
     * @return {string}
     */
    static hexToRgba(hex: string, alpha: number): string {
        let color: any;
        if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
            color = hex.substring(1).split('');

            if (color.length === 3) {
                color = [
                    color[0],
                    color[0],
                    color[1],
                    color[1],
                    color[2],
                    color[2]
                ];
            }

            color = `0x${color.join('')}`;

            return `rgba(${[
                (color >> 16) & 255,
                (color >> 8) & 255,
                color & 255
            ].join(',')},${alpha})`;
        }

        throw new Error('Bad Hex');
    }

    /**
     * Check color is dark or light
     * @param {any} hex - hex color
     */
    static isDarkOrLight(
        hex: any,
        fn: (status: 'light' | 'dark') => void
    ): void {
        const color = +`0x${hex
            .slice(1)
            .replace(hex.length < 5 && /./g, '$&$&')}`;

        const r = color >> 16;
        const g = (color >> 8) & 255;
        const b = color & 255;

        const hsp = Math.sqrt(
            0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b)
        );

        fn(hsp > 200 ? 'light' : 'dark');
    }

    /**
     * Generate Color Component
     * @param {ColorType} color - color component
     * @param {boolean} transparent - is props transparent true
     * @param {ColorType} defaultColor - default color component
     * @return {ComponentStyleColorInterface}
     */
    static generateColorComponent(
        color: ColorType,
        transparent: boolean,
        defaultColor: ColorType = 'heading'
    ): ComponentStyleColorInterface {
        try {
            if (
                ValidatorHelper.verifiedKeyIsExist(ColorDefaultConstant, color)
            ) {
                let transparentColor: ComponentColorInterface = {
                    color,
                    hexColor: ColorHelper.getColor(color, defaultColor)
                };
                let notTransparentTextColor: ComponentColorInterface = {
                    color: 'white',
                    hexColor: ColorHelper.getColor('white', defaultColor)
                };

                ColorHelper.isDarkOrLight(
                    ColorHelper.getColor(color, defaultColor),
                    (status: 'light' | 'dark') => {
                        const isDark = status === 'dark';

                        transparentColor = {
                            color: isDark
                                ? transparentColor.color
                                : defaultColor,
                            hexColor: isDark
                                ? transparentColor.hexColor
                                : ColorHelper.getColor(defaultColor)
                        };

                        notTransparentTextColor = {
                            color: isDark
                                ? notTransparentTextColor.color
                                : defaultColor,
                            hexColor: isDark
                                ? notTransparentTextColor.hexColor
                                : ColorHelper.getColor(defaultColor)
                        };
                    }
                );

                return {
                    background: {
                        color,
                        hexColor: ColorHelper.hexToRgba(
                            ColorHelper.getColor(color, defaultColor),
                            transparent ? 0.25 : 1
                        )
                    },
                    text: {
                        color: transparent
                            ? transparentColor.color
                            : notTransparentTextColor.color,
                        hexColor: transparent
                            ? transparentColor.hexColor
                            : notTransparentTextColor.hexColor
                    }
                };
            }

            throw new Error('[Error] key is not exists');
        } catch (e) {
            ColorHelper.logError(e);
        }

        return {
            background: {
                color: 'heading',
                hexColor: ColorHelper.getColor('heading', defaultColor)
            },
            text: {
                color: 'white',
                hexColor: ColorHelper.getColor('white', defaultColor)
            }
        };
    }
}

export default ColorHelper;
