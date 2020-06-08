import PropTypes from 'prop-types';
import React, { SFC, useState, ReactNode, Validator } from 'react';

import ToggleComponent from '../toggle/toggle.component';
import TextComponent from '../../atomic/text/text.component';
import IconComponent from '../../atomic/icon/icon.component';
import ColorDefaultConstant from '../../../shared/constant/color.constant';
import { ColorType } from '../../../shared/interface/common/color.interface';
import { ComponentFontWeightTypography } from '../../../shared/interface/component/component-typography.interface';
import {
    ARROW_ON_HIDE,
    ARROW_ON_EXPAND
} from '../../../shared/constant/component.constant';
import {
    ExpandTextPropsInterface,
    ExpandTextToggleButtonInterface
} from './interfaces/component.interface';

/**
 * Expand Text Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.17
 */
const ExpandTextComponent: SFC<ExpandTextPropsInterface> = ({
    color,
    showArrow,
    fontWeight,
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
            onToggleExpand(output);
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
                    color={textColor}
                    styling="heading-6"
                    fontWeight={fontWeight}
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
                            marginLeft={5}
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
            selectorPosition="bottom"
            onToggleExpand={onClickToggle}
            onComponentResize={onComponentResize}
            selector={selectorToggle(
                showArrow || false,
                color as ColorType,
                textToggleButton as ExpandTextToggleButtonInterface
            )}
        />
    );
};

ExpandTextComponent.propTypes = {
    show: PropTypes.bool,
    gradient: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    collapsedHeight: PropTypes.number.isRequired,
    onToggleExpand: PropTypes.func,
    color: PropTypes.oneOf(Object.keys(ColorDefaultConstant)) as Validator<
        ColorType
    >,
    textToggleButton: PropTypes.shape({
        onCLose: PropTypes.string,
        onExpand: PropTypes.string
    }),
    fontWeight: PropTypes.oneOf<ComponentFontWeightTypography>([
        300,
        400,
        500,
        600,
        700
    ]) as Validator<ComponentFontWeightTypography>,
    showArrow: PropTypes.bool
};

ExpandTextComponent.defaultProps = {
    show: false,
    gradient: false,
    onToggleExpand: undefined,
    color: 'heading',
    textToggleButton: {
        onCLose: 'Open',
        onExpand: 'Close'
    },
    fontWeight: 400,
    showArrow: true
};

export default ExpandTextComponent;
