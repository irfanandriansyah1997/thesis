import PropTypes from 'prop-types';
import React, { FunctionComponent, ReactNode, Validator } from 'react';

import ValidatorHelper from '../../../shared/helper/validator.helper';
import LinkComponent from '../../../common/atomic/link/link.component';
import IconComponent from '../../../common/atomic/icon/icon.component';
import ListComponent from '../../../common/molecules/list/list.component';
import {
    CardR123BasicGridPropsInterface,
    CardR123BasicGridItemInterface
} from './interface/component.interface';

/**
 * Card R123 Basic Grid Component
 * @author Irfan Andria<irfan@99.co>
 * @since 2020.05.20
 */
const CardR123BasicGridComponent: FunctionComponent<CardR123BasicGridPropsInterface> = ({
    id,
    to,
    type,
    object,
    listItem,
    ...res
}) => {
    /**
     *
     * @param icon
     */
    const generateIconElement = (icon: string): ReactNode => {
        return (
            <IconComponent size={16} color="headingR123">
                {icon}
            </IconComponent>
        );
    };

    /**
     *
     */
    const generateTextIconType = (
        item: CardR123BasicGridItemInterface
    ): ReactNode => {
        const iconElement = generateIconElement(item.icon || '');

        return (
            <ListComponent.Item key={`${id}-${item.key}-${object[item.key]}`}>
                <LinkComponent
                    href={to}
                    noUnderline
                    color="heading"
                    fontWeight={500}
                    icon={iconElement}
                >
                    {`${object[item.key]}`}
                </LinkComponent>
            </ListComponent.Item>
        );
    };

    /**
     *
     */
    const generateTextType = (
        item: CardR123BasicGridItemInterface
    ): ReactNode => {
        return (
            <ListComponent.Item key={`${id}-${item.key}-${object[item.key]}`}>
                <LinkComponent
                    href={to}
                    noUnderline
                    color="heading"
                    fontWeight={400}
                >
                    {`${object[item.key]}`}
                </LinkComponent>
            </ListComponent.Item>
        );
    };
    return (
        <ListComponent {...res}>
            {listItem.map((item) => {
                if (
                    type === 'text' &&
                    ValidatorHelper.verifiedIsNotEmpty(object[item.key])
                ) {
                    return generateTextType(item);
                }

                if (
                    type === 'text-with-icon' &&
                    ValidatorHelper.verifiedIsNotEmpty(item.icon) &&
                    ValidatorHelper.verifiedIsNotEmpty(object[item.key])
                ) {
                    return generateTextIconType(item);
                }

                return null;
            })}
        </ListComponent>
    );
};

CardR123BasicGridComponent.propTypes = {
    to: PropTypes.string,
    id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'text-with-icon']).isRequired as Validator<
        'text' | 'text-with-icon'
    >,
    object: PropTypes.shape({}).isRequired,
    listItem: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.string.isRequired,
            icon: PropTypes.string
        })
    ).isRequired as Validator<CardR123BasicGridItemInterface[]>
};

CardR123BasicGridComponent.defaultProps = {
    type: 'text',
    listItem: [],
    to: undefined
};

export default CardR123BasicGridComponent;
