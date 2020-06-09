/* eslint-disable @typescript-eslint/no-explicit-any */
import PropTypes from 'prop-types';
import React, { CSSProperties } from 'react';

import ListItemComponent from './list-item.component';
import StringHelper from '../../../shared/helper/string.helper';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import ColorDefaultConstant from '../../../shared/constant/color.constant';
import { ColorType } from '../../../shared/interface/common/color.interface';
import { ListDefaultExportInterface } from './interface/component.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';

/**
 * List Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.10
 */
const ListComponent: ListDefaultExportInterface = ({
    space,
    divider,
    styling,
    dividerColor,
    ...res
}) => {
    const isColumn = styling === 'vertical';
    const spaceInComponent = (space as number) / 2;

    // Getter ClassName
    const className: ComponentClassnameDefaultInterface = {
        [`${res.className}`]: ValidatorHelper.verifiedIsNotEmpty(res.className),
        'ui-molecules-list': true,
        [`ui-molecules-list--divider-${divider}`]: ValidatorHelper.verifiedIsNotEmpty(
            divider
        ),
        flex: true,
        relative: true,
        'flex-wrap': true,
        'flex-row': !isColumn,
        'flex-column': isColumn,
        'flex-align-center': !isColumn,
        'flex-align-start': isColumn
    };
    delete res.className;

    const children = React.Children.toArray(res.children).filter(
        (o: any): boolean => o.type.displayName === 'ListItemComponent'
    );
    delete res.children;

    /**
     * Getter Styling List
     * @param {boolean} isChildren
     * @return {CSSProperties}
     */
    const getStyling = (isChildren = false): CSSProperties => {
        const multiplier = isChildren ? 1 : -1;
        const value = multiplier * spaceInComponent;

        return {
            marginTop: isColumn ? value : undefined,
            marginLeft: isColumn ? undefined : value
        };
    };

    /**
     * Getter Styling List Item
     * @param {number} index - index position component
     * @return {CSSProperties}
     */
    const getStylingItem = (index: number): CSSProperties => {
        const isDividerLine = divider === 'line';
        const isLastChildren = index === children.length - 1;
        const isShowDivider = !isLastChildren && isDividerLine;
        const isShowDividerVertical = !isColumn && isShowDivider;
        const isShowDividerHorizontal = isColumn && isShowDivider;
        let color;

        if (ValidatorHelper.verifiedIsNotEmpty(dividerColor)) {
            color = ValidatorHelper.verifiedKeyIsExist(
                ColorDefaultConstant,
                dividerColor
            )
                ? `1px solid ${ColorDefaultConstant[dividerColor as ColorType]}`
                : `1px solid ${dividerColor}`;
        }

        return {
            ...getStyling(true),
            borderRight: isShowDividerVertical ? color : undefined,
            borderBottom: isShowDividerHorizontal ? color : undefined,
            paddingRight:
                !isColumn && !isLastChildren ? spaceInComponent : undefined,
            paddingBottom:
                isColumn && !isLastChildren ? spaceInComponent : undefined
        };
    };

    return (
        <div
            {...res}
            style={getStyling()}
            className={StringHelper.objToString(className)}
        >
            {children.map(({ props, key }: any, index) => (
                <div
                    {...props}
                    key={key}
                    style={getStylingItem(index)}
                    className={StringHelper.objToString({
                        'ui-molecules-list__item': true,
                        relative: true,
                        [`${props.className}`]: ValidatorHelper.verifiedIsNotEmpty(
                            props.className
                        )
                    })}
                >
                    {props.children}
                </div>
            ))}
        </div>
    );
};

ListComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    space: PropTypes.number,
    dividerColor: PropTypes.string,
    divider: PropTypes.oneOf(['none', 'line']),
    styling: PropTypes.oneOf(['vertical', 'horizontal'])
};

ListComponent.defaultProps = {
    space: 15,
    divider: 'none',
    styling: 'horizontal',
    dividerColor: 'heading'
};

ListComponent.Item = ListItemComponent;

export default ListComponent;
