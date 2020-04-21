import React, { SFC, useState, ReactNode } from 'react';

import ToggleComponent from '../toggle/toggle.component';
import TextComponent from '../../atomic/text/text.component';
import IconComponent from '../../atomic/icon/icon.component';
import {
    ExpandTextPropsInterface,
    ExpandTextToggleButtonInterface
} from './interfaces/component.interface';
import { ColorType } from '../../../shared/interface/common/color.interface';

const ARROW_ON_EXPAND = 'rui-icon-arrow-up-small';
const ARROW_ON_HIDE = 'rui-icon-arrow-down-small';

/**
 * Expand Text Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.17
 */
const ExpandTextComponent: SFC<ExpandTextPropsInterface> = ({
    color,
    showArrow,
    onToggleExpand,
    textToggleButton,
    ...res
}: ExpandTextPropsInterface) => {
    const [expand, setExpand] = useState<boolean>(res.show || false);
    const [showToggleSelector, setShowToggleSelector] = useState<boolean>(
        false
    );

    /**
     * On Click Toggle
     * @return {void}
     */
    const onClickToggle = (output: boolean): void => {
        setExpand(output);

        if (onToggleExpand) {
            onToggleExpand(!output);
        }
    };

    /**
     * On Click Toggle
     * @return {void}
     */
    const onComponentResize = (output: number): void => {
        setShowToggleSelector(output > (res.collapsedHeight || 0));
    };

    /**
     * Selector Toggle
     * @description create div element for toggle selector
     * @return {ReactNode}
     */
    const selectorToggle = (
        isShowArrow: boolean,
        textColor: ColorType,
        text: ExpandTextToggleButtonInterface
    ): ReactNode => (
        <>
            {showToggleSelector ? (
                <TextComponent
                    tag="span"
                    align="left"
                    styling="heading-6"
                    color={textColor}
                    className="ui-molecules-expand-text__toggle flex"
                    style={{
                        marginTop: 20
                    }}
                >
                    {expand ? text.onExpand : text.onCLose}
                    {isShowArrow ? (
                        <IconComponent
                            color={color as ColorType}
                            size={16}
                            style={{ marginLeft: 5 }}
                        >
                            {expand ? ARROW_ON_EXPAND : ARROW_ON_HIDE}
                        </IconComponent>
                    ) : null}
                </TextComponent>
            ) : null}
        </>
    );

    return (
        <ToggleComponent
            {...res}
            gradient
            childrenPosition="bottom"
            onToggleExpand={onClickToggle}
            onComponentResize={onComponentResize}
            selector={selectorToggle(
                showArrow || false,
                color as ColorType,
                textToggleButton
            )}
        />
    );
};

export default ExpandTextComponent;
