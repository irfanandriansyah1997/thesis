import React, { SFC, ReactNode, useRef, useEffect } from 'react';

import StringHelper from '../../../shared/helper/string.helper';
import { SpinPropsInterface } from './interface/component.interface';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import ColorDefaultConstant from '../../../shared/constant/color.constant';
import { ColorType } from '../../../shared/interface/common/color.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/componen-default.interface';

/**
 * Spin Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.03.16
 */
const SpinComponent: SFC<SpinPropsInterface> = ({
    children,
    color,
    show,
    ...res
}: SpinPropsInterface) => {
    const refSpinner = useRef<HTMLDivElement>(null);
    const refChildren = useRef<HTMLDivElement>(null);
    const className: ComponentClassnameDefaultInterface = {
        [`${res.className}`]: ValidatorHelper.verifiedIsNotEmpty(res.className),
        relative: true,
        'ui-atomic-spin': true,
        'ui-atomic-spin--show': show,
        'ui-atomic-spin--nested': ValidatorHelper.verifiedIsNotEmpty(children)
    };
    const SpinContentComponent: ReactNode = (
        <div
            className={StringHelper.objToString({
                'ui-atomic-spin__spinning': true,
                block: true,
                fixed: !ValidatorHelper.verifiedIsNotEmpty(children),
                absolute: ValidatorHelper.verifiedIsNotEmpty(children)
            })}
            ref={refSpinner}
        >
            <div
                className={StringHelper.objToString({
                    'ui-atomic-spin__wrapper': true,
                    block: true,
                    fixed: !ValidatorHelper.verifiedIsNotEmpty(children),
                    absolute: ValidatorHelper.verifiedIsNotEmpty(children)
                })}
            >
                <svg
                    className="ui-atomic-spin__circle inline-block"
                    x="0px"
                    y="0px"
                    viewBox="0 0 150 150"
                >
                    <circle
                        className="ui-atomic-spin__spinner"
                        cx="75"
                        cy="75"
                        r="60"
                        style={{
                            stroke: ValidatorHelper.verifiedKeyIsExist(
                                ColorDefaultConstant,
                                color
                            )
                                ? ColorDefaultConstant[color as ColorType]
                                : undefined
                        }}
                    />
                </svg>
            </div>
        </div>
    );

    useEffect(() => {
        if (
            refChildren.current &&
            refSpinner.current &&
            ValidatorHelper.verifiedIsNotEmpty(children)
        ) {
            refSpinner.current.style.width = `${refChildren.current.children[0].clientWidth}px`;
            refSpinner.current.style.height = `${refChildren.current.children[0].clientHeight}px`;
        }
    }, [refChildren]);

    return (
        <div className={StringHelper.objToString(className)} {...res}>
            {SpinContentComponent}
            {ValidatorHelper.verifiedIsNotEmpty(children) ? (
                <div className="relative" ref={refChildren}>
                    {children}
                </div>
            ) : (
                undefined
            )}
        </div>
    );
};

export default SpinComponent;
