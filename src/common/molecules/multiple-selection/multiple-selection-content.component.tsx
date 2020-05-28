import PropTypes from 'prop-types';
import React, { FunctionComponent, Validator } from 'react';

import DropdownComponent from '../dropdown/dropdown.component';
import MultipleSelectionHeadingComponent from './multiple-selection-heading.component';
import {
    MultipleSelectionContentInterface,
    MultipleSelectionItemPropsInterface,
    MultipleSelectionContentItemInterface,
    MultipleSelectionHeadingPropsInterface
} from './interface/component.interface';

/**
 * Generate Class
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.05.28
 */
const MultipleSelectionContentComponent: FunctionComponent<MultipleSelectionContentInterface> = ({
    list
}) => (
    <>
        {list.map(({ content, type }) => {
            if (type === MultipleSelectionHeadingComponent.displayName) {
                const {
                    key,
                    ...res
                } = content as MultipleSelectionHeadingPropsInterface;

                return (
                    <DropdownComponent.Item
                        {...res}
                        key={key}
                        disableHover
                        withoutPadding
                    />
                );
            }

            const {
                key,
                ...res
            } = content as MultipleSelectionItemPropsInterface;

            return (
                <DropdownComponent.Item key={key} disableHover withoutPadding>
                    {res.children}
                </DropdownComponent.Item>
            );
        })}
    </>
);

MultipleSelectionContentComponent.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.oneOf([
                'MultipleSelectionItemComponent',
                'MultipleSelectionHeadingComponent'
            ]),
            content: PropTypes.oneOfType([
                PropTypes.shape({
                    key: PropTypes.string.isRequired,
                    children: PropTypes.oneOfType([
                        PropTypes.arrayOf(PropTypes.node),
                        PropTypes.node,
                        PropTypes.string
                    ]).isRequired,
                    label: PropTypes.string.isRequired,
                    value: PropTypes.string.isRequired
                }),
                PropTypes.shape({
                    key: PropTypes.string.isRequired,
                    children: PropTypes.oneOfType([
                        PropTypes.arrayOf(PropTypes.node),
                        PropTypes.node,
                        PropTypes.string
                    ]).isRequired
                })
            ])
        })
    ).isRequired as Validator<MultipleSelectionContentItemInterface[]>
};

MultipleSelectionContentComponent.defaultProps = {
    list: []
};

MultipleSelectionContentComponent.displayName =
    'MultipleSelectionContentComponent - DropdownContentComponent';

export default MultipleSelectionContentComponent;
