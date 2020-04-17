import React, { SFC, useState, useRef, useEffect } from 'react';

import StringHelper from '../../../shared/helper/string.helper';
import { ExpandTextPropsInterface } from './interfaces/component.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/componen-default.interface';
import IconComponent from '../../atomic/icon/icon.component';
import { ColorType } from '../../../shared/interface/common/color.interface';
import TextComponent from '../../atomic/text/text.component';
import ValidatorHelper from '../../../shared/helper/validator.helper';

/**
 * Expand Text Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.17
 */
const ExpandTextComponent: SFC<ExpandTextPropsInterface> = ({
    color,
    children,
    maxHeight,
    textToggleButton,
    ...res
}: ExpandTextPropsInterface) => {
    const [expand, setExpand] = useState<boolean>(false);
    const [showToggle, setShowToggle] = useState<boolean>(false);
    const [componentHeight, setComponentHeight] = useState<number>(maxHeight);

    const node = useRef<HTMLDivElement>(null);

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
        if (node.current) {
            setExpand(!expand);
            setComponentHeight(!expand ? node.current.scrollHeight : maxHeight);
        }
    };

    /**
     * The Purpose method is watch if windows sizing
     * @return {void}
     */
    const watchFn = (): void => {
        if (node.current) {
            console.debug(node.current.scrollHeight);
            console.debug(node.current.scrollHeight > maxHeight);
            setExpand(!(node.current.scrollHeight > maxHeight));
            setShowToggle(node.current.scrollHeight > maxHeight);
        }
    };

    useEffect(watchFn, []);

    return (
        <div className={StringHelper.objToString(className)} {...res}>
            <div
                ref={node}
                style={{ maxHeight: `${componentHeight}px` }}
                className="ui-molecules-expand-text__content relative"
            >
                {children}
            </div>
            {showToggle ? (
                <TextComponent
                    tag="span"
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
                    <IconComponent color={color as ColorType} size={12}>
                        {expand ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
                    </IconComponent>
                </TextComponent>
            ) : null}
        </div>
    );
};

export default ExpandTextComponent;
