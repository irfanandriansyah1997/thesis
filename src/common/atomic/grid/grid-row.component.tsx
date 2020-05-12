/* eslint-disable @typescript-eslint/no-explicit-any */
import PropTypes from 'prop-types';
import React, { SFC, Validator, CSSProperties } from 'react';

import StringHelper from '../../../shared/helper/string.helper';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import ComponentHelper from '../../../shared/helper/component.helper';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';
import {
    GridRowAlignItemType,
    GridRowPropsInterface,
    GridRowPaddingInterface,
    GridColumnPropsInterface,
    GridRowJustifyContentType
} from './interface/component.interface';

/**
 * Grid Row Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.11
 */
const GridRowComponent: SFC<GridRowPropsInterface> = ({
    align,
    padding,
    justify,
    ...res
}) => {
    let spaceInVertical = 16;
    let spaceInHorizontal = 16;
    if (padding) {
        spaceInVertical = padding.vertical / 2;
        spaceInHorizontal = padding.horizontal / 2;
    }

    const children = React.Children.toArray(res.children)
        .filter((o: any): boolean => o.type.name === 'GridColumnComponent')
        .map((o: any): GridColumnPropsInterface => o.props);
    delete res.children;

    /**
     * Classname Getter
     * @description generate className based on props
     * @return {string}
     */
    const className: ComponentClassnameDefaultInterface = {
        [`${res.className}`]: ValidatorHelper.verifiedIsNotEmpty(res.className),
        'ui-row': true,
        flex: true,
        'flex-row': true,
        'flex-wrap': true,
        [`flex-align-${align}`]: ValidatorHelper.verifiedIsNotEmpty(align),
        [`flex-justify-${justify}`]: ValidatorHelper.verifiedIsNotEmpty(justify)
    };
    delete res.className;

    /**
     * Getter Styling List
     * @param {boolean} isChildren
     * @return {CSSProperties}
     */
    const getStyling = (isChildren = false): CSSProperties => {
        if (!isChildren) {
            return {
                marginBottom: spaceInVertical,
                marginTop: -1 * spaceInVertical,
                marginLeft: -1 * spaceInHorizontal,
                marginRight: -1 * spaceInHorizontal
            };
        }

        return {
            paddingTop: spaceInVertical,
            paddingBottom: spaceInVertical,
            paddingLeft: spaceInHorizontal,
            paddingRight: spaceInHorizontal
        };
    };

    return (
        <div
            style={getStyling()}
            className={StringHelper.objToString(className)}
            {...res}
        >
            {children.map(
                ({
                    id,
                    xs,
                    sm,
                    md,
                    lg,
                    xl,
                    order,
                    defaultSize,
                    ...resItem
                }: GridColumnPropsInterface) => (
                    <div
                        {...resItem}
                        key={id}
                        style={{ ...getStyling(true), order }}
                        className={ComponentHelper.generateClassnameGrid(
                            defaultSize || 'default',
                            resItem.className,
                            xs,
                            sm,
                            md,
                            lg,
                            xl
                        )}
                    />
                )
            )}
        </div>
    );
};

GridRowComponent.propTypes = {
    padding: PropTypes.shape({
        vertical: PropTypes.number,
        horizontal: PropTypes.number
    }) as Validator<GridRowPaddingInterface>,
    align: PropTypes.oneOf<GridRowAlignItemType>(['start', 'end', 'center']),
    justify: PropTypes.oneOf<GridRowJustifyContentType>([
        'end',
        'start',
        'center',
        'around',
        'between'
    ])
};

GridRowComponent.defaultProps = {
    padding: undefined,
    align: 'start',
    justify: 'start'
};

export default GridRowComponent;
