import React, { SFC, useState, useEffect } from 'react';

import TextComponent from '../../atomic/text/text.component';
import IconComponent from '../../atomic/icon/icon.component';
import StringHelper from '../../../shared/helper/string.helper';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import { ExpandTextPropsInterface } from './interfaces/component.interface';
import { ColorType } from '../../../shared/interface/common/color.interface';
import ComponentResizerHelper from '../../../shared/helper/component-resizer.helper';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/componen-default.interface';

/**
 * Expand Text Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.17
 */
const ExpandTextComponent: SFC<ExpandTextPropsInterface> = ({
    color,
    children,
    maxHeight,
    onToggleExpand,
    textToggleButton,
    ...res
}: ExpandTextPropsInterface) => {
    const [expand, setExpand] = useState<boolean>(false);
    const [showToggle, setShowToggle] = useState<boolean>(false);
    const [componentHeight, setComponentHeight] = useState<number>(maxHeight);
    const { width, ref } = ComponentResizerHelper<HTMLDivElement>({});

    // Getter ClassName
    const className: ComponentClassnameDefaultInterface = {
        [`${res.className}`]: ValidatorHelper.verifiedIsNotEmpty(res.className),
        block: true,
        relative: true,
        'ui-molecules-expand-text': true,
        'ui-molecules-expand-text--expand': expand
    };
    delete res.className;

    /**
     * On Click Toggle
     * @return {void}
     */
    const onClickToggle = (): void => {
        if (ref.current) {
            setExpand(!expand);
            setComponentHeight(!expand ? ref.current.scrollHeight : maxHeight);
        }

        if (onToggleExpand) {
            onToggleExpand(!expand);
        }
    };

    /**
     * The Purpose method is watch if windows sizing
     * @return {void}
     */
    const watchFn = (): void => {
        if (ref.current) {
            setExpand(!(ref.current.scrollHeight > maxHeight));
            setShowToggle(ref.current.scrollHeight > maxHeight);
        }
    };

    useEffect(watchFn, [width]);

    return (
        <div className={StringHelper.objToString(className)} {...res}>
            <div
                ref={ref}
                style={{ maxHeight: `${componentHeight}px` }}
                className="ui-molecules-expand-text__content relative"
            >
                {children}
            </div>
            {showToggle ? (
                <TextComponent
                    tag="span"
                    align="left"
                    styling="heading-6"
                    onClick={onClickToggle}
                    color={color as ColorType}
                    className="ui-molecules-expand-text__toggle flex"
                    style={{
                        marginTop: 20
                    }}
                >
                    {expand
                        ? textToggleButton.onExpand
                        : textToggleButton.onCLose}
                    <IconComponent
                        color={color as ColorType}
                        size={16}
                        style={{ marginLeft: 5 }}
                    >
                        {expand ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
                    </IconComponent>
                </TextComponent>
            ) : null}
        </div>
    );
};

export default ExpandTextComponent;
