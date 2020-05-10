/* eslint-disable @typescript-eslint/no-explicit-any */
import PropTypes from 'prop-types';
import React, { CSSProperties } from 'react';

import { ListDefaultExportInterface } from './interface/component.interface';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';
import StringHelper from '../../../shared/helper/string.helper';
import ListItemComponent from './list-item.component';

/**
 * List Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.10
 */
const ListComponent: ListDefaultExportInterface = ({
    space,
    divider,
    direction,
    ...res
}) => {
    const isColumn = direction === 'column';
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
            marginLeft: isColumn ? undefined : value,
            marginRight: isColumn ? undefined : value,
            marginBottom: isColumn ? value : undefined
        };
    };

    return (
        <div
            className={StringHelper.objToString(className)}
            style={getStyling()}
            {...res}
        >
            {React.Children.toArray(res.children)
                .filter(
                    (o: any): boolean => o.type.name === 'ListItemComponent'
                )
                .map(({ props, key }: any) => {
                    return (
                        <div
                            key={key}
                            style={getStyling(true)}
                            className="ui-molecules-list__item"
                        >
                            {props.children}
                        </div>
                    );
                })}
        </div>
    );
};

ListComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    space: PropTypes.number,
    divider: PropTypes.oneOf(['none', 'line']),
    direction: PropTypes.oneOf(['column', 'row'])
};

ListComponent.defaultProps = {
    space: 15,
    divider: 'none',
    direction: 'row'
};

ListComponent.Item = ListItemComponent;

export default ListComponent;
